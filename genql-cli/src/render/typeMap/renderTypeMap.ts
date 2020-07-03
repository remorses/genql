import {
    GraphQLSchema,
    isEnumType,
    isInterfaceType,
    isObjectType,
    isScalarType,
    isUnionType,
    isInputObjectType,
} from 'graphql'
import { excludedTypes } from '../common/excludedTypes'
import { RenderContext } from '../common/RenderContext'
import { objectType } from './objectType'
import { scalarType } from './scalarType'
import { unionType } from './unionType'
import { TypeMap } from 'genql-runtime/dist/types'

export const renderTypeMap = (schema: GraphQLSchema, ctx: RenderContext) => {
    const result: TypeMap = {}

    Object.keys(schema.getTypeMap())
        .filter((t) => !excludedTypes.includes(t))
        .map((t) => schema.getTypeMap()[t])
        .map((t) => {
            if (isObjectType(t) || isInterfaceType(t) || isInputObjectType(t))
                result[t.name] = objectType(t, ctx)
            else if (isUnionType(t)) result[t.name] = unionType(t, ctx)
            else if (isScalarType(t) || isEnumType(t))
                result[t.name] = scalarType(t, ctx)
        })

    // change names of query, mutation on schemas that chose different names (hasura)
    const q = schema.getQueryType()
    if (q?.name && q?.name !== 'Query') {
        delete result[q.name]
        result.Query = objectType(q, ctx)
        result.Query.name = 'Query'
    }

    const m = schema.getMutationType()
    if (m?.name && m.name !== 'Mutation') {
        delete result[m.name]
        result.Mutation = objectType(m, ctx)
        result.Mutation.name = 'Mutation'
    }

    const s = schema.getSubscriptionType()
    if (s?.name && s.name !== 'Subscription') {
        delete result[s.name]
        result.Subscription = objectType(s, ctx)
        result.Subscription.name = 'Subscription'
    }

    ctx.addCodeBlock(JSON.stringify(result))
}
