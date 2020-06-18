import { BuildSchemaOptions, ParseOptions } from 'graphql'
import { GraphQLSchemaValidationOptions } from 'graphql/type/schema'
import { SchemaFetcher } from './schema/fetchSchema'
import { Options as SchemaPrintOptions } from 'graphql/utilities/schemaPrinter'

export const RUNTIME_LIB_NAME = 'genql-runtime'

export interface Options {
    schemaValidation?: GraphQLSchemaValidationOptions
    schemaPrint?: SchemaPrintOptions
    schemaBuild?: BuildSchemaOptions & ParseOptions
}

export interface Config {
    endpoint?: string
    useGet?: boolean
    schema?: string
    output?: string
    options?: Options
    headers?: Record<string, string>
    scalarTypes?: { [k: string]: string }
}
