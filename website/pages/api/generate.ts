import { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import { promises as fs } from 'fs'
import { generateProject } from 'genql-cli/src/main'
import tmp from 'tmp-promise'
import { rollup } from 'rollup'
import { exec } from 'child_process'
import { NPM_SCOPE, NPM_TOKEN } from '../../constants'

function generatePackageJson({ name }) {
    return {
        name: `${NPM_SCOPE}/${name}`,
        version: '1.0.0',
        main: './createClient.js',
        module: './createClient.esm.js',
        types: './createClient.d.ts',
        dependencies: {
            'genql-runtime': 'latest',
        },
    }
}

export function runCommand({ cmd, cwd }) {
    return new Promise((res, rej) => {
        exec(cmd, { cwd }, (err, stdout, stderr) => {
            if (err) {
                rej(err)
            }
            res(stdout)
        })
    })
}

export async function createPackage({
    endpoint,
    name,
    callback,
}: GenerateApiParams & { callback }) {
    const { path: tmpPath, cleanup } = await tmp.dir({ unsafeCleanup: true })
    await generateProject({
        endpoint,
        output: tmpPath,
    })
    const packageJson = generatePackageJson({ name })
    await fs.writeFile(
        path.join(tmpPath, 'package.json'),
        JSON.stringify(packageJson, null, 4),
    )
    const cwd = path.join(tmpPath)
    await callback({ cwd })
    await cleanup()
}

export interface GenerateApiParams {
    name: string
    endpoint: string
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { name, endpoint } = await req.body
    await createPackage({
        endpoint,
        name,
        callback: async ({ cwd }) => {
            await runCommand({ cmd: `npm login ${NPM_TOKEN}`, cwd })
            await runCommand({ cmd: `npm publish`, cwd })
        },
    })
    console.log('generated package files')
    res.statusCode = 200
    res.json({ name: 'John Doe' })
}
