import { ApolloServer, PubSub } from 'apollo-server'
import sleep from 'await-sleep'
import assert from 'assert'
import deepEq from 'deep-equal'
import fs from 'fs'
import path from 'path'
import { DeepPartial } from 'tsdef'
import { createClient, User, everything } from '../generated'

const PORT = 8099
const URL = `http://localhost:` + PORT
const SUB_URL = `ws://localhost:` + PORT + '/graphql'

async function server({ resolvers, port = PORT }) {
    const typeDefs = fs
        .readFileSync(path.join(__dirname, '..', 'schema.graphql'))
        .toString()
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        subscriptions: {
            onConnect: async (connectionParams, webSocket, context) => {
                console.log(
                    `Subscription client connected using Apollo server's built-in SubscriptionServer.`,
                )
            },
            onDisconnect: async (webSocket, context) => {
                console.log(`Subscription client disconnected.`)
            },
        },
    })

    // The `listen` method launches a web server.
    await server.listen(port).then(({ url, subscriptionsUrl }) => {
        console.log(`🚀  Server ready at ${url} and ${subscriptionsUrl}`)
    })
    return () => server.stop()
}

describe('execute queries', async function() {
    const x: DeepPartial<User> = {
        name: 'John',
    }

    const makeServer = () =>
        server({
            resolvers: {
                Query: {
                    user: () => {
                        return x
                    },
                    repository: () => {
                        return {
                            createdAt: 'now',
                        }
                    },
                    account: () => {
                        return {
                            __typename: 'User',
                            ...x,
                        }
                    },
                },
            },
        })

    const client = createClient({
        url: URL,
        headers: () => ({ Auth: 'xxx' }),
    })
    it('simple ', async () => {
        const stop = await makeServer()
        const res = await client.query({
            user: {
                name: true,
            },
        })
        console.log(JSON.stringify(res, null, 2))
        assert(deepEq(res.user, x))
        await stop()
    })
    it('required field ', async () => {
        const stop = await makeServer()

        // await client.query({
        //     // @ts-expect-error because name is required
        //     repository: [{}, { __scalar: true }],
        // }).catch()

        const res = await client.query({
            repository: [
                { name: 'genql', owner: 'remorses' },
                { ...everything, forks: { edges: { node: { name: 1 } } } },
            ],
        })
        console.log(JSON.stringify(res, null, 2))
        // no optional chaining because repository is non null
        res.repository.createdAt
        res.repository.__typename
        res.repository?.forks?.edges?.map((x) => x?.node?.name)
        await stop()
    })
    it('chain syntax ', async () => {
        const stop = await makeServer()
        const res = await client.chain.query.user.get({
            __scalar: true,
        })
        console.log(JSON.stringify(res, null, 2))
        res?.name
        assert(deepEq(res, x))
        await stop()
    })

    test('union types normal syntax', async () => {
        const { account } = await client.query({
            account: {
                on_Guest: {
                    anonymous: 1,
                },
                on_User: {
                    name: 1,
                },
            },
        })
        assert(account?.on_User.name)
    })

    test('union types chain syntax', async () => {
        const account = await client.chain.query.account.get({
            on_User: { name: 1, __typename: 1 },
        })
        // TODO union types fields have unknown types
        assert(account?.on_User.name)
    })
})

describe('execute subscriptions', async function() {
    const x: DeepPartial<User> = {
        name: 'John',
    }
    const pubsub = new PubSub()
    const USER_EVENT = 'userxxx'

    const makeServer = () =>
        server({
            resolvers: {
                Subscription: {
                    user: {
                        subscribe: () => {
                            return pubsub.asyncIterator([USER_EVENT])
                        },
                    },
                },
            },
        })
    const client = createClient({
        url: SUB_URL,
    })

    it('simple ', async () => {
        const stop = await makeServer()
        // await pubsub.publish(USER_EVENT, { user: x })
        await sleep(100)
        const sub = await client
            .subscription({
                user: {
                    name: true,
                    __typename: true,
                },
            })
            .subscribe({
                next: (x) => {
                    console.log('next')
                    console.log(x)
                },
                complete: () => console.log('complete'),
                error: console.error,
            })

        // await sleep(1000)
        await pubsub.publish(USER_EVENT, { user: x })
        // console.log(JSON.stringify(res, null, 2))
        sub.unsubscribe()
        await stop()
        // assert(deepEq(res.user, x))
    })
})
