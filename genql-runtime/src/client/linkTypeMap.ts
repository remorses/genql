import {
    LinkedField,
    LinkedType,
    LinkedTypeMap,
    TypeMap,
    Type,
    Field,
    FieldMap,
} from '../types'

export const linkTypeMap = (typeMap: TypeMap<number>) => {
    // TODO add Type.type and Type.args
    // TODO replace the type indexes with their typename
    // TODO add the second array element in

    // const scalars = typeMap.scalars
    let intermediaryTypeMap: any = typeMap.types

    const indexToName = Object.assign(
        {},
        ...Object.keys(typeMap.types).map((k, i) => ({ [i]: k })),
    )

    // add the name value
    intermediaryTypeMap = Object.assign(
        {},
        ...Object.keys(typeMap.types || {}).map((k) => {
            const type: Type = intermediaryTypeMap[k]
            const fields = type.fields || {}
            // processFields(fields, indexToName)
            return {
                [k]: {
                    ...type,
                    scalar: Object.keys(fields).filter((f) => {
                        const { type } = fields[f] || {}
                        return typeMap.scalars.includes(type)
                    }),
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
                                                            indexToName[arg[0]],
                                                    ],
                                                }
                                            }),
                                        ),
                                    },
                                }
                            },
                        ),
                    ),
                    name: k,
                },
            }
        }),
    )

    // add Type.scalar types to every Type

    const res = resolveConcreteTypes(intermediaryTypeMap)
    return res
}

// function processFields(fields: FieldMap, indexToName) {
//     Object.keys(fields).forEach((f) => {
//         const field = fields[f]
//         if (field.args) {
//             const args = field.args
//             Object.keys(args).forEach((key) => {
//                 const arg = args[key]
//                 arg[0] = indexToName[arg[0]]
//                 if (arg && arg.length === 1) {
//                     arg.push(arg[0])
//                 }
//             })
//         }
//     })
// }

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
                        const [typeName] = arg // TODO typename is now the first element

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
