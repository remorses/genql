import { GraphQLEnumType } from 'graphql'
import { fieldComment, typeComment } from '../common/comment'
import { RenderContext } from '../common/RenderContext'

export const enumType = (type: GraphQLEnumType, ctx: RenderContext) => {
  const values = type.getValues().map(v => `${fieldComment(v)}${v.name}='${v.name}'`)
  ctx.addCodeBlock(`${typeComment(type)}export enum ${type.name}{${values.join(',')}}`)
}
