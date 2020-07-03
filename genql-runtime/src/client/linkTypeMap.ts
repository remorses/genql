import { LinkedField, LinkedType, LinkedTypeMap, TypeMap, Type } from '../types'

export const linkTypeMap = (typeMap: TypeMap) => {
    // TODO add Type.type and Type.args
    // TODO replace the type indexes with their typename
    // TODO add the second array element in

    // const scalars = typeMap.scalars
    let intermediaryTypeMap: any = typeMap.types

    // add the name value
    intermediaryTypeMap = Object.assign(
        {},
        ...Object.keys(typeMap.types || {}).map((k) => {
            const type: Type = intermediaryTypeMap[k]
            const fields = type.fields || {}
            return {
                [k]: {
                    ...type,
                    scalar: Object.keys(fields)
                        .map((f) => {
                            const { type } = fields[f] || {}
                            return [f, type]
                        })
                        .filter(([_, type]) => typeMap.scalars.includes(type))
                        .map(([key, _]) => key),
                    name: k,
                },
            }
        }),
    )

    // add Type.scalar types to every Type

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
                        const [, typeName] = arg // TODO typename is now the first element

                        if (typeof typeName === 'string') {
                            if (!linkedTypeMap[typeName]) {
                                linkedTypeMap[typeName] = { name: typeName }
                            }

                            arg[1] = <LinkedType>linkedTypeMap[typeName]
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
