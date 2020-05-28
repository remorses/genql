import { linkTypeMap, createClient as createClientOriginal, createFetcher } from 'genql-runtime'
export const createClient = function(options) {
  var typeMap = linkTypeMap(require('./types.json'))
  options = options || {}
  var fetcherOpts = { url: 'https://graphql-compose.herokuapp.com/northwind/' }
  for (var attrname in options) {
    fetcherOpts[attrname] = options[attrname]
  }
  return createClientOriginal({
    fetcher: createFetcher(fetcherOpts),
    queryRoot: typeMap.Query,
    mutationRoot: typeMap.Mutation,
    subscriptionRoot: typeMap.Subscription,
  })
}
export const everything = {
  __scalar: true,
}
