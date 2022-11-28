import { GraphQLEnumType, GraphQLSchema, isEnumType } from 'graphql'
import { RenderContext } from '../common/RenderContext'
import { RUNTIME_LIB_NAME } from '../../config'
import { excludedTypes } from '../common/excludedTypes'
const { version } = require('../../../package.json')
import camelCase from 'lodash/camelCase'
import { requestTypeName } from '../requestTypes/requestTypeName'

const renderClientCode = (ctx: RenderContext) => {
    const url = ctx.config?.endpoint ? `"${ctx.config.endpoint}"` : 'undefined'
    return `
function(options: ClientOptions): Client {
  return createClientOriginal({
      url: ${url},
      ...options,
      queryRoot: typeMap.Query!,
      mutationRoot: typeMap.Mutation!,
      subscriptionRoot: typeMap.Subscription!,
  }) as any
}`
}


export const renderClientEsm = (schema: GraphQLSchema, ctx: RenderContext) => {
    const queryType = schema.getQueryType()
    const mutationType = schema.getMutationType()
    const subscriptionType = schema.getSubscriptionType()
    ctx.addCodeBlock(`
    ${renderClientTypesImports({ mutationType, queryType, subscriptionType })}
  import { 
      linkTypeMap, 
      createClient as createClientOriginal, 
      generateGraphqlOperation,
      FieldsSelection, GraphqlOperation, ClientOptions, Observable
  } from '${RUNTIME_LIB_NAME}'
  import { SubscriptionClient } from 'subscriptions-transport-ws'
  import types from './types'
  export * from './schema'
  const typeMap = linkTypeMap(types as any)

  ${renderClientType({ mutationType, queryType, subscriptionType })}

  export const version = ${JSON.stringify(version)}

  export const createClient = ${renderClientCode(ctx)}

  
  export const everything = {
    __scalar: true
  }
  `)

    if (queryType) {
        ctx.addCodeBlock(`
        export const generateQueryOp: (fields: ${requestTypeName(
            queryType,
        )} & { __name?: string }) => GraphqlOperation = function(fields) {
        return generateGraphqlOperation('query', typeMap.Query!, fields as any)
      }
    `)
    }
    if (mutationType) {
        ctx.addCodeBlock(`
        export const generateMutationOp: (fields: ${requestTypeName(
            mutationType,
        )} & { __name?: string }) => GraphqlOperation = function(fields) {
        return generateGraphqlOperation('mutation', typeMap.Mutation!, fields as any)
      }
    `)
    }
    if (subscriptionType) {
        ctx.addCodeBlock(`
        export const generateSubscriptionOp: (fields: ${requestTypeName(
            subscriptionType,
        )} & { __name?: string }) => GraphqlOperation = function(fields) {
        return generateGraphqlOperation('subscription', typeMap.Subscription!, fields as any)
      }
    `)
    }
}

function renderClientTypesImports({
    queryType,
    mutationType,
    subscriptionType,
}) {
    const imports: string[] = []
    if (queryType) {
        imports.push(
            requestTypeName(queryType),

            queryType.name,
        )
    }

    if (mutationType) {
        imports.push(
            requestTypeName(mutationType),

            mutationType.name,
        )
    }
    if (subscriptionType) {
        imports.push(
            requestTypeName(subscriptionType),

            subscriptionType.name,
        )
    }
    if (imports.length > 0) {
        return `import {${imports.join(',')}} from './schema'`
    }
    return ''
}

function renderClientType({ queryType, mutationType, subscriptionType }) {
    let interfaceContent = ''

    if (queryType) {
        interfaceContent += `
      query<R extends ${requestTypeName(queryType)}>(
          request: R & { __name?: string },
      ): Promise<FieldsSelection<${queryType.name}, R>>
      `
    }

    if (mutationType) {
        interfaceContent += `
      mutation<R extends ${requestTypeName(mutationType)}>(
          request: R & { __name?: string },
      ): Promise<FieldsSelection<${mutationType.name}, R>>
      `
    }

    if (subscriptionType) {
        interfaceContent += `
      subscription<R extends ${requestTypeName(subscriptionType)}>(
          request: R & { __name?: string },
      ): Observable<FieldsSelection<${subscriptionType.name}, R>>
      `
    }

    return `
  export interface Client {
      wsClient?: SubscriptionClient
      ${interfaceContent}
  }
  `
}
