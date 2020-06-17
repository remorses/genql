import { GraphQLInputType, GraphQLNonNull, GraphQLOutputType, isListType, isNamedType, isNonNullType } from 'graphql'


// TODO add tests for the wrap function
const render = (
  type: GraphQLOutputType | GraphQLInputType,
  nonNull: boolean,
  root: boolean,
  undefinableValues: boolean,
  undefinableFields: boolean,
  wrap: (x: string) => string = x => x
): string => {
    
  if (root) { // TODO this is used for args to add a : prefix, is it really necessary?
    if (undefinableFields) {
      if (isNonNullType(type)) {
        return `: ${render(type.ofType, true, false, undefinableValues, undefinableFields)}`
      } else {
        const rendered = render(type, true, false, undefinableValues, undefinableFields)
        return undefinableValues ? `?: ${rendered}` : `?: (${rendered}|null)`
      }
    } else {
      return `: ${render(type, false, false, undefinableValues, undefinableFields)}`
    }
  }

  if (isNamedType(type)) {
    const typing = wrap(type.name)

    if (undefinableValues) {
      return nonNull ? typing : `(${typing}|undefined)`
    } else {
      return nonNull ? typing : `(${typing}|null)`
    }
  }

  if (isListType(type)) {
    const typing = `${render(type.ofType, false, false, undefinableValues, undefinableFields, wrap)}[]`

    if (undefinableValues) {
      return nonNull ? typing : `(${typing}|undefined)`
    } else {
      return nonNull ? typing : `(${typing}|null)`
    }
  }

  return render((<GraphQLNonNull<any>>type).ofType, true, false, undefinableValues, undefinableFields)
}

export const renderTyping = (
  type: GraphQLOutputType | GraphQLInputType,
  undefinableValues: boolean,
  undefinableFields: boolean,
  root = true,
  wrap: any = undefined
) => render(type, false, root, undefinableValues, undefinableFields, wrap)
