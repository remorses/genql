import { GraphQLInterfaceType, GraphQLObjectType } from 'graphql'
import { typeRenderTestCase } from '../../testHelpers/render'
import { objectType } from './objectType'

test('objectType', () =>
  typeRenderTestCase(
    __dirname,
    'objectType',
    (type, ctx) => objectType(<GraphQLObjectType | GraphQLInterfaceType>type, ctx, 'Promise'),
    ['Object', 'ObjectRequired'],
  ))
