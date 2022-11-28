import {
    ClientOptions as SubscriptionOptions,
    SubscriptionClient as WsSubscriptionClient,
} from 'subscriptions-transport-ws'
import ws from 'ws'
import { Observable } from 'zen-observable-ts'
import { ClientError } from '../error'
import { BatchOptions, createFetcher } from '../fetcher'
import { ExecutionResult, LinkedType } from '../types'
import {
    generateGraphqlOperation,
    GraphqlOperation,
} from './generateGraphqlOperation'

export type Headers =
    | HeadersInit
    | (() => HeadersInit)
    | (() => Promise<HeadersInit>)

export type BaseFetcher = (
    operation: GraphqlOperation | GraphqlOperation[],
) => Promise<ExecutionResult>

export type ClientOptions = Omit<RequestInit, 'body' | 'headers'> & {
    url?: string
    batch?: BatchOptions | boolean
    fetcher?: BaseFetcher
    headers?: Headers
    subscription?: { url?: string; headers?: Headers } & SubscriptionOptions
}

export const createClient = ({
    queryRoot,
    mutationRoot,
    subscriptionRoot,
    ...options
}: ClientOptions & {
    queryRoot?: LinkedType
    mutationRoot?: LinkedType
    subscriptionRoot?: LinkedType
}) => {
    const fetcher = createFetcher(options)
    const client: {
        wsClient?: WsSubscriptionClient
        query?: Function
        mutation?: Function
        subscription?: Function
        chain?: {
            query?: Function
            mutation?: Function
            subscription?: Function
        }
    } = {}

    if (queryRoot) {
        client.query = (request) => {
            if (!queryRoot) throw new Error('queryRoot argument is missing')

            const resultPromise = fetcher(
                generateGraphqlOperation('query', queryRoot, request),
            )

            return resultPromise
        }
    }
    if (mutationRoot) {
        client.mutation = (request) => {
            if (!mutationRoot)
                throw new Error('mutationRoot argument is missing')

            const resultPromise = fetcher(
                generateGraphqlOperation('mutation', mutationRoot, request),
            )

            return resultPromise
        }
    }
    if (subscriptionRoot) {
        client.subscription = (request) => {
            if (!subscriptionRoot) {
                throw new Error('subscriptionRoot argument is missing')
            }
            const op = generateGraphqlOperation(
                'subscription',
                subscriptionRoot,
                request,
            )
            if (!client.wsClient) {
                client.wsClient = getSubscriptionClient(options)
            }
            const obs = new Observable((observer) => {
                // TODO check that unsubscribing wrapper obs calls unsubscribe on the wrapped one
                const obs = client!.wsClient!.request(op).subscribe({
                    next: (x) => {
                        // if (observer.closed) return
                        observer.next(x)
                    },
                    error: (x) => {
                        // if (observer.closed) return
                        observer.error(x)
                    },
                    complete: () => {
                        observer.complete()
                    },
                })
                return () => {
                    obs.unsubscribe()
                }
            }).map((val: any): any => {
                if (val?.errors?.length) {
                    throw new ClientError(val?.errors)
                }
                return val?.data
            })
            return obs
        }
    }
   
    return client as any
}



function getSubscriptionClient(opts: ClientOptions = {}): WsSubscriptionClient {
    let { url, headers = {} } = opts.subscription || {}
    // by default use the top level url
    if (!url) {
        url = opts?.url
    }
    if (!url) {
        throw new Error('Subscription client error: missing url parameter')
    }

    return new WsSubscriptionClient(
        url,
        {
            lazy: true,
            reconnect: true,
            reconnectionAttempts: 3,
            connectionParams: async () => {
                let headersObject =
                    typeof headers == 'function' ? await headers() : headers
                headersObject = headersObject || {}
                return {
                    headers: headersObject,
                }
            },
            ...opts,
        },
        typeof window === 'undefined' ? ws : undefined,
    )
}
