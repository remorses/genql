#!/usr/bin/env node

import program from 'commander'
import { generateProject } from './main'
import { validateConfigs } from './tasks/validateConfigs'

import { Config } from './config'
import { requireModuleFromPath } from './helpers/files'

program
    .option('-o, --output <./myClient>', 'output directory')
    .option('-e, --endpoint <http://example.com/graphql>', 'GraphQL endpoint')
    .option('-p, --post', 'use POST for introspection query')
    .option(
        '-s, --schema <./mySchema.graphql>',
        'path to GraphQL schema definition file',
    )
    .option(
        '-f, --fetcher <./schemaFetcher.js>',
        'path to introspection query fetcher file',
    )
    .option('-c, --config <./myConfig.js>', 'path to config file')
    .option('-v, --verbose', 'verbose output')
    .parse(process.argv)

const config: Config = program.config
    ? <Config>requireModuleFromPath([program.config])
    : {
          endpoint: program.endpoint,
          post: program.post,
          schema: program.schema,
          output: program.output,
          fetcher: program.fetcher,
      }

if (!validateConfigs([config])) program.help()

generateProject(config).catch((e: any) => {
    console.error(e)
    process.exit(1)
})
