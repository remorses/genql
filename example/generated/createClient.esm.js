import { linkTypeMap, createClient as createClientOriginal, createDefaultFetcher } from 'genql'
export const createClient = function(options) {
  var typeMap = linkTypeMap(require('./typeMap.json'))
  options = options || {}
  var opts = {
    fetcher: createDefaultFetcher({ url: 'https://graphql-compose.herokuapp.com/northwind/' }),
    queryRoot: typeMap.Query,
    mutationRoot: typeMap.Mutation,
    subscriptionRoot: typeMap.Subscription,
  }
  for (var attrname in options) {
    opts[attrname] = options[attrname]
  }
  return createClientOriginal(opts)
}
export const everything = {
  __scalar: true,
}
