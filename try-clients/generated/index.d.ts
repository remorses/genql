import { FieldsSelection, GraphqlOperation, ClientOptions, SubscriptionClientOptions, Observable } from 'genql-runtime'
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

export interface Client {
  query(request: query_rootRequest): Promise<FieldsSelection<query_root, R>>

  mutation(request: mutation_rootRequest): Promise<FieldsSelection<mutation_root, R>>

  subscription(request: subscription_rootRequest): Observable<FieldsSelection<subscription_root, R>>

  chain: {
    query: query_rootPromiseChain

    mutation: mutation_rootPromiseChain

    subscription: subscription_rootObservableChain
  }
}

export type QueryResult<fields extends query_rootRequest> = FieldsSelection<query_root, fields>

export declare const generateQueryOp: (fields: query_rootRequest) => GraphqlOperation
export type MutationResult<fields extends mutation_rootRequest> = FieldsSelection<mutation_root, fields>

export declare const generateMutationOp: (fields: mutation_rootRequest) => GraphqlOperation
export type SubscriptionResult<fields extends subscription_rootRequest> = FieldsSelection<subscription_root, fields>

export declare const generateSubscriptionOp: (fields: subscription_rootRequest) => GraphqlOperation
