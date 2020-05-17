import { GraphQLSchema } from 'graphql'
import { RenderContext } from '../common/RenderContext'

const packageJson = require('../../../package.json')

const createClientCode = (ctx: RenderContext) => `
function(options) {
    var typeMap = linkTypeMap(require('./typeMap.json'))
    options = options || {}
    var opts = {
        fetcher: createDefaultFetcher({ url: "${ctx.config?.endpoint}" }),
        queryRoot: typeMap.Query,
        mutationRoot: typeMap.Mutation,
        subscriptionRoot: typeMap.Subscription,        
    }
    for (var attrname in options) { 
        opts[attrname] = options[attrname];
    }
    return createClientOriginal(opts)
}`

export const renderClientCjs = (_: GraphQLSchema, ctx: RenderContext) => {
    ctx.addCodeBlock(`
  const { linkTypeMap, createClient: createClientOriginal, createDefaultFetcher } = require('${
      packageJson.name
  }')
  module.exports.createClient = ${createClientCode(ctx)}
  module.exports.everything = {
    __scalar: true
  }
  `)
}

export const renderClientEsm = (_: GraphQLSchema, ctx: RenderContext) => {
    ctx.addCodeBlock(`
  import { linkTypeMap, createClient as createClientOriginal, createDefaultFetcher } from '${
      packageJson.name
  }'
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
//   var typeMap = __1.linkTypeMap(require('./typeMap.json'))
//   return __1.createClient(
//     __assign({}, options, {
//       queryRoot: typeMap.Query,
//     }),
//   )
// }
