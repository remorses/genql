import 'isomorphic-fetch'
import { buildClientSchema, ExecutionResult, getIntrospectionQuery, IntrospectionQuery } from 'graphql'
import { GraphQLSchemaValidationOptions } from 'graphql/type/schema'
import qs from 'qs'

export interface SchemaFetcher {
  (query: string, fetchImpl: typeof fetch, qsImpl: typeof qs): Promise<ExecutionResult<IntrospectionQuery>>
}

export const get = <T>(uri: string, query: { [arg: string]: any }): Promise<T> =>
  fetch(`${uri}?${qs.stringify(query)}`).then(r => r.json())

export const post = <T>(uri: string, body: { [arg: string]: any }): Promise<T> =>
  fetch(uri, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  }).then(r => r.json())

export const fetchSchema = async (endpoint: string, usePost = false, options?: GraphQLSchemaValidationOptions) => {
  const result = usePost
    ? await post<ExecutionResult<IntrospectionQuery>>(endpoint, { query: getIntrospectionQuery() })
    : await get<ExecutionResult<IntrospectionQuery>>(endpoint, { query: getIntrospectionQuery() })

  if (!result.data) {
    throw new Error('introspection request did not receive a valid response')
  }

  return buildClientSchema(result.data, options)
}

export const customFetchSchema = async (fetcher: SchemaFetcher, options?: GraphQLSchemaValidationOptions) => {
  const result = await fetcher(getIntrospectionQuery(), fetch, qs)

  if (!result.data) {
    throw new Error('introspection request did not receive a valid response')
  }

  return buildClientSchema(result.data, options)
}
