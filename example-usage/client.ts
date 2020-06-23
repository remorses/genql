import useSWR, { responseInterface } from 'swr'
import {
    useLazyPromise,
    useObservable,
    useLazyPromiseOutput,
} from 'react-extra-hooks'

import { FieldsSelection, ClientError } from 'genql-runtime'
import {
    mutation_rootRequest as MutationRequest,
    createClient,
    query_rootRequest as QueryRequest,
    subscription_rootRequest as SubscriptionRequest,
    query_root as Query,
    mutation_root as Mutation,
    subscription_root as Subscription,
} from './hasura'
import { UseObservableOutput } from 'react-extra-hooks/dist/useLazyObservable'

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

export const useMutation = <R extends MutationRequest>(
    q: R,
): useLazyPromiseOutput<any, FieldsSelection<R, Mutation>> => {
    const [execute, res, bo] = useLazyPromise<any>(
        (q) => q && client.mutation(q),
        {},
    )
    return [() => execute(q), res, bo]
}

export const useSubscription = <
    R extends SubscriptionRequest,
    ReducedType = FieldsSelection<R, Subscription>
>(
    q: R,
    reducer: (
        acc: ReducedType,
        x: FieldsSelection<R, Subscription>,
    ) => ReducedType,
): UseObservableOutput<ReducedType> => {
    return useObservable<any>((q) => client.subscription(q), {
        args: [q],
        reducer,
    })
}
