
export const RUNTIME_LIB_NAME = '@genql/runtime'


export interface Config {
    verbose?: boolean
    endpoint?: string
    useGet?: boolean
    // the schema string
    schema?: string
    // the output dir
    output?: string
    // options?: Options
    headers?: Record<string, string>
    scalarTypes?: { [k: string]: string }
    onlyEsModules?: boolean
    onlyCJSModules?: boolean
    sortProperties?: boolean
}


// export interface Options {
//     schemaValidation?: GraphQLSchemaValidationOptions
//     schemaPrint?: SchemaPrintOptions
//     schemaBuild?: BuildSchemaOptions & ParseOptions
// }
