const {
  linkTypeMap,
  createClient: createClientOriginal,
  generateGraphqlOperation,
  assertSameVersion,
} = require('@genql/runtime')
var typeMap = linkTypeMap(require('./types.cjs'))

var version = '2.6.0'
assertSameVersion(version)

module.exports.version = version

module.exports.createClient = function(options) {
  options = options || {}
  var optionsCopy = {
    url: undefined,
    queryRoot: typeMap.Query,
    mutationRoot: typeMap.Mutation,
    subscriptionRoot: typeMap.Subscription,
  }
  for (var name in options) {
    optionsCopy[name] = options[name]
  }
  return createClientOriginal(optionsCopy)
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

var schemaExports = require('./guards.cjs')
for (var k in schemaExports) {
  module.exports[k] = schemaExports[k]
}
