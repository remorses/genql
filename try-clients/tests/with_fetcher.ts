import { prettify } from '@genql/cli/dist/helpers/prettify'
import { parse } from 'graphql'
import assert from 'assert'
import { createClient, everything } from '../hasura/generated'
import fetch from 'isomorphic-unfetch'

const URL = 'https://hasura-2334534.herokuapp.com/v1/graphql'

describe('use fetcher', () => {
    const fetcher = (op) =>
        fetch(URL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                // Authorization: 'Bearer ' + process.env.GITHUB_TOKEN,
            },
            body: JSON.stringify(op),
        }).then((response) => response.json())

    const client = createClient({
        fetcher,
    })
    it('query with fetcher', async () => {
        const res = await client.query({
            user: {
                ...everything,
            },
        })
        console.log(res)
        assert(res)
    })
})

describe('batch queries', () => {
    const fetcher = (batchedQuery) => {
        assert(batchedQuery.length === 3)
        return fetch(URL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                // Authorization: 'Bearer ' + process.env.GITHUB_TOKEN,
            },
            body: JSON.stringify(batchedQuery),
        }).then((response) => response.json())
    }

    const batcher = new QueryBatcher(fetcher, {
        maxBatchSize: 10,
        batchInterval: 100,
    })
    const client = createClient({
        fetcher: ({ query, variables }: any) => {
            return batcher.fetch(query, variables)
        },
    })
    it('query with fetcher', async () => {
        const res = await Promise.all([
            client.query({
                user: {
                    age: true,
                },
            }),
            client.query({
                user: {
                    id: true,
                },
            }),
            client.query({
                user: {
                    name: true,
                },
            }),
        ])
    })
})
