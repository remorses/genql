

export { createClient, ClientOptions } from './client/createClient'
export { FieldsSelection } from './client/typeSelection'
export type { NoExtraProperties } from './types'
export {
    generateGraphqlOperation,
} from './client/generateGraphqlOperation'
export type {
    GraphqlOperation,
} from './client/generateGraphqlOperation'
export { linkTypeMap } from './client/linkTypeMap'
export { Observable } from 'zen-observable-ts'
export { createFetcher } from './fetcher'
export { ClientError } from './error'
export const everything = {
    __scalar: true,
}
