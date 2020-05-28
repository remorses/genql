import { GraphQLUnionType } from 'graphql'
import { RenderContext } from '../common/RenderContext'
import { typeComment } from '../common/comment'

export const unionType = (type: GraphQLUnionType, ctx: RenderContext) => {
  const typeNames = type.getTypes().map(t => t.name)
  ctx.addCodeBlock(`${typeComment(type)}export type ${type.name}=${typeNames.join('|')}`)
}
