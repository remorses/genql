import {
  getNamedType,
  GraphQLInterfaceType,
  GraphQLNamedType,
  GraphQLObjectType,
  isEnumType,
  isListType,
  isNonNullType,
  isScalarType,
  isUnionType,
} from 'graphql'
import { fieldComment, typeComment } from '../common/comment'
import { RenderContext } from '../common/RenderContext'
import { renderTyping } from '../common/renderTyping'
import { toArgsString } from '../common/toArgsString'
import { requestTypeName } from '../requestTypes/requestTypeName'

const packageJson = require('../../../package.json')

export const chainTypeName = (type: GraphQLNamedType, wrapper: 'Promise' | 'Observable') => `${type.name}${wrapper}Chain`

export const objectType = (
  type: GraphQLObjectType | GraphQLInterfaceType,
  ctx: RenderContext,
  wrapper: 'Promise' | 'Observable',
) => {
  const fieldStrings = Object.keys(type.getFields()).map(fieldName => {
    const field = type.getFields()[fieldName]
    const resolvedType = getNamedType(field.type)
    const stopChain =
      isListType(field.type) || (isNonNullType(field.type) && isListType(field.type.ofType)) || isUnionType(resolvedType)
    const resolvable = !(isEnumType(resolvedType) || isScalarType(resolvedType))
    const argsPresent = field.args.length > 0
    const argsOptional = !field.args.find(a => isNonNullType(a.type))
    const argsString = toArgsString(field)

    const executeReturnType = `${renderTyping(field.type, false, false, false)}`
    const executeReturnTypeWrapped = `${wrapper}<${executeReturnType}>`

    const fieldType = resolvable
      ? stopChain
        ? `{execute:(request:${requestTypeName(
            resolvedType,
          )},defaultValue?:${executeReturnType})=>${executeReturnTypeWrapped}}`
        : `${chainTypeName(resolvedType, wrapper)}&{execute:(request:${requestTypeName(
            resolvedType,
          )},defaultValue?:${executeReturnType})=>${executeReturnTypeWrapped}}`
      : `{execute:(request?:boolean|number,defaultValue?:${executeReturnType})=>${executeReturnTypeWrapped}}`

    const result = []

    if (argsPresent) {
      result.push(`((args${argsOptional ? '?' : ''}:${argsString})=>${fieldType})`)
    }

    if (!argsPresent || argsOptional) {
      result.push(`(${fieldType})`)
    }

    return `${fieldComment(field)}${field.name}:${result.join('&')}`
  })

  if (wrapper === 'Observable') {
    ctx.addImport(packageJson.name, false, 'Observable', true, true)
  }

  ctx.addCodeBlock(`${typeComment(type)}export interface ${chainTypeName(type, wrapper)}{${fieldStrings.join(',')}}`)
}
