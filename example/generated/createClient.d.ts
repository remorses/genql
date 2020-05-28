import { Client, SubscriptionClient, ClientOptions, SubscriptionClientOptions } from 'genql-runtime'
import { QueryRequest, QueryPromiseChain, Query, MutationRequest, MutationPromiseChain, Mutation } from './schema'
export declare const createClient: (
  options?: ClientOptions,
) => Client<QueryRequest, QueryPromiseChain, Query, MutationRequest, MutationPromiseChain, Mutation>
export declare const everything: { __scalar: boolean }

import { SubscriptionRequest, SubscriptionObservableChain, Subscription } from './schema'

export declare const createSubscriptionClient: (
  options?: SubscriptionClientOptions,
) => SubscriptionClient<SubscriptionRequest, SubscriptionObservableChain, Subscription>
