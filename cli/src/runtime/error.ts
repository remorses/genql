export class GenqlError extends Error {
    errors: Array<GraphqlError> = []
    constructor(errors: any[]) {
        console.log('GenqlError', errors)

        let message = Array.isArray(errors)
            ? errors.map((x) => x?.message || '').join('\n')
            : ''
        if (!message) {
            message = 'GraphQL error'
        }
        super(message)
        this.errors = errors

        // new.target.prototype.name = new.target.name
        // Object.setPrototypeOf(this, new.target.prototype)
        // if (Error['captureStackTrace']) {
        //     Error.captureStackTrace(this, ClientError)
        // }
    }
}

interface GraphqlError {
    message: string
    locations?: Array<{
        line: number
        column: number
    }>
    path?: string[]
    extensions?: Record<string, any>
}
