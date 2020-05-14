#!/usr/bin/env node

import program from 'commander'
import Listr from 'listr'
import chalk from 'chalk'
import { task } from './cliHelpers/task'
import { validateConfigs } from './cliHelpers/validateConfigs'

import { Config } from './config'
import { requireModuleFromPath } from './helpers/files'

program
  .option('-o, --output <./myClient>', 'output directory')
  .option('-e, --endpoint <http://example.com/graphql>', 'GraphQL endpoint')
  .option('-p, --post', 'use POST for introspection query')
  .option('-s, --schema <./mySchema.graphql>', 'path to GraphQL schema definition file')
  .option('-f, --fetcher <./schemaFetcher.js>', 'path to introspection query fetcher file')
  .option('-c, --config <./myConfig.js>', 'path to config file')
  .option('-v, --verbose', 'verbose output')
  .parse(process.argv)

const resolveConfigs = (configs: Config | Config[]) => (Array.isArray(configs) ? configs : [configs])

const configs: Config[] = program.config
  ? resolveConfigs(<Config>requireModuleFromPath([program.config]))
  : [
      {
        endpoint: program.endpoint,
        post: program.post,
        schema: program.schema,
        output: program.output,
        fetcher: program.fetcher,
      },
    ]

if (!validateConfigs(configs)) program.help()

new Listr(configs.map(config => task(config)), { renderer: program.verbose ? 'verbose' : 'default' }).run().catch(e => {
  console.log(chalk.red(e.stack))
  process.exit(1)
})
