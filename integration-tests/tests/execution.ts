import { ApolloServer } from 'apollo-server'
import assert from 'assert'
import deepEq from 'deep-equal'
import fs from 'fs'
import path from 'path'
import { DeepPartial } from 'tsdef'
import { createClient } from '../generated'
import { SearchResultItemConnection } from '../generated'

const PORT = 8010
const URL = `http://localhost:` + PORT

async function server({ resolvers, port = PORT }) {
    const typeDefs = fs
        .readFileSync(path.join(__dirname, '..', 'schema.graphql'))
        .toString()
    const server = new ApolloServer({ typeDefs, resolvers })

    // The `listen` method launches a web server.
    await server.listen(port).then(({ url }) => {
        console.log(`🚀  Server ready at ${url}`)
    })
    return () => server.stop()
}

describe('execute queries with normal syntax', async function() {
    const client = createClient({
        url: URL,
    })
    const x: DeepPartial<SearchResultItemConnection> = {
        nodes: [
            {
                __typename: 'Issue',
                author: {
                    __typename: 'User',
                    avatarUrl: [''],
                    login: '',
                    resourcePath: [''],
                    url: [''],
                },
            },
        ],
    }

    const stop = await server({
        resolvers: {
            Query: {
                search: (): DeepPartial<SearchResultItemConnection> => {
                    return x
                },
            },
        },
    })
    afterAll(() => stop())
    it('simple ', async () => {
        const res = await client.query({
            search: [
                { query: '', type: 'USER' },
                {
                    nodes: {
                        on_Issue: {
                            __typename: true,
                            author: {
                                __typename: true,
                                avatarUrl: true,
                                login: true,
                                url: true,
                                resourcePath: true,
                            },
                        },
                    },
                },
            ],
        })

        console.log(JSON.stringify(res, null, 2))
        assert(deepEq(res, x.nodes))
    })
    it('simple chain syntax', async () => {
        const x: DeepPartial<SearchResultItemConnection> = {
            nodes: [
                {
                    __typename: 'Issue',
                    author: {
                        __typename: 'User',
                        avatarUrl: [''],
                        login: '',
                        resourcePath: [''],
                        url: [''],
                    },
                },
            ],
        }

        const stop = await server({
            resolvers: {
                Query: {
                    search: (): DeepPartial<SearchResultItemConnection> => {
                        return x
                    },
                },
            },
        })
        const res = await client.chain.query
            .search({ query: '', type: 'USER' })
            .nodes.get({
                on_Issue: {
                    __typename: true,
                    author: {
                        __typename: true,
                        avatarUrl: true,
                        login: true,
                        url: true,
                        resourcePath: true,
                    },
                },
            })
        console.log(JSON.stringify(res, null, 2))
        assert(deepEq(res, x.nodes))
    })
    
})

describe('execute queries with chain', () => {
    const client = createClient({
        url: URL,
    })
})
