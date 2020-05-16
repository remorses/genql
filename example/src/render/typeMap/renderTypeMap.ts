import {
  GraphQLSchema,
  isEnumType,
  isInterfaceType,
  isObjectType,
  isScalarType,
  isUnionType,
  isInputObjectType,
} from 'graphql'
import { excludedTypes } from '../common/excludedTypes'
import { RenderContext } from '../common/RenderContext'
import { objectType } from './objectType'
import { scalarType } from './scalarType'
import { unionType } from './unionType'

export interface ArgMap {
  [arg: string]: [string, string] | undefined
}

export interface Field {
  type: string
  args?: ArgMap
}

export interface FieldMap {
  [field: string]: Field | undefined
}

export interface Type {
  name: string
  fields?: FieldMap
  scalar?: string[]
}

export interface TypeMap {
  [type: string]: Type | undefined
}

export const renderTypeMap = (schema: GraphQLSchema, ctx: RenderContext) => {
  const result: TypeMap = {}

  Object.keys(schema.getTypeMap())
    .filter(t => !excludedTypes.includes(t))
    .map(t => schema.getTypeMap()[t])
    .map(t => {
      if (isObjectType(t) || isInterfaceType(t) || isInputObjectType(t)) result[t.name] = objectType(t, ctx)
      else if (isUnionType(t)) result[t.name] = unionType(t, ctx)
      else if (isScalarType(t) || isEnumType(t)) result[t.name] = scalarType(t, ctx)
    })

  ctx.addCodeBlock(JSON.stringify(result))
}
