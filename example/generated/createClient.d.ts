import { Client, ClientOptions } from 'genql-runtime'
import {
  QueryRequest,
  QueryPromiseChain,
  Query,
  MutationRequest,
  MutationPromiseChain,
  Mutation,
  SubscriptionRequest,
  SubscriptionObservableChain,
  Subscription,
} from './schema'
export declare const createClient: (
  options?: ClientOptions,
) => Client<
  QueryRequest,
  QueryPromiseChain,
  Query,
  MutationRequest,
  MutationPromiseChain,
  Mutation,
  SubscriptionRequest,
  SubscriptionObservableChain,
  Subscription
>
export declare const everything: { __scalar: boolean }
