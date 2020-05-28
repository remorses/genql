import { GraphQLSchema } from 'graphql'
import { RenderContext } from '../common/RenderContext'
import { RUNTIME_LIB_NAME } from '../../config'

const createClientCode = (ctx: RenderContext) => `
function(options) {
    
    options = options || {}
    var fetcherOpts = { url: "${ctx.config?.endpoint}" }
    for (var attrname in options) { 
        fetcherOpts[attrname] = options[attrname];
    }
    return createClientOriginal({
        fetcher: createFetcher(fetcherOpts),
        queryRoot: typeMap.Query,
        mutationRoot: typeMap.Mutation,
    })
}`

const createSubscriptionClientCode = (ctx: RenderContext) => `
function(options) {
    
    options = options || {}
    options.url = options.url || "${ctx.config?.endpoint}"
    options.subscriptionRoot = typeMap.Subscription
    return createSubscriptionClientOriginal(options)
}`

export const renderClientCjs = (_: GraphQLSchema, ctx: RenderContext) => {
    ctx.addCodeBlock(`
  const { linkTypeMap, createClient: createClientOriginal, createSubscriptionClient: createSubscriptionClientOriginal, createFetcher } = require('${RUNTIME_LIB_NAME}')
  var typeMap = linkTypeMap(require('./types.json'))
  module.exports.createClient = ${createClientCode(ctx)}
  module.exports.createSubscriptionClient = ${createSubscriptionClientCode(ctx)}
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
  export var createSubscriptionClient = ${createSubscriptionClientCode(ctx)}
  export var createSubscriptionClient = ${createSubscriptionClientCode(ctx)}
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
