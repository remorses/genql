import memoize from 'memoizee'
import { LinkedType, LinkedTypeMap, TypeMap, Type, LinkedField } from '../types'

// replace the Field.type with concrete type
// replace the Field.args[1] with concrete type
// add a Field.scalar with all scalar keys
export const linkTypeMap = (t: TypeMap): LinkedTypeMap => {
    const typeMap: TypeMap = JSON.parse(
        JSON.stringify({
            String: scalarType,
            Boolean: scalarType,
            Int: scalarType,
            Float: scalarType,
            ID: scalarType,
            ...t,
        }),
    )
    const scalars = Object.keys(typeMap).filter((k) => {
        const type = linkTypeMap[k]
        return type && type.__isAUsedScalarType
    })
    const linked: LinkedTypeMap = Object.assign(
        {},
        ...Object.keys(typeMap).map((typeNameFromKey) => {
            return {
                [typeNameFromKey]: handleType({
                    scalars,
                    typeMap,
                    typeNameFromKey,
                }),
            }
        }),
    )

    return linked
}

const handleType = memoize(
    (p: {
        scalars: string[]
        typeMap: TypeMap
        typeNameFromKey: string
    }): LinkedType => {
        const { typeMap, scalars, typeNameFromKey } = p
        const type: Type = typeMap[typeNameFromKey]

        if (!type || type?.__isAUsedScalarType) {
            // TODO type is a scalar
            console.log('!type', typeNameFromKey)
            return {
                name: typeNameFromKey,
            }
        }
        const fields = type.fields || {}

        const linkedType: LinkedType = {
            name: typeNameFromKey,
            scalar: Object.keys(fields)
                .map((f) => {
                    const { type } = fields[f] || {}
                    return type
                })
                .filter((x) => scalars.includes(x)),
            fields: Object.assign(
                {},
                ...Object.keys(fields).map((f) => {
                    const field = fields[f]

                    const linkedField: Partial<LinkedField> = {
                        args: Object.assign(
                            {},
                            ...Object.keys(field.args || {}).map((key) => {
                                const arg = field.args[key]

                                if (!arg) {
                                    return { [key]: arg }
                                }
                                const [, typeName] = arg
                                if (typeof typeName === 'string') {
                                    // if (!linkedType[typeName]) {
                                    //     linkedType[typeName] = {
                                    //         name: typeName,
                                    //     }
                                    // }

                                    return {
                                        [key]: [
                                            arg[0],
                                            handleType({ // TODO memoize not works if typeName == typeNameFromKey
                                                scalars,
                                                typeMap,
                                                typeNameFromKey: typeName,
                                            }),
                                        ],
                                    }
                                }
                                return { [key]: arg }
                            }),
                        ),
                    }

                    // const typeName = field.type

                    // if (typeof typeName === 'string') {
                    //     if (!linked[typeName]) {
                    //         linked[typeName] = { name: typeName }
                    //     }
                    // }

                    return { [f]: linkedField }
                }),
            ),
        }
        Object.keys(linkedType.fields).forEach((k) => {
            const linkedField = linkedType.fields[k]
            const field = fields[k]
            linkedField.type =
                k == typeNameFromKey
                    ? linkedType
                    : handleType({
                          scalars,
                          typeMap,
                          typeNameFromKey: field.type,
                      })
        })
        return linkedType
    },
    {
        max: 999999999999999999,
        normalizer: JSON.stringify
    },
)

const scalarType: Type = {
    __isAUsedScalarType: true,
}
