import { GraphQLSchema } from 'graphql'
import { RenderContext } from '../common/RenderContext'
import { RUNTIME_LIB_NAME } from '../../config'
const { version } = require('../../../package.json')

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

export const renderClientCjs = (_: GraphQLSchema, ctx: RenderContext) => {
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

export const renderClientEsm = (_: GraphQLSchema, ctx: RenderContext) => {
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
