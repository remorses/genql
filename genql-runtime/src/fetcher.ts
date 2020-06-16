import { GraphqlOperation } from './client/generateGraphqlOperation'
import { ClientError } from './error'
import fetch from 'isomorphic-unfetch'
import { HeadersInit } from 'node-fetch'


export interface Fetcher {
    (gql: GraphqlOperation): Promise<any>
}

export type Headers = HeadersInit | (() => HeadersInit)

export const createFetcher = ({
    url,
    headers = {},
    ...rest
}: {
    url?: string
    headers?: Headers
} & Omit<RequestInit, 'headers'>): Fetcher => {
    if (!url) {
        throw new Error('url is required')
    }
    return async ({ query, variables }) => {
        if (typeof headers == 'function') {
            headers = headers()
        }
        headers = headers || {}
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
}
