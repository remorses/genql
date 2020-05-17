import { GraphQLError } from "graphql"

export class ClientError extends Error {
    constructor(message?: string, public errors?: ReadonlyArray<GraphQLError>) {
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
}
