import { TypeRenderer, typeRenderTest } from '../../testHelpers/render'
import { objectType } from './objectType'

const render = (schemaGql: string) =>
    typeRenderTest(schemaGql, <TypeRenderer>objectType, ['Query'])

test('__args is optional when all arguments are nullable', async () => {
    const code = await render(/* GraphQL */ `
        type Query {
            users(first: Int, ids: [ID!]): [User]
        }
        type User {
            id: ID!
        }
    `)
    expect(code).toContain('__args?: {')
})

test('__args stays optional when an argument description contains a colon', async () => {
    const code = await render(/* GraphQL */ `
        type Query {
            users(
                first: Int
                "Deprecated, use \`filter: {ids}\` instead."
                ids: [ID!]
            ): [User]
        }
        type User {
            id: ID!
        }
    `)
    expect(code).toContain('__args?: {')
})

test('__args is required when an argument is non-null without a default', async () => {
    const code = await render(/* GraphQL */ `
        type Query {
            user(id: ID!, "Some note: optional" include: Boolean): User
        }
        type User {
            id: ID!
        }
    `)
    expect(code).toMatch(/__args: \{/)
    expect(code).not.toContain('__args?:')
})

test('__args is optional when a non-null argument has a default', async () => {
    const code = await render(/* GraphQL */ `
        type Query {
            users(first: Int! = 10): [User]
        }
        type User {
            id: ID!
        }
    `)
    expect(code).toContain('__args?: {')
})
