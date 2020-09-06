import {
    getNamedType,
    GraphQLInterfaceType,
    GraphQLObjectType,
    isEnumType,
    isInterfaceType,
    isScalarType,
} from 'graphql'
import { fieldComment, typeComment } from '../common/comment'
import { RenderContext } from '../common/RenderContext'
import { toArgsString } from '../common/toArgsString'
import { requestTypeName } from './requestTypeName'
import { sortKeys } from '../common/support'

const INDENTATION = '    '

export const objectType = (
    type: GraphQLObjectType | GraphQLInterfaceType,
    ctx: RenderContext,
) => {
    let fields = type.getFields()

    if (ctx.config?.sortProperties) {
        fields = sortKeys(fields)
    }

    let fieldStrings = Object.keys(fields).map((fieldName) => {
        const field = fields[fieldName]

        const types: string[] = []
        const resolvedType = getNamedType(field.type)
        const resolvable = !(
            isEnumType(resolvedType) || isScalarType(resolvedType)
        )
        const argsPresent = field.args.length > 0
        const argsString = toArgsString(field)
        const argsOptional = !argsString.match(/[^?]:/)

        if (argsPresent) {
            if (resolvable) {
                types.push(`[${argsString},${requestTypeName(resolvedType)}]`)
            } else {
                types.push(`[${argsString}]`)
            }
        }

        if (!argsPresent || argsOptional) {
            if (resolvable) {
                types.push(`${requestTypeName(resolvedType)}`)
            } else {
                types.push('boolean | number')
            }
        }

        return `${fieldComment(field)}${field.name}?: ${types.join(' | ')}`
    })

    if (isInterfaceType(type) && ctx.schema) {
        let interfaceProperties = ctx.schema
            .getPossibleTypes(type)
            .map((t) => `on_${t.name}?: ${requestTypeName(t)}`)
        if (ctx.config?.sortProperties) {
            interfaceProperties = interfaceProperties.sort()
        }
        fieldStrings = fieldStrings.concat(interfaceProperties)
    }

    fieldStrings.push('__typename?: boolean | number')
    fieldStrings.push('__scalar?: boolean | number')

    // add indentation
    fieldStrings = fieldStrings.map((x) =>
        x
            .split('\n')
            .filter(Boolean)
            .map((l) => INDENTATION + l)
            .join('\n'),
    )

    ctx.addCodeBlock(
        `${typeComment(type)}export interface ${requestTypeName(
            type,
        )}{\n${fieldStrings.join('\n')}\n}`,
    )
}
