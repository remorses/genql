import { buildASTSchema, assertValidSchema, GraphQLSchema } from 'graphql'
import { ListrTask } from 'listr'
import { Config } from '../config'
import { requireModuleFromPath } from '../helpers/files'
import { customFetchSchema, fetchSchema, SchemaFetcher } from '../schema/fetchSchema'
import { loadSchema } from 'graphql-toolkit'

export const schemaTask = (config: Config): ListrTask => {
  if (config.endpoint) {
    const endpoint = config.endpoint

    return {
      title: `fetching schema using ${config.post ? 'POST' : 'GET'} ${endpoint}`,
      task: async ctx => {
        ctx.schema = await fetchSchema(endpoint, config.post)
      },
    }
  } else if (config.fetcher) {
    const fetcher = config.fetcher

    return {
      title: 'fetching schema using custom fetcher',
      task: async ctx => {
        const resolvedFetcher = typeof fetcher === 'string' ? <SchemaFetcher>requireModuleFromPath([fetcher]) : fetcher
        ctx.schema = await customFetchSchema(resolvedFetcher, config.options && config.options.schemaValidation)
      },
    }
  } else if (config.schema) {
    const schema = config.schema

    return {
      title: 'loading schema',
      task: async ctx => {
        const options = config.options && config.options.schemaBuild
        const document = await loadSchema(schema)
        ctx.schema = document instanceof GraphQLSchema ? document : buildASTSchema(document, options)

        try {
          assertValidSchema(ctx.schema)
        } catch (e) {
          if (e.message === 'Query root type must be provided.') return
          throw e
        }
      },
    }
  } else {
    throw new Error('either `endpoint`, `fetcher` or `schema` must be defined in the config')
  }
}
