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

Generate your client package at [**genql.now.sh**](https://genql.now.sh) or read the [quick start guide](https://genql.now.sh/docs) to generate a client locally instead

🔥 **Features**

-   Type completion
-   Type validation
-   Easily fetch all fields in a type
-   Support subscription
-   Graphql Client built in
-   Works with any client
-   Works in node and the browser

## Example

First generate your client filling the form at [**genql.now.sh**](https://genql.now.sh)

Then you can use your client as follow

```js
import { createClient, everything } from '@genql/my-package'
const client = createClient()

client
    .query({
        countries: {
            name: true,
            code: true,
            nestedField: {
                ...everything,
            },
        },
    })
    .then(console.log)
```

The code above wil fetch the graphql query below

```graphql
query {
    countries {
        name
        code
    }
}
```

---

## Sponsors

[![Vercel](https://genql.now.sh/vercel-logo.svg)](https://vercel.com?utm_source=genql)

---

[Licensed under MIT]().


