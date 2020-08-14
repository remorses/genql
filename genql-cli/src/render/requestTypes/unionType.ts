import { GraphQLUnionType } from 'graphql'
import { typeComment } from '../common/comment'
import { RenderContext } from '../common/RenderContext'
import { requestTypeName } from './requestTypeName'

export const unionType = (type: GraphQLUnionType, ctx: RenderContext) => {
  let types = type.getTypes()
  if (ctx.config?.sortProperties) {
    types = types.sort()
  } 
  const fieldStrings = types.map(t => `on_${t.name}?:${requestTypeName(t)}`)

  fieldStrings.push('__typename?:boolean | number')

  ctx.addCodeBlock(`${typeComment(type)}export interface ${requestTypeName(type)}{${fieldStrings.join(',')}}`)
}
