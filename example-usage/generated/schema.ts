import {FieldsSelection,Observable} from '@genql/runtime'

export type Scalars = {
    Boolean: boolean,
    String: string,
    ID: string,
    _Any: any,
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

export interface Continent {
    code: Scalars['ID']
    name: Scalars['String']
    countries: Country[]
    __typename: 'Continent'
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

export interface Query {
    _entities: (_Entity | undefined)[]
    _service: _Service
    countries: Country[]
    country?: Country
    continents: Continent[]
    continent?: Continent
    languages: Language[]
    language?: Language
    __typename: 'Query'
}

export type _Entity = (Country | Continent | Language) & { __isUnion?: true }

export interface _Service {
    /** The sdl representing the federated service capabilities. Includes federation directives, removes federation types, and includes rest of full schema after schema directives have been applied */
    sdl?: Scalars['String']
    __typename: '_Service'
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

export interface ContinentRequest{
    code?: boolean | number
    name?: boolean | number
    countries?: CountryRequest
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

export interface StringQueryOperatorInput {eq?: (Scalars['String'] | null),ne?: (Scalars['String'] | null),in?: ((Scalars['String'] | null)[] | null),nin?: ((Scalars['String'] | null)[] | null),regex?: (Scalars['String'] | null),glob?: (Scalars['String'] | null)}

export interface CountryFilterInput {code?: (StringQueryOperatorInput | null),currency?: (StringQueryOperatorInput | null),continent?: (StringQueryOperatorInput | null)}

export interface ContinentFilterInput {code?: (StringQueryOperatorInput | null)}

export interface LanguageFilterInput {code?: (StringQueryOperatorInput | null)}

export interface QueryRequest{
    _entities?: [{representations: Scalars['_Any'][]},_EntityRequest]
    _service?: _ServiceRequest
    countries?: [{filter?: (CountryFilterInput | null)},CountryRequest] | CountryRequest
    country?: [{code: Scalars['ID']},CountryRequest]
    continents?: [{filter?: (ContinentFilterInput | null)},ContinentRequest] | ContinentRequest
    continent?: [{code: Scalars['ID']},ContinentRequest]
    languages?: [{filter?: (LanguageFilterInput | null)},LanguageRequest] | LanguageRequest
    language?: [{code: Scalars['ID']},LanguageRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface _EntityRequest{
    on_Country?:CountryRequest,
    on_Continent?:ContinentRequest,
    on_Language?:LanguageRequest,
    __typename?: boolean | number
}

export interface _ServiceRequest{
    /** The sdl representing the federated service capabilities. Includes federation directives, removes federation types, and includes rest of full schema after schema directives have been applied */
    sdl?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


const Country_possibleTypes: string[] = ['Country']
export const isCountry = (obj?: { __typename?: any } | null): obj is Country => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCountry"')
  return Country_possibleTypes.includes(obj.__typename)
}



const Continent_possibleTypes: string[] = ['Continent']
export const isContinent = (obj?: { __typename?: any } | null): obj is Continent => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isContinent"')
  return Continent_possibleTypes.includes(obj.__typename)
}



const Language_possibleTypes: string[] = ['Language']
export const isLanguage = (obj?: { __typename?: any } | null): obj is Language => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isLanguage"')
  return Language_possibleTypes.includes(obj.__typename)
}



const State_possibleTypes: string[] = ['State']
export const isState = (obj?: { __typename?: any } | null): obj is State => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isState"')
  return State_possibleTypes.includes(obj.__typename)
}



const Query_possibleTypes: string[] = ['Query']
export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



const _Entity_possibleTypes: string[] = ['Country','Continent','Language']
export const is_Entity = (obj?: { __typename?: any } | null): obj is _Entity => {
  if (!obj?.__typename) throw new Error('__typename is missing in "is_Entity"')
  return _Entity_possibleTypes.includes(obj.__typename)
}



const _Service_possibleTypes: string[] = ['_Service']
export const is_Service = (obj?: { __typename?: any } | null): obj is _Service => {
  if (!obj?.__typename) throw new Error('__typename is missing in "is_Service"')
  return _Service_possibleTypes.includes(obj.__typename)
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

export interface QueryPromiseChain{
    _entities: ((args: {representations: Scalars['_Any'][]}) => {get: <R extends _EntityRequest>(request: R, defaultValue?: (FieldsSelection<_Entity, R> | undefined)[]) => Promise<(FieldsSelection<_Entity, R> | undefined)[]>}),
    _service: (_ServicePromiseChain & {get: <R extends _ServiceRequest>(request: R, defaultValue?: FieldsSelection<_Service, R>) => Promise<FieldsSelection<_Service, R>>}),
    countries: ((args?: {filter?: (CountryFilterInput | null)}) => {get: <R extends CountryRequest>(request: R, defaultValue?: FieldsSelection<Country, R>[]) => Promise<FieldsSelection<Country, R>[]>})&({get: <R extends CountryRequest>(request: R, defaultValue?: FieldsSelection<Country, R>[]) => Promise<FieldsSelection<Country, R>[]>}),
    country: ((args: {code: Scalars['ID']}) => CountryPromiseChain & {get: <R extends CountryRequest>(request: R, defaultValue?: (FieldsSelection<Country, R> | undefined)) => Promise<(FieldsSelection<Country, R> | undefined)>}),
    continents: ((args?: {filter?: (ContinentFilterInput | null)}) => {get: <R extends ContinentRequest>(request: R, defaultValue?: FieldsSelection<Continent, R>[]) => Promise<FieldsSelection<Continent, R>[]>})&({get: <R extends ContinentRequest>(request: R, defaultValue?: FieldsSelection<Continent, R>[]) => Promise<FieldsSelection<Continent, R>[]>}),
    continent: ((args: {code: Scalars['ID']}) => ContinentPromiseChain & {get: <R extends ContinentRequest>(request: R, defaultValue?: (FieldsSelection<Continent, R> | undefined)) => Promise<(FieldsSelection<Continent, R> | undefined)>}),
    languages: ((args?: {filter?: (LanguageFilterInput | null)}) => {get: <R extends LanguageRequest>(request: R, defaultValue?: FieldsSelection<Language, R>[]) => Promise<FieldsSelection<Language, R>[]>})&({get: <R extends LanguageRequest>(request: R, defaultValue?: FieldsSelection<Language, R>[]) => Promise<FieldsSelection<Language, R>[]>}),
    language: ((args: {code: Scalars['ID']}) => LanguagePromiseChain & {get: <R extends LanguageRequest>(request: R, defaultValue?: (FieldsSelection<Language, R> | undefined)) => Promise<(FieldsSelection<Language, R> | undefined)>})
}

export interface QueryObservableChain{
    _entities: ((args: {representations: Scalars['_Any'][]}) => {get: <R extends _EntityRequest>(request: R, defaultValue?: (FieldsSelection<_Entity, R> | undefined)[]) => Observable<(FieldsSelection<_Entity, R> | undefined)[]>}),
    _service: (_ServiceObservableChain & {get: <R extends _ServiceRequest>(request: R, defaultValue?: FieldsSelection<_Service, R>) => Observable<FieldsSelection<_Service, R>>}),
    countries: ((args?: {filter?: (CountryFilterInput | null)}) => {get: <R extends CountryRequest>(request: R, defaultValue?: FieldsSelection<Country, R>[]) => Observable<FieldsSelection<Country, R>[]>})&({get: <R extends CountryRequest>(request: R, defaultValue?: FieldsSelection<Country, R>[]) => Observable<FieldsSelection<Country, R>[]>}),
    country: ((args: {code: Scalars['ID']}) => CountryObservableChain & {get: <R extends CountryRequest>(request: R, defaultValue?: (FieldsSelection<Country, R> | undefined)) => Observable<(FieldsSelection<Country, R> | undefined)>}),
    continents: ((args?: {filter?: (ContinentFilterInput | null)}) => {get: <R extends ContinentRequest>(request: R, defaultValue?: FieldsSelection<Continent, R>[]) => Observable<FieldsSelection<Continent, R>[]>})&({get: <R extends ContinentRequest>(request: R, defaultValue?: FieldsSelection<Continent, R>[]) => Observable<FieldsSelection<Continent, R>[]>}),
    continent: ((args: {code: Scalars['ID']}) => ContinentObservableChain & {get: <R extends ContinentRequest>(request: R, defaultValue?: (FieldsSelection<Continent, R> | undefined)) => Observable<(FieldsSelection<Continent, R> | undefined)>}),
    languages: ((args?: {filter?: (LanguageFilterInput | null)}) => {get: <R extends LanguageRequest>(request: R, defaultValue?: FieldsSelection<Language, R>[]) => Observable<FieldsSelection<Language, R>[]>})&({get: <R extends LanguageRequest>(request: R, defaultValue?: FieldsSelection<Language, R>[]) => Observable<FieldsSelection<Language, R>[]>}),
    language: ((args: {code: Scalars['ID']}) => LanguageObservableChain & {get: <R extends LanguageRequest>(request: R, defaultValue?: (FieldsSelection<Language, R> | undefined)) => Observable<(FieldsSelection<Language, R> | undefined)>})
}

export interface _ServicePromiseChain{
    
/** The sdl representing the federated service capabilities. Includes federation directives, removes federation types, and includes rest of full schema after schema directives have been applied */
sdl: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}

export interface _ServiceObservableChain{
    
/** The sdl representing the federated service capabilities. Includes federation directives, removes federation types, and includes rest of full schema after schema directives have been applied */
sdl: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}