import { GraphQLObjectType, GraphQLSchema } from 'graphql'
import { toClientSchema } from '../../../testHelpers/render'
import { renderTyping } from '../renderTyping'

let schema: GraphQLSchema

const testCase = (
    field: string,
    expected: string,
    undefinableValues: boolean,
    undefinableFields: boolean,
) => {
    const fields = (<GraphQLObjectType>schema.getType('Object')).getFields()
    const actual = renderTyping(
        fields[field].type,
        undefinableValues,
        undefinableFields,
    )
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
        testCase('value', ': Scalars[\'Int\']', false, false)
        testCase('maybeValue', ': (Scalars[\'Int\'] | null)', false, false)
        testCase('valueList', ': Scalars[\'Int\'][]', false, false)
        testCase('maybeValueList', ': (Scalars[\'Int\'] | null)[]', false, false)
        testCase('valueMaybeList', ': (Scalars[\'Int\'][] | null)', false, false)
        testCase(
            'maybeValueMaybeList',
            ': ((Scalars[\'Int\'] | null)[] | null)',
            false,
            false,
        )
        testCase('nested', ': Scalars[\'Int\'][][][]', false, false)
        testCase(
            'maybeNested',
            ': ((((Scalars[\'Int\'] | null)[] | null)[] | null)[] | null)',
            false,
            false,
        )
    })

    test('undefinable values', () => {
        testCase('value', ': Scalars[\'Int\']', true, false)
        testCase('maybeValue', ': (Scalars[\'Int\'] | undefined)', true, false)
        testCase('valueList', ': Scalars[\'Int\'][]', true, false)
        testCase(
            'maybeValueList',
            ': (Scalars[\'Int\'] | undefined)[]',
            true,
            false,
        )
        testCase(
            'valueMaybeList',
            ': (Scalars[\'Int\'][] | undefined)',
            true,
            false,
        )
        testCase(
            'maybeValueMaybeList',
            ': ((Scalars[\'Int\'] | undefined)[] | undefined)',
            true,
            false,
        )
        testCase('nested', ': Scalars[\'Int\'][][][]', true, false)
        testCase(
            'maybeNested',
            ': ((((Scalars[\'Int\'] | undefined)[] | undefined)[] | undefined)[] | undefined)',
            true,
            false,
        )
    })

    test('undefinable fields', () => {
        testCase('value', ': Scalars[\'Int\']', false, true)
        testCase('maybeValue', '?: (Scalars[\'Int\'] | null)', false, true)
        testCase('valueList', ': Scalars[\'Int\'][]', false, true)
        testCase('maybeValueList', ': (Scalars[\'Int\'] | null)[]', false, true)
        testCase('valueMaybeList', '?: (Scalars[\'Int\'][] | null)', false, true)
        testCase(
            'maybeValueMaybeList',
            '?: ((Scalars[\'Int\'] | null)[] | null)',
            false,
            true,
        )
        testCase('nested', ': Scalars[\'Int\'][][][]', false, true)
        testCase(
            'maybeNested',
            '?: ((((Scalars[\'Int\'] | null)[] | null)[] | null)[] | null)',
            false,
            true,
        )
    })

    test('undefinable fields and values', () => {
        testCase('value', ': Scalars[\'Int\']', true, true)
        testCase('maybeValue', '?: Scalars[\'Int\']', true, true)
        testCase('valueList', ': Scalars[\'Int\'][]', true, true)
        testCase('maybeValueList', ': (Scalars[\'Int\'] | undefined)[]', true, true)
        testCase('valueMaybeList', '?: Scalars[\'Int\'][]', true, true)
        testCase(
            'maybeValueMaybeList',
            '?: (Scalars[\'Int\'] | undefined)[]',
            true,
            true,
        )
        testCase('nested', ': Scalars[\'Int\'][][][]', true, true)
        testCase(
            'maybeNested',
            '?: (((Scalars[\'Int\'] | undefined)[] | undefined)[] | undefined)[]',
            true,
            true,
        )
    })
})
