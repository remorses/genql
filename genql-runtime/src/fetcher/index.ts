import { Gql } from '../client/generateGraphqlOperation'
import { ClientError } from './error'
import fetch from 'isomorphic-unfetch'

export { ClientError }

export interface Fetcher {
    (gql: Gql): Promise<any>
}

export const createFetcher = ({
    url,
    headers = {},
    ...rest
}: {
    url: string
    headers
} & RequestInit): Fetcher => async ({ query, variables }) => {
    if (typeof headers == 'function') {
        headers = headers()
    }
    const res = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
        method: 'POST',
        body: JSON.stringify({ query, variables }),
        ...rest,
    })
    if (!res.ok) {
        throw new Error(`${res.statusText}: ${await res.text()}`)
    }
    const json = await res.json()
    if (json?.errors?.length) {
        throw new ClientError(json.errors)
    }
    return json.data
}
