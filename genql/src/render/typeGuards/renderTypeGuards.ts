import { GraphQLSchema, isInterfaceType, isObjectType, isUnionType } from 'graphql'
import { excludedTypes } from '../common/excludedTypes'
import { RenderContext } from '../common/RenderContext'

const renderTypeGuard = (target: string, possible: string[]) => `
  const ${target}_possibleTypes = [${possible.map(t => `'${t}'`).join(',')}]
  export const is${target} = (obj: { __typename: String }): obj is ${target} => {
    if (!obj.__typename) throw new Error('__typename is missing')
    return ${target}_possibleTypes.includes(obj.__typename)
  }
`

export const renderTypeGuards = (schema: GraphQLSchema, ctx: RenderContext) => {
  for (const name in schema.getTypeMap()) {
    if (excludedTypes.includes(name)) continue

    const type = schema.getTypeMap()[name]

    if (isUnionType(type)) {
      const types = type.getTypes().map(t => t.name)
      ctx.addCodeBlock(renderTypeGuard(type.name, types))
    } else if (isInterfaceType(type)) {
      const types = schema.getPossibleTypes(type).map(t => t.name)
      ctx.addCodeBlock(renderTypeGuard(type.name, types))
    } else if (isObjectType(type)) {
      ctx.addCodeBlock(renderTypeGuard(type.name, [type.name]))
    }
  }
}
