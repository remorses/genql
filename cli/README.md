<div align='center'>
    <br/>
    <br/>
    <img src='https://genql.dev/banner.png' width='380px'>
    <br/>
    <br/>
    <h3>Type safe Graphql query builder</h3>
    <h4>Write Graphql queries with type validation and auto completion</h4>
    <br/>
    <br/>
</div>

> [!IMPORTANT]
> Genql is building a cloud platform to automate SDK generation in multiple languages, docs website with examples, changelog website and more. 
> Fill [this form](https://tally.so/r/mK1GWM) if you are interested!

Read the [quick start guide](https://genql.dev/docs) to generate your client and start writing queries.

You can stay up to date with the latest changes subscribing to the [Genql changelog](https://changelog.genql.dev).

**Features**

-   ✅ Type completion & Type validation
-   🍃 No dependencies (not even graphql)
-   ⚡️ [Can easily fetch all scalar fields in a type](https://genql.dev/docs/usage/fetch-all-fields-on-a-type)
-   🐎 [Works with any client (Apollo, Relay, etc)](https://genql.dev/docs/usage/integrate-with-other-graphql-clients)
-   🥃 [Support for Subscriptions](https://genql.dev/docs/usage/subscriptions)
-   🔋 [Built in batching support](https://genql.dev/docs/usage/batching-queries)
-   ↔️ [Easy migrate existing GraphQL queries to Genql code](https://genql.dev/converter)
-   🚂 Works in browser, Node, Deno, Cloudflare workers, Bun and more

## Example

First generate your client with the `genql` cli.

> You can find other cli options [here](https://genql.dev/docs/cli-reference)

```sh
npm i -D @genql/cli # cli to generate the client code
genql --schema ./schema.graphql --output ./generated
```

Then you can use your client as follow

```js
import { createClient, everything } from './generated'
const client = createClient()

client
    .query({
        countries: {
            // pass arguments to the query
            __args: {
                filter: {
                    currency: {
                        eq: 'EUR',
                    },
                },
            },
            name: true,
            code: true,
            nestedField: {
                // fetch all scalar fields
                __scalar: true,
            },
        },
    })
    .then(console.log)
```

The code above will fetch the graphql query below

```graphql
query {
    countries(filter: { currency: { eq: "EUR" } }) {
        name
        code
        nestedField {
            scalarField1
            scalarField2
        }
    }
}
```

## Why

Genql has a lot of benefits over writing graphql queries by hand:

-   Writing queries is faster thanks to TypeScript auto completion
-   You can safely update your schema and be sure your queries are still valid
-   You can fetch all scalar fields in a type with `__scalar: true`
-   No `graphql` package dependency, no runtime parsing of queries
-   You have to generate the client only after your schema changes, not after every query change

---

## Sponsors

[**Notaku**](https://notaku.so)

[![Notaku](https://notaku.so/github_banner.jpg)](https://notaku.so)

[![Vercel](https://genql.dev/vercel-logo.svg)](https://vercel.com?utm_source=genql)

---

[Licensed under MIT]().
