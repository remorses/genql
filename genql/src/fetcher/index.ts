import qs from 'qs'
import { Gql } from '../client/requestToGql'

export interface Fetcher {
    (gql: Gql, fetchImpl: typeof fetch, qsImpl: typeof qs): Promise<any>
}

export const createDefaultFetcher = ({ url }: {url: string}): Fetcher => async (
    { query, variables },
    fetch,
    qs,
) => {
    const res = await fetch(`${url}?${qs.stringify({ query, variables })}`, {
        headers: {
            Authorization: 'bearer MY_TOKEN', // TODO add jwt data
        },
    })
    const json = await res.json()
    // TODO fetcher handle errors
    return json.data
}
