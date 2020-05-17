import { Config } from './config'
import Listr from 'listr'
import { clientTasks } from './tasks/clientTasks'
import { schemaTask } from './tasks/schemaTask'

export const generateProject = (config: Config, verbose = true) => {
    if (!config.output)
        throw new Error('`output` must be defined in the config')

    const output = config.output

    return new Listr(
        [
            {
                title: `generating the client in \`${output}\``,
                task: () =>
                    new Listr([schemaTask(config), ...clientTasks(config)]),
            },
        ],
        { renderer: verbose ? 'verbose' : 'default' },
    )
        .run()
        .catch((e: any) => {
            console.error(e)
            process.exit(1)
        })
}
