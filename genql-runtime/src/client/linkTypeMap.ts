import {
    LinkedField,
    LinkedType,
    LinkedTypeMap,
    TypeMap,
    Type,
    Field,
    FieldMap,
} from '../types'

export const linkTypeMap = (typeMap: TypeMap<number>): LinkedTypeMap => {
    // TODO add Type.type and Type.args

    const indexToName = Object.assign(
        {},
        ...Object.keys(typeMap.types).map((k, i) => ({ [i]: k })),
    )

    // add the name value
    let intermediaryTypeMap = Object.assign(
        {},
        ...Object.keys(typeMap.types || {}).map(
            (k): Record<string, LinkedType> => {
                const type: Type = typeMap.types[k]
                const fields = type || {}
                // processFields(fields, indexToName)
                return {
                    [k]: {
                        name: k,
                        // type scalar properties
                        scalar: Object.keys(fields).filter((f) => {
                            const { type } = fields[f] || {}
                            return typeMap.scalars.includes(type)
                        }),
                        // fields with corresponding `type` and `args`
                        fields: Object.assign(
                            {},
                            ...Object.keys(fields).map(
                                (f): FieldMap<string> => {
                                    const content = fields[f]
                                    return {
                                        [f]: {
                                            type: indexToName[content.type],
                                            args: Object.assign(
                                                {},
                                                ...Object.keys(
                                                    content.args || {},
                                                ).map((k) => {
                                                    const arg = content.args[k]
                                                    return {
                                                        [k]: [
                                                            indexToName[arg[0]],
                                                            arg[1] ||
                                                                indexToName[
                                                                    arg[0]
                                                                ],
                                                        ],
                                                    }
                                                }),
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
