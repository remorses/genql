import { GraphQLInputType, GraphQLNonNull, GraphQLOutputType, isListType, isNamedType, isNonNullType, isScalarType } from 'graphql'


const render = (
  type: GraphQLOutputType | GraphQLInputType,
  nonNull: boolean,
  root: boolean,
  wrap: (x: string) => string = x => x
): string => {
    
  if (root) {
    
      if (isNonNullType(type)) {
        return `: ${render(type.ofType, true, false, wrap)}`
      } else {
        const rendered = render(type, true, false, wrap)
        return `?: (${rendered} | null)`
      }
    
  }

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
    const typing = `${render(type.ofType, false, false, wrap)}[]`

    
    return nonNull ? typing : `(${typing} | null)`
    
  }

  return render((type as GraphQLNonNull<any>).ofType, true, false, wrap)
}

export const renderTyping = (
  type: GraphQLOutputType | GraphQLInputType,
) => render(type, false, true,  )
