import 'isomorphic-fetch'
import qs from 'qs'
import { ExecutionResult, GraphQLError } from 'graphql'
import { NEVER, Observable } from 'rxjs'
import { get } from 'lodash'
import { map } from 'rxjs/operators'
import { applyTypeMapperToResponse, TypeMapper } from './applyTypeMapperToResponse'
import { chain } from './chain'
import { LinkedType } from './linkTypeMap'
import { Fields, Gql, requestToGql } from './requestToGql'
import { getSubscriptionCreator, SubscriptionCreatorOptions } from './getSubscriptionCreator'

export class ClientError extends Error {
  constructor(message?: string, public errors?: ReadonlyArray<GraphQLError>) {
    super(errors ? `${message}\n${errors.map(error => JSON.stringify(error, null, 2)).join('\n')}` : message)

    new.target.prototype.name = new.target.name
    Object.setPrototypeOf(this, new.target.prototype)
    if (Error.captureStackTrace) Error.captureStackTrace(this, ClientError)
  }
}

export interface Fetcher {
  (gql: Gql, fetchImpl: typeof fetch, qsImpl: typeof qs): Promise<ExecutionResult<any>>
}

export interface Client<QR, QC, Q, MR, MC, M, SR, SC, S> {
  query(request: QR): Promise<ExecutionResult<Q>>
  mutation(request: MR): Promise<ExecutionResult<M>>
  subscription(request: SR): Observable<ExecutionResult<S>>
  chain: {
    query: QC
    mutation: MC
    subscription: SC
  }
}

export interface ClientOptions {
  fetcher?: Fetcher
  subscriptionCreatorOptions?: SubscriptionCreatorOptions
}

export interface ClientEmbeddedOptions {
  queryRoot?: LinkedType
  mutationRoot?: LinkedType
  subscriptionRoot?: LinkedType
  typeMapper?: TypeMapper
}

export const createClient = <QR extends Fields, QC, Q, MR extends Fields, MC, M, SR extends Fields, SC, S>({
  fetcher,
  subscriptionCreatorOptions,
  queryRoot,
  mutationRoot,
  subscriptionRoot,
  typeMapper,
}: ClientOptions & ClientEmbeddedOptions): Client<QR, QC, Q, MR, MC, M, SR, SC, S> => {
  const createSubscription = subscriptionCreatorOptions ? getSubscriptionCreator(subscriptionCreatorOptions) : () => NEVER

  const query = (request: QR): Promise<ExecutionResult<Q>> => {
    if (!fetcher) throw new Error('fetcher argument is missing')
    if (!queryRoot) throw new Error('queryRoot argument is missing')

    const resultPromise = fetcher(requestToGql('query', queryRoot, request, typeMapper), fetch, qs)

    return typeMapper
      ? resultPromise.then(result => applyTypeMapperToResponse(queryRoot, result, typeMapper))
      : resultPromise
  }

  const mutation = (request: MR): Promise<ExecutionResult<M>> => {
    if (!fetcher) throw new Error('fetcher argument is missing')
    if (!mutationRoot) throw new Error('mutationRoot argument is missing')

    const resultPromise = fetcher(requestToGql('mutation', mutationRoot, request, typeMapper), fetch, qs)

    return typeMapper
      ? resultPromise.then(result => applyTypeMapperToResponse(mutationRoot, result, typeMapper))
      : resultPromise
  }

  const subscription = (request: SR): Observable<ExecutionResult<S>> => {
    if (!subscriptionCreatorOptions) throw new Error('subscriptionClientOptions argument is missing')
    if (!subscriptionRoot) throw new Error('subscriptionRoot argument is missing')

    const resultObservable = createSubscription(requestToGql('subscription', subscriptionRoot, request, typeMapper))

    return typeMapper
      ? resultObservable.pipe(map(result => applyTypeMapperToResponse(subscriptionRoot, result, typeMapper)))
      : resultObservable
  }

  const mapResponse = (path: string[], defaultValue: any) => (response: ExecutionResult) => {
    if (response.errors) throw new ClientError(`Response contains errors`, response.errors)
    if (!response.data) throw new ClientError('Response data is empty')

    const result = get(response, ['data', ...path], defaultValue)

    if (result === undefined) throw new ClientError(`Response path \`${path.join('.')}\` is empty`)

    return result
  }

  return {
    query,
    mutation,
    subscription,
    chain: {
      query: <any>chain((path, request, defaultValue) => query(request).then(mapResponse(path, defaultValue))),
      mutation: <any>chain((path, request, defaultValue) => mutation(request).then(mapResponse(path, defaultValue))),
      subscription: <any>(
        chain((path, request, defaultValue) => subscription(request).pipe(map(mapResponse(path, defaultValue))))
      ),
    },
  }
}
