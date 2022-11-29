import { GraphQLSchema, GraphQLEnumType, isEnumType } from 'graphql'
import Listr, { ListrTask } from 'listr'
import camelCase from 'lodash/camelCase'
import { Config } from '../config'
import { ensurePath, writeFileToPath } from '../helpers/files'
import { renderClientEsm } from '../render/client/renderClient'
import { excludedTypes } from '../render/common/excludedTypes'
import { RenderContext } from '../render/common/RenderContext'
import { renderRequestTypes } from '../render/requestTypes/renderRequestTypes'
import { renderResponseTypes } from '../render/responseTypes/renderResponseTypes'
import { renderSchema } from '../render/schema/renderSchema'
import { renderTypeGuards } from '../render/typeGuards/renderTypeGuards'
import { renderTypeMap } from '../render/typeMap/renderTypeMap'
import path from 'path'
import fsx from 'fs-extra'

const schemaTypesFile = 'schema.ts'
const schemaGqlFile = 'schema.graphql'

const typeMapFileEsm = 'types.ts'

const cliRoot = path.resolve(require.resolve('../../package.json'), '..')

const runtimeFolderPath = path.resolve(cliRoot, 'src/runtime')

export const clientTasks = (config: Config): ListrTask[] => {
    const clientFileEsm = 'index.ts'

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
            title: `copy runtime files`,
            task: async (ctx) => {
                await fsx.copy(
                    runtimeFolderPath,
                    path.resolve(output, 'runtime'),
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
                renderEnumsMaps(ctx.schema, renderCtx)
                // renderChainTypes(ctx.schema, renderCtx)

                await writeFileToPath(
                    [output, schemaTypesFile],
                    renderCtx.toCode('typescript'),
                )
            },
        },

        {
            title: `writing types map`,
            task: async (ctx) => {
                const renderCtx = new RenderContext(ctx.schema, config)

                renderTypeMap(ctx.schema, renderCtx)

                await writeFileToPath(
                    [output, typeMapFileEsm],
                    `export default ${renderCtx.toCode()}`,
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

function renderEnumsMaps(schema: GraphQLSchema, ctx: RenderContext) {
    let typeMap = schema.getTypeMap()

    const enums: GraphQLEnumType[] = []
    for (const name in typeMap) {
        if (excludedTypes.includes(name)) continue

        const type = typeMap[name]

        if (isEnumType(type)) {
            enums.push(type)
        }
    }
    if (enums.length === 0) return

    ctx.addCodeBlock(
        enums
            .map(
                (type) =>
                    `export const ${camelCase('enum' + type.name)} = {\n` +
                    type
                        .getValues()
                        .map((v) => {
                            if (!v?.name) {
                                return ''
                            }
                            return `   ${v.name}: '${v.name}' as const`
                        })
                        .join(',\n') +
                    `\n}\n`,
            )
            .join('\n'),
    )
}
