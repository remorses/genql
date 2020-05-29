import { FieldsSelection, Observable } from 'genql-runtime'

export interface Query {
  continents: Continent[]
  continent: Continent | null
  countries: Country[]
  country: Country | null
  languages: Language[]
  language: Language | null
  __typename: 'Query'
}

/** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
export type String = string

export interface Continent {
  code: ID
  name: String
  countries: Country[]
  __typename: 'Continent'
}

/** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
export type ID = string

export interface Country {
  code: ID
  name: String
  native: String
  phone: String
  continent: Continent
  capital: String | null
  currency: String | null
  languages: Language[]
  emoji: String
  emojiU: String
  states: State[]
  __typename: 'Country'
}

export interface Language {
  code: ID
  name: String | null
  native: String | null
  rtl: Boolean
  __typename: 'Language'
}

/** The `Boolean` scalar type represents `true` or `false`. */
export type Boolean = boolean

export interface State {
  code: String | null
  name: String
  country: Country
  __typename: 'State'
}

export enum CacheControlScope {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}

/** The `Upload` scalar type represents a file upload. */
export type Upload = any

/** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
export type Int = number

export interface QueryRequest {
  continents?: [{ filter?: ContinentFilterInput | null }, ContinentRequest] | ContinentRequest
  continent?: [{ code: ID }, ContinentRequest]
  countries?: [{ filter?: CountryFilterInput | null }, CountryRequest] | CountryRequest
  country?: [{ code: ID }, CountryRequest]
  languages?: [{ filter?: LanguageFilterInput | null }, LanguageRequest] | LanguageRequest
  language?: [{ code: ID }, LanguageRequest]
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface ContinentFilterInput {
  code?: StringQueryOperatorInput | null
}

export interface StringQueryOperatorInput {
  eq?: String | null
  ne?: String | null
  in?: (String | null)[] | null
  nin?: (String | null)[] | null
  regex?: String | null
  glob?: String | null
}

export interface ContinentRequest {
  code?: boolean | number
  name?: boolean | number
  countries?: CountryRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface CountryRequest {
  code?: boolean | number
  name?: boolean | number
  native?: boolean | number
  phone?: boolean | number
  continent?: ContinentRequest
  capital?: boolean | number
  currency?: boolean | number
  languages?: LanguageRequest
  emoji?: boolean | number
  emojiU?: boolean | number
  states?: StateRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface LanguageRequest {
  code?: boolean | number
  name?: boolean | number
  native?: boolean | number
  rtl?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface StateRequest {
  code?: boolean | number
  name?: boolean | number
  country?: CountryRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface CountryFilterInput {
  code?: StringQueryOperatorInput | null
  currency?: StringQueryOperatorInput | null
  continent?: StringQueryOperatorInput | null
}

export interface LanguageFilterInput {
  code?: StringQueryOperatorInput | null
}

const Query_possibleTypes = ['Query']
export const isQuery = (obj: { __typename: String }): obj is Query => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Query_possibleTypes.includes(obj.__typename)
}

const Continent_possibleTypes = ['Continent']
export const isContinent = (obj: { __typename: String }): obj is Continent => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Continent_possibleTypes.includes(obj.__typename)
}

const Country_possibleTypes = ['Country']
export const isCountry = (obj: { __typename: String }): obj is Country => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Country_possibleTypes.includes(obj.__typename)
}

const Language_possibleTypes = ['Language']
export const isLanguage = (obj: { __typename: String }): obj is Language => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Language_possibleTypes.includes(obj.__typename)
}

const State_possibleTypes = ['State']
export const isState = (obj: { __typename: String }): obj is State => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return State_possibleTypes.includes(obj.__typename)
}

export interface QueryPromiseChain {
  continents: ((args?: {
    filter?: ContinentFilterInput | null
  }) => { get: <R extends ContinentRequest>(request: R, defaultValue?: Continent[]) => Promise<Continent[]> }) & {
    get: <R extends ContinentRequest>(request: R, defaultValue?: Continent[]) => Promise<Continent[]>
  }
  continent: (args: {
    code: ID
  }) => ContinentPromiseChain & {
    get: <R extends ContinentRequest>(
      request: R,
      defaultValue?: FieldsSelection<Continent, R> | null,
    ) => Promise<FieldsSelection<Continent, R> | null>
  }
  countries: ((args?: {
    filter?: CountryFilterInput | null
  }) => { get: <R extends CountryRequest>(request: R, defaultValue?: Country[]) => Promise<Country[]> }) & {
    get: <R extends CountryRequest>(request: R, defaultValue?: Country[]) => Promise<Country[]>
  }
  country: (args: {
    code: ID
  }) => CountryPromiseChain & {
    get: <R extends CountryRequest>(
      request: R,
      defaultValue?: FieldsSelection<Country, R> | null,
    ) => Promise<FieldsSelection<Country, R> | null>
  }
  languages: ((args?: {
    filter?: LanguageFilterInput | null
  }) => { get: <R extends LanguageRequest>(request: R, defaultValue?: Language[]) => Promise<Language[]> }) & {
    get: <R extends LanguageRequest>(request: R, defaultValue?: Language[]) => Promise<Language[]>
  }
  language: (args: {
    code: ID
  }) => LanguagePromiseChain & {
    get: <R extends LanguageRequest>(
      request: R,
      defaultValue?: FieldsSelection<Language, R> | null,
    ) => Promise<FieldsSelection<Language, R> | null>
  }
}

export interface QueryObservableChain {
  continents: ((args?: {
    filter?: ContinentFilterInput | null
  }) => { get: <R extends ContinentRequest>(request: R, defaultValue?: Continent[]) => Observable<Continent[]> }) & {
    get: <R extends ContinentRequest>(request: R, defaultValue?: Continent[]) => Observable<Continent[]>
  }
  continent: (args: {
    code: ID
  }) => ContinentObservableChain & {
    get: <R extends ContinentRequest>(
      request: R,
      defaultValue?: FieldsSelection<Continent, R> | null,
    ) => Observable<FieldsSelection<Continent, R> | null>
  }
  countries: ((args?: {
    filter?: CountryFilterInput | null
  }) => { get: <R extends CountryRequest>(request: R, defaultValue?: Country[]) => Observable<Country[]> }) & {
    get: <R extends CountryRequest>(request: R, defaultValue?: Country[]) => Observable<Country[]>
  }
  country: (args: {
    code: ID
  }) => CountryObservableChain & {
    get: <R extends CountryRequest>(
      request: R,
      defaultValue?: FieldsSelection<Country, R> | null,
    ) => Observable<FieldsSelection<Country, R> | null>
  }
  languages: ((args?: {
    filter?: LanguageFilterInput | null
  }) => { get: <R extends LanguageRequest>(request: R, defaultValue?: Language[]) => Observable<Language[]> }) & {
    get: <R extends LanguageRequest>(request: R, defaultValue?: Language[]) => Observable<Language[]>
  }
  language: (args: {
    code: ID
  }) => LanguageObservableChain & {
    get: <R extends LanguageRequest>(
      request: R,
      defaultValue?: FieldsSelection<Language, R> | null,
    ) => Observable<FieldsSelection<Language, R> | null>
  }
}

export interface ContinentPromiseChain {
  code: { get: (request?: boolean | number, defaultValue?: ID) => Promise<ID> }
  name: { get: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  countries: { get: <R extends CountryRequest>(request: R, defaultValue?: Country[]) => Promise<Country[]> }
}

export interface ContinentObservableChain {
  code: { get: (request?: boolean | number, defaultValue?: ID) => Observable<ID> }
  name: { get: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  countries: { get: <R extends CountryRequest>(request: R, defaultValue?: Country[]) => Observable<Country[]> }
}

export interface CountryPromiseChain {
  code: { get: (request?: boolean | number, defaultValue?: ID) => Promise<ID> }
  name: { get: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  native: { get: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  phone: { get: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  continent: ContinentPromiseChain & {
    get: <R extends ContinentRequest>(request: R, defaultValue?: Continent) => Promise<Continent>
  }
  capital: { get: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  currency: { get: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  languages: { get: <R extends LanguageRequest>(request: R, defaultValue?: Language[]) => Promise<Language[]> }
  emoji: { get: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  emojiU: { get: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  states: { get: <R extends StateRequest>(request: R, defaultValue?: State[]) => Promise<State[]> }
}

export interface CountryObservableChain {
  code: { get: (request?: boolean | number, defaultValue?: ID) => Observable<ID> }
  name: { get: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  native: { get: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  phone: { get: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  continent: ContinentObservableChain & {
    get: <R extends ContinentRequest>(request: R, defaultValue?: Continent) => Observable<Continent>
  }
  capital: { get: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  currency: { get: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  languages: { get: <R extends LanguageRequest>(request: R, defaultValue?: Language[]) => Observable<Language[]> }
  emoji: { get: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  emojiU: { get: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  states: { get: <R extends StateRequest>(request: R, defaultValue?: State[]) => Observable<State[]> }
}

export interface LanguagePromiseChain {
  code: { get: (request?: boolean | number, defaultValue?: ID) => Promise<ID> }
  name: { get: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  native: { get: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  rtl: { get: (request?: boolean | number, defaultValue?: Boolean) => Promise<Boolean> }
}

export interface LanguageObservableChain {
  code: { get: (request?: boolean | number, defaultValue?: ID) => Observable<ID> }
  name: { get: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  native: { get: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  rtl: { get: (request?: boolean | number, defaultValue?: Boolean) => Observable<Boolean> }
}

export interface StatePromiseChain {
  code: { get: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  name: { get: (request?: boolean | number, defaultValue?: String) => Promise<String> }
  country: CountryPromiseChain & { get: <R extends CountryRequest>(request: R, defaultValue?: Country) => Promise<Country> }
}

export interface StateObservableChain {
  code: { get: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  name: { get: (request?: boolean | number, defaultValue?: String) => Observable<String> }
  country: CountryObservableChain & {
    get: <R extends CountryRequest>(request: R, defaultValue?: Country) => Observable<Country>
  }
}
