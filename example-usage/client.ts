import useSWR, { responseInterface } from 'swr'

import { createClient, QueryRequest, Query } from './generated'
import { FieldsSelection, ClientError } from 'genql-runtime'

const client = createClient()

export const useQuery = <R extends QueryRequest>(
    q: R,
    options = {},
): responseInterface<FieldsSelection<Query, R>, ClientError> => {
    return useSWR<any>(JSON.stringify(q), {
        fetcher: (q) => q && client.query(JSON.parse(q)),
        ...options,
    })
}
