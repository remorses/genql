import { FieldsSelection, GraphqlOperation, ClientOptions, SubscriptionClientOptions, Observable } from 'genql-runtime'
export * from './schema'
import { QueryRequest, QueryPromiseChain, Query } from './schema'
export declare const createClient: (options?: ClientOptions) => Client
export declare const everything: { __scalar: boolean }

export interface Client {
  query(request: QueryRequest): Promise<FieldsSelection<Query, R>>

  chain: {
    query: QueryPromiseChain
  }
}

export type QueryResult<fields extends QueryRequest> = FieldsSelection<Query, fields>

export declare const generateQueryOp: (fields: QueryRequest) => GraphqlOperation
