import {
    buildClientSchema,
    buildSchema,
    getIntrospectionQuery,
    graphql,
    GraphQLNamedType,
    GraphQLSchema,
    IntrospectionQuery,
} from 'graphql'
import { BuiltInParserName } from 'prettier'
import { RenderContext } from '../render/common/RenderContext'
import { readFileFromPath } from '../helpers/files'
import { prettify } from '../helpers/prettify'

export interface TypeRenderer {
    (type: GraphQLNamedType, ctx: RenderContext): void
}

export interface SchemaRenderer {
    (schema: GraphQLSchema, ctx: RenderContext): void
}

export const toClientSchema = async (schemaGql: string) => {
    const schema = buildSchema(schemaGql)

    const introspectionResponse = await graphql(
        schema,
        getIntrospectionQuery(),
    )

    if (!introspectionResponse.data) {
        throw new Error(JSON.stringify(introspectionResponse.errors))
    }

    return buildClientSchema(introspectionResponse.data as any)
}

export const schemaRenderTest = async (
    schemaGql: string,
    renderer: SchemaRenderer,
    parser?: BuiltInParserName,
) => {
    const schema = await toClientSchema(schemaGql)

    const ctx = new RenderContext(schema)

    renderer(schema, ctx)

    return ctx.toCode(parser, true)
}

export const typeRenderTest = async (
    schemaGql: string,
    renderer: TypeRenderer,
    typeNames: string[],
    parser?: BuiltInParserName,
) => {
    const schema = await toClientSchema(schemaGql)

    const ctx = new RenderContext(schema)

    typeNames.forEach((typeName) => {
        const type = schema.getType(typeName)

        if (!type) {
            throw new Error(`type ${typeName} is not defined in the schema`)
        }

        renderer(type, ctx)
    })

    return ctx.toCode(parser, true)
}

export const typeRenderTestCase = async (
    dirName: string,
    file: string,
    renderer: TypeRenderer,
    typeNames: string[],
    output = false,
) => {
    const [gql, ts] = await Promise.all([
        readFileFromPath([dirName, `cases/${file}.graphql`]),
        readFileFromPath([dirName, `cases/${file}.case.ts`]),
    ])

    const actualTs = await typeRenderTest(
        gql,
        renderer,
        typeNames,
        'typescript',
    )

    if (output) {
        console.log(actualTs)
        throw new Error('test case did not run')
    } else {
        expect(actualTs).toBe(ts)
    }
}
