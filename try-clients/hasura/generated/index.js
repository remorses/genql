const {
  linkTypeMap,
  createClient: createClientOriginal,
  generateGraphqlOperation,
  assertSameVersion,
} = require('@genql/runtime')
var typeMap = linkTypeMap(require('./types.cjs'))

var version = '2.8.0'
assertSameVersion(version)

module.exports.version = version

module.exports.createClient = function(options) {
  options = options || {}
  var optionsCopy = {
    url: 'https://hasura-2334534.herokuapp.com/v1/graphql',
    queryRoot: typeMap.Query,
    mutationRoot: typeMap.Mutation,
    subscriptionRoot: typeMap.Subscription,
  }
  for (var name in options) {
    optionsCopy[name] = options[name]
  }
  return createClientOriginal(optionsCopy)
}

module.exports.enumorderBy = {
  asc: 'asc',
  asc_nulls_first: 'asc_nulls_first',
  asc_nulls_last: 'asc_nulls_last',
  desc: 'desc',
  desc_nulls_first: 'desc_nulls_first',
  desc_nulls_last: 'desc_nulls_last',
}

module.exports.enumuserConstraint = {
  user_pkey: 'user_pkey',
}

module.exports.enumuserSelectColumn = {
  age: 'age',
  id: 'id',
  name: 'name',
}

module.exports.enumuserUpdateColumn = {
  age: 'age',
  id: 'id',
  name: 'name',
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
