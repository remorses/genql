import { prettify } from '../../helpers/prettify'
import { schemaRenderTest } from '../../testHelpers/render'
import { renderSchema } from './renderSchema'

test('renderSchema', async () => {
  expect(
    await schemaRenderTest(
      /* GraphQL */ `
        type A {
          some: String
        }

        type B {
          some: String @deprecated
        }

        type Query {
          _: Boolean
        }
      `,
      renderSchema,
      'graphql',
    ),
  ).toBe(
    prettify(
      /* GraphQL */ `
        type A {
          some: String
        }

        type B {
          some: String @deprecated
        }

        type Query {
          _: Boolean
        }
      `,
      'graphql',
    ),
  )
})
