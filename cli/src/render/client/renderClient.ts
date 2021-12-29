import { GraphQLEnumType, GraphQLSchema, isEnumType } from 'graphql'
import { RenderContext } from '../common/RenderContext'
import { RUNTIME_LIB_NAME } from '../../config'
import { excludedTypes } from '../common/excludedTypes'
const { version } = require('../../../package.json')
import camelCase from 'lodash/camelCase'

const renderClientCode = (ctx: RenderContext) => {
    const url = ctx.config?.endpoint ? `"${ctx.config.endpoint}"` : 'undefined'
    return `
function(options) {
    options = options || {}
    var optionsCopy = { 
      url: ${url}, 
      queryRoot: typeMap.Query,
      mutationRoot: typeMap.Mutation,
      subscriptionRoot: typeMap.Subscription,
    }
    for (var name in options) { 
      optionsCopy[name] = options[name];
    }
    return createClientOriginal(optionsCopy)
}`
}
export function renderEnumsMaps(
    schema: GraphQLSchema,
    moduleType: 'esm' | 'cjs' | 'type',
) {
    let typeMap = schema.getTypeMap()

    const enums: GraphQLEnumType[] = []
    for (const name in typeMap) {
        if (excludedTypes.includes(name)) continue

        const type = typeMap[name]

        if (isEnumType(type)) {
            enums.push(type)
        }
    }
    if (enums.length === 0) return ''
    const declaration = (() => {
        if (moduleType === 'esm') {
            return 'export const '
        } else if (moduleType === 'cjs') {
            return 'module.exports.'
        } else if (moduleType === 'type') {
            return 'export declare const '
        }
        return ''
    })()
    return enums
        .map(
            (type) =>
                `${declaration}${camelCase('enum' + type.name)}${moduleType === 'type' ? ': ' : ' = '}{\n` +
                type
                    .getValues()
                    .map((v) => {
                        if (!v?.name) {
                            return ''
                        }
                        return `  ${moduleType === 'type' ? 'readonly ' : ''}${v.name}: '${v.name}'`
                    })
                    .join(',\n') +
                `\n}\n`,
        )
        .join('\n')
}

export const renderClientCjs = (schema: GraphQLSchema, ctx: RenderContext) => {
    ctx.addCodeBlock(`
  const { 
      linkTypeMap, 
      createClient: createClientOriginal, 
      generateGraphqlOperation,
      assertSameVersion,
  } = require('${RUNTIME_LIB_NAME}')
  var typeMap = linkTypeMap(require('./types.cjs'))

  var version = '${version}'
  assertSameVersion(version)

  module.exports.version = version

  module.exports.createClient = ${renderClientCode(ctx)}
  
  ${renderEnumsMaps(schema, 'cjs')}

  module.exports.generateQueryOp = function(fields) {
    return generateGraphqlOperation('query', typeMap.Query, fields)
  }
  module.exports.generateMutationOp = function(fields) {
    return generateGraphqlOperation('mutation', typeMap.Mutation, fields)
  }
  module.exports.generateSubscriptionOp = function(fields) {
    return generateGraphqlOperation('subscription', typeMap.Subscription, fields)
  }
  module.exports.everything = {
    __scalar: true
  }

  var schemaExports = require('./guards.cjs')
  for (var k in schemaExports) { 
    module.exports[k] = schemaExports[k];
  }
  `)
}

export const renderClientEsm = (schema: GraphQLSchema, ctx: RenderContext) => {
    ctx.addCodeBlock(`
  import { 
      linkTypeMap, 
      createClient as createClientOriginal, 
      generateGraphqlOperation,
      assertSameVersion,
  } from '${RUNTIME_LIB_NAME}'
  import types from './types.esm'
  var typeMap = linkTypeMap(types)
  export * from './guards.esm'

  export var version = ${JSON.stringify(version)}
  assertSameVersion(version)

  export var createClient = ${renderClientCode(ctx)}

  ${renderEnumsMaps(schema, 'esm')}

  export var generateQueryOp = function(fields) {
    return generateGraphqlOperation('query', typeMap.Query, fields)
  }
  export var generateMutationOp = function(fields) {
    return generateGraphqlOperation('mutation', typeMap.Mutation, fields)
  }
  export var generateSubscriptionOp = function(fields) {
    return generateGraphqlOperation('subscription', typeMap.Subscription, fields)
  }
  export var everything = {
    __scalar: true
  }
  `)
}
