
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
