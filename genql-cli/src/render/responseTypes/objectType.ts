import { GraphQLInterfaceType, GraphQLObjectType, isObjectType } from 'graphql'
import { fieldComment, typeComment } from '../common/comment'
import { RenderContext } from '../common/RenderContext'
import { renderTyping } from '../common/renderTyping'

const INDENTATION = '    '

export const objectType = (
    type: GraphQLObjectType | GraphQLInterfaceType,
    ctx: RenderContext,
) => {
    const fieldsMap = type.getFields()
    const fields = Object.keys(fieldsMap).map(
        (fieldName) => fieldsMap[fieldName],
    )

    if (!ctx.schema) throw new Error('no schema provided')

    const typeNames = isObjectType(type)
        ? [type.name]
        : ctx.schema.getPossibleTypes(type).map((t) => t.name)

    const fieldStrings = fields
        .map((f) =>
            `${fieldComment(f)}${f.name}${renderTyping(f.type, false, false)}`
                .split('\n')
                .filter(Boolean)
                .map((l) => INDENTATION + l)
                .join('\n'),
        )
        .concat([
            `${INDENTATION}__typename: ${
                typeNames.length > 0
                    ? typeNames.map((t) => `'${t}'`).join('|')
                    : 'String'
            }`,
        ])

    const interfaceNames = isObjectType(type)
        ? type.getInterfaces().map((i) => i.name)
        : []

    ctx.addCodeBlock(
        `${typeComment(type)}export interface ${type.name}${
            interfaceNames.length > 0
                ? ` extends ${interfaceNames.join(',')}`
                : ''
        }{\n${fieldStrings.join('\n')}\n}`,
    )
}
