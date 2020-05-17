import { Gql } from '../client/requestToGql'
import { ClientError } from './error'

export { ClientError }

export interface Fetcher {
    (gql: Gql, fetchImpl: typeof fetch,): Promise<any>
}

export const createDefaultFetcher = ({
    url,
}: {
    url: string
}): Fetcher => async ({ query, variables }, fetch) => {
    const res = await fetch(url, {
        headers: {
            Authorization: 'bearer MY_TOKEN', // TODO add jwt data
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ query, variables }),
    })
    if (!res.ok) {
        throw new Error(`${res.statusText}: ${await res.text()}`)
    }
    const json = await res.json()
    if (json?.errors?.length) {
        throw new ClientError(`Response contains errors`, json.errors)
    }
    return json.data
}
