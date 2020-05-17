export interface ObjectPromiseChain {
  scalar: { get: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  scalarOptionalArgs: ((args?: {
    arg?: String | null
  }) => { get: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }) & {
    get: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null>
  }
  scalarRequiredArgs: (args: {
    arg: String
  }) => { get: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  object: ObjectPromiseChain & { get: (request: ObjectRequest, defaultValue?: Object | null) => Promise<Object | null> }
  objectOptionalArgs: ((args?: {
    arg?: String | null
  }) => ObjectPromiseChain & { get: (request: ObjectRequest, defaultValue?: Object | null) => Promise<Object | null> }) &
    (ObjectPromiseChain & { get: (request: ObjectRequest, defaultValue?: Object | null) => Promise<Object | null> })
  objectRequiredArgs: (args: {
    arg: String
  }) => ObjectPromiseChain & { get: (request: ObjectRequest, defaultValue?: Object | null) => Promise<Object | null> }
  scalarList: {
    get: (request?: boolean | number, defaultValue?: (String | null)[] | null) => Promise<(String | null)[] | null>
  }
  scalarListOptionalArgs: ((args?: {
    arg?: String | null
  }) => {
    get: (request?: boolean | number, defaultValue?: (String | null)[] | null) => Promise<(String | null)[] | null>
  }) & {
    get: (request?: boolean | number, defaultValue?: (String | null)[] | null) => Promise<(String | null)[] | null>
  }
  scalarListRequiredArgs: (args: {
    arg: String
  }) => {
    get: (request?: boolean | number, defaultValue?: (String | null)[] | null) => Promise<(String | null)[] | null>
  }
  objectList: {
    get: (request: ObjectRequest, defaultValue?: (Object | null)[] | null) => Promise<(Object | null)[] | null>
  }
  objectListOptionalArgs: ((args?: {
    arg?: String | null
  }) => {
    get: (request: ObjectRequest, defaultValue?: (Object | null)[] | null) => Promise<(Object | null)[] | null>
  }) & { get: (request: ObjectRequest, defaultValue?: (Object | null)[] | null) => Promise<(Object | null)[] | null> }
  objectListRequiredArgs: (args: {
    arg: String
  }) => { get: (request: ObjectRequest, defaultValue?: (Object | null)[] | null) => Promise<(Object | null)[] | null> }
}

export interface ObjectRequiredPromiseChain {
  scalar: { get: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  scalarOptionalArgs: ((args?: {
    arg?: String | null
  }) => { get: (request?: boolean | number, defaultValue?: String) => Promise<String> }) & {
    get: (request?: boolean | number, defaultValue?: String) => Promise<String>
  }
  scalarRequiredArgs: (args: {
    arg: String
  }) => { get: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  object: ObjectPromiseChain & { get: (request: ObjectRequest, defaultValue?: Object) => Promise<Object> }
  objectOptionalArgs: ((args?: {
    arg?: String | null
  }) => ObjectPromiseChain & { get: (request: ObjectRequest, defaultValue?: Object) => Promise<Object> }) &
    (ObjectPromiseChain & { get: (request: ObjectRequest, defaultValue?: Object) => Promise<Object> })
  objectRequiredArgs: (args: {
    arg: String
  }) => ObjectPromiseChain & { get: (request: ObjectRequest, defaultValue?: Object) => Promise<Object> }
  scalarList: { get: (request?: boolean | number, defaultValue?: String[]) => Promise<String[]> }
  scalarListOptionalArgs: ((args?: {
    arg?: String | null
  }) => { get: (request?: boolean | number, defaultValue?: String[]) => Promise<String[]> }) & {
    get: (request?: boolean | number, defaultValue?: String[]) => Promise<String[]>
  }
  scalarListRequiredArgs: (args: {
    arg: String
  }) => { get: (request?: boolean | number, defaultValue?: String[]) => Promise<String[]> }
  objectList: { get: (request: ObjectRequest, defaultValue?: Object[]) => Promise<Object[]> }
  objectListOptionalArgs: ((args?: {
    arg?: String | null
  }) => { get: (request: ObjectRequest, defaultValue?: Object[]) => Promise<Object[]> }) & {
    get: (request: ObjectRequest, defaultValue?: Object[]) => Promise<Object[]>
  }
  objectListRequiredArgs: (args: {
    arg: String
  }) => { get: (request: ObjectRequest, defaultValue?: Object[]) => Promise<Object[]> }
}
