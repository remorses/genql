const {
  linkTypeMap,
  createClient: createClientOriginal,
  createSubscriptionClient: createSubscriptionClientOriginal,
  createFetcher,
  generateGraphqlOperation,
} = require('genql-runtime')
var typeMap = linkTypeMap(require('./types.json'))
module.exports.createClient = function(options) {
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
module.exports.createSubscriptionClient = function(options) {
  options = options || {}
  options.url = options.url || 'undefined'
  options.subscriptionRoot = typeMap.Subscription
  return createSubscriptionClientOriginal(options)
}
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
  __scalar: true,
}
