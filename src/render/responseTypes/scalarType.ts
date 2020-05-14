import { GraphQLScalarType } from 'graphql'
import { typeComment } from '../common/comment'
import { RenderContext } from '../common/RenderContext'
import { hasTypeMappedAlias, renderTypeMappedAlias } from './typeMappedAlias'

const knownTypes: {
  [name: string]: string
} = {
  Int: 'number',
  Float: 'number',
  String: 'string',
  Boolean: 'boolean',
  ID: 'string',
}

export const scalarType = (type: GraphQLScalarType, ctx: RenderContext) => {
  if (hasTypeMappedAlias(type, ctx)) renderTypeMappedAlias(type, ctx)
  else ctx.addCodeBlock(`${typeComment(type)}export type ${type.name}=${knownTypes[type.name] || 'any'}`)
}
