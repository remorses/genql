import { ExecutionResult } from 'graphql'
import 'isomorphic-fetch'
import get from 'lodash.get'
import ws from 'ws'

import { Fetcher, ClientError } from '../fetcher'
import { chain } from './chain'
import { LinkedType } from './linkTypeMap'
import { Fields, requestToGql } from './requestToGql'
import { MapType } from './typeSelection'
import {
    Observable,
    Observer,
    ClientOptions as SubscirptionOptions,
    SubscriptionClient,
} from 'subscriptions-transport-ws'

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
    subscriptionUrl?: string
    subscriptionOptions?: SubscirptionOptions & { url: string }
}

export interface ClientEmbeddedOptions {
    queryRoot?: LinkedType
    mutationRoot?: LinkedType
    subscriptionRoot?: LinkedType
}

function getSubscriptionClient(
    opts?: SubscirptionOptions & { url: string },
): [SubscriptionClient, Error] {
    if (!opts?.url) {
        return [null!, Error('missing url parameter')]
    }
    const subClient = new SubscriptionClient(
        opts?.url,
        { lazy: true, reconnect: true, ...opts },
        ws,
    )
    return [subClient, null!]
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
    subscriptionOptions,
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
    const mapResponse = (path: string[], defaultValue: any = undefined) => (
        response: any,
    ) => {
        const result = get(response, [...path], defaultValue)

        if (result === undefined)
            throw new ClientError(
                `Response path \`${path.join('.')}\` is empty`,
            )

        return result
    }
    const [subClient, subClientError] = getSubscriptionClient(
        subscriptionOptions,
    )
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
            if (!subscriptionRoot)
                throw new Error('subscriptionRoot argument is missing')
            if (!subClient) throw subClientError

            const op = requestToGql('subscription', subscriptionRoot, request)
            return {
                subscribe: (observer: Observer<any>) => {
                    return subClient.request(op).subscribe({
                        next: (val) => {
                            if (
                                val?.errors?.length &&
                                val?.errors?.length > 0
                            ) {
                                observer?.error?.(
                                    new ClientError(
                                        `Subscription errors`,
                                        val?.errors,
                                    ),
                                )
                                return
                            }
                            observer.next?.(val.data)
                        },
                        error: (e) => observer.error?.(e),
                        complete: () => observer.complete?.(),
                    })
                },
            }
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
            subscription: <any>chain((path, request, defaultValue) => {
                const obs = funcs.subscription(request)
                const mapper = mapResponse(path, defaultValue)
                return {
                    subscribe: (observer: Observer<any>) => {
                        return obs.subscribe({
                            next: (val) => {
                                const res = mapper(val)
                                observer.next?.(res)
                            },
                            error: (e) => observer.error?.(e),
                            complete: () => observer.complete?.(),
                        })
                    },
                }
            }),
        },
    }
}
