import { Client, ClientOptions } from 'nodejs-lib-template'
import { QueryRequest, QueryPromiseChain, Query } from './schema'
export declare const createClient: (
  options: ClientOptions,
) => Client<QueryRequest, QueryPromiseChain, Query, never, never, never, never, never, never>
