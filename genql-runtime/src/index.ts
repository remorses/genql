export { createClient, ClientOptions } from './client/createClient'
export { FieldsSelection } from './client/typeSelection'
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

// [bump if genql-runtime]
export const version = '1.1.13'

export function assertSameVersion(generatedWithVersion) {
    if (generatedWithVersion && generatedWithVersion.trim() != version.trim()) {
        console.error(
            '[WARNING]: genql client library has been generated with a different version of `genql-runtime`, update both packages to have the same version!',
        )
    }
}
