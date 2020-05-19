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
import { MapType } from './typeSelection'

export interface Client<QR, QC, Q, MR, MC, M, SR, SC, S> {
    query<R extends QR>(request: R): Promise<MapType<Q, R>>
    mutation<R extends MR>(request: R): Promise<MapType<M, R>>
    subscription<R extends SR>(request: R): Observable<MapType<S, R>>
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
    const funcs = {
        query: (request: QR) => {
            if (!fetcher) throw new Error('fetcher argument is missing')
            if (!queryRoot) throw new Error('queryRoot argument is missing')

            const resultPromise = fetcher(
                requestToGql('query', queryRoot, request),
                fetch,
            )

            return resultPromise
        },
        mutation: (request: MR) => {
            if (!fetcher) throw new Error('fetcher argument is missing')
            if (!mutationRoot)
                throw new Error('mutationRoot argument is missing')

            const resultPromise = fetcher(
                requestToGql('mutation', mutationRoot, request),
                fetch,
            )

            return resultPromise
        },
        subscription: (request: SR) => {
            if (!subscriptionCreatorOptions)
                throw new Error('subscriptionClientOptions argument is missing')
            if (!subscriptionRoot)
                throw new Error('subscriptionRoot argument is missing')

            const resultObservable = createSubscription(
                requestToGql('subscription', subscriptionRoot, request),
            )

            return resultObservable
        },
    }
    return {
        ...funcs,
        chain: {
            query: <any>(
                chain((path, request, defaultValue) =>
                    funcs.query(request).then(mapResponse(path, defaultValue)),
                )
            ),
            mutation: <any>(
                chain((path, request, defaultValue) =>
                    funcs
                        .mutation(request)
                        .then(mapResponse(path, defaultValue)),
                )
            ),
            subscription: <any>(
                chain((path, request, defaultValue) =>
                    funcs
                        .subscription(request)
                        .pipe(map(mapResponse(path, defaultValue))),
                )
            ),
        },
    }
}
