import { GraphQLInputObjectType } from 'graphql'
import { argumentComment, typeComment } from '../common/comment'
import { RenderContext } from '../common/RenderContext'
import { renderTyping } from '../common/renderTyping'

export const inputObjectType = (type: GraphQLInputObjectType, ctx: RenderContext) => {
  const fields = type.getFields()
  const fieldStrings = Object.keys(fields).map(fieldName => {
    const field = fields[fieldName]
    return `${argumentComment(field)}${field.name}${renderTyping(field.type, false, true)}`
  })

  ctx.addCodeBlock(`${typeComment(type)}export interface ${type.name}{${fieldStrings.join(',')}}`)
}
