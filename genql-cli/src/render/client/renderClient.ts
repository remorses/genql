import { GraphQLSchema } from 'graphql'
import { RenderContext } from '../common/RenderContext'
import { RUNTIME_LIB_NAME } from '../../config'

const createClientCode = (ctx: RenderContext) => {
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
      createSubscriptionClient: createSubscriptionClientOriginal, 
      createFetcher,
      generateGraphqlOperation
  } = require('${RUNTIME_LIB_NAME}')
  var typeMap = linkTypeMap(require('./types.json'))
  module.exports.createClient = ${createClientCode(ctx)}
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
  
  `)
}

export const renderClientEsm = (_: GraphQLSchema, ctx: RenderContext) => {
    ctx.addCodeBlock(`
  import { 
      linkTypeMap, 
      createClient as createClientOriginal, 
      createSubscriptionClient as createSubscriptionClientOriginal, 
      createFetcher,
      generateGraphqlOperation,
  } from '${RUNTIME_LIB_NAME}'
  var typeMap = linkTypeMap(require('./types.json'))
  export var createClient = ${createClientCode(ctx)}
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
