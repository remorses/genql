import chalk from 'chalk'
import { Config } from '../config'

export const validateConfigs = (configs: Config[]) => {
    const errors: string[] = []

    if (configs.length === 0) errors.push('config array is empty')

    configs.forEach((config, i) => {
        const whichConfig =
            configs.length === 1 ? 'the config' : `config #${i + 1}`

        if (!config.endpoint && !config.schema)
            errors.push(
                `you didn't provide either \`endpoint\`, \`schema\` or \`fetcher\` option in ${whichConfig}`,
            )

        if ([config.endpoint, config.schema].filter((i) => i).length > 1)
            errors.push(
                `you provided two or more conflicting options in ${whichConfig}, only one of either \`endpoint\`, \`schema\` or \`fetcher\` is allowed`,
            )

        if (!config.output)
            errors.push(
                `you didn't provide an \`output\` option in ${whichConfig}`,
            )
    })

    errors.forEach((error) => console.log(chalk.red(`Error: ${error}`)))

    return errors.length === 0
}
