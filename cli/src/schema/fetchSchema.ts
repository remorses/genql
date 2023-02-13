import { fetch } from 'native-fetch'
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
    (
        query: string,
        fetchImpl: typeof fetch,
        qsImpl: typeof qs,
    ): Promise<ExecutionResult>
}

export const fetchSchema = async ({
    endpoint,
    usePost = true,
    headers,
    timeout = 20 * 1000,
    options,
}: {
    endpoint: string
    usePost?: boolean
    timeout?: number
    headers?: Record<string, string>
    options?: GraphQLSchemaValidationOptions
}) => {
    let controller = new AbortController()
    let id = setTimeout(() => {
        controller.abort()
    }, timeout)
    const response = await fetch(
        usePost
            ? endpoint
            : `${endpoint}?${qs.stringify({ query: getIntrospectionQuery() })}`,
        {
            signal: controller.signal,
            ...(usePost
                ? {
                      method: usePost ? 'POST' : 'GET',
                      body: JSON.stringify({ query: getIntrospectionQuery() }),
                      headers: {
                          ...headers,
                          'Content-Type': 'application/json',
                      },
                  }
                : {
                      headers,
                  }),
        },
    )
    clearTimeout(id)
    if (!response.ok) {
        throw new Error(
            `introspection for ${endpoint} failed, ` +
                response.statusText,
        )
    }

    const result = await response.json().catch((e) => {
        const contentType = response.headers.get('Content-Type')

        throw new Error(
            `endpoint '${endpoint}' did not return valid json, content type is ${contentType}, check that your endpoint points to a valid graphql api`,
        )
    })
    if (!result.data) {
        throw new Error(
            `introspection for ${endpoint} failed: ${JSON.stringify(result).slice(0, 200)}...`,
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
