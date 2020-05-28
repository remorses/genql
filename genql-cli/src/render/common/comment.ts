import { GraphQLArgument, GraphQLEnumValue, GraphQLField, GraphQLInputField, GraphQLNamedType } from 'graphql'
import Maybe from 'graphql/tsutils/Maybe'

export const comment = (comment: { text?: Maybe<string>; deprecated?: Maybe<string> }) => {
  const lines: string[] = []

  if (comment.deprecated) {
    lines.push(`@deprecated ${comment.deprecated.replace(/\s/g, ' ')}`)
  }

  if (comment.text) {
    lines.push(...comment.text.split('\n'))
  }

  return lines.length > 0
    ? lines.length === 1
      ? `\n/** ${lines[0]} */\n`
      : `\n/**\n${lines.map(l => ` * ${l}`).join('\n')}\n */\n`
    : ''
}

export const typeComment = (type: GraphQLNamedType) =>
  comment({
    text: type.description,
  })

export const fieldComment = (field: GraphQLEnumValue | GraphQLField<any, any, any>) =>
  comment({
    deprecated: field.deprecationReason,
    text: field.description,
  })

export const argumentComment = (arg: GraphQLArgument | GraphQLInputField) =>
  comment({
    text: arg.description,
  })
