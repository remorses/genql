import {
  linkTypeMap,
  createClient as createClientOriginal,
  createSubscriptionClient as createSubscriptionClientOriginal,
  createFetcher,
  generateGraphqlOperation,
} from 'genql-runtime'
var typeMap = linkTypeMap(require('./types.json'))
export var createClient = function(options) {
  options = options || {}
  var fetcherOpts = { url: undefined }
  for (var attrname in options) {
    fetcherOpts[attrname] = options[attrname]
  }
  return createClientOriginal({
    fetcher: createFetcher(fetcherOpts),
    queryRoot: typeMap.Query,
    mutationRoot: typeMap.Mutation,
  })
}
export var createSubscriptionClient = function(options) {
  options = options || {}
  options.url = options.url || 'undefined'
  options.subscriptionRoot = typeMap.Subscription
  return createSubscriptionClientOriginal(options)
}
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
  __scalar: true,
}
