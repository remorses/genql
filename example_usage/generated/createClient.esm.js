import {
  linkTypeMap,
  createClient as createClientOriginal,
  createSubscriptionClient as createSubscriptionClientOriginal,
  createFetcher,
} from 'genql-runtime'
export const createClient = function(options) {
  var typeMap = linkTypeMap(require('./types.json'))
  options = options || {}
  var fetcherOpts = { url: 'https://countries.trevorblades.com' }
  for (var attrname in options) {
    fetcherOpts[attrname] = options[attrname]
  }
  return createClientOriginal({
    fetcher: createFetcher(fetcherOpts),
    queryRoot: typeMap.Query,
    mutationRoot: typeMap.Mutation,
  })
}
export const createSubscriptionClient = function(options) {
  var typeMap = linkTypeMap(require('./types.json'))
  options = options || {}
  options.url = options.url || 'https://countries.trevorblades.com'
  options.subscriptionRoot = typeMap.Subscription
  return createSubscriptionClientOriginal(options)
}
export const everything = {
  __scalar: true,
}
