import {
    generateQueryOp,
    createClient,
    everything,
} from '../generated/createClient'
import { DeepPartial } from 'tsdef'

import { prettify } from 'genql-cli/dist/helpers/prettify'
import { parse } from 'graphql'
import {
    SearchType,
    SearchResultItem,
    SearchResultItemConnection,
} from '../generated/schema'
import { main as graphqlMocks } from 'graphql-easy-mocks/dist/main'
import fs from 'fs'
import path from 'path'
import deepEq from 'deep-equal'
import assert from 'assert'

import { ApolloServer } from 'apollo-server'

const PORT = 8090
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

describe('execute queries with chain', () => {
    const client = createClient({
        url: URL,
    })
    it('simple', async () => {
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
        console.log('dsf')
        console.log(JSON.stringify(res, null, 2))
        assert(deepEq(res, x.nodes))
        await stop()
    })
})
