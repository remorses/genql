import {
  Client,
  FieldsSelection,
  GraphqlOperation,
  SubscriptionClient,
  ClientOptions,
  SubscriptionClientOptions,
} from 'genql-runtime'
export * from './schema'
import { QueryRequest, QueryPromiseChain, Query } from './schema'
export declare const createClient: (
  options?: ClientOptions,
) => Client<QueryRequest, QueryPromiseChain, Query, never, never, never>

export declare const everything: { __scalar: boolean }

export type QueryResult<fields extends QueryRequest> = FieldsSelection<Query, fields>

export declare const generateQueryOp: (fields: QueryRequest) => GraphqlOperation

export type SubscriptionResult<fields extends SubscriptionRequest> = FieldsSelection<Subscription, fields>

export declare const generateSubscriptionOp: (fields: SubscriptionRequest) => GraphqlOperation

import { SubscriptionRequest, SubscriptionObservableChain, Subscription } from './schema'

export declare const createSubscriptionClient: (
  options?: SubscriptionClientOptions,
) => SubscriptionClient<SubscriptionRequest, SubscriptionObservableChain, Subscription>
