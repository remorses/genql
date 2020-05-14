import { GraphQLObjectType, GraphQLSchema } from 'graphql'
import { toClientSchema } from '../../testHelpers/render'
import { renderTyping } from './renderTyping'

let schema: GraphQLSchema

const testCase = (field: string, expected: string, undefinableValues: boolean, undefinableFields: boolean) => {
  const fields = (<GraphQLObjectType>schema.getType('Object')).getFields()
  const actual = renderTyping(fields[field].type, undefinableValues, undefinableFields)
  expect(actual).toBe(expected)
}

describe('renderTyping', () => {
  beforeAll(async () => {
    schema = await toClientSchema(/* GraphQL */ `
      type Object {
        value: Int!
        maybeValue: Int
        valueList: [Int!]!
        maybeValueList: [Int]!
        valueMaybeList: [Int!]
        maybeValueMaybeList: [Int]
        nested: [[[Int!]!]!]!
        maybeNested: [[[Int]]]
      }

      type Query {
        _: Boolean
      }
    `)
  })

  test('nullable', () => {
    testCase('value', ':Int', false, false)
    testCase('maybeValue', ':(Int|null)', false, false)
    testCase('valueList', ':Int[]', false, false)
    testCase('maybeValueList', ':(Int|null)[]', false, false)
    testCase('valueMaybeList', ':(Int[]|null)', false, false)
    testCase('maybeValueMaybeList', ':((Int|null)[]|null)', false, false)
    testCase('nested', ':Int[][][]', false, false)
    testCase('maybeNested', ':((((Int|null)[]|null)[]|null)[]|null)', false, false)
  })

  test('undefinable values', () => {
    testCase('value', ':Int', true, false)
    testCase('maybeValue', ':(Int|undefined)', true, false)
    testCase('valueList', ':Int[]', true, false)
    testCase('maybeValueList', ':(Int|undefined)[]', true, false)
    testCase('valueMaybeList', ':(Int[]|undefined)', true, false)
    testCase('maybeValueMaybeList', ':((Int|undefined)[]|undefined)', true, false)
    testCase('nested', ':Int[][][]', true, false)
    testCase('maybeNested', ':((((Int|undefined)[]|undefined)[]|undefined)[]|undefined)', true, false)
  })

  test('undefinable fields', () => {
    testCase('value', ':Int', false, true)
    testCase('maybeValue', '?:(Int|null)', false, true)
    testCase('valueList', ':Int[]', false, true)
    testCase('maybeValueList', ':(Int|null)[]', false, true)
    testCase('valueMaybeList', '?:(Int[]|null)', false, true)
    testCase('maybeValueMaybeList', '?:((Int|null)[]|null)', false, true)
    testCase('nested', ':Int[][][]', false, true)
    testCase('maybeNested', '?:((((Int|null)[]|null)[]|null)[]|null)', false, true)
  })

  test('undefinable fields and values', () => {
    testCase('value', ':Int', true, true)
    testCase('maybeValue', '?:Int', true, true)
    testCase('valueList', ':Int[]', true, true)
    testCase('maybeValueList', ':(Int|undefined)[]', true, true)
    testCase('valueMaybeList', '?:Int[]', true, true)
    testCase('maybeValueMaybeList', '?:(Int|undefined)[]', true, true)
    testCase('nested', ':Int[][][]', true, true)
    testCase('maybeNested', '?:(((Int|undefined)[]|undefined)[]|undefined)[]', true, true)
  })
})
