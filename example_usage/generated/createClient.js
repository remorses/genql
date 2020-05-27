const { linkTypeMap, createClient: createClientOriginal, createDefaultFetcher } = require('genql-runtime')
module.exports.createClient = function(options) {
  var typeMap = linkTypeMap(require('./types.json'))
  options = options || {}
  var opts = {
    fetcher: createDefaultFetcher({ url: 'https://countries.trevorblades.com' }),
    queryRoot: typeMap.Query,
    mutationRoot: typeMap.Mutation,
    subscriptionRoot: typeMap.Subscription,
  }
  for (var attrname in options) {
    opts[attrname] = options[attrname]
  }
  return createClientOriginal(opts)
}
module.exports.everything = {
  __scalar: true,
}
