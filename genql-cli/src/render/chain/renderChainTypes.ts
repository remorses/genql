import { GraphQLSchema, isInterfaceType, isObjectType } from 'graphql'
import { excludedTypes } from '../common/excludedTypes'
import { RenderContext } from '../common/RenderContext'
import { objectType } from './objectType'

export const renderChainTypes = (schema: GraphQLSchema, ctx: RenderContext) => {
  for (const name in schema.getTypeMap()) {
    if (excludedTypes.includes(name)) continue

    const type = schema.getTypeMap()[name]

    if (isObjectType(type) || isInterfaceType(type)) {
      objectType(type, ctx, 'Promise')
      objectType(type, ctx, 'Observable')
    }
  }
}
