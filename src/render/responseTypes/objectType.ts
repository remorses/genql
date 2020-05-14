import { GraphQLInterfaceType, GraphQLObjectType, isObjectType } from 'graphql'
import { fieldComment, typeComment } from '../common/comment'
import { RenderContext } from '../common/RenderContext'
import { renderTyping } from '../common/renderTyping'

export const objectType = (type: GraphQLObjectType | GraphQLInterfaceType, ctx: RenderContext) => {
  const fields = Object.keys(type.getFields()).map(fieldName => type.getFields()[fieldName])

  if (!ctx.schema) throw new Error('no schema provided')

  const typeNames = isObjectType(type) ? [type.name] : ctx.schema.getPossibleTypes(type).map(t => t.name)

  const fieldStrings = fields
    .map(f => `${fieldComment(f)}${f.name}${renderTyping(f.type, false, false)}`)
    .concat([`__typename:${typeNames.length > 0 ? typeNames.map(t => `'${t}'`).join('|') : 'String'}`])

  const interfaceNames = isObjectType(type) ? type.getInterfaces().map(i => i.name) : []

  ctx.addCodeBlock(
    `${typeComment(type)}export interface ${type.name}${
      interfaceNames.length > 0 ? ` extends ${interfaceNames.join(',')}` : ''
    }{${fieldStrings.join(',')}}`,
  )
}
