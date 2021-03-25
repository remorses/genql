import {FieldsSelection,Observable} from '@genql/runtime'

export type Scalars = {
    String: string,
    ID: string,
    Boolean: boolean,
    Upload: any,
    Int: number,
}

export interface Query {
    continents: Continent[]
    continent?: Continent
    countries: Country[]
    country?: Country
    languages: Language[]
    language?: Language
    __typename: 'Query'
}

export interface Continent {
    code: Scalars['ID']
    name: Scalars['String']
    countries: Country[]
    __typename: 'Continent'
}

export interface Country {
    code: Scalars['ID']
    name: Scalars['String']
    native: Scalars['String']
    phone: Scalars['String']
    continent: Continent
    capital?: Scalars['String']
    currency?: Scalars['String']
    languages: Language[]
    emoji: Scalars['String']
    emojiU: Scalars['String']
    states: State[]
    __typename: 'Country'
}

export interface Language {
    code: Scalars['ID']
    name?: Scalars['String']
    native?: Scalars['String']
    rtl: Scalars['Boolean']
    __typename: 'Language'
}

export interface State {
    code?: Scalars['String']
    name: Scalars['String']
    country: Country
    __typename: 'State'
}

export type CacheControlScope = 'PUBLIC' | 'PRIVATE'

export interface QueryRequest{
    continents?: [{filter?: (ContinentFilterInput | null)},ContinentRequest] | ContinentRequest
    continent?: [{code: Scalars['ID']},ContinentRequest]
    countries?: [{filter?: (CountryFilterInput | null)},CountryRequest] | CountryRequest
    country?: [{code: Scalars['ID']},CountryRequest]
    languages?: [{filter?: (LanguageFilterInput | null)},LanguageRequest] | LanguageRequest
    language?: [{code: Scalars['ID']},LanguageRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ContinentFilterInput {code?: (StringQueryOperatorInput | null)}

export interface StringQueryOperatorInput {eq?: (Scalars['String'] | null),ne?: (Scalars['String'] | null),in?: ((Scalars['String'] | null)[] | null),nin?: ((Scalars['String'] | null)[] | null),regex?: (Scalars['String'] | null),glob?: (Scalars['String'] | null)}

export interface ContinentRequest{
    code?: boolean | number
    name?: boolean | number
    countries?: CountryRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CountryRequest{
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

export interface LanguageRequest{
    code?: boolean | number
    name?: boolean | number
    native?: boolean | number
    rtl?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StateRequest{
    code?: boolean | number
    name?: boolean | number
    country?: CountryRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CountryFilterInput {code?: (StringQueryOperatorInput | null),currency?: (StringQueryOperatorInput | null),continent?: (StringQueryOperatorInput | null)}

export interface LanguageFilterInput {code?: (StringQueryOperatorInput | null)}


const Query_possibleTypes = ['Query']
export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



const Continent_possibleTypes = ['Continent']
export const isContinent = (obj?: { __typename?: any } | null): obj is Continent => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isContinent"')
  return Continent_possibleTypes.includes(obj.__typename)
}



const Country_possibleTypes = ['Country']
export const isCountry = (obj?: { __typename?: any } | null): obj is Country => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCountry"')
  return Country_possibleTypes.includes(obj.__typename)
}



const Language_possibleTypes = ['Language']
export const isLanguage = (obj?: { __typename?: any } | null): obj is Language => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isLanguage"')
  return Language_possibleTypes.includes(obj.__typename)
}



const State_possibleTypes = ['State']
export const isState = (obj?: { __typename?: any } | null): obj is State => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isState"')
  return State_possibleTypes.includes(obj.__typename)
}


export interface QueryPromiseChain{
    continents: ((args?: {filter?: (ContinentFilterInput | null)}) => {get: <R extends ContinentRequest>(request: R, defaultValue?: FieldsSelection<Continent, R>[]) => Promise<FieldsSelection<Continent, R>[]>})&({get: <R extends ContinentRequest>(request: R, defaultValue?: FieldsSelection<Continent, R>[]) => Promise<FieldsSelection<Continent, R>[]>}),
    continent: ((args: {code: Scalars['ID']}) => ContinentPromiseChain & {get: <R extends ContinentRequest>(request: R, defaultValue?: (FieldsSelection<Continent, R> | undefined)) => Promise<(FieldsSelection<Continent, R> | undefined)>}),
    countries: ((args?: {filter?: (CountryFilterInput | null)}) => {get: <R extends CountryRequest>(request: R, defaultValue?: FieldsSelection<Country, R>[]) => Promise<FieldsSelection<Country, R>[]>})&({get: <R extends CountryRequest>(request: R, defaultValue?: FieldsSelection<Country, R>[]) => Promise<FieldsSelection<Country, R>[]>}),
    country: ((args: {code: Scalars['ID']}) => CountryPromiseChain & {get: <R extends CountryRequest>(request: R, defaultValue?: (FieldsSelection<Country, R> | undefined)) => Promise<(FieldsSelection<Country, R> | undefined)>}),
    languages: ((args?: {filter?: (LanguageFilterInput | null)}) => {get: <R extends LanguageRequest>(request: R, defaultValue?: FieldsSelection<Language, R>[]) => Promise<FieldsSelection<Language, R>[]>})&({get: <R extends LanguageRequest>(request: R, defaultValue?: FieldsSelection<Language, R>[]) => Promise<FieldsSelection<Language, R>[]>}),
    language: ((args: {code: Scalars['ID']}) => LanguagePromiseChain & {get: <R extends LanguageRequest>(request: R, defaultValue?: (FieldsSelection<Language, R> | undefined)) => Promise<(FieldsSelection<Language, R> | undefined)>})
}

export interface QueryObservableChain{
    continents: ((args?: {filter?: (ContinentFilterInput | null)}) => {get: <R extends ContinentRequest>(request: R, defaultValue?: FieldsSelection<Continent, R>[]) => Observable<FieldsSelection<Continent, R>[]>})&({get: <R extends ContinentRequest>(request: R, defaultValue?: FieldsSelection<Continent, R>[]) => Observable<FieldsSelection<Continent, R>[]>}),
    continent: ((args: {code: Scalars['ID']}) => ContinentObservableChain & {get: <R extends ContinentRequest>(request: R, defaultValue?: (FieldsSelection<Continent, R> | undefined)) => Observable<(FieldsSelection<Continent, R> | undefined)>}),
    countries: ((args?: {filter?: (CountryFilterInput | null)}) => {get: <R extends CountryRequest>(request: R, defaultValue?: FieldsSelection<Country, R>[]) => Observable<FieldsSelection<Country, R>[]>})&({get: <R extends CountryRequest>(request: R, defaultValue?: FieldsSelection<Country, R>[]) => Observable<FieldsSelection<Country, R>[]>}),
    country: ((args: {code: Scalars['ID']}) => CountryObservableChain & {get: <R extends CountryRequest>(request: R, defaultValue?: (FieldsSelection<Country, R> | undefined)) => Observable<(FieldsSelection<Country, R> | undefined)>}),
    languages: ((args?: {filter?: (LanguageFilterInput | null)}) => {get: <R extends LanguageRequest>(request: R, defaultValue?: FieldsSelection<Language, R>[]) => Observable<FieldsSelection<Language, R>[]>})&({get: <R extends LanguageRequest>(request: R, defaultValue?: FieldsSelection<Language, R>[]) => Observable<FieldsSelection<Language, R>[]>}),
    language: ((args: {code: Scalars['ID']}) => LanguageObservableChain & {get: <R extends LanguageRequest>(request: R, defaultValue?: (FieldsSelection<Language, R> | undefined)) => Observable<(FieldsSelection<Language, R> | undefined)>})
}

export interface ContinentPromiseChain{
    code: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    countries: ({get: <R extends CountryRequest>(request: R, defaultValue?: FieldsSelection<Country, R>[]) => Promise<FieldsSelection<Country, R>[]>})
}

export interface ContinentObservableChain{
    code: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    countries: ({get: <R extends CountryRequest>(request: R, defaultValue?: FieldsSelection<Country, R>[]) => Observable<FieldsSelection<Country, R>[]>})
}

export interface CountryPromiseChain{
    code: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    native: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    phone: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    continent: (ContinentPromiseChain & {get: <R extends ContinentRequest>(request: R, defaultValue?: FieldsSelection<Continent, R>) => Promise<FieldsSelection<Continent, R>>}),
    capital: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    currency: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    languages: ({get: <R extends LanguageRequest>(request: R, defaultValue?: FieldsSelection<Language, R>[]) => Promise<FieldsSelection<Language, R>[]>}),
    emoji: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    emojiU: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    states: ({get: <R extends StateRequest>(request: R, defaultValue?: FieldsSelection<State, R>[]) => Promise<FieldsSelection<State, R>[]>})
}

export interface CountryObservableChain{
    code: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    native: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    phone: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    continent: (ContinentObservableChain & {get: <R extends ContinentRequest>(request: R, defaultValue?: FieldsSelection<Continent, R>) => Observable<FieldsSelection<Continent, R>>}),
    capital: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    currency: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    languages: ({get: <R extends LanguageRequest>(request: R, defaultValue?: FieldsSelection<Language, R>[]) => Observable<FieldsSelection<Language, R>[]>}),
    emoji: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    emojiU: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    states: ({get: <R extends StateRequest>(request: R, defaultValue?: FieldsSelection<State, R>[]) => Observable<FieldsSelection<State, R>[]>})
}

export interface LanguagePromiseChain{
    code: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    native: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    rtl: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>})
}

export interface LanguageObservableChain{
    code: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    native: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    rtl: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>})
}

export interface StatePromiseChain{
    code: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    country: (CountryPromiseChain & {get: <R extends CountryRequest>(request: R, defaultValue?: FieldsSelection<Country, R>) => Promise<FieldsSelection<Country, R>>})
}

export interface StateObservableChain{
    code: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    country: (CountryObservableChain & {get: <R extends CountryRequest>(request: R, defaultValue?: FieldsSelection<Country, R>) => Observable<FieldsSelection<Country, R>>})
}