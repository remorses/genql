import {FieldsSelection,Observable} from '@genql/runtime'

export type Scalars = {
    Boolean: boolean,
    ID: string,
    String: string,
}

export interface Query {
    users?: User[]
    __typename: 'Query'
}


/** foobar */
export interface User {
    id?: Scalars['ID']
    name?: Scalars['String']
    __typename: 'User'
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


const Query_possibleTypes: string[] = ['Query']
export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



const User_possibleTypes: string[] = ['User']
export const isUser = (obj?: { __typename?: any } | null): obj is User => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUser"')
  return User_possibleTypes.includes(obj.__typename)
}


export interface QueryPromiseChain{
    users: ({get: <R extends UserRequest>(request: R, defaultValue?: (FieldsSelection<User, R>[] | undefined)) => Promise<(FieldsSelection<User, R>[] | undefined)>})
}

export interface QueryObservableChain{
    users: ({get: <R extends UserRequest>(request: R, defaultValue?: (FieldsSelection<User, R>[] | undefined)) => Observable<(FieldsSelection<User, R>[] | undefined)>})
}


/** foobar */
export interface UserPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['ID'] | undefined)) => Promise<(Scalars['ID'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** foobar */
export interface UserObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['ID'] | undefined)) => Observable<(Scalars['ID'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}