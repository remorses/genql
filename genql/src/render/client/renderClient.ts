import { GraphQLSchema } from 'graphql'
import { RenderContext } from '../common/RenderContext'

const packageJson = require('../../../package.json')

export const renderClient = (schema: GraphQLSchema, ctx: RenderContext) => {
    const options = []

    const queryType = schema.getQueryType()
    const mutationType = schema.getMutationType()
    const subscriptionType = schema.getSubscriptionType()

    // TODO these could be removed or maybe implemented
    if (queryType) options.push(`queryRoot: typeMap.${queryType.name}`)
    if (mutationType) options.push(`mutationRoot: typeMap.${mutationType.name}`)
    if (subscriptionType)
        options.push(`subscriptionRoot: typeMap.${subscriptionType.name}`)

    ctx.addCodeBlock(`
  const { linkTypeMap, createClient: createClientOriginal, createDefaultFetcher } = require('${packageJson.name}')
  module.exports.createClient = (options = {}) => {
    const typeMap = linkTypeMap(require('./typeMap.json'))
    return createClientOriginal({
      fetcher: createDefaultFetcher({ url: "${ctx.config?.endpoint}" }),
      queryRoot: typeMap.Query,
      mutationRoot: typeMap.Mutation,
      subscriptionRoot: typeMap.Subscription,
      ...options,
    })
  }
  module.exports.everything = {
    __scalar: true
}
  `)
}

// 'use strict'
// var __assign =
//   (this && this.__assign) ||
//   function() {
//     __assign =
//       Object.assign ||
//       function(t) {
//         for (var s, i = 1, n = arguments.length; i < n; i++) {
//           s = arguments[i]
//           for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
//         }
//         return t
//       }
//     return __assign.apply(this, arguments)
//   }
// Object.defineProperty(exports, '__esModule', { value: true })
// var __1 = require('genql')

// exports.createClient = function(options) {
//   var typeMap = __1.linkTypeMap(require('./typeMap.json'))
//   return __1.createClient(
//     __assign({}, options, {
//       queryRoot: typeMap.Query,
//     }),
//   )
// }
