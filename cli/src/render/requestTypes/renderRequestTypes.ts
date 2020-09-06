import {
    GraphQLSchema,
    isInputObjectType,
    isInterfaceType,
    isObjectType,
    isUnionType,
    GraphQLObjectType,
} from 'graphql'
import { excludedTypes } from '../common/excludedTypes'
import { RenderContext } from '../common/RenderContext'
import { inputObjectType } from './inputObjectType'
import { objectType } from './objectType'
import { unionType } from './unionType'
import { sortKeys } from '../common/support'

export const renderRequestTypes = (
    schema: GraphQLSchema,
    ctx: RenderContext,
) => {
    let typeMap = schema.getTypeMap()

    if (ctx.config?.sortProperties) {
        typeMap = sortKeys(typeMap)
    }

    for (const name in typeMap) {
        if (excludedTypes.includes(name)) continue

        const type = typeMap[name]

        if (isObjectType(type) || isInterfaceType(type)) objectType(type, ctx)
        if (isInputObjectType(type)) inputObjectType(type, ctx)
        if (isUnionType(type)) unionType(type, ctx)
    }

    const aliases = [
        { type: schema.getQueryType(), name: 'QueryRequest' },
        { type: schema.getMutationType(), name: 'MutationRequest' },
        { type: schema.getSubscriptionType(), name: 'SubscriptionRequest' },
    ]
        .map(renderAlias)
        .filter(Boolean)
        .join('\n')

    ctx.addCodeBlock(aliases)
}

function renderAlias({
    type,
    name,
}: {
    type?: GraphQLObjectType | null
    name: string
}) {
    if (type && type.name + 'Request' !== name) { // TODO make the camel case or kebab case an option
        return `export type ${name} = ${type.name + 'Request'}`
    }
    return ''
}
