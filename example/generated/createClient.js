const { linkTypeMap, createClient: createClientOriginal, createDefaultFetcher } = require('genql')
module.exports.createClient = (options = {}) => {
  const typeMap = linkTypeMap(require('./typeMap.json'))
  return createClientOriginal({
    fetcher: createDefaultFetcher({ url: 'https://graphql-compose.herokuapp.com/northwind/' }),
    queryRoot: typeMap.Query,
    mutationRoot: typeMap.Mutation,
    subscriptionRoot: typeMap.Subscription,
    ...options,
  })
}
module.exports.everything = {
  __scalar: true,
}
