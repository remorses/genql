import Listr, { ListrTask } from 'listr'
import { Config } from '../config'
import { ensurePath, writeFileToPath } from '../helpers/files'
import { renderChainTypes } from '../render/chain/renderChainTypes'
import {
    renderClientCjs,
    renderClientEsm,
    renderEnumsMaps,
} from '../render/client/renderClient'
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
const typeMapFileCjs = 'types.cjs.js'
const typeMapFileEsm = 'types.esm.js'
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
        !config.onlyCJSModules && {
            title: `writing ${guardsFileEsm}`,
            task: async (ctx) => {
                const renderCtx = new RenderContext(ctx.schema, config)

                renderTypeGuards(ctx.schema, renderCtx, 'esm')

                await writeFileToPath(
                    [output, guardsFileEsm],
                    renderCtx.toCode('typescript'),
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
                    renderCtx.toCode('typescript'),
                )
            },
        },
        {
            title: `writing types`,
            task: async (ctx) => {
                const renderCtx = new RenderContext(ctx.schema, config)

                renderTypeMap(ctx.schema, renderCtx)

                if (!config.onlyEsModules) {
                    await writeFileToPath(
                        [output, typeMapFileCjs],
                        `module.exports = ${renderCtx.toCode()}`,
                    )
                }
                if (!config.onlyCJSModules) {
                    await writeFileToPath(
                        [output, typeMapFileEsm],
                        `export default ${renderCtx.toCode()}`,
                    )
                }
            },
        },
        !config.onlyEsModules && {
            title: `writing ${clientFileCjs}`,
            task: async (ctx) => {
                const renderCtx = new RenderContext(ctx.schema, config)

                renderClientCjs(ctx.schema, renderCtx)
                await writeFileToPath(
                    [output, clientFileCjs],
                    renderCtx.toCode('typescript', true),
                )
            },
        },
        !config.onlyCJSModules && {
            title: `writing ${clientFileEsm}`,
            task: async (ctx) => {
                const renderCtx = new RenderContext(ctx.schema, config)
                renderClientEsm(ctx.schema, renderCtx)
                await writeFileToPath(
                    [output, clientFileEsm],
                    renderCtx.toCode('typescript', true),
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
