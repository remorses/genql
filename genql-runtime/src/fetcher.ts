import { GraphqlOperation } from './client/generateGraphqlOperation'
import { ClientError } from './error'
import fetch from 'isomorphic-unfetch'
import { HeadersInit } from 'node-fetch'
import { ClientOptions } from './client/createClient'

export interface Fetcher {
    (gql: GraphqlOperation): Promise<any>
}

export type Headers = HeadersInit | (() => HeadersInit)

export const createFetcher = ({
    url,
    headers = {},
    fetcher,
    ...rest
}: ClientOptions): Fetcher => {
    if (!url && !fetcher) {
        throw new Error('url or fetcher is required')
    }
    return async ({ query, variables }) => {
        if (fetcher) {
            const result = await fetcher({ query, variables })
            if (result?.errors?.length) {
                throw new ClientError(result.errors)
            }
            if (result?.data) {
                return result.data
            }
            throw new Error(
                'fetcher returned unexpected result ' + JSON.stringify(result),
            )
        }
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
