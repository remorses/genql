import {FieldsSelection,Observable} from 'genql-runtime'

export type Scalars = {
    ID: string,
    String: string,
    Boolean: boolean,
}

export interface Query {
    users?: User[]
    __typename?: 'Query'
}


/** foobar */
export interface User {
    id?: Scalars['ID']
    name?: Scalars['String']
    __typename?: 'User'
}

export interface QueryRequest{
    users?: UserRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** foobar */
export interface UserRequest{
    id?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


const Query_possibleTypes = ['Query']
export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



const User_possibleTypes = ['User']
export const isUser = (obj?: { __typename?: any } | null): obj is User => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUser"')
  return User_possibleTypes.includes(obj.__typename)
}


export interface QueryPromiseChain{users:({get: (request: UserRequest, defaultValue?:(User[] | null))=>Promise<(User[] | null)>})}

export interface QueryObservableChain{users:({get: (request: UserRequest, defaultValue?:(User[] | null))=>Observable<(User[] | null)>})}


/** foobar */
export interface UserPromiseChain{id:({get:(request?:boolean|number,defaultValue?:(Scalars['ID'] | null))=>Promise<(Scalars['ID'] | null)>}),name:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>})}


/** foobar */
export interface UserObservableChain{id:({get:(request?:boolean|number,defaultValue?:(Scalars['ID'] | null))=>Observable<(Scalars['ID'] | null)>}),name:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>})}