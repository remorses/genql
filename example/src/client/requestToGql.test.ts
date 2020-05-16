import { prettify } from '../helpers/prettify'
import { renderTypeMap } from '../render/typeMap/renderTypeMap'
import { schemaRenderTest } from '../testHelpers/render'
import { linkTypeMap } from './linkTypeMap'
import { requestToGql } from './requestToGql'

const getRoot = async () => {
  const result = await schemaRenderTest(
    /* GraphQL */ `
      enum FriendshipKind {
        close
        distant
      }

      interface Person {
        name: String!
      }

      type User implements Person {
        name: String!
        age: Int!
        friends(kind: FriendshipKind): [Person!]!
      }

      type Cat {
        name: String!
        lives: Int!
      }

      union LivingThing = Cat | User

      type Query {
        user(id: ID!): User!
        livingThings: [LivingThing!]!
        userCount(withFriends: Boolean): Int
        field_with_on_inside: Int
      }
    `,
    renderTypeMap,
  )

  const typeMap = linkTypeMap(JSON.parse(result))

  if (!typeMap.Query) throw new Error('query type is missing')

  return typeMap.Query
}

describe('requestToGql', () => {
  test('converts request object to gql query and variables', async () => {
    const gql = requestToGql('query', await getRoot(), {
      user: [
        { id: 'userId' },
        {
          name: 1,
          age: 1,
          friends: [
            { kind: 'close' },
            {
              __typename: 1,
              on_User: {
                __scalar: 1,
              },
            },
          ],
        },
      ],
      livingThings: {
        __typename: 1,
        on_User: {
          age: 1,
        },
        on_Cat: {
          lives: 1,
        },
      },
      userCount: [{}],
      field_with_on_inside: 1,
    })

    expect(prettify(gql.query, 'graphql')).toBe(
      prettify(
        /* GraphQL */ `
          query($v1: ID!, $v2: FriendshipKind) {
            user(id: $v1) {
              name
              age
              friends(kind: $v2) {
                __typename
                ...f2
              }
            }
            livingThings {
              __typename
              ...f3
              ...f4
            }
            userCount
            field_with_on_inside
          }
          fragment f1 on User {
            name
            age
          }
          fragment f2 on User {
            ...f1
          }
          fragment f3 on User {
            age
          }
          fragment f4 on Cat {
            lives
          }
        `,
        'graphql',
      ),
    )

    expect(gql.variables).toEqual({ v1: 'userId', v2: 'close' })
  })

  test('converts request object to gql query and empty variables', async () => {
    const gql = requestToGql('query', await getRoot(), {
      livingThings: {
        __typename: 1,
      },
    })

    expect(prettify(gql.query, 'graphql')).toBe(
      prettify(
        /* GraphQL */ `
          query {
            livingThings {
              __typename
            }
          }
        `,
        'graphql',
      ),
    )

    expect(gql.variables).toEqual({})
  })

  describe('throws an error', () => {
    test('when field selection is empty', async () => {
      const root = await getRoot()
      expect(() =>
        requestToGql('query', root, {
          user: [{ id: 'userId' }, {}],
        }),
      ).toThrow('field selection should not be empty')
    })

    test('when argument typing is not defined in type map', async () => {
      const root = await getRoot()
      expect(() =>
        requestToGql('query', root, {
          user: [{ unknown: 'value' }, {}],
        }),
      ).toThrow('no typing defined for argument `unknown` in path `user`')
    })

    test('when requesting __scalar on type that has no scalar fields', async () => {
      const root = await getRoot()
      expect(() =>
        requestToGql('query', root, {
          livingThings: { __scalar: 1 },
        }),
      ).toThrow('type LivingThing has no scalar fields')
    })
  })
})
