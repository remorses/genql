<div align='center'>
    <br/>
    <br/>
    <img src='https://genql.now.sh/banner.jpg' width='420px'>
    <br/>
    <br/>
    <h3>Type safe Graphql query builder</h3>
    <h4>Write Graphql queries with type validation and auto completion</h4>
    <br/>
    <br/>
</div>

Read the [quick start guide](https://genql.now.sh/docs) to generate a client locally

🔥 **Features**

-   Type completion
-   Type validation
-   Easily fetch all fields in a type
-   Support subscription
-   Graphql Client built in
-   Works with any client
-   Works in node and the browser

## Example

First generate your client executing

```sh
npm i -D @genql/cli # cli to generate the client code
npm i @genql/runtime graphql # runtime dependencies
genql --schema ./schema.graphql --output ./generated
```

Then you can use your client as follow

```js
import { createClient, everything } from './generated'
const client = createClient()

client
    .query({
        countries: {
            name: true,
            code: true,
            nestedField: {
                ...everything, // same as __scalar: true
            },
        },
    })
    .then(console.log)
```

The code above will fetch the graphql query below

```graphql
query {
    countries {
        name
        code
        nestedField {
            scalarField1
            scalarField2
        }
    }
}
```

---

## Sponsors

[![Vercel](https://genql.now.sh/vercel-logo.svg)](https://vercel.com?utm_source=genql)

---

[Licensed under MIT]().

### todos

[ ] upgrade grahql to 16
[ ] support for custom scalars
[ ] add the original json response to the error thrown
[ ] make separate client for subscriptions
[ ] replace the subscription library
[ ] remove chain syntax
[ ] redo the docs website with Notaku, host on /docs
[ ] only output typescript code
[ ] remove need for @genql/runtime, bundle runtime in the generated code
[ ] add redirect from genql.now.sh to genql.io
[ ] create a directory of already generated clients (published on @genql/x on npm), add carbon ads and optimize for SEO
[ ] use the native-fetch library for fetch impl
[ ] remove lodash dep
