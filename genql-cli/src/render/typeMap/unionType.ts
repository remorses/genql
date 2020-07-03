import { GraphQLUnionType } from 'graphql'
import { RenderContext } from '../common/RenderContext'
import { FieldMap, Type } from 'genql-runtime/dist/types'

export const unionType = (type: GraphQLUnionType, _: RenderContext) => {
  const typeObj: Type<string> & { fields: FieldMap<string> } = {
    // name: type.name,
    fields: type.getTypes().reduce<FieldMap<string>>((r, t) => {
      r[`on_${t.name}`] = { type: t.name }
      return r
    }, {}),
  }

  typeObj.fields.__typename = { type: 'String' }

  return typeObj
}
