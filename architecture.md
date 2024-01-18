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
    getCountries<Include extends CountryInclude, Select extends CountrySelect>(
        req: GetCountriesRequest<Include, Select>,
    ): Selection<Countries, Include, Select> {
        const { query, variables } = buildQuery(req, 'getCountries')
    }
}

type GetCountriesRequest<I, S> = {
    args: GetCountriesArgs
    select: Pick<Countries, S>
    include: I
}

function buildQuery()
```


