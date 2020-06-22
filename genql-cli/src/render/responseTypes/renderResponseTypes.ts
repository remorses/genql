import {
    GraphQLSchema,
    isEnumType,
    isInterfaceType,
    isObjectType,
    isScalarType,
    isUnionType,
    GraphQLScalarType,
} from 'graphql'
import { excludedTypes } from '../common/excludedTypes'
import { RenderContext } from '../common/RenderContext'
import { enumType } from './enumType'
import { objectType } from './objectType'
import { renderScalarTypes } from './scalarType'
import { unionType } from './unionType'

export const renderResponseTypes = (
    schema: GraphQLSchema,
    ctx: RenderContext,
) => {
    const typeMap = schema.getTypeMap()
    ctx.addCodeBlock(
        renderScalarTypes(
            ctx,
            Object.values(typeMap).filter((type): type is GraphQLScalarType =>
                isScalarType(type),
            ),
        ),
    )
    for (const name in typeMap) {
        if (excludedTypes.includes(name)) continue

        const type = typeMap[name]

        if (isEnumType(type)) enumType(type, ctx)
        if (isUnionType(type)) unionType(type, ctx)
        if (isObjectType(type) || isInterfaceType(type)) objectType(type, ctx)
    }
}

// TODO interface should produce an object like
// export type Nameable = {
// 	__interface:{
// 			name:string
// 	};
// 	__resolve:{
// 		['on_Card']: Card;
// 		['on_CardStack']: CardStack;
// 	}
// }
