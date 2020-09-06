import { Config } from './config'
import Listr from 'listr'
import { clientTasks } from './tasks/clientTasks'
import { schemaTask } from './tasks/schemaTask'

export const generate = (config: Config): Promise<void> => {
    if (!config.output) {
        throw new Error('`output` must be defined in the config')
    }

    return new Listr(
        [
            {
                title: `generating the client in \`${config.output}\``,
                task: () =>
                    new Listr([schemaTask(config), ...clientTasks(config)]),
            },
        ],
        { renderer: config.verbose ? 'verbose' : 'silent', exitOnError: false },
    )
        .run()
        .catch((e) => {
            // cconsole.log(e)
            throw e?.errors?.[0]
        })
}
