import fetch from 'isomorphic-unfetch'
import {
    buildClientSchema,
    ExecutionResult,
    getIntrospectionQuery,
    IntrospectionQuery,
} from 'graphql'
import { GraphQLSchemaValidationOptions } from 'graphql/type/schema'
import qs from 'qs'

export interface SchemaFetcher {
    (query: string, fetchImpl: typeof fetch, qsImpl: typeof qs): Promise<
        ExecutionResult<IntrospectionQuery>
    >
}

export const get = <T>(uri: string, query: { [arg: string]: any }) =>
    fetch(`${uri}?${qs.stringify(query)}`)

export const post = <T>(uri: string, body: { [arg: string]: any }) =>
    fetch(uri, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    })

export const fetchSchema = async (
    endpoint: string,
    usePost = false,
    options?: GraphQLSchemaValidationOptions,
) => {
    const response = usePost
        ? await post<ExecutionResult<IntrospectionQuery>>(endpoint, {
              query: getIntrospectionQuery(),
          })
        : await get<ExecutionResult<IntrospectionQuery>>(endpoint, {
              query: getIntrospectionQuery(),
          })
    if (!response.ok) {
        throw new Error(
            'introspection query was not successful, ' + response.statusText,
        )
    }

    const result = await response.json().catch((e) => {
        const contentType = response.headers.get('Content-Type')
        console.log(`content type is ${contentType}`)
        throw new Error(
            `endpoint '${endpoint}' did not return valid json, check that your endpoint points to a valid graphql api`,
        )
    })
    if (!result.data) {
        throw new Error(
            'introspection request did not receive a valid response',
        )
    }

    return buildClientSchema(result.data, options)
}

export const customFetchSchema = async (
    fetcher: SchemaFetcher,
    options?: GraphQLSchemaValidationOptions,
) => {
    const result = await fetcher(getIntrospectionQuery(), fetch, qs)

    if (!result.data) {
        throw new Error(
            'introspection request did not receive a valid response',
        )
    }

    return buildClientSchema(result.data, options)
}
