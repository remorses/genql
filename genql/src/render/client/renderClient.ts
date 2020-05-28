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
        subscriptionRoot: typeMap.Subscription,        
    })
}`

export const renderClientCjs = (_: GraphQLSchema, ctx: RenderContext) => {
    ctx.addCodeBlock(`
  const { linkTypeMap, createClient: createClientOriginal, createFetcher } = require('${RUNTIME_LIB_NAME}')
  module.exports.createClient = ${createClientCode(ctx)}
  module.exports.everything = {
    __scalar: true
  }
  `)
}

export const renderClientEsm = (_: GraphQLSchema, ctx: RenderContext) => {
    ctx.addCodeBlock(`
  import { linkTypeMap, createClient as createClientOriginal, createFetcher } from '${RUNTIME_LIB_NAME}'
  export const createClient = ${createClientCode(ctx)}
  export const everything = {
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
//   var typeMap = __1.linkTypeMap(require('./types.json'))
//   return __1.createClient(
//     __assign({}, options, {
//       queryRoot: typeMap.Query,
//     }),
//   )
// }
