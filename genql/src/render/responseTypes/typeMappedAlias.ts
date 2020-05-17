import { GraphQLNamedType } from 'graphql'
import { typeComment } from '../common/comment'
import { RenderContext } from '../common/RenderContext'

export const hasTypeMappedAlias = (
    type: GraphQLNamedType,
    ctx: RenderContext,
) => ctx?.config?.scalarTypes?.[type.name]

export const renderTypeMappedAlias = (
    type: GraphQLNamedType,
    ctx: RenderContext,
) => {
    const mappedType = hasTypeMappedAlias(type, ctx)
    if (mappedType) {
        ctx.addCodeBlock(
            `${typeComment(type)}export type ${type.name} = ${mappedType}`,
        )
    }
}
