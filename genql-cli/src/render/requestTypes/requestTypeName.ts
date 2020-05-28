import { GraphQLNamedType } from 'graphql'

export const requestTypeName = (type: GraphQLNamedType) => `${type.name}Request`
