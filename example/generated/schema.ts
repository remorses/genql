import { Observable } from 'nodejs-lib-template'

export interface Query {
  user: User | null
  __typename: 'Query'
}

export interface User {
  id: ID | null
  name: String | null
  surname: String | null
  age: Int | null
  email: String | null
  __typename: 'User'
}

/** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
export type ID = string

/** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
export type String = string

/** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
export type Int = number

/** The `Boolean` scalar type represents `true` or `false`. */
export type Boolean = boolean

export interface QueryRequest {
  user?: UserRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UserRequest {
  id?: boolean | number
  name?: boolean | number
  surname?: boolean | number
  age?: boolean | number
  email?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

const Query_possibleTypes = ['Query']
export const isQuery = (obj: { __typename: String }): obj is Query => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Query_possibleTypes.includes(obj.__typename)
}

const User_possibleTypes = ['User']
export const isUser = (obj: { __typename: String }): obj is User => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return User_possibleTypes.includes(obj.__typename)
}

export interface QueryPromiseChain {
  user: UserPromiseChain & { execute: (request: UserRequest, defaultValue?: User | null) => Promise<User | null> }
}

export interface QueryObservableChain {
  user: UserObservableChain & { execute: (request: UserRequest, defaultValue?: User | null) => Observable<User | null> }
}

export interface UserPromiseChain {
  id: { execute: (request?: boolean | number, defaultValue?: ID | null) => Promise<ID | null> }
  name: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  surname: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  age: { execute: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  email: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
}

export interface UserObservableChain {
  id: { execute: (request?: boolean | number, defaultValue?: ID | null) => Observable<ID | null> }
  name: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  surname: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  age: { execute: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  email: { execute: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
}



