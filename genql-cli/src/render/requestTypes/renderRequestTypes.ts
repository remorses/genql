import { GraphQLSchema, isInputObjectType, isInterfaceType, isObjectType, isUnionType } from 'graphql'
import { excludedTypes } from '../common/excludedTypes'
import { RenderContext } from '../common/RenderContext'
import { inputObjectType } from './inputObjectType'
import { objectType } from './objectType'
import { unionType } from './unionType'

export const renderRequestTypes = (schema: GraphQLSchema, ctx: RenderContext) => {
  const typeMap = schema.getTypeMap()
  for (const name in typeMap) {
    if (excludedTypes.includes(name)) continue

    const type = typeMap[name]

    if (isObjectType(type) || isInterfaceType(type)) objectType(type, ctx)
    if (isInputObjectType(type)) inputObjectType(type, ctx)
    if (isUnionType(type)) unionType(type, ctx)
  }
}
