const { linkTypeMap, createClient: createClientOriginal, createDefaultFetcher } = require('genql')
module.exports.createClient = options => {
  const typeMap = linkTypeMap(require('./typeMap.json'))
  return createClientOriginal({
    ...options,
    fetcher: createDefaultFetcher({ url: 'https://countries.trevorblades.com' }),
    queryRoot: typeMap.Query,
    mutationRoot: typeMap.Mutation,
    subscriptionRoot: typeMap.Subscription,
  })
}
