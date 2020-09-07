## v2

-   `genql-cli` becomes `@genql/cli`
-   `genql-runtime` becomes `@genql/runtime`
-   added built in batching (see https://genql.now.sh/docs/usage/batching-queries)
-   response types only include queries fields
-   `--watch` flag
-   `--sort` flag
-   response types only include queries fields
-   generated `types.json` now is `types.js`
-   smaller `types.js` and hence bundle size
-   added a converter from graphql queries to genql code at https://genql.now.sh/converter
-   custom `fetcher` now has type `(operation: GraphqlOperation | GraphqlOperation[], ) => Promise<ExecutionResult>` to support built in batching
-   added a `@genql/cli/printer` module to print a graphql query to genql code
