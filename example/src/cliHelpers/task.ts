import Listr from 'listr'
import { ListrTask } from 'listr'
import { Config } from '../config'
import { clientTasks } from './clientTasks'
import { schemaTask } from './schemaTask'

export const task = (config: Config): ListrTask => {
  if (!config.output) throw new Error('`output` must be defined in the config')

  const output = config.output

  return {
    title: `generating the client in \`${output}\``,
    task: () => new Listr([schemaTask(config), ...clientTasks(config)]),
  }
}
