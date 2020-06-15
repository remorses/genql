import { FieldsSelection } from '../typeSelection'

type SRC = {
    category: {
        a: any
        b: any
        c: any
        nested1: {
            a: string
            b: string
        }
        nested2: {
            a: string
            b: string
        }
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

type DST = {
    category: {
        __scalar: boolean
        nested1: {
            a: 1
        }
    }
    order: {
        customer: {
            address: {
                city: 1
            }
        }
    }
}

const x: SRC = {
    category: {
        a: true,
        b: true,
        c: true,
        nested1: {
            a: '',
            b: '',
        },
        nested2: {
            a: '',
            b: '',
        },
    },
    order: {
        customer: {
            address: {
                a: 1,
                b: 1,
                city: 1,
            },
        },
    },
    xxx: {
        xxx: true,
    },
    yyy: {
        yyy: true,
    },
}

const z: FieldsSelection<SRC, DST> = x

z.category
z.category.a
z.category.b
z.category.c
z.category.nested1.a
z.category.nested1.a
// @ts-expect-error
z.category.nested1.b
// @ts-expect-error
z.category.nested1.c
// @ts-expect-error
z.category.nested2
z.order.customer.address.city

test('ts does not complain', () => {})
