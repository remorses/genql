<div align='center'>
    <br/>
    <br/>
    <img src='https://genql.now.sh/banner.jpg' width='420px'>
    <br/>
    <br/>
    <h3>Graphql queries as code</h3>
    <h4>with type validation and auto completion</h4>
    <br/>
    <br/>
</div>

Generate your client package at [**genql.now.sh**](https://genql.now.sh)
Read the [quick start guide](https://genql.now.sh/dokz) to generate a client locally instead

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
import { createClient } from '@genql/my-package'
const client = createClient()

client
    .query({
        countries: {
            name: true,
            code: true,
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
