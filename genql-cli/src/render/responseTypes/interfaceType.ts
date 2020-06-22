import { GraphQLUnionType, GraphQLInterfaceType } from 'graphql'
import { RenderContext } from '../common/RenderContext'
import { typeComment } from '../common/comment'

// interface should produce an object like
// export type Nameable = {
// 	__interface:{
// 			name:string
// 	};
// 	__resolve:{
// 		['on_Card']: Card;
// 		['on_CardStack']: CardStack;
// 	}
// }

export const interfaceType = (type: GraphQLInterfaceType, ctx: RenderContext) => {
    if (!ctx.schema) {
        throw new Error('schema is req  required to render unionType ')
    }
    const typeNames = ctx.schema.getPossibleTypes(type).map((t) => t.name)
    let resolveContent = typeNames
        .map((name) => `on_${name}?: ${name}`)
        .join('\n    ')

    ctx.addCodeBlock(
        `${typeComment(type)}export type ${type.name}={
  __interface: 
    ${typeNames.join('|')}
  __resolve: {
    ${resolveContent}
  }
  __typename?: string
}`,
    )
}
