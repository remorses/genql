import {FieldsSelection,Observable} from '@genql/runtime'

export type Scalars = {
    String: string,
    Float: number,
    Int: number,
    Boolean: boolean,
}

export interface Query {
    /** Some description */
    repository: Repository
    user?: User
    someScalarValue?: Scalars['String']
    recursiveType?: (RecursiveType | undefined)[]
    account?: Account
    coordinates?: Point
    unionThatImplementsInterface?: GenericError
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

export type Account = (User | Guest) & { __isUnion?: true }

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

export type Point = (House | Bank) & { __isUnion?: true }

export type ClientError = (ClientErrorNameAlreadyTaken | ClientErrorNameInvalid) & { __isUnion?: true }

export interface ClientErrorNameAlreadyTaken {
    message: Scalars['String']
    ownProp1?: Scalars['String']
    __typename?: 'ClientErrorNameAlreadyTaken'
}

export interface ClientErrorNameInvalid {
    message: Scalars['String']
    ownProp2?: Scalars['String']
    __typename?: 'ClientErrorNameInvalid'
}

export type GenericError = (ClientErrorNameAlreadyTaken | ClientErrorNameInvalid) & { __isUnion?: true }

export interface QueryRequest{
    /** Some description */
    repository?: [{name: Scalars['String'],owner?: (Scalars['String'] | null)},RepositoryRequest]
    user?: UserRequest
    someScalarValue?: [{x?: (Scalars['Float'] | null)}] | boolean | number
    recursiveType?: [{requiredVal?: (Scalars['String'][] | null)},RecursiveTypeRequest] | RecursiveTypeRequest
    account?: AccountRequest
    coordinates?: PointRequest
    unionThatImplementsInterface?: GenericErrorRequest
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

export interface AccountRequest{
    on_User?:UserRequest,
    on_Guest?:GuestRequest,
    __typename?: boolean | number
}

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

export interface ClientErrorRequest{
    message?: boolean | number
    on_ClientErrorNameAlreadyTaken?: ClientErrorNameAlreadyTakenRequest
    on_ClientErrorNameInvalid?: ClientErrorNameInvalidRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ClientErrorNameAlreadyTakenRequest{
    message?: boolean | number
    ownProp1?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ClientErrorNameInvalidRequest{
    message?: boolean | number
    ownProp2?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GenericErrorRequest{
    on_ClientErrorNameAlreadyTaken?:ClientErrorNameAlreadyTakenRequest,
    on_ClientErrorNameInvalid?:ClientErrorNameInvalidRequest,
    on_ClientError?: ClientErrorRequest,
    __typename?: boolean | number
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



const ClientError_possibleTypes = ['ClientErrorNameAlreadyTaken','ClientErrorNameInvalid']
export const isClientError = (obj?: { __typename?: any } | null): obj is ClientError => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isClientError"')
  return ClientError_possibleTypes.includes(obj.__typename)
}



const ClientErrorNameAlreadyTaken_possibleTypes = ['ClientErrorNameAlreadyTaken']
export const isClientErrorNameAlreadyTaken = (obj?: { __typename?: any } | null): obj is ClientErrorNameAlreadyTaken => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isClientErrorNameAlreadyTaken"')
  return ClientErrorNameAlreadyTaken_possibleTypes.includes(obj.__typename)
}



const ClientErrorNameInvalid_possibleTypes = ['ClientErrorNameInvalid']
export const isClientErrorNameInvalid = (obj?: { __typename?: any } | null): obj is ClientErrorNameInvalid => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isClientErrorNameInvalid"')
  return ClientErrorNameInvalid_possibleTypes.includes(obj.__typename)
}



const GenericError_possibleTypes = ['ClientErrorNameAlreadyTaken','ClientErrorNameInvalid']
export const isGenericError = (obj?: { __typename?: any } | null): obj is GenericError => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isGenericError"')
  return GenericError_possibleTypes.includes(obj.__typename)
}


export interface QueryPromiseChain{
    
/** Some description */
repository: ((args: {name: Scalars['String'],owner?: (Scalars['String'] | null)}) => RepositoryPromiseChain & {get: <R extends RepositoryRequest>(request: R, defaultValue?: FieldsSelection<Repository, R>) => Promise<FieldsSelection<Repository, R>>}),
    user: (UserPromiseChain & {get: <R extends UserRequest>(request: R, defaultValue?: (FieldsSelection<User, R> | undefined)) => Promise<(FieldsSelection<User, R> | undefined)>}),
    someScalarValue: ((args?: {x?: (Scalars['Float'] | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})&({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    recursiveType: ((args?: {requiredVal?: (Scalars['String'][] | null)}) => {get: <R extends RecursiveTypeRequest>(request: R, defaultValue?: ((FieldsSelection<RecursiveType, R> | undefined)[] | undefined)) => Promise<((FieldsSelection<RecursiveType, R> | undefined)[] | undefined)>})&({get: <R extends RecursiveTypeRequest>(request: R, defaultValue?: ((FieldsSelection<RecursiveType, R> | undefined)[] | undefined)) => Promise<((FieldsSelection<RecursiveType, R> | undefined)[] | undefined)>}),
    account: ({get: <R extends AccountRequest>(request: R, defaultValue?: (FieldsSelection<Account, R> | undefined)) => Promise<(FieldsSelection<Account, R> | undefined)>}),
    coordinates: (PointPromiseChain & {get: <R extends PointRequest>(request: R, defaultValue?: (FieldsSelection<Point, R> | undefined)) => Promise<(FieldsSelection<Point, R> | undefined)>}),
    unionThatImplementsInterface: ({get: <R extends GenericErrorRequest>(request: R, defaultValue?: (FieldsSelection<GenericError, R> | undefined)) => Promise<(FieldsSelection<GenericError, R> | undefined)>})
}

export interface QueryObservableChain{
    
/** Some description */
repository: ((args: {name: Scalars['String'],owner?: (Scalars['String'] | null)}) => RepositoryObservableChain & {get: <R extends RepositoryRequest>(request: R, defaultValue?: FieldsSelection<Repository, R>) => Observable<FieldsSelection<Repository, R>>}),
    user: (UserObservableChain & {get: <R extends UserRequest>(request: R, defaultValue?: (FieldsSelection<User, R> | undefined)) => Observable<(FieldsSelection<User, R> | undefined)>}),
    someScalarValue: ((args?: {x?: (Scalars['Float'] | null)}) => {get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})&({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    recursiveType: ((args?: {requiredVal?: (Scalars['String'][] | null)}) => {get: <R extends RecursiveTypeRequest>(request: R, defaultValue?: ((FieldsSelection<RecursiveType, R> | undefined)[] | undefined)) => Observable<((FieldsSelection<RecursiveType, R> | undefined)[] | undefined)>})&({get: <R extends RecursiveTypeRequest>(request: R, defaultValue?: ((FieldsSelection<RecursiveType, R> | undefined)[] | undefined)) => Observable<((FieldsSelection<RecursiveType, R> | undefined)[] | undefined)>}),
    account: ({get: <R extends AccountRequest>(request: R, defaultValue?: (FieldsSelection<Account, R> | undefined)) => Observable<(FieldsSelection<Account, R> | undefined)>}),
    coordinates: (PointObservableChain & {get: <R extends PointRequest>(request: R, defaultValue?: (FieldsSelection<Point, R> | undefined)) => Observable<(FieldsSelection<Point, R> | undefined)>}),
    unionThatImplementsInterface: ({get: <R extends GenericErrorRequest>(request: R, defaultValue?: (FieldsSelection<GenericError, R> | undefined)) => Observable<(FieldsSelection<GenericError, R> | undefined)>})
}

export interface RecursiveTypePromiseChain{
    value: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    recurse: (RecursiveTypePromiseChain & {get: <R extends RecursiveTypeRequest>(request: R, defaultValue?: (FieldsSelection<RecursiveType, R> | undefined)) => Promise<(FieldsSelection<RecursiveType, R> | undefined)>})
}

export interface RecursiveTypeObservableChain{
    value: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    recurse: (RecursiveTypeObservableChain & {get: <R extends RecursiveTypeRequest>(request: R, defaultValue?: (FieldsSelection<RecursiveType, R> | undefined)) => Observable<(FieldsSelection<RecursiveType, R> | undefined)>})
}

export interface RepositoryPromiseChain{
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    forks: (ForkConnectionPromiseChain & {get: <R extends ForkConnectionRequest>(request: R, defaultValue?: (FieldsSelection<ForkConnection, R> | undefined)) => Promise<(FieldsSelection<ForkConnection, R> | undefined)>})
}

export interface RepositoryObservableChain{
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    forks: (ForkConnectionObservableChain & {get: <R extends ForkConnectionRequest>(request: R, defaultValue?: (FieldsSelection<ForkConnection, R> | undefined)) => Observable<(FieldsSelection<ForkConnection, R> | undefined)>})
}

export interface ForkConnectionPromiseChain{
    edges: ({get: <R extends ForkEdgeRequest>(request: R, defaultValue?: ((FieldsSelection<ForkEdge, R> | undefined)[] | undefined)) => Promise<((FieldsSelection<ForkEdge, R> | undefined)[] | undefined)>})
}

export interface ForkConnectionObservableChain{
    edges: ({get: <R extends ForkEdgeRequest>(request: R, defaultValue?: ((FieldsSelection<ForkEdge, R> | undefined)[] | undefined)) => Observable<((FieldsSelection<ForkEdge, R> | undefined)[] | undefined)>})
}

export interface ForkEdgePromiseChain{
    cursor: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    node: (ForkPromiseChain & {get: <R extends ForkRequest>(request: R, defaultValue?: (FieldsSelection<Fork, R> | undefined)) => Promise<(FieldsSelection<Fork, R> | undefined)>})
}

export interface ForkEdgeObservableChain{
    cursor: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    node: (ForkObservableChain & {get: <R extends ForkRequest>(request: R, defaultValue?: (FieldsSelection<Fork, R> | undefined)) => Observable<(FieldsSelection<Fork, R> | undefined)>})
}

export interface ForkPromiseChain{
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    number: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})
}

export interface ForkObservableChain{
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    number: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})
}

export interface UserPromiseChain{
    
/** Some description */
name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    common: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})
}

export interface UserObservableChain{
    
/** Some description */
name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    common: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})
}

export interface SubscriptionPromiseChain{
    user: (UserPromiseChain & {get: <R extends UserRequest>(request: R, defaultValue?: (FieldsSelection<User, R> | undefined)) => Promise<(FieldsSelection<User, R> | undefined)>})
}

export interface SubscriptionObservableChain{
    user: (UserObservableChain & {get: <R extends UserRequest>(request: R, defaultValue?: (FieldsSelection<User, R> | undefined)) => Observable<(FieldsSelection<User, R> | undefined)>})
}

export interface GuestPromiseChain{
    anonymous: ({get: (request?: boolean|number, defaultValue?: (Scalars['Boolean'] | undefined)) => Promise<(Scalars['Boolean'] | undefined)>}),
    common: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})
}

export interface GuestObservableChain{
    anonymous: ({get: (request?: boolean|number, defaultValue?: (Scalars['Boolean'] | undefined)) => Observable<(Scalars['Boolean'] | undefined)>}),
    common: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})
}

export interface HousePromiseChain{
    owner: (UserPromiseChain & {get: <R extends UserRequest>(request: R, defaultValue?: (FieldsSelection<User, R> | undefined)) => Promise<(FieldsSelection<User, R> | undefined)>}),
    x: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    y: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}

export interface HouseObservableChain{
    owner: (UserObservableChain & {get: <R extends UserRequest>(request: R, defaultValue?: (FieldsSelection<User, R> | undefined)) => Observable<(FieldsSelection<User, R> | undefined)>}),
    x: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    y: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}

export interface BankPromiseChain{
    address: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    x: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    y: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}

export interface BankObservableChain{
    address: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    x: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    y: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}

export interface PointPromiseChain{
    x: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    y: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}

export interface PointObservableChain{
    x: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    y: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}

export interface ClientErrorPromiseChain{
    message: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface ClientErrorObservableChain{
    message: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface ClientErrorNameAlreadyTakenPromiseChain{
    message: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    ownProp1: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}

export interface ClientErrorNameAlreadyTakenObservableChain{
    message: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    ownProp1: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}

export interface ClientErrorNameInvalidPromiseChain{
    message: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    ownProp2: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}

export interface ClientErrorNameInvalidObservableChain{
    message: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    ownProp2: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}