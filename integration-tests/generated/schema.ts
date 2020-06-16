import {FieldsSelection,Observable} from 'genql-runtime'

export interface Query{
    /** Some description */
    repository: (Repository|null)
    user: (User|null)
    __typename: 'Query'
}


/** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
export type String=string

export interface Repository{
    createdAt: (String|null)
    forks: (ForkEdge|null)
    __typename: 'Repository'
}

export interface ForkEdge{
    cursor: (String|null)
    node: (Fork|null)
    __typename: 'ForkEdge'
}

export interface Fork{
    name: (String|null)
    __typename: 'Fork'
}

export interface User{
    /** Some description */
    name: (String|null)
    __typename: 'User'
}

export interface Subscription{
    user: (User|null)
    __typename: 'Subscription'
}


/** The `Boolean` scalar type represents `true` or `false`. */
export type Boolean=boolean

export interface ForkConnection{
    edges: ((ForkEdge|null)[]|null)
    __typename: 'ForkConnection'
}

export interface QueryRequest{
/** Some description */
repository?:[{name: String,owner?:(String|null)},RepositoryRequest],user?:UserRequest,__typename?:boolean|number,__scalar?:boolean|number}

export interface RepositoryRequest{createdAt?:boolean|number,forks?:ForkEdgeRequest,__typename?:boolean|number,__scalar?:boolean|number}

export interface ForkEdgeRequest{cursor?:boolean|number,node?:ForkRequest,__typename?:boolean|number,__scalar?:boolean|number}

export interface ForkRequest{name?:boolean|number,__typename?:boolean|number,__scalar?:boolean|number}

export interface UserRequest{
/** Some description */
name?:boolean|number,__typename?:boolean|number,__scalar?:boolean|number}

export interface SubscriptionRequest{user?:UserRequest,__typename?:boolean|number,__scalar?:boolean|number}

export interface ForkConnectionRequest{edges?:ForkEdgeRequest,__typename?:boolean|number,__scalar?:boolean|number}


const Query_possibleTypes = ['Query']
export const isQuery = (obj: { __typename: String }): obj is Query => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Query_possibleTypes.includes(obj.__typename)
}



const Repository_possibleTypes = ['Repository']
export const isRepository = (obj: { __typename: String }): obj is Repository => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Repository_possibleTypes.includes(obj.__typename)
}



const ForkEdge_possibleTypes = ['ForkEdge']
export const isForkEdge = (obj: { __typename: String }): obj is ForkEdge => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return ForkEdge_possibleTypes.includes(obj.__typename)
}



const Fork_possibleTypes = ['Fork']
export const isFork = (obj: { __typename: String }): obj is Fork => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Fork_possibleTypes.includes(obj.__typename)
}



const User_possibleTypes = ['User']
export const isUser = (obj: { __typename: String }): obj is User => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return User_possibleTypes.includes(obj.__typename)
}



const Subscription_possibleTypes = ['Subscription']
export const isSubscription = (obj: { __typename: String }): obj is Subscription => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Subscription_possibleTypes.includes(obj.__typename)
}



const ForkConnection_possibleTypes = ['ForkConnection']
export const isForkConnection = (obj: { __typename: String }): obj is ForkConnection => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return ForkConnection_possibleTypes.includes(obj.__typename)
}


export interface QueryPromiseChain{
/** Some description */
repository:((args:{name: String,owner?:(String|null)})=>RepositoryPromiseChain & {get:<R extends RepositoryRequest>(request: R, defaultValue?:(FieldsSelection<Repository, R>|null))=>Promise<(FieldsSelection<Repository, R>|null)>}),user:(UserPromiseChain & {get:<R extends UserRequest>(request: R, defaultValue?:(FieldsSelection<User, R>|null))=>Promise<(FieldsSelection<User, R>|null)>})}

export interface QueryObservableChain{
/** Some description */
repository:((args:{name: String,owner?:(String|null)})=>RepositoryObservableChain & {get:<R extends RepositoryRequest>(request: R, defaultValue?:(FieldsSelection<Repository, R>|null))=>Observable<(FieldsSelection<Repository, R>|null)>}),user:(UserObservableChain & {get:<R extends UserRequest>(request: R, defaultValue?:(FieldsSelection<User, R>|null))=>Observable<(FieldsSelection<User, R>|null)>})}

export interface RepositoryPromiseChain{createdAt:({get:(request?:boolean|number,defaultValue?:(String|null))=>Promise<(String|null)>}),forks:(ForkEdgePromiseChain & {get:<R extends ForkEdgeRequest>(request: R, defaultValue?:(FieldsSelection<ForkEdge, R>|null))=>Promise<(FieldsSelection<ForkEdge, R>|null)>})}

export interface RepositoryObservableChain{createdAt:({get:(request?:boolean|number,defaultValue?:(String|null))=>Observable<(String|null)>}),forks:(ForkEdgeObservableChain & {get:<R extends ForkEdgeRequest>(request: R, defaultValue?:(FieldsSelection<ForkEdge, R>|null))=>Observable<(FieldsSelection<ForkEdge, R>|null)>})}

export interface ForkEdgePromiseChain{cursor:({get:(request?:boolean|number,defaultValue?:(String|null))=>Promise<(String|null)>}),node:(ForkPromiseChain & {get:<R extends ForkRequest>(request: R, defaultValue?:(FieldsSelection<Fork, R>|null))=>Promise<(FieldsSelection<Fork, R>|null)>})}

export interface ForkEdgeObservableChain{cursor:({get:(request?:boolean|number,defaultValue?:(String|null))=>Observable<(String|null)>}),node:(ForkObservableChain & {get:<R extends ForkRequest>(request: R, defaultValue?:(FieldsSelection<Fork, R>|null))=>Observable<(FieldsSelection<Fork, R>|null)>})}

export interface ForkPromiseChain{name:({get:(request?:boolean|number,defaultValue?:(String|null))=>Promise<(String|null)>})}

export interface ForkObservableChain{name:({get:(request?:boolean|number,defaultValue?:(String|null))=>Observable<(String|null)>})}

export interface UserPromiseChain{
/** Some description */
name:({get:(request?:boolean|number,defaultValue?:(String|null))=>Promise<(String|null)>})}

export interface UserObservableChain{
/** Some description */
name:({get:(request?:boolean|number,defaultValue?:(String|null))=>Observable<(String|null)>})}

export interface SubscriptionPromiseChain{user:(UserPromiseChain & {get:<R extends UserRequest>(request: R, defaultValue?:(FieldsSelection<User, R>|null))=>Promise<(FieldsSelection<User, R>|null)>})}

export interface SubscriptionObservableChain{user:(UserObservableChain & {get:<R extends UserRequest>(request: R, defaultValue?:(FieldsSelection<User, R>|null))=>Observable<(FieldsSelection<User, R>|null)>})}

export interface ForkConnectionPromiseChain{edges:({get:<R extends ForkEdgeRequest>(request: R, defaultValue?:((FieldsSelection<ForkEdge, R>|null)[]|null))=>Promise<((FieldsSelection<ForkEdge, R>|null)[]|null)>})}

export interface ForkConnectionObservableChain{edges:({get:<R extends ForkEdgeRequest>(request: R, defaultValue?:((FieldsSelection<ForkEdge, R>|null)[]|null))=>Observable<((FieldsSelection<ForkEdge, R>|null)[]|null)>})}