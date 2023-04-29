import {
    GraphQLInputType,
    GraphQLNonNull,
    GraphQLOutputType,
    isListType,
    isNamedType,
    isNonNullType,
    isScalarType,
} from 'graphql'

export const renderTyping = (
    type: GraphQLOutputType | GraphQLInputType,
    nonNull: boolean = false,
    wrap: (x: string) => string = (x) => x,
): string => {
    if (isNamedType(type)) {
        let typeName = type.name

        // if is a scalar use the scalar interface to not expose reserved words
        if (isScalarType(type)) {
            typeName = `Scalars['${typeName}']`
        }

        const typing = wrap(typeName)

        return nonNull ? typing : `(${typing} | null)`
    }

    if (isListType(type)) {
        const typing = `${renderTyping(type.ofType, false, wrap)}[]`

        return nonNull ? typing : `(${typing} | null)`
    }

    return renderTyping((type as GraphQLNonNull<any>).ofType, true, wrap)
}
