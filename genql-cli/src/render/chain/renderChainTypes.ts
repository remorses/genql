import { GraphQLSchema, isInterfaceType, isObjectType } from 'graphql'
import { excludedTypes } from '../common/excludedTypes'
import { RenderContext } from '../common/RenderContext'
import { objectType } from './objectType'

export const renderChainTypes = (schema: GraphQLSchema, ctx: RenderContext) => {
  const typeMap = schema.getTypeMap()
  for (const name in typeMap) {
    if (excludedTypes.includes(name)) continue

    const type = typeMap[name]

    if (isObjectType(type) || isInterfaceType(type)) {
      objectType(type, ctx, 'Promise')
      objectType(type, ctx, 'Observable')
    }
  }
}
