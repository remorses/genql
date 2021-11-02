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

export function assertSameVersion(generatedWithVersion) {
    try {
        if (typeof require === 'undefined') {
            return
        }
        const { version } = require('../package.json')
        if (
            generatedWithVersion &&
            generatedWithVersion.trim() != version.trim()
        ) {
            console.error(
                '[WARNING]: genql client library has been generated with a different version of `@genql/runtime`, update both packages to have the same version!',
            )
        }
    } catch {}
}


//