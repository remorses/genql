import { GraphQLUnionType } from 'graphql'
import { RenderContext } from '../common/RenderContext'
import { FieldMap, Type } from './renderTypeMap'

export const unionType = (type: GraphQLUnionType, _: RenderContext) => {
  const typeObj: Type & { fields: FieldMap } = {
    name: type.name,
    fields: type.getTypes().reduce<FieldMap>((r, t) => {
      r[`on_${t.name}`] = { type: t.name }
      return r
    }, {}),
  }

  typeObj.fields.__typename = { type: 'String' }

  return typeObj
}
