import { GraphQLNamedType } from 'graphql'
import { toClientSchema } from '../../testHelpers/render'
import { RenderContext } from '../common/RenderContext'
import { Type } from './renderTypeMap'
import { objectType } from './objectType'
import { scalarType } from './scalarType'
import { unionType } from './unionType'

interface Renderer {
  (type: GraphQLNamedType, ctx: RenderContext): Type
}

const testCase = async (schemaGql: string, renderer: Renderer, cases: { [type: string]: Type }, output = false) => {
  const schema = await toClientSchema(schemaGql)

  const ctx = new RenderContext(schema)

  for (const t in cases) {
    const type = schema.getType(t)
    const expected = cases[t]

    if (!type) {
      throw new Error(`type ${t} is not defined in the schema`)
    }

    if (output) {
      console.log(JSON.stringify(renderer(type, ctx), null, 2))
    } else {
      expect(renderer(type, ctx)).toEqual(expected)
    }
  }

  if (output) throw new Error('test case did not run')
}

test('scalarType', () =>
  testCase(
    /* GraphQL */ `
      enum Enum {
        some
        other
      }

      scalar Scalar

      type Query {
        scalar: String
        customScalar: Scalar
        enum: Enum
      }
    `,
    <Renderer>scalarType,
    {
      String: { name: 'String' },
      Scalar: { name: 'Scalar' },
      Enum: { name: 'Enum' },
    },
  ))

test('objectType', () =>
  testCase(
    /* GraphQL */ `
      interface Interface {
        some: String
      }

      type ImplementorA implements Interface {
        some: String
      }

      type ImplementorB implements Interface {
        some: String
      }

      type Object {
        scalar: Int
        object: Object
        interface: Interface
        optionalArgScalar(arg: Int): Int
        optionalArgObject(arg: Int): Object
        optionalArgInterface(arg: Int): Interface
        nestedArg(a: [[[Int]]], b: [[[Int!]!]!]!): Boolean
      }

      type ObjectWithoutScalar {
        object: Object
        interface: Interface
      }

      type Query {
        _: Boolean
      }
    `,
    <Renderer>objectType,
    {
      Object: {
        name: 'Object',
        fields: {
          scalar: { type: 'Int' },
          object: { type: 'Object' },
          interface: { type: 'Interface' },
          optionalArgScalar: { type: 'Int', args: { arg: ['Int', 'Int'] } },
          optionalArgObject: { type: 'Object', args: { arg: ['Int', 'Int'] } },
          optionalArgInterface: { type: 'Interface', args: { arg: ['Int', 'Int'] } },
          nestedArg: { type: 'Boolean', args: { a: ['[[[Int]]]', 'Int'], b: ['[[[Int!]!]!]!', 'Int'] } },
          __typename: { type: 'String' },
        },
        scalar: ['scalar', 'optionalArgScalar', 'nestedArg'],
      },
      Interface: {
        name: 'Interface',
        fields: {
          some: { type: 'String' },
          on_ImplementorA: { type: 'ImplementorA' },
          on_ImplementorB: { type: 'ImplementorB' },
          __typename: { type: 'String' },
        },
        scalar: ['some'],
      },
      ObjectWithoutScalar: {
        name: 'ObjectWithoutScalar',
        fields: {
          __typename: { type: 'String' },
          interface: { type: 'Interface' },
          object: { type: 'Object' },
        },
      },
    },
  ))

test('unionType', () =>
  testCase(
    /* GraphQL */ `
      type Some {
        field: Int
      }

      type Other {
        field: Int
      }

      type Another {
        field: Int
      }

      union Union = Some | Other | Another

      type Query {
        _: Boolean
      }
    `,
    <Renderer>unionType,
    {
      Union: {
        name: 'Union',
        fields: {
          on_Some: { type: 'Some' },
          on_Other: { type: 'Other' },
          on_Another: { type: 'Another' },
          __typename: { type: 'String' },
        },
      },
    },
  ))
