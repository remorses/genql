#!/usr/bin/env node

import yargs from 'yargs'
import { generateProject } from './main'
import { validateConfigs } from './tasks/validateConfigs'
import { Config } from './config'

const program = yargs
    .option('output', {
        alias: 'o',
        description: 'Output directory',
        required: true,
        type: 'string',
    })
    .option('endpoint', {
        alias: 'e',
        description: 'Graphql endpoint',
        type: 'string',
    })
    .option('endpoint', {
        alias: 'e',
        description: 'Graphql endpoint',
        type: 'string',
    })
    .option('get', {
        alias: 'g',
        description: 'use GET for introspection query',
        type: 'boolean',
    })
    .option('schema', {
        alias: 's',
        type: 'string',
        description: 'path to GraphQL schema definition file',
    })
    // .array('header', )
    .option('header', {
        alias: 'H',
        type: 'array',
        // string: true,
        description: 'header to use in introspection query',
    })
    .option('verbose', { alias: 'v', type: 'boolean' })
    .example(
        '$0 --output ./generated --endpoint http://localhost:3000  -H "Authorization: Bearer xxx"',
        'generate the client from an endpoint',
    )
    .example(
        '$0 --output ./generated --schema ./schema.graphql',
        'generate the client from a schema',
    )
    .help('help').argv

// .option('-o, --output <./myClient>', 'output directory')
// .option('-e, --endpoint <http://example.com/graphql>', 'GraphQL endpoint')
// .option('-g, --get', 'use GET for introspection query')
// .option(
//     '-s, --schema <./mySchema.graphql>',
//     'path to GraphQL schema definition file',
// )
// .option(
//     '-f, --fetcher <./schemaFetcher.js>',
//     'path to introspection query fetcher file',
// )
// .option('-H', '--header')
// .option('-v, --verbose', 'verbose output')
// .parse(process.argv)

const config: Config = {
    endpoint: program.endpoint,
    useGet: program.get,
    schema: program.schema,
    output: program.output,
    headers: parseHeaders(program.header || []),
}

if (!validateConfigs([config])) {
    process.exit(1)
}

generateProject(config).catch((e: any) => {
    console.error(e)
    process.exit(1)
})

function parseHeaders(headersArray) {
    // console.log(headersArray)
    let headerObject = {}
    if (headersArray) {
        for (let h of headersArray) {
            const parts = h.split(':')
            if (parts.length !== 2) {
                console.error(`cannot parse header '${h}' (multiple ':')`)
                process.exit(1)
            }
            headerObject[parts[0].trim()] = parts[1].trim()
        }
    }
    return headerObject
}
