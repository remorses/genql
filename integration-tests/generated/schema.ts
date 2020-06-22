import {FieldsSelection,Observable} from 'genql-runtime'

export type Scalars = {
    String: string,
    Boolean: boolean,
}

export interface Query{
    /** Some description */
    repository: Repository
    user?: User
    account?: Account
    __typename?: 'Query'
}

export interface Repository{
    createdAt: Scalars['String']
    forks?: ForkConnection
    __typename?: 'Repository'
}

export interface ForkConnection{
    edges?: (ForkEdge|undefined)[]
    __typename?: 'ForkConnection'
}

export interface ForkEdge{
    cursor?: Scalars['String']
    node?: Fork
    __typename?: 'ForkEdge'
}

export interface Fork{
    name?: Scalars['String']
    __typename?: 'Fork'
}

export interface User{
    /** Some description */
    name?: Scalars['String']
    __typename?: 'User'
}

export interface Subscription{
    user?: User
    __typename?: 'Subscription'
}

export type Account=User|Guest

export interface Guest{
    anonymous?: Scalars['Boolean']
    __typename?: 'Guest'
}

export interface QueryRequest{
    /** Some description */
    repository?: [{name: Scalars['String'],owner?: (Scalars['String']|null)},RepositoryRequest]
    user?: UserRequest
    account?: AccountRequest
    __typename?: boolean|number
    __scalar?: boolean|number
}

export interface RepositoryRequest{
    createdAt?: boolean|number
    forks?: ForkConnectionRequest
    __typename?: boolean|number
    __scalar?: boolean|number
}

export interface ForkConnectionRequest{
    edges?: ForkEdgeRequest
    __typename?: boolean|number
    __scalar?: boolean|number
}

export interface ForkEdgeRequest{
    cursor?: boolean|number
    node?: ForkRequest
    __typename?: boolean|number
    __scalar?: boolean|number
}

export interface ForkRequest{
    name?: boolean|number
    __typename?: boolean|number
    __scalar?: boolean|number
}

export interface UserRequest{
    /** Some description */
    name?: boolean|number
    __typename?: boolean|number
    __scalar?: boolean|number
}

export interface SubscriptionRequest{
    user?: UserRequest
    __typename?: boolean|number
    __scalar?: boolean|number
}

export interface AccountRequest{on_User?:UserRequest,on_Guest?:GuestRequest,__typename?:boolean|number}

export interface GuestRequest{
    anonymous?: boolean|number
    __typename?: boolean|number
    __scalar?: boolean|number
}


const Query_possibleTypes = ['Query']
export const isQuery = (obj: { __typename?: string }): obj is Query => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Query_possibleTypes.includes(obj.__typename)
}



const Repository_possibleTypes = ['Repository']
export const isRepository = (obj: { __typename?: string }): obj is Repository => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Repository_possibleTypes.includes(obj.__typename)
}



const ForkConnection_possibleTypes = ['ForkConnection']
export const isForkConnection = (obj: { __typename?: string }): obj is ForkConnection => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return ForkConnection_possibleTypes.includes(obj.__typename)
}



const ForkEdge_possibleTypes = ['ForkEdge']
export const isForkEdge = (obj: { __typename?: string }): obj is ForkEdge => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return ForkEdge_possibleTypes.includes(obj.__typename)
}



const Fork_possibleTypes = ['Fork']
export const isFork = (obj: { __typename?: string }): obj is Fork => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Fork_possibleTypes.includes(obj.__typename)
}



const User_possibleTypes = ['User']
export const isUser = (obj: { __typename?: string }): obj is User => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return User_possibleTypes.includes(obj.__typename)
}



const Subscription_possibleTypes = ['Subscription']
export const isSubscription = (obj: { __typename?: string }): obj is Subscription => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Subscription_possibleTypes.includes(obj.__typename)
}



const Account_possibleTypes = ['User','Guest']
export const isAccount = (obj: { __typename?: string }): obj is Account => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Account_possibleTypes.includes(obj.__typename)
}



const Guest_possibleTypes = ['Guest']
export const isGuest = (obj: { __typename?: string }): obj is Guest => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Guest_possibleTypes.includes(obj.__typename)
}


export interface QueryPromiseChain{
/** Some description */
repository:((args:{name: Scalars['String'],owner?: (Scalars['String']|null)})=>RepositoryPromiseChain & {get:<R extends RepositoryRequest>(request: R, defaultValue?:Repository)=>Promise<Repository>}),user:(UserPromiseChain & {get:<R extends UserRequest>(request: R, defaultValue?:(FieldsSelection<User, R>|null))=>Promise<(FieldsSelection<User, R>|null)>}),account:({get:<R extends AccountRequest>(request: R, defaultValue?:(FieldsSelection<Account, R>|null))=>Promise<(FieldsSelection<Account, R>|null)>})}

export interface QueryObservableChain{
/** Some description */
repository:((args:{name: Scalars['String'],owner?: (Scalars['String']|null)})=>RepositoryObservableChain & {get:<R extends RepositoryRequest>(request: R, defaultValue?:Repository)=>Observable<Repository>}),user:(UserObservableChain & {get:<R extends UserRequest>(request: R, defaultValue?:(FieldsSelection<User, R>|null))=>Observable<(FieldsSelection<User, R>|null)>}),account:({get:<R extends AccountRequest>(request: R, defaultValue?:(FieldsSelection<Account, R>|null))=>Observable<(FieldsSelection<Account, R>|null)>})}

export interface RepositoryPromiseChain{createdAt:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Promise<Scalars['String']>}),forks:(ForkConnectionPromiseChain & {get:<R extends ForkConnectionRequest>(request: R, defaultValue?:(FieldsSelection<ForkConnection, R>|null))=>Promise<(FieldsSelection<ForkConnection, R>|null)>})}

export interface RepositoryObservableChain{createdAt:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Observable<Scalars['String']>}),forks:(ForkConnectionObservableChain & {get:<R extends ForkConnectionRequest>(request: R, defaultValue?:(FieldsSelection<ForkConnection, R>|null))=>Observable<(FieldsSelection<ForkConnection, R>|null)>})}

export interface ForkConnectionPromiseChain{edges:({get:<R extends ForkEdgeRequest>(request: R, defaultValue?:((FieldsSelection<ForkEdge, R>|null)[]|null))=>Promise<((FieldsSelection<ForkEdge, R>|null)[]|null)>})}

export interface ForkConnectionObservableChain{edges:({get:<R extends ForkEdgeRequest>(request: R, defaultValue?:((FieldsSelection<ForkEdge, R>|null)[]|null))=>Observable<((FieldsSelection<ForkEdge, R>|null)[]|null)>})}

export interface ForkEdgePromiseChain{cursor:({get:(request?:boolean|number,defaultValue?:(Scalars['String']|null))=>Promise<(Scalars['String']|null)>}),node:(ForkPromiseChain & {get:<R extends ForkRequest>(request: R, defaultValue?:(FieldsSelection<Fork, R>|null))=>Promise<(FieldsSelection<Fork, R>|null)>})}

export interface ForkEdgeObservableChain{cursor:({get:(request?:boolean|number,defaultValue?:(Scalars['String']|null))=>Observable<(Scalars['String']|null)>}),node:(ForkObservableChain & {get:<R extends ForkRequest>(request: R, defaultValue?:(FieldsSelection<Fork, R>|null))=>Observable<(FieldsSelection<Fork, R>|null)>})}

export interface ForkPromiseChain{name:({get:(request?:boolean|number,defaultValue?:(Scalars['String']|null))=>Promise<(Scalars['String']|null)>})}

export interface ForkObservableChain{name:({get:(request?:boolean|number,defaultValue?:(Scalars['String']|null))=>Observable<(Scalars['String']|null)>})}

export interface UserPromiseChain{
/** Some description */
name:({get:(request?:boolean|number,defaultValue?:(Scalars['String']|null))=>Promise<(Scalars['String']|null)>})}

export interface UserObservableChain{
/** Some description */
name:({get:(request?:boolean|number,defaultValue?:(Scalars['String']|null))=>Observable<(Scalars['String']|null)>})}

export interface SubscriptionPromiseChain{user:(UserPromiseChain & {get:<R extends UserRequest>(request: R, defaultValue?:(FieldsSelection<User, R>|null))=>Promise<(FieldsSelection<User, R>|null)>})}

export interface SubscriptionObservableChain{user:(UserObservableChain & {get:<R extends UserRequest>(request: R, defaultValue?:(FieldsSelection<User, R>|null))=>Observable<(FieldsSelection<User, R>|null)>})}

export interface GuestPromiseChain{anonymous:({get:(request?:boolean|number,defaultValue?:(Scalars['Boolean']|null))=>Promise<(Scalars['Boolean']|null)>})}

export interface GuestObservableChain{anonymous:({get:(request?:boolean|number,defaultValue?:(Scalars['Boolean']|null))=>Observable<(Scalars['Boolean']|null)>})}