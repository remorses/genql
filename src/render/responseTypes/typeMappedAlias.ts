import { GraphQLNamedType } from 'graphql'
import { typeComment } from '../common/comment'
import { RenderContext } from '../common/RenderContext'

export const hasTypeMappedAlias = (type: GraphQLNamedType, ctx: RenderContext) =>
  ctx.config &&
  ctx.config.options &&
  ctx.config.options.typeMapper &&
  ctx.config.options.typeMapper.types.includes(type.name)

export const renderTypeMappedAlias = (type: GraphQLNamedType, ctx: RenderContext) => {
  if (!ctx.config || !ctx.config.options || !ctx.config.options.typeMapper || !ctx.config.output) return

  if (hasTypeMappedAlias(type, ctx)) {
    const alias = ctx.addImport(ctx.config.options.typeMapper.location, false, 'typeMapper')
    ctx.addCodeBlock(`${typeComment(type)}export type ${type.name} = ReturnType<typeof ${alias}.${type.name}.deserialize>`)
  }
}
