## 2.3.3

-   `genql-cli` package becomes `@genql/cli`
-   `genql-runtime` package becomes `@genql/runtime`
-   headers can be an async function
-   you can now add an operation name to a query using `__name`
-   only generate commonjs code by default (using require and module.exports) to prevent people from importing from `index.esm`, use the `--esm` flag if you want to use esm
-   response types only include requested fields
-   added built in batching (see https://genql.now.sh/docs/usage/batching-queries)
-   `--sort` flag
-   generated `types.json` now is `types.js`
-   smaller `types.js` and hence smaller bundle size
-   made the website page converter to convert from graphql queries to genql code: https://genql.now.sh/converter
-   custom `fetcher` now has type `(operation: GraphqlOperation | GraphqlOperation[], ) => Promise<ExecutionResult>` to support built in batching
-   added a `@genql/cli/printer` module to print a graphql query AST to genql code
