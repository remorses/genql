import { FieldsSelection } from '../typeSelection'

// types requirements
/*
- no arguments, only request objects
    - response type picks from request type 
        - at first level
        - at nested level
    - response type has all fields if __scalar is present
    - response type does not have __scalar field
        - at first level
        - at nested levels
    - response type is union of the on_ fields values (after their selection)
    - response type does not have on_ fields
    - works with NoExtraProperties
*/

type SRC = {
    category: {
        a: Date
        b: Date
        c: Date
        nested1: {
            a: string
            b: string
            c: string
        }
        nested2: {
            a: string
            b: string
        }
        optionalFieldsNested?: {
            a?: string
            b?: number
        }
    }
    optionalFields: {
        a?: string
        b?: number
    }
    order: {
        customer: {
            address: {
                city: 1
                a: 1
                b: 1
            }
        }
    }
    xxx: {
        xxx: boolean
    }
    yyy: {
        yyy: boolean
    }
}

describe('pick', () => {
    const req = {
        category: {
            a: 1,
            b: 1,
            nested1: {
                a: 1,
            },
        },
    }
    const z: FieldsSelection<SRC, typeof req> = {} as any
    test(
        'response type picks from request type',
        dontExecute(() => {
            z.category
            z.category.a
            z.category.b
            // @ts-expect-error
            z.category.c
            z.category.nested1.a
        }),
    )
    test(
        'response type does not have additional properties',
        dontExecute(() => {
            // TODO i can access keys with value type equal never
            // @ts-expect-error
            z.order
            // @ts-expect-error
            z.category.nested1.b
            // @ts-expect-error
            z.category.nested1.b
            // @ts-expect-error
            z.category.nested1.c
            // @ts-expect-error
            z.category.nested2
        }),
    )
})

describe('__scalar', () => {
    const req = {
        category: {
            __scalar: 1,
            nested1: {
                a: 1,
            },
        },
    }
    const z: FieldsSelection<SRC, typeof req> = {} as any
    test(
        'response type picks from request type',
        dontExecute(() => {
            z.category
            z.category.a.getDate
            z.category.b.getDate
            z.category.c.getDate
            z.category.nested1.a.toLocaleUpperCase
        }),
    )
    test(
        'response type does not have additional properties',
        dontExecute(() => {
            // TODO i can access keys with value type equal never
            // @ts-expect-error
            z.order
            // @ts-expect-error
            z.category.nested1.b
            // @ts-expect-error
            z.category.nested1.c
            // @ts-expect-error
            z.category.nested2
        }),
    )
    test(
        '__scalar is not present',
        dontExecute(() => {
            // @ts-expect-error
            z.category.__scalar
        }),
    )
})

describe('optional fields', () => {
    const req = {
        optionalFields: {
            a: 1,
            b: 1,
        },
        category: {
            optionalFieldsNested: {
                __scalar: 1,
            },
        },
    }
    const z: FieldsSelection<SRC, typeof req> = {} as any
    test(
        'optional fields are preserved',
        dontExecute(() => {
            // @ts-expect-error
            z.optionalFields.a.toLocaleLowerCase
            z.optionalFields.a?.toLocaleLowerCase
            // @ts-expect-error
            z.optionalFields.b.toLocaleLowerCase
            z.optionalFields.b?.toFixed
            // @ts-expect-error
            z.category.optionalFieldsNested.a
            // @ts-expect-error
            z.category?.optionalFieldsNested.a
        }),
    )
    test(
        'optional fields are preserved in __scalar',
        dontExecute(() => {
            // @ts-expect-error
            z.optionalFields.a.toLocaleLowerCase
            z.optionalFields.a?.toLocaleLowerCase
            // @ts-expect-error
            z.optionalFields.b.toLocaleLowerCase
            z.optionalFields.b?.toFixed
            // @ts-expect-error
            z.category.optionalFieldsNested.a
            z.category.optionalFieldsNested?.a?.toLocaleLowerCase
        }),
    )
})

///////////////////////////////////// unions

// {
//     // only one union
//     type One = { one: string; __typename: string }
//     type Two = { two: string; __typename: string }
//     type SRC = {
//         union?: {
//             __union: One | Two
//             __resolve: {
//                 on_One: One
//                 on_Two: Two
//             }
//             __typename: 'One' | 'Two'
//         }
//     }
//     type DST = {
//         union?: {
//             on_One: {
//                 one: true
//             }
//             // on_Two: {
//             //     two: 1
//             // }
//         }
//     }
//     const z: FieldsSelection<SRC, DST> = {} as any
//     z.union?.one
// }

// {
//     // 2 unions together
//     type One = { one: string; __typename: string }
//     type Two = { two: string; __typename: string }
//     type SRC = {
//         union?: {
//             __union: One | Two
//             __resolve: {
//                 on_One: One
//                 on_Two: Two
//             }
//             __typename: 'One' | 'Two'
//         }
//     }
//     type DST = {
//         union?: {
//             on_One?: {
//                 one?: true
//             }
//             on_Two?: {
//                 two?: true
//             }
//         }
//     }
//     const z: FieldsSelection<SRC, DST> = {} as any
//     z.union // this is a union type, it cannot be directly be accessed without a guard
// }

// {
//     // without top level object
//     type One = { one?: string; __typename?: string }
//     type Two = { two?: string; __typename?: string }
//     type SRC = {
//         __union: One | Two
//         __resolve: {
//             on_One?: One
//             on_Two?: Two
//         }
//         __typename?: 'One' | 'Two'
//     }
//     type DST = {
//         on_One?: {
//             one?: true
//         }
//         __typename?: 1
//         // on_Two: {
//         //     two: 1
//         // }
//     }
//     const z: FieldsSelection<SRC, DST> = {} as any
//     z.one
// }

// {
//     type One = { one: string; __typename: string }
//     const x: ObjectFieldsSelection<One, { one?: true }> = {} as any
//     x.one
// }

function dontExecute(f) {
    return () => {}
}
