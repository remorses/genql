import { ApolloServer, PubSub, makeExecutableSchema } from 'apollo-server'
import sleep from 'await-sleep'
import assert from 'assert'
import deepEq from 'deep-equal'
import fs from 'fs'
import path from 'path'
import { expectType } from 'tsd'

const id = () => null
import { DeepPartial, MaybeUndefined } from 'tsdef'
import {
    createClient,
    User,
    everything,
    isHouse,
    Account,
    isBank,
    Point,
    isUser,
} from '../generated'

const PORT = 8099
const URL = `http://localhost:` + PORT
const SUB_URL = `ws://localhost:` + PORT + '/graphql'
type Maybe<T> = T | undefined | null

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
            assert.deepStrictEqual(res.user, x)
        }),
    )
    it(
        'falsy values are not fetched ',
        withServer(async () => {
            const res = await client.query({
                coordinates: {
                    x: false,
                    y: true,
                },
            })
            console.log(JSON.stringify(res, null, 2))
            assert(res.coordinates?.x === undefined)
            assert(res.coordinates?.y !== undefined)
        }),
    )

    it(
        'required field and nested fields',
        withServer(async () => {
            client
                .query({
                    // @ts-expect-error because name is required
                    repository: [{}, { __scalar: true }],
                })
                .catch(id)

            const res = await client.query({
                repository: [
                    {
                        name: 'genql',
                        owner: 'remorses',
                    },
                    {
                        ...everything,
                        forks: {
                            edges: { node: { name: true, number: true } },
                        },
                    },
                ],
            })
            console.log(JSON.stringify(res, null, 2))
            // @ts-expect-error because top level fields are filtered based on query
            res?.account
            // no optional chaining because repository is non null
            expectType<string>(res.repository.createdAt)
            expectType<Maybe<string>>(res.repository.__typename)
            expectType<Maybe<Maybe<string>[]>>(
                res.repository?.forks?.edges?.map((x) => x?.node?.name),
            )
            expectType<Maybe<Maybe<number>[]>>(
                res.repository?.forks?.edges?.map((x) => x?.node?.number),
            )
        }),
    )
    it(
        'chain syntax ',
        withServer(async () => {
            client.chain.query.user
                .get({
                    name: true,
                    // @ts-expect-error because sdf is not in QueryRequest
                    sdf: true,
                    // sdf: true,
                })
                .catch(id)
            const res = await client.chain.query.user.get({
                __scalar: true,
                // sdf: true,
            })
            console.log(JSON.stringify(res, null, 2))
            expectType<Maybe<string>>(res?.name)
            expectType<Maybe<number>>(res?.common)
            expectType<Maybe<string>>(res?.__typename)
        }),
    )
    it(
        'recursive type chain syntax ',
        withServer(async () => {
            const res = await client.chain.query
                .recursiveType()
                .get({
                    recurse: {
                        recurse: {
                            ...everything,
                            recurse: {
                                value: 1,
                            },
                        },
                    },
                })
                .catch(id)
            console.log(JSON.stringify(res, null, 2))
            expectType<Maybe<string>>(res?.[0]?.value)
            expectType<Maybe<string>>(res?.[0]?.recurse?.value)
            expectType<Maybe<string>>(res?.[0]?.recurse?.recurse?.value)
        }),
    )

    it(
        'union types only 1 on_ normal syntax',
        withServer(async () => {
            const { account } = await client.query({
                account: {
                    __typename: 1,
                    on_User: {
                        name: 1,
                    },
                },
            })
            // @ts-expect-error because on_User should be removed
            account?.on_User
            assert(account?.__typename)
            expectType<Maybe<Account>>(account)
            console.log(account)
        }),
    )

    it(
        'union types chain syntax',
        withServer(async () => {
            const account = await client.chain.query.account.get({
                on_User: { name: 1 },
            })
            expectType<Maybe<Account>>(account)
        }),
    )
    it(
        'union types with chain and ...everything',
        withServer(async () => {
            const account = await client.chain.query.account.get({
                __typename: 1,
                on_User: { ...everything },
            })
            expectType<Maybe<string>>(account?.__typename)
            if (isUser(account)) {
                expectType<Maybe<string>>(account?.name)
            }
        }),
    )
    it(
        'many union types',
        withServer(async () => {
            const account = await client.chain.query.account.get({
                __typename: 1,
                on_User: { ...everything },
                on_Guest: { ...everything },
            })
            expectType<Maybe<string>>(account?.__typename)
            // common props are on both types
            expectType<Maybe<number>>(account?.common)
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
            expectType<Maybe<string>>(coordinates?.x)
            if (coordinates && 'address' in coordinates) {
                expectType<Maybe<string>>(coordinates?.address)
                assert(coordinates?.address)
            }
            // common types are accessible without guards
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
                on_Bank: { address: 1 },
            })
            expectType<Maybe<string>>(coordinates?.x)
            if (coordinates && 'address' in coordinates) {
                expectType<Maybe<string>>(coordinates?.address)
                assert(coordinates?.address)
                assert(coordinates?.x)
            }
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

            expectType<Maybe<string>>(coordinates?.x)
            expectType<Maybe<Point>>(coordinates)
            expectType<Maybe<string>>(coordinates?.__typename)
            assert(coordinates?.x)
            assert(coordinates?.__typename)
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
                    common: 1,
                    __typename: true,
                },
            })
            .subscribe({
                next: (x) => {
                    expectType<Maybe<string>>(x.user?.name)
                    expectType<Maybe<string>>(x.user?.__typename)
                    expectType<Maybe<number>>(x.user?.common)
                    console.log(x)
                },
                complete: () => console.log('complete'),
                error: console.error,
            })

        // await sleep(1000)
        await pubsub.publish(USER_EVENT, { user: x })
        // console.log(JSON.stringify(res, null, 2))
        sub.unsubscribe()
        client?.wsClient?.close?.()
        await stop()
        // assert(deepEq(res.user, x))
    })
})
