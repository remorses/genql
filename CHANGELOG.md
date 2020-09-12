## v2

-   `genql-cli` becomes `@genql/cli`
-   `genql-runtime` becomes `@genql/runtime`
-   added built in batching (see https://genql.now.sh/docs/usage/batching-queries)
-   response types only include requested fields
-   add an operation name to a query using `__name`
-   `--sort` flag
-   generated `types.json` now is `types.js`
-   smaller `types.js` and hence smaller bundle size
-   made the website page converter to convert from graphql queries to genql code: https://genql.now.sh/converter
-   custom `fetcher` now has type `(operation: GraphqlOperation | GraphqlOperation[], ) => Promise<ExecutionResult>` to support built in batching
-   added a `@genql/cli/printer` module to print a graphql query to genql code
