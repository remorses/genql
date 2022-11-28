export { createClient, ClientOptions } from './client/createClient'
export { FieldsSelection } from './client/typeSelection'
export { NoExtraProperties } from './types'
export {
    generateGraphqlOperation,
    GraphqlOperation,
} from './client/generateGraphqlOperation'
export { linkTypeMap } from './client/linkTypeMap'
export { Observable } from 'zen-observable-ts'
export { createFetcher } from './fetcher'
export { ClientError } from './error'
export const everything = {
    __scalar: true,
}
