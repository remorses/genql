import { GraphQLSchema, isEnumType, isInterfaceType, isObjectType, isScalarType, isUnionType } from 'graphql'
import { excludedTypes } from '../common/excludedTypes'
import { RenderContext } from '../common/RenderContext'
import { enumType } from './enumType'
import { objectType } from './objectType'
import { scalarType } from './scalarType'
import { unionType } from './unionType'

export const renderResponseTypes = (schema: GraphQLSchema, ctx: RenderContext) => {
  const typeMap = schema.getTypeMap()
  for (const name in typeMap) {
    if (excludedTypes.includes(name)) continue

    const type = typeMap[name]

    if (isEnumType(type)) enumType(type, ctx)
    if (isUnionType(type)) unionType(type, ctx)
    if (isScalarType(type)) scalarType(type, ctx)
    if (isObjectType(type) || isInterfaceType(type)) objectType(type, ctx)
  }
}
