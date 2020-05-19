import { MapType } from './typeSelection'

type SRC = {
    category: {
        __scalar: boolean
    }
    order: {
        __scalar: boolean
        customer: {
            address: {
                city: 1
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
        __scalar: boolean
        customer: {
            address: {
                city: 1
            }
        }
    }
}

const x: SRC = {} as any

const z: MapType<SRC, DST> = x

z


