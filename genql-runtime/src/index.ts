export { createClient, ClientOptions } from './client/createClient'
export { FieldsSelection } from './client/typeSelection'
export {
    generateGraphqlOperation,
    GraphqlOperation,
} from './client/generateGraphqlOperation'
export { linkTypeMap } from './client/linkTypeMap'
export { Observable } from 'subscriptions-transport-ws'
export { createFetcher } from './fetcher'
export { ClientError } from './error'
export const everything = {
    __scalar: true,
}
