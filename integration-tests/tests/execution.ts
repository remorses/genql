import { ApolloServer, PubSub, makeExecutableSchema } from 'apollo-server'
import sleep from 'await-sleep'
import assert from 'assert'
import deepEq from 'deep-equal'
import fs from 'fs'
import path from 'path'
import { DeepPartial } from 'tsdef'
import {
    createClient,
    User,
    everything,
    isHouse,
    isBank,
} from '../generated/index.js'

const PORT = 8099
const URL = `http://localhost:` + PORT
const SUB_URL = `ws://localhost:` + PORT + '/graphql'

async function server({ resolvers, port = PORT }) {
    const typeDefs = fs
        .readFileSync(path.join(__dirname, '..', 'schema.graphql'))
        .toString()
    const server = new ApolloServer({
        schema: makeExecutableSchema({
            typeDefs,
            resolvers,
            resolverValidationOptions: {
                requireResolversForResolveType: false,
            },
        }),

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
                    coordinates: () => {
                        return {
                            __typename: 'Bank',
                            x: '1',
                            y: '2',
                            address: '3',
                        }
                    },
                },
            },
        })
    const withServer = (func: any) => async () => {
        const stop = await makeServer()
        try {
            await func()
        } catch (e) {
            throw e
        } finally {
            await stop()
        }
    }

    const client = createClient({
        url: URL,
        headers: () => ({ Auth: 'xxx' }),
    })
    it(
        'simple ',
        withServer(async () => {
            const res = await client.query({
                user: {
                    name: true,
                },
            })
            console.log(JSON.stringify(res, null, 2))
            assert(deepEq(res.user, x))
        }),
    )
    it(
        'required field ',
        withServer(async () => {
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
        }),
    )
    it(
        'chain syntax ',
        withServer(async () => {
            const res = await client.chain.query.user.get({
                __scalar: true,
            })
            console.log(JSON.stringify(res, null, 2))
            res?.name
            assert(deepEq(res, x))
        }),
    )

    it(
        'union types only 1 on_ normal syntax',
        withServer(async () => {
            const { account } = await client.query({
                account: {
                    on_User: {
                        name: 1,
                    },
                },
            })
            account?.name
            console.log(account)
        }),
    )

    it(
        'union types chain syntax',
        withServer(async () => {
            const account = await client.chain.query.account.get({
                on_User: { name: 1 },
            })
            account?.name
        }),
    )
    it(
        'union types with chain and ...everything',
        withServer(async () => {
            const account = await client.chain.query.account.get({
                // __typename: 1,
                on_User: { ...everything },
            })
            account?.name
            account?.__typename
        }),
    )
    it(
        'many union types',
        withServer(async () => {
            const account = await client.chain.query.account.get({
                // __typename: 1,
                on_User: { ...everything },
                on_Guest: { ...everything },
            })
            account?.__typename
            account?.common
            if (account && 'anonymous' in account) {
                account?.anonymous
            }
        }),
    )
    it(
        'interface types normal syntax',
        withServer(async () => {
            const res = await client.query({
                coordinates: {
                    x: 1,
                    __typename: 1,
                    on_Bank: {
                        // __typename: 1,
                        address: 1,
                        // x: 1,
                    },
                },
            })
            let coordinates = res.coordinates
            assert(coordinates?.address?.split?.(''))
            assert(coordinates?.x)
            assert(coordinates?.__typename)
        }),
    )
    it(
        'interface types chain syntax',
        withServer(async () => {
            const coordinates = await client.chain.query.coordinates.get({
                // x: 1,
                x: 1,
                on_Bank: { address: 1, x: 1 },
            })
            assert(coordinates?.address?.split?.(''))
            assert(coordinates?.x)
        }),
    )
    it(
        'multiple interfaces types normal syntax',
        withServer(async () => {
            const { coordinates } = await client.query({
                coordinates: {
                    __typename: 1,
                    on_Bank: {
                        address: 1,
                        x: 1,
                    },
                    on_House: {
                        y: 1,
                        x: 1,
                        owner: {
                            name: 1,
                        },
                    },
                },
            })
            console.log(coordinates)
            assert(coordinates?.x)
            assert(coordinates?.__typename?.split?.(''))
            if ('address' in coordinates) {
                coordinates?.address
                coordinates?.x
            } else if (isHouse(coordinates)) {
                coordinates?.owner
                coordinates?.x
                coordinates?.y
            }
        }),
    )
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
        client.wsClient.close()
        await stop()
        // assert(deepEq(res.user, x))
    })
})
