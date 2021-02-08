import { GraphQLUnionType } from 'graphql'
import { typeComment } from '../common/comment'
import { RenderContext } from '../common/RenderContext'
import { intersection } from '../common/support'
import { requestTypeName } from './requestTypeName'

export const unionType = (type: GraphQLUnionType, ctx: RenderContext) => {
    let types = type.getTypes()
    if (ctx.config?.sortProperties) {
        types = types.sort()
    }
    const fieldStrings = types.map((t) => `on_${t.name}?:${requestTypeName(t)}`)
    const commonInterfaces = intersection(types.map((x) => x.getInterfaces()))
    fieldStrings.push(
        ...commonInterfaces.map((type) => {
            return `on_${type.name}?: ${requestTypeName(type)}`
        }),
    )

    fieldStrings.push('__typename?: boolean | number')

    ctx.addCodeBlock(
        `${typeComment(type)}export interface ${requestTypeName(
            type,
        )}{\n${fieldStrings.map((x) => '    ' + x).join(',\n')}\n}`,
    )
}
