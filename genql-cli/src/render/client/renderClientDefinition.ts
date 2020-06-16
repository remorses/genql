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
    import { FieldsSelection, GraphqlOperation, SubscriptionClient, ClientOptions, SubscriptionClientOptions } from '${RUNTIME_LIB_NAME}'
    export * from './schema'
    ${renderClientTypesImports({ mutationType, queryType, subscriptionType })}
    export declare const createClient:(options?:ClientOptions)=>Client
    export declare const everything: { __scalar: boolean }
  `)

    ctx.addCodeBlock(
        renderClientType({ mutationType, queryType, subscriptionType }),
    )

    if (queryType) {
        ctx.addCodeBlock(`
        export type QueryResult<fields extends ${requestTypeName(
            queryType,
        )}> = FieldsSelection<${queryType.name}, fields>

        export declare const generateQueryOp: (fields: ${requestTypeName(
            queryType,
        )}) => GraphqlOperation`)
    }
    if (mutationType) {
        ctx.addCodeBlock(`
        export type MutationResult<fields extends ${requestTypeName(
            mutationType,
        )}> = FieldsSelection<${mutationType.name}, fields>

        export declare const generateMutationOp: (fields: ${requestTypeName(
            mutationType,
        )}) => GraphqlOperation`)
    }
    if (subscriptionType) {
        ctx.addCodeBlock(`
        export type SubscriptionResult<fields extends ${requestTypeName(
            subscriptionType,
        )}> = FieldsSelection<${subscriptionType.name}, fields>

        export declare const generateSubscriptionOp: (fields: ${requestTypeName(
            subscriptionType,
        )}) => GraphqlOperation`)
    }

    if (subscriptionType) {
        const subscriptionImports = [
            requestTypeName(subscriptionType),
            chainTypeName(subscriptionType, 'Observable'),
            subscriptionType.name,
        ]
        ctx.addCodeBlock(
            `import {${subscriptionImports.join(',')}} from './schema'`,
        )
        const subscriptionTypes = [
            requestTypeName(subscriptionType),
            chainTypeName(subscriptionType, 'Observable'),
            subscriptionType.name,
        ]
        ctx.addCodeBlock(`
        export declare const createSubscriptionClient:(options?:SubscriptionClientOptions)=>SubscriptionClient<${subscriptionTypes.join(
            ',',
        )}>`)
    }
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
            chainTypeName(subscriptionType, 'Promise'),
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
        ): Promise<FieldsSelection<${subscriptionType.name}, R>>
        `
        chainTypeContent += `
        subscription: ${chainTypeName(subscriptionType, 'Promise')}
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
