import { MapType, Observable } from 'genql-runtime'

export interface Query {
  user: User | null
  users: (User | null)[] | null
  company: Company | null
  node: Node | null
  other: String | null
  __typename: 'Query'
}

/** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
export type String = string

export enum Choice {
  ONE = 'ONE',
  TWO = 'TWO',
  THREE = 'THREE',
}

export interface User extends Node {
  name: String | null
  company: Company | null
  employerCompany: Company | null
  pastEmployers: (Company | null)[] | null
  id: ID | null
  __typename: 'User'
}

export interface Node {
  id: ID | null
  __typename: 'User' | 'Company'
}

/** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
export type ID = string

export interface Company extends Node {
  name: String | null
  nested: Nested | null
  legalForm: String | null
  ceo: User | null
  id: ID | null
  employees: (User | null)[] | null
  directors: DirectorConnection | null
  choice: Choice | null
  __typename: 'Company'
}

export interface Nested {
  user: User | null
  __typename: 'Nested'
}

/** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
export type Int = number

export interface DirectorConnection {
  ceos: (User | null)[] | null
  cursor: ID | null
  __typename: 'DirectorConnection'
}

/** The `Boolean` scalar type represents `true` or `false`. */
export type Boolean = boolean

export interface QueryRequest {
  user?: [{ username: String; choice: Choice }, UserRequest]
  users?: [{ limit: Int; first?: Int | null; last?: Int | null }, UserRequest]
  company?: [{ id?: String | null; max?: Int | null }, CompanyRequest] | CompanyRequest
  node?: [{ id?: ID | null }, NodeRequest] | NodeRequest
  other?: [{ _id: ID }]
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UserRequest {
  name?: boolean | number
  company?: [{ id?: String | null }, CompanyRequest] | CompanyRequest
  employerCompany?: CompanyRequest
  pastEmployers?: [{ max: Int }, CompanyRequest]
  id?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface NodeRequest {
  id?: boolean | number
  on_User?: UserRequest
  on_Company?: CompanyRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface CompanyRequest {
  name?: boolean | number
  nested?: NestedRequest
  legalForm?: boolean | number
  ceo?: UserRequest
  id?: boolean | number
  employees?: [{ limit: Int }, UserRequest]
  directors?: [{ limit: Int }, DirectorConnectionRequest]
  choice?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface NestedRequest {
  user?: UserRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface DirectorConnectionRequest {
  ceos?: UserRequest
  cursor?: boolean | number
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

const Node_possibleTypes = ['User', 'Company']
export const isNode = (obj: { __typename: String }): obj is Node => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Node_possibleTypes.includes(obj.__typename)
}

const Company_possibleTypes = ['Company']
export const isCompany = (obj: { __typename: String }): obj is Company => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Company_possibleTypes.includes(obj.__typename)
}

const Nested_possibleTypes = ['Nested']
export const isNested = (obj: { __typename: String }): obj is Nested => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Nested_possibleTypes.includes(obj.__typename)
}

const DirectorConnection_possibleTypes = ['DirectorConnection']
export const isDirectorConnection = (obj: { __typename: String }): obj is DirectorConnection => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return DirectorConnection_possibleTypes.includes(obj.__typename)
}

export interface QueryPromiseChain {
  user: (args: {
    username: String
    choice: Choice
  }) => UserPromiseChain & {
    get: <R extends UserRequest>(request: R, defaultValue?: MapType<User, R> | null) => Promise<MapType<User, R> | null>
  }
  users: (args: {
    limit: Int
    first?: Int | null
    last?: Int | null
  }) => {
    get: <R extends UserRequest>(
      request: R,
      defaultValue?: (MapType<User, R> | null)[] | null,
    ) => Promise<(MapType<User, R> | null)[] | null>
  }
  company: ((args?: {
    id?: String | null
    max?: Int | null
  }) => CompanyPromiseChain & {
    get: <R extends CompanyRequest>(
      request: R,
      defaultValue?: MapType<Company, R> | null,
    ) => Promise<MapType<Company, R> | null>
  }) &
    (CompanyPromiseChain & {
      get: <R extends CompanyRequest>(
        request: R,
        defaultValue?: MapType<Company, R> | null,
      ) => Promise<MapType<Company, R> | null>
    })
  node: ((args?: {
    id?: ID | null
  }) => NodePromiseChain & {
    get: <R extends NodeRequest>(request: R, defaultValue?: MapType<Node, R> | null) => Promise<MapType<Node, R> | null>
  }) &
    (NodePromiseChain & {
      get: <R extends NodeRequest>(request: R, defaultValue?: MapType<Node, R> | null) => Promise<MapType<Node, R> | null>
    })
  other: (args: { _id: ID }) => { get: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
}

export interface QueryObservableChain {
  user: (args: {
    username: String
    choice: Choice
  }) => UserObservableChain & {
    get: <R extends UserRequest>(request: R, defaultValue?: MapType<User, R> | null) => Observable<MapType<User, R> | null>
  }
  users: (args: {
    limit: Int
    first?: Int | null
    last?: Int | null
  }) => {
    get: <R extends UserRequest>(
      request: R,
      defaultValue?: (MapType<User, R> | null)[] | null,
    ) => Observable<(MapType<User, R> | null)[] | null>
  }
  company: ((args?: {
    id?: String | null
    max?: Int | null
  }) => CompanyObservableChain & {
    get: <R extends CompanyRequest>(
      request: R,
      defaultValue?: MapType<Company, R> | null,
    ) => Observable<MapType<Company, R> | null>
  }) &
    (CompanyObservableChain & {
      get: <R extends CompanyRequest>(
        request: R,
        defaultValue?: MapType<Company, R> | null,
      ) => Observable<MapType<Company, R> | null>
    })
  node: ((args?: {
    id?: ID | null
  }) => NodeObservableChain & {
    get: <R extends NodeRequest>(request: R, defaultValue?: MapType<Node, R> | null) => Observable<MapType<Node, R> | null>
  }) &
    (NodeObservableChain & {
      get: <R extends NodeRequest>(request: R, defaultValue?: MapType<Node, R> | null) => Observable<MapType<Node, R> | null>
    })
  other: (args: {
    _id: ID
  }) => { get: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
}

export interface UserPromiseChain {
  name: { get: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  company: ((args?: {
    id?: String | null
  }) => CompanyPromiseChain & {
    get: <R extends CompanyRequest>(
      request: R,
      defaultValue?: MapType<Company, R> | null,
    ) => Promise<MapType<Company, R> | null>
  }) &
    (CompanyPromiseChain & {
      get: <R extends CompanyRequest>(
        request: R,
        defaultValue?: MapType<Company, R> | null,
      ) => Promise<MapType<Company, R> | null>
    })
  employerCompany: CompanyPromiseChain & {
    get: <R extends CompanyRequest>(
      request: R,
      defaultValue?: MapType<Company, R> | null,
    ) => Promise<MapType<Company, R> | null>
  }
  pastEmployers: (args: {
    max: Int
  }) => {
    get: <R extends CompanyRequest>(
      request: R,
      defaultValue?: (MapType<Company, R> | null)[] | null,
    ) => Promise<(MapType<Company, R> | null)[] | null>
  }
  id: { get: (request?: boolean | number, defaultValue?: ID | null) => Promise<ID | null> }
}

export interface UserObservableChain {
  name: { get: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  company: ((args?: {
    id?: String | null
  }) => CompanyObservableChain & {
    get: <R extends CompanyRequest>(
      request: R,
      defaultValue?: MapType<Company, R> | null,
    ) => Observable<MapType<Company, R> | null>
  }) &
    (CompanyObservableChain & {
      get: <R extends CompanyRequest>(
        request: R,
        defaultValue?: MapType<Company, R> | null,
      ) => Observable<MapType<Company, R> | null>
    })
  employerCompany: CompanyObservableChain & {
    get: <R extends CompanyRequest>(
      request: R,
      defaultValue?: MapType<Company, R> | null,
    ) => Observable<MapType<Company, R> | null>
  }
  pastEmployers: (args: {
    max: Int
  }) => {
    get: <R extends CompanyRequest>(
      request: R,
      defaultValue?: (MapType<Company, R> | null)[] | null,
    ) => Observable<(MapType<Company, R> | null)[] | null>
  }
  id: { get: (request?: boolean | number, defaultValue?: ID | null) => Observable<ID | null> }
}

export interface NodePromiseChain {
  id: { get: (request?: boolean | number, defaultValue?: ID | null) => Promise<ID | null> }
}

export interface NodeObservableChain {
  id: { get: (request?: boolean | number, defaultValue?: ID | null) => Observable<ID | null> }
}

export interface CompanyPromiseChain {
  name: { get: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  nested: NestedPromiseChain & {
    get: <R extends NestedRequest>(
      request: R,
      defaultValue?: MapType<Nested, R> | null,
    ) => Promise<MapType<Nested, R> | null>
  }
  legalForm: { get: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  ceo: UserPromiseChain & {
    get: <R extends UserRequest>(request: R, defaultValue?: MapType<User, R> | null) => Promise<MapType<User, R> | null>
  }
  id: { get: (request?: boolean | number, defaultValue?: ID | null) => Promise<ID | null> }
  employees: (args: {
    limit: Int
  }) => {
    get: <R extends UserRequest>(
      request: R,
      defaultValue?: (MapType<User, R> | null)[] | null,
    ) => Promise<(MapType<User, R> | null)[] | null>
  }
  directors: (args: {
    limit: Int
  }) => DirectorConnectionPromiseChain & {
    get: <R extends DirectorConnectionRequest>(
      request: R,
      defaultValue?: MapType<DirectorConnection, R> | null,
    ) => Promise<MapType<DirectorConnection, R> | null>
  }
  choice: { get: (request?: boolean | number, defaultValue?: Choice | null) => Promise<Choice | null> }
}

export interface CompanyObservableChain {
  name: { get: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  nested: NestedObservableChain & {
    get: <R extends NestedRequest>(
      request: R,
      defaultValue?: MapType<Nested, R> | null,
    ) => Observable<MapType<Nested, R> | null>
  }
  legalForm: { get: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  ceo: UserObservableChain & {
    get: <R extends UserRequest>(request: R, defaultValue?: MapType<User, R> | null) => Observable<MapType<User, R> | null>
  }
  id: { get: (request?: boolean | number, defaultValue?: ID | null) => Observable<ID | null> }
  employees: (args: {
    limit: Int
  }) => {
    get: <R extends UserRequest>(
      request: R,
      defaultValue?: (MapType<User, R> | null)[] | null,
    ) => Observable<(MapType<User, R> | null)[] | null>
  }
  directors: (args: {
    limit: Int
  }) => DirectorConnectionObservableChain & {
    get: <R extends DirectorConnectionRequest>(
      request: R,
      defaultValue?: MapType<DirectorConnection, R> | null,
    ) => Observable<MapType<DirectorConnection, R> | null>
  }
  choice: { get: (request?: boolean | number, defaultValue?: Choice | null) => Observable<Choice | null> }
}

export interface NestedPromiseChain {
  user: UserPromiseChain & {
    get: <R extends UserRequest>(request: R, defaultValue?: MapType<User, R> | null) => Promise<MapType<User, R> | null>
  }
}

export interface NestedObservableChain {
  user: UserObservableChain & {
    get: <R extends UserRequest>(request: R, defaultValue?: MapType<User, R> | null) => Observable<MapType<User, R> | null>
  }
}

export interface DirectorConnectionPromiseChain {
  ceos: {
    get: <R extends UserRequest>(
      request: R,
      defaultValue?: (MapType<User, R> | null)[] | null,
    ) => Promise<(MapType<User, R> | null)[] | null>
  }
  cursor: { get: (request?: boolean | number, defaultValue?: ID | null) => Promise<ID | null> }
}

export interface DirectorConnectionObservableChain {
  ceos: {
    get: <R extends UserRequest>(
      request: R,
      defaultValue?: (MapType<User, R> | null)[] | null,
    ) => Observable<(MapType<User, R> | null)[] | null>
  }
  cursor: { get: (request?: boolean | number, defaultValue?: ID | null) => Observable<ID | null> }
}
