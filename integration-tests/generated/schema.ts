import {FieldsSelection,Observable} from 'genql-runtime'

export type Scalars = {
    String: string,
    Int: number,
    Boolean: boolean,
}

export interface Query {
    /** Some description */
    repository: Repository
    user?: User
    recursiveType?: (RecursiveType | undefined)[]
    account?: Account
    coordinates?: Point
    __typename?: 'Query'
}

export interface RecursiveType {
    value?: Scalars['String']
    recurse?: RecursiveType
    __typename?: 'RecursiveType'
}

export interface Repository {
    createdAt: Scalars['String']
    forks?: ForkConnection
    __typename?: 'Repository'
}

export interface ForkConnection {
    edges?: (ForkEdge | undefined)[]
    __typename?: 'ForkConnection'
}

export interface ForkEdge {
    cursor?: Scalars['String']
    node?: Fork
    __typename?: 'ForkEdge'
}

export interface Fork {
    name?: Scalars['String']
    number?: Scalars['Int']
    __typename?: 'Fork'
}

export interface User {
    /** Some description */
    name?: Scalars['String']
    common?: Scalars['Int']
    __typename?: 'User'
}

export interface Subscription {
    user?: User
    __typename?: 'Subscription'
}

export type Account = User | Guest

export interface Guest {
    anonymous?: Scalars['Boolean']
    common?: Scalars['Int']
    __typename?: 'Guest'
}

export interface House {
    owner?: User
    x?: Scalars['String']
    y?: Scalars['String']
    __typename?: 'House'
}

export interface Bank {
    address?: Scalars['String']
    x?: Scalars['String']
    y?: Scalars['String']
    __typename?: 'Bank'
}

export type Point = House | Bank

export interface QueryRequest{
    /** Some description */
    repository?: [{name: Scalars['String'],owner?: (Scalars['String'] | null)},RepositoryRequest]
    user?: UserRequest
    recursiveType?: [{requiredVal?: (Scalars['String'][] | null)},RecursiveTypeRequest] | RecursiveTypeRequest
    account?: AccountRequest
    coordinates?: PointRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RecursiveTypeRequest{
    value?: boolean | number
    recurse?: RecursiveTypeRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RepositoryRequest{
    createdAt?: boolean | number
    forks?: ForkConnectionRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ForkConnectionRequest{
    edges?: ForkEdgeRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ForkEdgeRequest{
    cursor?: boolean | number
    node?: ForkRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ForkRequest{
    name?: boolean | number
    number?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserRequest{
    /** Some description */
    name?: boolean | number
    common?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SubscriptionRequest{
    user?: UserRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AccountRequest{on_User?:UserRequest,on_Guest?:GuestRequest,__typename?:boolean | number}

export interface GuestRequest{
    anonymous?: boolean | number
    common?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface HouseRequest{
    owner?: UserRequest
    x?: boolean | number
    y?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BankRequest{
    address?: boolean | number
    x?: boolean | number
    y?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PointRequest{
    x?: boolean | number
    y?: boolean | number
    on_House?: HouseRequest
    on_Bank?: BankRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


const Query_possibleTypes = ['Query']
export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



const RecursiveType_possibleTypes = ['RecursiveType']
export const isRecursiveType = (obj?: { __typename?: any } | null): obj is RecursiveType => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isRecursiveType"')
  return RecursiveType_possibleTypes.includes(obj.__typename)
}



const Repository_possibleTypes = ['Repository']
export const isRepository = (obj?: { __typename?: any } | null): obj is Repository => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isRepository"')
  return Repository_possibleTypes.includes(obj.__typename)
}



const ForkConnection_possibleTypes = ['ForkConnection']
export const isForkConnection = (obj?: { __typename?: any } | null): obj is ForkConnection => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isForkConnection"')
  return ForkConnection_possibleTypes.includes(obj.__typename)
}



const ForkEdge_possibleTypes = ['ForkEdge']
export const isForkEdge = (obj?: { __typename?: any } | null): obj is ForkEdge => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isForkEdge"')
  return ForkEdge_possibleTypes.includes(obj.__typename)
}



const Fork_possibleTypes = ['Fork']
export const isFork = (obj?: { __typename?: any } | null): obj is Fork => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isFork"')
  return Fork_possibleTypes.includes(obj.__typename)
}



const User_possibleTypes = ['User']
export const isUser = (obj?: { __typename?: any } | null): obj is User => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUser"')
  return User_possibleTypes.includes(obj.__typename)
}



const Subscription_possibleTypes = ['Subscription']
export const isSubscription = (obj?: { __typename?: any } | null): obj is Subscription => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isSubscription"')
  return Subscription_possibleTypes.includes(obj.__typename)
}



const Account_possibleTypes = ['User','Guest']
export const isAccount = (obj?: { __typename?: any } | null): obj is Account => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isAccount"')
  return Account_possibleTypes.includes(obj.__typename)
}



const Guest_possibleTypes = ['Guest']
export const isGuest = (obj?: { __typename?: any } | null): obj is Guest => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isGuest"')
  return Guest_possibleTypes.includes(obj.__typename)
}



const House_possibleTypes = ['House']
export const isHouse = (obj?: { __typename?: any } | null): obj is House => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isHouse"')
  return House_possibleTypes.includes(obj.__typename)
}



const Bank_possibleTypes = ['Bank']
export const isBank = (obj?: { __typename?: any } | null): obj is Bank => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isBank"')
  return Bank_possibleTypes.includes(obj.__typename)
}



const Point_possibleTypes = ['House','Bank']
export const isPoint = (obj?: { __typename?: any } | null): obj is Point => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isPoint"')
  return Point_possibleTypes.includes(obj.__typename)
}


export interface QueryPromiseChain{
/** Some description */
repository:((args:{name: Scalars['String'],owner?: (Scalars['String'] | null)})=>RepositoryPromiseChain & {get: (request: RepositoryRequest, defaultValue?:Repository)=>Promise<Repository>}),user:(UserPromiseChain & {get: (request: UserRequest, defaultValue?:(User | null))=>Promise<(User | null)>}),recursiveType:((args?:{requiredVal?: (Scalars['String'][] | null)})=>{get: (request: RecursiveTypeRequest, defaultValue?:((RecursiveType | null)[] | null))=>Promise<((RecursiveType | null)[] | null)>})&({get: (request: RecursiveTypeRequest, defaultValue?:((RecursiveType | null)[] | null))=>Promise<((RecursiveType | null)[] | null)>}),account:({get: (request: AccountRequest, defaultValue?:(Account | null))=>Promise<(Account | null)>}),coordinates:(PointPromiseChain & {get: (request: PointRequest, defaultValue?:(Point | null))=>Promise<(Point | null)>})}

export interface QueryObservableChain{
/** Some description */
repository:((args:{name: Scalars['String'],owner?: (Scalars['String'] | null)})=>RepositoryObservableChain & {get: (request: RepositoryRequest, defaultValue?:Repository)=>Observable<Repository>}),user:(UserObservableChain & {get: (request: UserRequest, defaultValue?:(User | null))=>Observable<(User | null)>}),recursiveType:((args?:{requiredVal?: (Scalars['String'][] | null)})=>{get: (request: RecursiveTypeRequest, defaultValue?:((RecursiveType | null)[] | null))=>Observable<((RecursiveType | null)[] | null)>})&({get: (request: RecursiveTypeRequest, defaultValue?:((RecursiveType | null)[] | null))=>Observable<((RecursiveType | null)[] | null)>}),account:({get: (request: AccountRequest, defaultValue?:(Account | null))=>Observable<(Account | null)>}),coordinates:(PointObservableChain & {get: (request: PointRequest, defaultValue?:(Point | null))=>Observable<(Point | null)>})}

export interface RecursiveTypePromiseChain{value:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>}),recurse:(RecursiveTypePromiseChain & {get: (request: RecursiveTypeRequest, defaultValue?:(RecursiveType | null))=>Promise<(RecursiveType | null)>})}

export interface RecursiveTypeObservableChain{value:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>}),recurse:(RecursiveTypeObservableChain & {get: (request: RecursiveTypeRequest, defaultValue?:(RecursiveType | null))=>Observable<(RecursiveType | null)>})}

export interface RepositoryPromiseChain{createdAt:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Promise<Scalars['String']>}),forks:(ForkConnectionPromiseChain & {get: (request: ForkConnectionRequest, defaultValue?:(ForkConnection | null))=>Promise<(ForkConnection | null)>})}

export interface RepositoryObservableChain{createdAt:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Observable<Scalars['String']>}),forks:(ForkConnectionObservableChain & {get: (request: ForkConnectionRequest, defaultValue?:(ForkConnection | null))=>Observable<(ForkConnection | null)>})}

export interface ForkConnectionPromiseChain{edges:({get: (request: ForkEdgeRequest, defaultValue?:((ForkEdge | null)[] | null))=>Promise<((ForkEdge | null)[] | null)>})}

export interface ForkConnectionObservableChain{edges:({get: (request: ForkEdgeRequest, defaultValue?:((ForkEdge | null)[] | null))=>Observable<((ForkEdge | null)[] | null)>})}

export interface ForkEdgePromiseChain{cursor:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>}),node:(ForkPromiseChain & {get: (request: ForkRequest, defaultValue?:(Fork | null))=>Promise<(Fork | null)>})}

export interface ForkEdgeObservableChain{cursor:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>}),node:(ForkObservableChain & {get: (request: ForkRequest, defaultValue?:(Fork | null))=>Observable<(Fork | null)>})}

export interface ForkPromiseChain{name:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>}),number:({get:(request?:boolean|number,defaultValue?:(Scalars['Int'] | null))=>Promise<(Scalars['Int'] | null)>})}

export interface ForkObservableChain{name:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>}),number:({get:(request?:boolean|number,defaultValue?:(Scalars['Int'] | null))=>Observable<(Scalars['Int'] | null)>})}

export interface UserPromiseChain{
/** Some description */
name:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>}),common:({get:(request?:boolean|number,defaultValue?:(Scalars['Int'] | null))=>Promise<(Scalars['Int'] | null)>})}

export interface UserObservableChain{
/** Some description */
name:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>}),common:({get:(request?:boolean|number,defaultValue?:(Scalars['Int'] | null))=>Observable<(Scalars['Int'] | null)>})}

export interface SubscriptionPromiseChain{user:(UserPromiseChain & {get: (request: UserRequest, defaultValue?:(User | null))=>Promise<(User | null)>})}

export interface SubscriptionObservableChain{user:(UserObservableChain & {get: (request: UserRequest, defaultValue?:(User | null))=>Observable<(User | null)>})}

export interface GuestPromiseChain{anonymous:({get:(request?:boolean|number,defaultValue?:(Scalars['Boolean'] | null))=>Promise<(Scalars['Boolean'] | null)>}),common:({get:(request?:boolean|number,defaultValue?:(Scalars['Int'] | null))=>Promise<(Scalars['Int'] | null)>})}

export interface GuestObservableChain{anonymous:({get:(request?:boolean|number,defaultValue?:(Scalars['Boolean'] | null))=>Observable<(Scalars['Boolean'] | null)>}),common:({get:(request?:boolean|number,defaultValue?:(Scalars['Int'] | null))=>Observable<(Scalars['Int'] | null)>})}

export interface HousePromiseChain{owner:(UserPromiseChain & {get: (request: UserRequest, defaultValue?:(User | null))=>Promise<(User | null)>}),x:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>}),y:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>})}

export interface HouseObservableChain{owner:(UserObservableChain & {get: (request: UserRequest, defaultValue?:(User | null))=>Observable<(User | null)>}),x:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>}),y:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>})}

export interface BankPromiseChain{address:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>}),x:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>}),y:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>})}

export interface BankObservableChain{address:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>}),x:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>}),y:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>})}

export interface PointPromiseChain{x:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>}),y:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>})}

export interface PointObservableChain{x:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>}),y:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>})}