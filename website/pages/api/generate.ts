import { NextApiRequest, NextApiResponse } from 'next'
import npmLoginPromise from 'npm-login-promise'

import path from 'path'
import { promises as fs } from 'fs'
import { generateProject } from 'genql-cli/src/main'
import tmp from 'tmp-promise'

import { exec } from 'child_process'
import { NPM_SCOPE, NPM_TOKEN } from '../../constants'

function generatePackageJson({ name }) {
    return { // TODO add a README with a quickstart
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
        const ps = exec(
            cmd,
            { cwd, env: process.env },
            (err, stdout, stderr) => {
                if (err) {
                    rej(err)
                }
                res(stdout)
            },
        )
        ps.stdout.pipe(process.stdout)
        ps.stderr.pipe(process.stdout)
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
    return packageJson
}

export interface GenerateApiParams {
    name: string
    endpoint: string
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { name, endpoint } = await req.body
        const packageJson = await createPackage({
            endpoint,
            name,
            callback: async ({ cwd }) => {
                // await npmLoginPromise(username, password, email)

                await runCommand({ cmd: `npm set _authToken ${NPM_TOKEN}`, cwd })
                await runCommand({ cmd: `npm publish --access public`, cwd })
            },
        })
        console.log('generated package files')
        res.statusCode = 200
        res.json({ ...packageJson, ok: true })
        res.end()
    } catch (e) {
        console.error(e)
        // TODO handle error
        res.json({ ok: false, error: String(e) })
    }
}
