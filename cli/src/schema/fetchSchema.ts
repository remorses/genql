import fetch from 'isomorphic-unfetch'
import {
    buildClientSchema,
    ExecutionResult,
    getIntrospectionQuery,
    IntrospectionQuery,
} from 'graphql'
import { GraphQLSchemaValidationOptions } from 'graphql/type/schema'
import qs from 'qs'
import { sortBy } from 'lodash'

export interface SchemaFetcher {
    (query: string, fetchImpl: typeof fetch, qsImpl: typeof qs): Promise<
        ExecutionResult
    >
}

export const fetchSchema = async ({
    endpoint,
    usePost = false,
    headers,
    options,
}: {
    endpoint: string
    usePost: boolean
    headers?: Record<string, string>
    options?: GraphQLSchemaValidationOptions
}) => {
    const response = await fetch(
        usePost
            ? endpoint
            : `${endpoint}?${qs.stringify({ query: getIntrospectionQuery() })}`,
        usePost
            ? {
                  method: usePost ? 'POST' : 'GET',
                  body: JSON.stringify({ query: getIntrospectionQuery() }),
                  headers: { ...headers, 'Content-Type': 'application/json' },
              }
            : {
                  headers,
              },
    )
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

    // console.log(result.data)
    // console.log(JSON.stringify(result.data, null, 4))

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

    return buildClientSchema(result.data as any, options)
}
