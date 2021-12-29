import {
  FieldsSelection,
  GraphqlOperation,
  ClientOptions,
  Observable,
} from '@genql/runtime'
import { SubscriptionClient } from 'subscriptions-transport-ws'
export * from './schema'
import {
  query_rootRequest,
  query_rootPromiseChain,
  query_root,
  mutation_rootRequest,
  mutation_rootPromiseChain,
  mutation_root,
  subscription_rootRequest,
  subscription_rootObservableChain,
  subscription_root,
} from './schema'
export declare const createClient: (options?: ClientOptions) => Client
export declare const everything: { __scalar: boolean }
export declare const version: string

export interface Client {
  wsClient?: SubscriptionClient

  query<R extends query_rootRequest>(
    request: R & { __name?: string },
  ): Promise<FieldsSelection<query_root, R>>

  mutation<R extends mutation_rootRequest>(
    request: R & { __name?: string },
  ): Promise<FieldsSelection<mutation_root, R>>

  subscription<R extends subscription_rootRequest>(
    request: R & { __name?: string },
  ): Observable<FieldsSelection<subscription_root, R>>

  chain: {
    query: query_rootPromiseChain

    mutation: mutation_rootPromiseChain

    subscription: subscription_rootObservableChain
  }
}

export type QueryResult<fields extends query_rootRequest> = FieldsSelection<
  query_root,
  fields
>

export declare const generateQueryOp: (
  fields: query_rootRequest & { __name?: string },
) => GraphqlOperation
export type MutationResult<
  fields extends mutation_rootRequest
> = FieldsSelection<mutation_root, fields>

export declare const generateMutationOp: (
  fields: mutation_rootRequest & { __name?: string },
) => GraphqlOperation
export type SubscriptionResult<
  fields extends subscription_rootRequest
> = FieldsSelection<subscription_root, fields>

export declare const generateSubscriptionOp: (
  fields: subscription_rootRequest & { __name?: string },
) => GraphqlOperation

export declare const enumorderBy: {
  readonly asc: 'asc'
  readonly asc_nulls_first: 'asc_nulls_first'
  readonly asc_nulls_last: 'asc_nulls_last'
  readonly desc: 'desc'
  readonly desc_nulls_first: 'desc_nulls_first'
  readonly desc_nulls_last: 'desc_nulls_last'
}

export declare const enumuserConstraint: {
  readonly user_pkey: 'user_pkey'
}

export declare const enumuserSelectColumn: {
  readonly age: 'age'
  readonly id: 'id'
  readonly name: 'name'
}

export declare const enumuserUpdateColumn: {
  readonly age: 'age'
  readonly id: 'id'
  readonly name: 'name'
}
