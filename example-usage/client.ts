import useSWR, { responseInterface } from 'swr'
import { useLazyPromise } from 'react-extra-hooks'

import { FieldsSelection, ClientError } from 'genql-runtime'
import {
    mutation_rootRequest as MutationRequest,
    createClient,
    query_rootRequest as QueryRequest,
    query_root as Query,
} from './hasura'

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

export const useMutation = <R extends MutationRequest>(q: R, options = {}) => {
    const [execute, res] = useLazyPromise((q) => client.mutation(q), {})
    return [() => execute(q), res]
}


