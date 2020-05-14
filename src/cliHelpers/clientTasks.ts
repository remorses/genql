import Listr, { ListrTask } from 'listr'
import { Config } from '../config'
import { ensurePath, writeFileToPath } from '../helpers/files'
import { renderChainTypes } from '../render/chain/renderChainTypes'
import { renderClient } from '../render/client/renderClient'
import { renderClientDefinition } from '../render/client/renderClientDefinition'
import { RenderContext } from '../render/common/RenderContext'
import { renderRequestTypes } from '../render/requestTypes/renderRequestTypes'
import { renderResponseTypes } from '../render/responseTypes/renderResponseTypes'
import { renderSchema } from '../render/schema/renderSchema'
import { renderTypeGuards } from '../render/typeGuards/renderTypeGuards'
import { renderTypeMap } from '../render/typeMap/renderTypeMap'

const schemaGqlFile = 'schema.graphql'
const schemaTypesFile = 'schema.ts'
const typeMapFile = 'typeMap.json'
const clientFile = 'createClient.js'
const clientTypesFile = 'createClient.d.ts'

export const clientTasks = (config: Config): ListrTask[] => {
  if (!config.output) throw new Error('`output` must be defined in the config')

  const output = config.output

  return [
    {
      title: 'preparing client directory',
      task: () => ensurePath([output], true),
    },
    {
      title: `writing files`,
      task: () =>
        new Listr(
          [
            {
              title: `writing ${schemaGqlFile}`,
              task: async ctx => {
                const renderCtx = new RenderContext(ctx.schema, config)
                renderSchema(ctx.schema, renderCtx)
                await writeFileToPath([output, schemaGqlFile], renderCtx.toCode('graphql'))
              },
            },
            {
              title: `writing ${schemaTypesFile}`,
              task: async ctx => {
                const renderCtx = new RenderContext(ctx.schema, config)

                renderResponseTypes(ctx.schema, renderCtx)
                renderRequestTypes(ctx.schema, renderCtx)
                renderTypeGuards(ctx.schema, renderCtx)
                renderChainTypes(ctx.schema, renderCtx)

                await writeFileToPath([output, schemaTypesFile], renderCtx.toCode('typescript'))
              },
            },
            {
              title: `writing ${typeMapFile}`,
              task: async ctx => {
                const renderCtx = new RenderContext(ctx.schema, config)

                renderTypeMap(ctx.schema, renderCtx)

                await writeFileToPath([output, typeMapFile], renderCtx.toCode())
              },
            },
            {
              title: `writing ${clientFile}`,
              task: async ctx => {
                const renderCtx = new RenderContext(ctx.schema, config)

                renderClient(ctx.schema, renderCtx)

                await writeFileToPath([output, clientFile], renderCtx.toCode('babel'))
              },
            },
            {
              title: `writing ${clientTypesFile}`,
              task: async ctx => {
                const renderCtx = new RenderContext(ctx.schema, config)

                renderClientDefinition(ctx.schema, renderCtx)

                await writeFileToPath([output, clientTypesFile], renderCtx.toCode('typescript'))
              },
            },
          ],
          { concurrent: true },
        ),
    },
  ]
}
