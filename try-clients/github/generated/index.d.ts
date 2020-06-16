import { FieldsSelection, GraphqlOperation, ClientOptions, Observable } from 'genql-runtime'
export * from './schema'
import { QueryRequest, QueryPromiseChain, Query, MutationRequest, MutationPromiseChain, Mutation } from './schema'
export declare const createClient: (options?: ClientOptions) => Client
export declare const everything: { __scalar: boolean }

export interface Client {
  query<R extends QueryRequest>(request: R): Promise<FieldsSelection<Query, R>>

  mutation<R extends MutationRequest>(request: R): Promise<FieldsSelection<Mutation, R>>

  chain: {
    query: QueryPromiseChain

    mutation: MutationPromiseChain
  }
}

export type QueryResult<fields extends QueryRequest> = FieldsSelection<Query, fields>

export declare const generateQueryOp: (fields: QueryRequest) => GraphqlOperation
export type MutationResult<fields extends MutationRequest> = FieldsSelection<Mutation, fields>

export declare const generateMutationOp: (fields: MutationRequest) => GraphqlOperation
