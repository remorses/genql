import { GraphQLSchema } from 'graphql'
import { RenderContext } from '../common/RenderContext'
import { RUNTIME_LIB_NAME } from '../../config'

const createClientCode = (ctx: RenderContext) => `
function(options) {
    var typeMap = linkTypeMap(require('./types.json'))
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
    var typeMap = linkTypeMap(require('./types.json'))
    options = options || {}
    options.url = options.url || "${ctx.config?.endpoint}"
    options.subscriptionRoot = typeMap.Subscription
    return createSubscriptionClientOriginal(options)
}`

export const renderClientCjs = (_: GraphQLSchema, ctx: RenderContext) => {
    ctx.addCodeBlock(`
  const { linkTypeMap, createClient: createClientOriginal, createSubscriptionClient: createSubscriptionClientOriginal, createFetcher } = require('${RUNTIME_LIB_NAME}')
  module.exports.createClient = ${createClientCode(ctx)}
  module.exports.createSubscriptionClient = ${createSubscriptionClientCode(ctx)}
  module.exports.everything = {
    __scalar: true
  }
  `)
}

export const renderClientEsm = (_: GraphQLSchema, ctx: RenderContext) => {
    ctx.addCodeBlock(`
  import { linkTypeMap, createClient as createClientOriginal, createSubscriptionClient as createSubscriptionClientOriginal, createFetcher } from '${RUNTIME_LIB_NAME}'
  export const createClient = ${createClientCode(ctx)}
  export const createSubscriptionClient = ${createSubscriptionClientCode(ctx)}
  export const everything = {
    __scalar: true
  }
  `)
}
