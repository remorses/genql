For new changes see the new changelog built with [Notaku](https://notaku.so) and Notion: https://changelog.genql.dev

## 6.3.1

-   Fix array types when array content is nullable, https://github.com/remorses/genql/pull/144. Thanks to @wellguimaraes

## 6.3.0

-   Fix custom scalars typed with object types
-   Make required top level arguments with defaults non required
-   \_\_scalar: true should exclude scalars with required arguments

## 2.10.0

Fixed problem generating interfaces without any implementation

## 2.9.0

Support for more than one : in -S option (by @boredland)

Fixed declaration files generations for enums (by @DanielRose)

## 2.8.0

Add `as const` on enum objects to not use type object values as strings

## 2.7.0

Added `enumGraphqlEnumName` exports to get access to enum strings

## 2.6.0

-   Query any interface on an union, not only the common ones
-   Fixed \_\_typename always optional

## 2.5.0

-   Do not query falsy values when using \_\_scalar

## 2.4.0

-   Ability to query interfaces that a union implements https://github.com/remorses/genql/issues/44

## 2.3.3

-   `genql-cli` package becomes `@genql/cli`
-   `genql-runtime` package becomes `@genql/runtime`
-   headers can be an async function
-   you can now add an operation name to a query using `__name`
-   only generate commonjs code by default (using require and module.exports) to prevent people from importing from `index.esm`, use the `--esm` flag if you want to use esm
-   response types only include requested fields
-   added built in batching (see https://genql.dev/docs/usage/batching-queries)
-   `--sort` flag
-   generated `types.json` now is `types.js`
-   smaller `types.js` and hence smaller bundle size
-   made the website page converter to convert from graphql queries to genql code: https://genql.dev/converter
-   custom `fetcher` now has type `(operation: GraphqlOperation | GraphqlOperation[], ) => Promise<ExecutionResult>` to support built in batching
-   added a `@genql/cli/printer` module to print a graphql query AST to genql code
