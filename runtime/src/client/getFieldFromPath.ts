import { LinkedField, LinkedType } from '../types'
import startsWith from 'lodash/startsWith'

export const getFieldFromPath = (
    root: LinkedType | undefined,
    path: string[],
) => {
    let current: LinkedField | undefined

    if (!root) throw new Error('root type is not provided')

    if (path.length === 0) throw new Error(`path is empty`)

    path.forEach((f) => {
        const type = current ? current.type : root

        if (!type.fields)
            throw new Error(`type \`${type.name}\` does not have fields`)

        const possibleTypes = Object.keys(type.fields)
            .filter((i) => startsWith(i, 'on_'))
            .reduce(
                (types, fieldName) => {
                    const field = type.fields && type.fields[fieldName]
                    if (field) types.push(field.type)
                    return types
                },
                [type],
            )

        let field: LinkedField | null = null

        possibleTypes.forEach((type) => {
            const found = type.fields && type.fields[f]
            if (found) field = found
        })

        if (!field)
            throw new Error(
                `type \`${type.name}\` does not have a field \`${f}\``,
            )

        current = field
    })

    return <LinkedField>current
}
