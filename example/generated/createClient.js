const {
  linkTypeMap,
  createClient: createClientOriginal,
  createSubscriptionClient: createSubscriptionClientOriginal,
  createFetcher,
} = require('genql-runtime')
module.exports.createClient = function(options) {
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
  })
}
module.exports.createSubscriptionClient = function(options) {
  var typeMap = linkTypeMap(require('./types.json'))
  options = options || {}
  options.url = options.url || 'https://graphql-compose.herokuapp.com/northwind/'
  options.subscriptionRoot = typeMap.Subscription
  return createSubscriptionClientOriginal(options)
}
module.exports.everything = {
  __scalar: true,
}
