import {
  FieldsSelection,
  GraphqlOperation,
  SubscriptionClient,
  ClientOptions,
  SubscriptionClientOptions,
} from 'genql-runtime'
export * from './schema'
import {
  QueryRequest,
  QueryPromiseChain,
  Query,
  SubscriptionRequest,
  SubscriptionObservableChain,
  Subscription,
} from './schema'
export declare const createClient: (options?: ClientOptions) => Client
export declare const everything: { __scalar: boolean }

export interface Client {
  query(request: QueryRequest): Promise<FieldsSelection<Query, R>>

  subscription(request: SubscriptionRequest): Observable<FieldsSelection<Subscription, R>>

  chain: {
    query: QueryPromiseChain

    subscription: SubscriptionObservableChain
  }
}

export type QueryResult<fields extends QueryRequest> = FieldsSelection<Query, fields>

export declare const generateQueryOp: (fields: QueryRequest) => GraphqlOperation
export type SubscriptionResult<fields extends SubscriptionRequest> = FieldsSelection<Subscription, fields>

export declare const generateSubscriptionOp: (fields: SubscriptionRequest) => GraphqlOperation
