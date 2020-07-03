import Listr, { ListrTask } from 'listr'
import { Config } from '../config'
import { ensurePath, writeFileToPath } from '../helpers/files'
import { renderChainTypes } from '../render/chain/renderChainTypes'
import { renderClientCjs, renderClientEsm } from '../render/client/renderClient'
import { renderClientDefinition } from '../render/client/renderClientDefinition'
import { RenderContext } from '../render/common/RenderContext'
import { renderRequestTypes } from '../render/requestTypes/renderRequestTypes'
import { renderResponseTypes } from '../render/responseTypes/renderResponseTypes'
import { renderSchema } from '../render/schema/renderSchema'
import { renderTypeGuards } from '../render/typeGuards/renderTypeGuards'
import { renderTypeMap } from '../render/typeMap/renderTypeMap'

const schemaGqlFile = 'schema.graphql'
const schemaTypesFile = 'schema.ts'
const guardsFileCjs = 'guards.cjs.js'
const guardsFileEsm = 'guards.esm.js'
const typeMapFile = 'types.json'
const clientFileCjs = 'index.js'
const clientTypesFile = 'index.d.ts'

export const clientTasks = (config: Config): ListrTask[] => {
    const clientFileEsm = config.onlyEsModules ? 'index.js' : 'index.esm.js'

    if (!config.output)
        throw new Error('`output` must be defined in the config')

    const output = config.output

    const tasks: (false | ListrTask)[] = [
        {
            title: `writing ${schemaGqlFile}`,
            task: async (ctx) => {
                const renderCtx = new RenderContext(ctx.schema, config)
                renderSchema(ctx.schema, renderCtx)
                await writeFileToPath(
                    [output, schemaGqlFile],
                    renderCtx.toCode('graphql'),
                )
            },
        },
        {
            title: `writing ${schemaTypesFile}`,
            task: async (ctx) => {
                const renderCtx = new RenderContext(ctx.schema, config)

                renderResponseTypes(ctx.schema, renderCtx)
                renderRequestTypes(ctx.schema, renderCtx)
                renderTypeGuards(ctx.schema, renderCtx)
                renderChainTypes(ctx.schema, renderCtx)

                await writeFileToPath(
                    [output, schemaTypesFile],
                    renderCtx.toCode('typescript'),
                )
            },
        },
        {
            title: `writing ${guardsFileEsm}`,
            task: async (ctx) => {
                const renderCtx = new RenderContext(ctx.schema, config)

                renderTypeGuards(ctx.schema, renderCtx, 'esm')

                await writeFileToPath(
                    [output, guardsFileEsm],
                    renderCtx.toCode('babel'),
                )
            },
        },
        !config.onlyEsModules && {
            title: `writing ${guardsFileCjs}`,
            task: async (ctx) => {
                const renderCtx = new RenderContext(ctx.schema, config)

                renderTypeGuards(ctx.schema, renderCtx, 'cjs')

                await writeFileToPath(
                    [output, guardsFileCjs],
                    renderCtx.toCode('babel'),
                )
            },
        },
        {
            title: `writing ${typeMapFile}`,
            task: async (ctx) => {
                const renderCtx = new RenderContext(ctx.schema, config)

                renderTypeMap(ctx.schema, renderCtx)

                await writeFileToPath([output, typeMapFile], renderCtx.toCode())
            },
        },
        !config.onlyEsModules && {
            title: `writing ${clientFileCjs}`,
            task: async (ctx) => {
                const renderCtx = new RenderContext(ctx.schema, config)

                renderClientCjs(ctx.schema, renderCtx)
                await writeFileToPath(
                    [output, clientFileCjs],
                    renderCtx.toCode('babel', true),
                )
            },
        },
        {
            title: `writing ${clientFileEsm}`,
            task: async (ctx) => {
                const renderCtx = new RenderContext(ctx.schema, config)
                renderClientEsm(ctx.schema, renderCtx)
                await writeFileToPath(
                    [output, clientFileEsm],
                    renderCtx.toCode('babel', true),
                )
            },
        },
        {
            title: `writing ${clientTypesFile}`,
            task: async (ctx) => {
                const renderCtx = new RenderContext(ctx.schema, config)

                renderClientDefinition(ctx.schema, renderCtx)

                await writeFileToPath(
                    [output, clientTypesFile],
                    renderCtx.toCode('typescript', true),
                )
            },
        },
    ]

    return [
        {
            title: 'preparing client directory',
            task: () => ensurePath([output], true),
        },
        {
            title: `writing files`,
            task: () =>
                new Listr(
                    tasks.filter((x) => Boolean(x)) as ReadonlyArray<ListrTask>,
                    { concurrent: true },
                ),
        },
    ]
}
