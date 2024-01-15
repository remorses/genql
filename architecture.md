i have a query made like this

```ts
type ObjectTypeReq = {
    args: ArgsType,
    select: Record<string, TypeReq>
    include: Record<string, TypeReq>
}

type UnionTypeReq = {
    args: ArgsType,
    select: Record<string, TypeReq>
    include: Record<string, TypeReq>
    onA: ObjectTypeReq
    onB: ObjectTypeReq
}

type TypeReq = ObjectTypeReq | UnionTypeReq | boolean

getCountries(req: TypeReq): Type
```

i need to create a class Client with top level methods:

```ts
class Client {
    getCountries<Include>(req: ObjectTypeReq): Countries<Include> {
        const { query, variables } = buildQuery(req, 'getCountries')
    }
}

function buildQuery()
```

what if instead it used the builder pattern?

```ts
client.getContinents({
    name: '',
    include: {
        countries: true,
    },
})
```
