import {
    LinkedField,
    LinkedType,
    LinkedTypeMap,
    CompressedTypeMap,
    CompressedType,
    CompressedField,
    CompressedFieldMap,
    LinkedFieldMap,
    LinkedArgMap,
} from '../types'
import assign from 'lodash/assign'

export interface PartialLinkedFieldMap {
    [field: string]: {
        type: string
        args?: LinkedArgMap
    }
}

export const linkTypeMap = (typeMap: CompressedTypeMap<number>): LinkedTypeMap => {
    const indexToName: Record<number, string> = assign(
        {},
        ...Object.keys(typeMap.types).map((k, i) => ({ [i]: k })),
    )

    // add the name value
    let intermediaryTypeMap = assign(
        {},
        ...Object.keys(typeMap.types || {}).map(
            (k): Record<string, LinkedType> => {
                const type: CompressedType = typeMap.types[k]
                const fields = type || {}
                // processFields(fields, indexToName)
                return {
                    [k]: {
                        name: k,
                        // type scalar properties
                        scalar: Object.keys(fields).filter((f) => {
                            const [type] = fields[f] || []
                            return typeMap.scalars.includes(type)
                        }),
                        // fields with corresponding `type` and `args`
                        fields: assign(
                            {},
                            ...Object.keys(fields).map(
                                (f): PartialLinkedFieldMap => {
                                    const [typeIndex, args] = fields[f] || []
                                    return {
                                        [f]: {
                                            // replace index with type name
                                            type: indexToName[typeIndex],
                                            args: assign(
                                                {},
                                                ...Object.keys(args || {}).map(
                                                    (k) => {
                                                        // if argTypeString == argTypeName, argTypeString is missing, need to readd it
                                                        const [
                                                            argTypeName,
                                                            argTypeString,
                                                        ] = args[k]
                                                        return {
                                                            [k]: [
                                                                indexToName[
                                                                    argTypeName
                                                                ],
                                                                argTypeString ||
                                                                    indexToName[
                                                                        argTypeName
                                                                    ],
                                                            ],
                                                        }
                                                    },
                                                ),
                                            ),
                                        },
                                    }
                                },
                            ),
                        ),
                    },
                }
            },
        ),
    )
    const res = resolveConcreteTypes(intermediaryTypeMap)
    return res
}

// replace typename with concrete type
export const resolveConcreteTypes = (linkedTypeMap: LinkedTypeMap) => {
    Object.keys(linkedTypeMap).forEach((typeNameFromKey) => {
        const type: LinkedType = linkedTypeMap[typeNameFromKey]
        // type.name = typeNameFromKey
        if (!type.fields) {
            return
        }

        const fields = type.fields

        Object.keys(fields).forEach((f) => {
            const field: LinkedField = fields[f]

            if (field.args) {
                const args = field.args
                Object.keys(args).forEach((key) => {
                    const arg = args[key]

                    if (arg) {
                        const [typeName] = arg

                        if (typeof typeName === 'string') {
                            if (!linkedTypeMap[typeName]) {
                                linkedTypeMap[typeName] = { name: typeName }
                            }

                            arg[0] = <LinkedType>linkedTypeMap[typeName]
                        }
                    }
                })
            }

            const typeName = <LinkedType | string>field.type

            if (typeof typeName === 'string') {
                if (!linkedTypeMap[typeName]) {
                    linkedTypeMap[typeName] = { name: typeName }
                }

                field.type = <LinkedType>linkedTypeMap[typeName]
            }
        })
    })

    return linkedTypeMap
}
