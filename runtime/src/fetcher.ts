import QueryBatcher from 'graphql-query-batcher'
import fetch from 'isomorphic-unfetch'
import { ClientOptions } from './client/createClient'
import { GraphqlOperation } from './client/generateGraphqlOperation'
import { ClientError } from './error'

export interface Fetcher {
    (gql: GraphqlOperation): Promise<any>
}

export type BatchOptions = {
    batchInterval?: number // ms
    maxBatchSize?: number
}

const DEFAULT_BATCH_OPTIONS = {
    maxBatchSize: 10,
    batchInterval: 40,
}

export const createFetcher = ({
    url,
    headers = {},
    fetcher,
    batch = false,
    ...rest
}: ClientOptions): Fetcher => {
    if (!url && !fetcher) {
        throw new Error('url or fetcher is required')
    }
    if (!fetcher) {
        fetcher = async (body) => {
            let headersObject =
                typeof headers == 'function' ? await headers() : headers
            headersObject = headersObject || {}
            const res = await fetch(url, {
                headers: {
                    'Content-Type': 'application/json',
                    ...headersObject,
                },
                method: 'POST',
                body: JSON.stringify(body),
                ...rest,
            })
            if (!res.ok) {
                throw new Error(`${res.statusText}: ${await res.text()}`)
            }
            const json = await res.json()
            return json
        }
    }

    if (!batch) {
        return async (body) => {
            const json = await fetcher(body)
            if (json?.errors?.length) {
                throw new ClientError(json.errors)
            }
            if (json?.data) {
                return json.data
            }
            throw new Error(
                'fetcher returned unexpected result ' + JSON.stringify(json),
            )
        }
    }

    const batcher = new QueryBatcher(
        async (batchedQuery: GraphqlOperation[]) => {
            // console.log(batchedQuery) // [{ query: 'query{user{age}}', variables: {} }, ...]
            const json = await fetcher(batchedQuery)
            return json
        },
        batch === true ? DEFAULT_BATCH_OPTIONS : batch,
    )

    return async ({ query, variables }) => {
        const json = await batcher.fetch(query, variables)
        if (json?.errors?.length) {
            throw new ClientError(json.errors)
        }
        if (json?.data) {
            return json.data
        }
        throw new Error(
            'fetcher returned unexpected result ' + JSON.stringify(json),
        )
    }
}
