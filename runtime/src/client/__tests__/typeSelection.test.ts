import { FieldsSelection } from '@genql/runtime/src/client/typeSelection'
import { NoExtraProperties } from '@genql/runtime'

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
    literalsUnion: 'a' | 'b'
    nullableField: null | { x: boolean; optional?: string }
    list: {
        x: number
        a: string
        optional?: string
    }[]
    nested?: {
        list?: {
            edges?: {
                x?: number
            }[]
        }[]
    }
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
    union:
        | { a: string; __isUnion?: true }
        | { a: string; b: string; __isUnion?: true }
    nesting: {
        nestedUnion:
            | { a: string; __isUnion?: true }
            | { a: string; b: string; __isUnion?: true }
    }
    xxx: {
        xxx: boolean
    }
    yyy: {
        yyy: boolean
    }
    argumentSyntax: {
        a: string
        optional?: string
        nesting: {
            x: number
            y: number
        }
        union:
            | { a: string; __isUnion?: true }
            | { a: string; b: string; __isUnion?: true }
        list: {
            x: number
            a: string
            optional?: string
        }[]
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
        argumentSyntax: [
            { x: 3 },
            {
                a: 1,
                nesting: {
                    __scalar: 1,
                },
            },
        ] as const,
    }
    const z: FieldsSelection<SRC, NoExtraProperties<typeof req>> = {} as any
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
    test(
        'argument syntax',
        dontExecute(() => {
            z.argumentSyntax.a.toLocaleLowerCase
        }),
    )
})

describe('__scalar', () => {
    const req = {
        __name: 'name',
        category: {
            __scalar: 1,
            nested1: {
                a: 1,
            },
        },
        argumentSyntax: [
            { a: 7 },
            {
                __scalar: 1,
            },
        ] as const,
    }
    const z: FieldsSelection<SRC, typeof req> = {} as any
    test(
        'response type picks from request type',
        dontExecute(() => {
            z.category
            z.category.a
            z.category.b
            z.category.c
            z.category.nested1.a
            z.category.a.getDate
            z.category.b.getDate
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
    test(
        '__name is not present',
        dontExecute(() => {
            // @ts-expect-error __name
            z.__name
        }),
    )
    test(
        'argument syntax',
        dontExecute(() => {
            z.argumentSyntax.a.toLocaleLowerCase
            z.argumentSyntax.optional?.big
            // @ts-expect-error
            z.argumentSyntax.nesting.x
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
        argumentSyntax: [
            {},
            {
                optional: 1,
            },
        ] as const,
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
    test(
        'argument syntax',
        dontExecute(() => {
            // @ts-expect-error optional
            z.argumentSyntax.optional.toLocaleLowerCase
            z.argumentSyntax.optional?.toLocaleLowerCase
        }),
    )
})

describe('unions', () => {
    const req = {
        union: {
            onX: {
                a: 1,
                __scalar: 1,
            },
        },
        nesting: {
            nestedUnion: {
                onX: {
                    a: 1,
                },
                onY: {
                    b: 1,
                },
            },
        },
        argumentSyntax: {
            union: {
                a: 1,
                onX: {
                    b: 1,
                },
            },
        },
    }
    const z: FieldsSelection<SRC, typeof req> = {} as any
    test(
        'pick union fields',
        dontExecute(() => {
            z.union.a.toLocaleLowerCase
            z.union.a.toLocaleLowerCase
            z.nesting.nestedUnion.a.toLocaleLowerCase
        }),
    )
    test(
        'does not have __isUnion',
        dontExecute(() => {
            // @ts-expect-error
            z.union.__isUnion
            // @ts-expect-error
            z.nesting.nestedUnion.__isUnion
        }),
    )
    test(
        'argument syntax',
        dontExecute(() => {
            z.argumentSyntax.union.a.charAt
            // @ts-expect-error
            z.argumentSyntax.a
        }),
    )
})

describe('hide fields in request', () => {
    const SKIP: false = false
    const req = {
        category: {
            a: 1,
            b: SKIP,
            c: false as const,
        },
    }
    const z: FieldsSelection<SRC, typeof req> = {} as any
    // test(
    //     'cannot access falsy fields',
    //     dontExecute(() => {
    //         z.category.a
    //         // @ts-expect-error inaccessible
    //         z.category.b
    //         // @ts-expect-error inaccessible
    //         z.category.c
    //     }),
    // )
})

describe('arrays', () => {
    const req = {
        list: {
            a: 1,
            x: 1,
            optional: 1,
        },
        nested: [
            { x: 1 },
            {
                __scalar: 1,
                list: {
                    edges: {
                        x: 1,
                    },
                },
            },
        ] as const,
        argumentSyntax: {
            list: {
                x: 1,
                optional: 1,
            },
        },
    }
    const z: FieldsSelection<SRC, typeof req> = {} as any
    test(
        'list',
        dontExecute(() => {
            z.list[0].a.charCodeAt
            z.list[0].x.toFixed
        }),
    )
    test(
        'nested',
        dontExecute(() => {
            z.nested?.list?.[0]?.edges?.[0].x?.toFixed
        }),
    )
    test(
        'maintain optionals',
        dontExecute(() => {
            // @ts-expect-error optional
            z.list[0].optional.bold
            z.list[0].optional?.bold
        }),
    )
    test(
        'args syntax',
        dontExecute(() => {
            z.argumentSyntax.list[0].x
            z.argumentSyntax.list[0].optional?.blink
            // @ts-expect-error optional
            z.argumentSyntax.list[0].optional.blink
        }),
    )
})

describe('literals unions', () => {
    const req = {
        literalsUnion: 1,
    }
    const z: FieldsSelection<SRC, typeof req> = {} as any
    test(
        'literals',
        dontExecute(() => {
            z.literalsUnion.blink
            z.literalsUnion === 'a'
            z.literalsUnion === 'b'
            // @ts-expect-error
            z.literalsUnion === 'x'
        }),
    )
})

describe('literals unions', () => {
    const req = {
        nullableField: {
            x: 1,
            optional: 1,
        },
    }
    const z: FieldsSelection<SRC, typeof req> = {} as any
    test(
        'accessible',
        dontExecute(() => {
            z.nullableField.x
            z.nullableField.optional?.big
            // @ts-expect-error optional
            z.nullableField.optional.big
        }),
    )
})

test(
    'complex optional type with array',
    dontExecute(() => {
        interface ForkConnection {
            edges?: (ForkEdge | undefined)[]
            __typename?: 'ForkConnection'
        }

        interface ForkEdge {
            cursor?: string
            node?: { x: string; y: string }
            nodes?: { x?: string; y?: string }[]
            __typename?: 'ForkEdge'
        }

        // issue
        type X = FieldsSelection<
            ForkConnection | undefined,
            {
                edges?: {
                    node: {
                        x: 1
                    }
                    nodes: {
                        __scalar: 1
                    }
                }
            }
        >
        const x: X = {} as any
        x?.edges?.[0]?.node?.x?.toLocaleLowerCase
        // @ts-expect-error not present
        x?.edges?.[0]?.node?.y?.toLocaleLowerCase
        x?.edges?.[0]?.nodes?.[0].x?.toLocaleLowerCase
        x?.edges?.[0]?.nodes?.[0].y?.toLocaleLowerCase
    }),
)

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

function dontExecute(f: any) {
    return () => {}
}
