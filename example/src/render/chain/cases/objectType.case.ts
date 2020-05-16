export interface ObjectPromiseChain {
  scalar: { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  scalarOptionalArgs: ((args?: {
    arg?: String | null
  }) => { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }) & {
    execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null>
  }
  scalarRequiredArgs: (args: {
    arg: String
  }) => { execute: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  object: ObjectPromiseChain & { execute: (request: ObjectRequest, defaultValue?: Object | null) => Promise<Object | null> }
  objectOptionalArgs: ((args?: {
    arg?: String | null
  }) => ObjectPromiseChain & { execute: (request: ObjectRequest, defaultValue?: Object | null) => Promise<Object | null> }) &
    (ObjectPromiseChain & { execute: (request: ObjectRequest, defaultValue?: Object | null) => Promise<Object | null> })
  objectRequiredArgs: (args: {
    arg: String
  }) => ObjectPromiseChain & { execute: (request: ObjectRequest, defaultValue?: Object | null) => Promise<Object | null> }
  scalarList: {
    execute: (request?: boolean | number, defaultValue?: (String | null)[] | null) => Promise<(String | null)[] | null>
  }
  scalarListOptionalArgs: ((args?: {
    arg?: String | null
  }) => {
    execute: (request?: boolean | number, defaultValue?: (String | null)[] | null) => Promise<(String | null)[] | null>
  }) & {
    execute: (request?: boolean | number, defaultValue?: (String | null)[] | null) => Promise<(String | null)[] | null>
  }
  scalarListRequiredArgs: (args: {
    arg: String
  }) => {
    execute: (request?: boolean | number, defaultValue?: (String | null)[] | null) => Promise<(String | null)[] | null>
  }
  objectList: {
    execute: (request: ObjectRequest, defaultValue?: (Object | null)[] | null) => Promise<(Object | null)[] | null>
  }
  objectListOptionalArgs: ((args?: {
    arg?: String | null
  }) => {
    execute: (request: ObjectRequest, defaultValue?: (Object | null)[] | null) => Promise<(Object | null)[] | null>
  }) & { execute: (request: ObjectRequest, defaultValue?: (Object | null)[] | null) => Promise<(Object | null)[] | null> }
  objectListRequiredArgs: (args: {
    arg: String
  }) => { execute: (request: ObjectRequest, defaultValue?: (Object | null)[] | null) => Promise<(Object | null)[] | null> }
}

export interface ObjectRequiredPromiseChain {
  scalar: { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  scalarOptionalArgs: ((args?: {
    arg?: String | null
  }) => { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }) & {
    execute: (request?: boolean | number, defaultValue?: String) => Promise<String>
  }
  scalarRequiredArgs: (args: {
    arg: String
  }) => { execute: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  object: ObjectPromiseChain & { execute: (request: ObjectRequest, defaultValue?: Object) => Promise<Object> }
  objectOptionalArgs: ((args?: {
    arg?: String | null
  }) => ObjectPromiseChain & { execute: (request: ObjectRequest, defaultValue?: Object) => Promise<Object> }) &
    (ObjectPromiseChain & { execute: (request: ObjectRequest, defaultValue?: Object) => Promise<Object> })
  objectRequiredArgs: (args: {
    arg: String
  }) => ObjectPromiseChain & { execute: (request: ObjectRequest, defaultValue?: Object) => Promise<Object> }
  scalarList: { execute: (request?: boolean | number, defaultValue?: String[]) => Promise<String[]> }
  scalarListOptionalArgs: ((args?: {
    arg?: String | null
  }) => { execute: (request?: boolean | number, defaultValue?: String[]) => Promise<String[]> }) & {
    execute: (request?: boolean | number, defaultValue?: String[]) => Promise<String[]>
  }
  scalarListRequiredArgs: (args: {
    arg: String
  }) => { execute: (request?: boolean | number, defaultValue?: String[]) => Promise<String[]> }
  objectList: { execute: (request: ObjectRequest, defaultValue?: Object[]) => Promise<Object[]> }
  objectListOptionalArgs: ((args?: {
    arg?: String | null
  }) => { execute: (request: ObjectRequest, defaultValue?: Object[]) => Promise<Object[]> }) & {
    execute: (request: ObjectRequest, defaultValue?: Object[]) => Promise<Object[]>
  }
  objectListRequiredArgs: (args: {
    arg: String
  }) => { execute: (request: ObjectRequest, defaultValue?: Object[]) => Promise<Object[]> }
}
