import { ExecutionResult } from 'graphql'
import 'isomorphic-fetch'
import get from 'lodash.get'
import { NEVER, Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { Fetcher, ClientError } from '../fetcher'
import { chain } from './chain'
import {
    getSubscriptionCreator,
    SubscriptionCreatorOptions,
} from './getSubscriptionCreator'
import { LinkedType } from './linkTypeMap'
import { Fields, requestToGql } from './requestToGql'

export interface Client<QR, QC, Q, MR, MC, M, SR, SC, S> {
    query(request: QR): Promise<Q>
    mutation(request: MR): Promise<M>
    subscription(request: SR): Observable<S>
    chain: {
        query: QC
        mutation: MC
        subscription: SC
    }
}

export interface ClientOptions {
    fetcher?: Fetcher
    subscriptionCreatorOptions?: SubscriptionCreatorOptions
}

export interface ClientEmbeddedOptions {
    queryRoot?: LinkedType
    mutationRoot?: LinkedType
    subscriptionRoot?: LinkedType
}

export const createClient = <
    QR extends Fields,
    QC,
    Q,
    MR extends Fields,
    MC,
    M,
    SR extends Fields,
    SC,
    S
>({
    fetcher,
    subscriptionCreatorOptions,
    queryRoot,
    mutationRoot,
    subscriptionRoot,
}: ClientOptions & ClientEmbeddedOptions): Client<
    QR,
    QC,
    Q,
    MR,
    MC,
    M,
    SR,
    SC,
    S
> => {
    const createSubscription = subscriptionCreatorOptions
        ? getSubscriptionCreator(subscriptionCreatorOptions)
        : () => NEVER

    const query = (request: QR): Promise<Q> => {
        if (!fetcher) throw new Error('fetcher argument is missing')
        if (!queryRoot) throw new Error('queryRoot argument is missing')

        const resultPromise = fetcher(
            requestToGql('query', queryRoot, request),
            fetch,
        )

        return resultPromise
    }

    const mutation = (request: MR): Promise<M> => {
        if (!fetcher) throw new Error('fetcher argument is missing')
        if (!mutationRoot) throw new Error('mutationRoot argument is missing')

        const resultPromise = fetcher(
            requestToGql('mutation', mutationRoot, request),
            fetch,
        )

        return resultPromise
    }

    const subscription = (request: SR): Observable<S> => {
        if (!subscriptionCreatorOptions)
            throw new Error('subscriptionClientOptions argument is missing')
        if (!subscriptionRoot)
            throw new Error('subscriptionRoot argument is missing')

        const resultObservable = createSubscription(
            requestToGql('subscription', subscriptionRoot, request),
        )

        return resultObservable
    }

    const mapResponse = (path: string[], defaultValue: any = undefined) => (
        response: ExecutionResult,
    ) => {
        const result = get(response, [...path], defaultValue)

        if (result === undefined)
            throw new ClientError(
                `Response path \`${path.join('.')}\` is empty`,
            )

        return result
    }

    return {
        query,
        mutation,
        subscription,
        chain: {
            query: <any>(
                chain((path, request, defaultValue) =>
                    query(request).then(mapResponse(path, defaultValue)),
                )
            ),
            mutation: <any>(
                chain((path, request, defaultValue) =>
                    mutation(request).then(mapResponse(path, defaultValue)),
                )
            ),
            subscription: <any>(
                chain((path, request, defaultValue) =>
                    subscription(request).pipe(
                        map(mapResponse(path, defaultValue)),
                    ),
                )
            ),
        },
    }
}
