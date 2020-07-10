

export class ClientError extends Error {
    constructor(errors?: readonly Error[]) {
        const message = ClientError.extractMessage(errors)
        super(
            errors
                ? `${message}\n${errors
                      .map((error) => JSON.stringify(error, null, 2))
                      .join('\n')}`
                : message,
        )

        new.target.prototype.name = new.target.name
        Object.setPrototypeOf(this, new.target.prototype)
        if (Error.captureStackTrace) Error.captureStackTrace(this, ClientError)
    }
    private static extractMessage(errors: readonly Error[]): string {
        try {
            return errors![0].message
        } catch (e) {
            return `GraphQL Error`
        }
    }
}
