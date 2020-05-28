import get from 'lodash.get'
import ws from 'ws'

import { Fetcher, ClientError } from '../fetcher'
import { chain } from './chain'
import { LinkedType } from './linkTypeMap'
import { Fields, requestToGql } from './requestToGql'
import { MapType } from './typeSelection'
import { Observable } from 'zen-observable-ts'
import {
    ClientOptions as SubscriptionOptions,
    SubscriptionClient as wsSubscriptionClient,
} from 'subscriptions-transport-ws'
import { ExecutionResult } from 'graphql'

export interface Client<QR, QC, Q, MR, MC, M> {
    query<R extends QR>(request: R): Promise<MapType<Q, R>>
    mutation<R extends MR>(request: R): Promise<MapType<M, R>>
    chain: {
        query: QC
        mutation: MC
    }
}

export interface SubscriptionClient<SR, SC, S> {
    subscription<R extends SR>(request: R): Observable<MapType<S, R>>
    chain: {
        subscription: SC
    }
}

export interface BaseClientOptions {
    url?: string
    headers?: RequestInit['headers'] | (() => RequestInit['headers'])
}

export type ClientOptions = BaseClientOptions & Omit<RequestInit, 'body' | 'headers'>

export type SubscriptionClientOptions = BaseClientOptions & SubscriptionOptions

export const createClient = <
    QR extends Fields,
    QC,
    Q,
    MR extends Fields,
    MC,
    M
>({
    fetcher,
    queryRoot,
    mutationRoot,
}: ClientOptions & {
    fetcher: Fetcher
    queryRoot?: LinkedType
    mutationRoot?: LinkedType
}): Client<QR, QC, Q, MR, MC, M> => {
    const funcs = {
        query: (request: QR) => {
            if (!fetcher) throw new Error('fetcher argument is missing')
            if (!queryRoot) throw new Error('queryRoot argument is missing')

            const resultPromise = fetcher(
                requestToGql('query', queryRoot, request),
            )

            return resultPromise
        },
        mutation: (request: MR) => {
            if (!fetcher) throw new Error('fetcher argument is missing')
            if (!mutationRoot)
                throw new Error('mutationRoot argument is missing')

            const resultPromise = fetcher(
                requestToGql('mutation', mutationRoot, request),
            )

            return resultPromise
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
        },
    }
}

export const createSubscriptionClient = <SR extends Fields, SC, S>({
    subscriptionRoot,
    ...options
}: SubscriptionClientOptions & {
    subscriptionRoot?: LinkedType
}): SubscriptionClient<SR, SC, S> => {
    const subClient = getSubscriptionClient(options)
    const funcs = {
        subscription: (request: SR) => {
            if (!subscriptionRoot)
                throw new Error('subscriptionRoot argument is missing')

            const op = requestToGql('subscription', subscriptionRoot, request)
            return Observable.from(subClient.request(op) as any).map(
                (val: ExecutionResult<any>): any => {
                    if (val?.errors?.length > 0) {
                        throw new ClientError(val?.errors)
                    }
                    return val
                },
            )
        },
    }
    return {
        ...funcs,
        chain: {
            subscription: <any>chain((path, request, defaultValue) => {
                const obs = funcs.subscription(request)
                const mapper = mapResponse(path, defaultValue)
                return Observable.from(obs).map(mapper)
            }),
        },
    }
}

const mapResponse = (path: string[], defaultValue: any = undefined) => (
    response: any,
) => {
    const result = get(response, [...path], defaultValue)

    if (result === undefined) {
        throw new Error(`Response path \`${path.join('.')}\` is empty`)
    }

    return result
}


function getSubscriptionClient(
    opts?: SubscriptionClientOptions,
): wsSubscriptionClient {
    if (!opts?.url) {
        throw new Error('Subscription client error: missing url parameter')
    }
    const subClient = new wsSubscriptionClient(
        opts?.url,
        {
            lazy: true,
            reconnect: true,
            reconnectionAttempts: 3,
            connectionCallback: (err, res) => {
                console.log('connection', err, res)
                return true
            },
            connectionParams: {
                headers:
                    typeof opts.headers == 'function'
                        ? opts.headers()
                        : opts.headers,
            },
            ...opts,
        },
        ws,
    )
    return subClient
}
