import { MapType } from '../typeSelection'

type SRC = {
    category: {
        a: boolean
        b: boolean
        c: boolean
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

const z: MapType<SRC, DST> = x

z.category
z.category.a
z.category.b
z.category.c
z.order
z.order.customer.address.city

test('ts does not complain', () => {})
