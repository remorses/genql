import { GraphQLSchema } from 'graphql'
import { chainTypeName } from '../chain/objectType'
import { RenderContext } from '../common/RenderContext'
import { requestTypeName } from '../requestTypes/requestTypeName'
import { RUNTIME_LIB_NAME } from '../../config'

export const renderClientDefinition = (
    schema: GraphQLSchema,
    ctx: RenderContext,
) => {
    const types = []
    const imports = []

    const queryType = schema.getQueryType()
    const mutationType = schema.getMutationType()
    const subscriptionType = schema.getSubscriptionType()

    if (queryType) {
        types.push(
            requestTypeName(queryType),
            chainTypeName(queryType, 'Promise'),
            queryType.name,
        )
        imports.push(
            requestTypeName(queryType),
            chainTypeName(queryType, 'Promise'),
            queryType.name,
        )
    } else {
        types.push('never', 'never', 'never')
    }

    if (mutationType) {
        types.push(
            requestTypeName(mutationType),
            chainTypeName(mutationType, 'Promise'),
            mutationType.name,
        )
        imports.push(
            requestTypeName(mutationType),
            chainTypeName(mutationType, 'Promise'),
            mutationType.name,
        )
    } else {
        types.push('never', 'never', 'never')
    }

    ctx.addCodeBlock(`
    import { Client, SubscriptionClient, ClientOptions, SubscriptionClientOptions } from '${RUNTIME_LIB_NAME}'
    ${imports.length > 0 ? `import {${imports.join(',')}} from './schema'` : ''}
    export declare const createClient:(options?:ClientOptions)=>Client<${types.join(
        ',',
    )}>
    export declare const everything: { __scalar: boolean }
  `)

    if (subscriptionType) {
        const subscriptionTypes = [
            requestTypeName(subscriptionType),
            chainTypeName(subscriptionType, 'Observable'),
            subscriptionType.name,
        ]
        const subscriptionImports = [
            requestTypeName(subscriptionType),
            chainTypeName(subscriptionType, 'Observable'),
            subscriptionType.name,
        ]
        ctx.addCodeBlock(
            `import {${subscriptionImports.join(',')}} from './schema'`,
        )
        ctx.addCodeBlock(`
        export declare const createSubscriptionClient:(options?:SubscriptionClientOptions)=>SubscriptionClient<${subscriptionTypes.join(
            ',',
        )}>`)
    }
}
