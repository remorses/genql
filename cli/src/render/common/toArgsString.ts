import { GraphQLField } from 'graphql'
import { argumentComment } from './comment'
import { renderTyping } from './renderTyping'

export const toArgsString = (field: GraphQLField<any, any, any>) => {
  return `{${field.args.map(a => `${argumentComment(a)}${a.name}${renderTyping(a.type, false, true)}`).join(',')}}`
}
