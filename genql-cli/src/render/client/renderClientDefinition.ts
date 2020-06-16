import { GraphQLSchema } from 'graphql'
import { chainTypeName } from '../chain/objectType'
import { RenderContext } from '../common/RenderContext'
import { requestTypeName } from '../requestTypes/requestTypeName'
import { RUNTIME_LIB_NAME } from '../../config'

export const renderClientDefinition = (
    schema: GraphQLSchema,
    ctx: RenderContext,
) => {
    const queryType = schema.getQueryType()
    const mutationType = schema.getMutationType()
    const subscriptionType = schema.getSubscriptionType()

    ctx.addCodeBlock(`
    import { FieldsSelection, GraphqlOperation, ClientOptions, SubscriptionClientOptions, Observable } from '${RUNTIME_LIB_NAME}'
    export * from './schema'
    ${renderClientTypesImports({ mutationType, queryType, subscriptionType })}
    export declare const createClient:(options?: ClientOptions)=>Client
    export declare const everything: { __scalar: boolean }
  `)

    // Client interface
    ctx.addCodeBlock(
        renderClientType({ mutationType, queryType, subscriptionType }),
    )

    // generateQueryOp and QueryResult types
    ctx.addCodeBlock(
        renderSupportFunctionsTypes({
            mutationType,
            queryType,
            subscriptionType,
        }),
    )
}

function renderClientTypesImports({
    queryType,
    mutationType,
    subscriptionType,
}) {
    const imports: string[] = []
    if (queryType) {
        imports.push(
            requestTypeName(queryType),
            chainTypeName(queryType, 'Promise'),
            queryType.name,
        )
    }

    if (mutationType) {
        imports.push(
            requestTypeName(mutationType),
            chainTypeName(mutationType, 'Promise'),
            mutationType.name,
        )
    }
    if (subscriptionType) {
        imports.push(
            requestTypeName(subscriptionType),
            chainTypeName(subscriptionType, 'Observable'),
            subscriptionType.name,
        )
    }
    if (imports.length > 0) {
        return `import {${imports.join(',')}} from './schema'`
    }
    return ''
}

function renderClientType({ queryType, mutationType, subscriptionType }) {
    let interfaceContent = ''
    let chainTypeContent = ''

    if (queryType) {
        interfaceContent += `
        query(
            request: ${requestTypeName(queryType)},
        ): Promise<FieldsSelection<${queryType.name}, R>>
        `
        chainTypeContent += `
        query: ${chainTypeName(queryType, 'Promise')}
        `
    }

    if (mutationType) {
        interfaceContent += `
        mutation(
            request: ${requestTypeName(mutationType)},
        ): Promise<FieldsSelection<${mutationType.name}, R>>
        `
        chainTypeContent += `
        mutation: ${chainTypeName(mutationType, 'Promise')}
        `
    }

    if (subscriptionType) {
        interfaceContent += `
        subscription(
            request: ${requestTypeName(subscriptionType)},
        ): Observable<FieldsSelection<${subscriptionType.name}, R>>
        `
        chainTypeContent += `
        subscription: ${chainTypeName(subscriptionType, 'Observable')}
        `
    }

    return `
    export interface Client {
        ${interfaceContent}
        chain: {
            ${chainTypeContent}
        }
    }
    `
}

function renderSupportFunctionsTypes({
    queryType,
    mutationType,
    subscriptionType,
}) {
    let code = ''
    if (queryType) {
        code += `
        export type QueryResult<fields extends ${requestTypeName(
            queryType,
        )}> = FieldsSelection<${queryType.name}, fields>

        export declare const generateQueryOp: (fields: ${requestTypeName(
            queryType,
        )}) => GraphqlOperation`
    }
    if (mutationType) {
        code += `
        export type MutationResult<fields extends ${requestTypeName(
            mutationType,
        )}> = FieldsSelection<${mutationType.name}, fields>

        export declare const generateMutationOp: (fields: ${requestTypeName(
            mutationType,
        )}) => GraphqlOperation`
    }
    if (subscriptionType) {
        code += `
        export type SubscriptionResult<fields extends ${requestTypeName(
            subscriptionType,
        )}> = FieldsSelection<${subscriptionType.name}, fields>

        export declare const generateSubscriptionOp: (fields: ${requestTypeName(
            subscriptionType,
        )}) => GraphqlOperation`
    }

    return code
}
