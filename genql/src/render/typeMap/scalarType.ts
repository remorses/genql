import { GraphQLEnumType, GraphQLScalarType } from 'graphql'
import { RenderContext } from '../common/RenderContext'
import { Type } from './renderTypeMap'

export const scalarType = (type: GraphQLScalarType | GraphQLEnumType, _: RenderContext): Type => ({ name: type.name })
