import { GraphQLUnionType } from 'graphql'
import { RenderContext } from '../common/RenderContext'
import { FieldMap, Type } from '@genql/runtime/dist/types'
import { intersection } from '../common/support'

export const unionType = (type: GraphQLUnionType, _: RenderContext) => {
    const types = type.getTypes()
    const typeObj: FieldMap<string> = types.reduce<FieldMap<string>>((r, t) => {
        r[`on_${t.name}`] = { type: t.name }
        return r
    }, {})

    const commonInterfaces = intersection(types.map((x) => x.getInterfaces()))
    commonInterfaces.forEach((t) => {
        typeObj[`on_${t.name}`] = { type: t.name }
    })

    typeObj.__typename = { type: 'String' }

    return typeObj
}
