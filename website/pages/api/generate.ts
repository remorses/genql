import { NextApiRequest, NextApiResponse } from 'next'

import path from 'path'
import os from 'os'
import packageNameAvailable from 'npm-name'
import { promises as fs } from 'fs'
import { generateProject } from 'genql-cli/src/main'
import tmp from 'tmp-promise'
import { buildSchema } from 'graphql'

import { exec } from 'child_process'
import { NPM_SCOPE, NPM_TOKEN } from '../../constants'
import { getFirebaseDecodedToken } from '../../support/server'
import admin from 'firebase-admin'
import { generateQueries } from '../../support/generateQueries'

function generatePackageJson({ name }) {
    return {
        // TODO add a README with a quickstart
        name: `${NPM_SCOPE}/${name}`,
        description: 'Graphql client',
        version: '1.0.0',
        main: './createClient.js',
        module: './createClient.esm.js',
        sideEffects: false,
        types: './createClient.d.ts',
        dependencies: {
            'genql-runtime': 'latest',
        },
    }
}

function generateReadme({ name, schema }) {
    const exampleCode = generateQueries({
        packageName: name,
        schema: buildSchema(schema),
        number: 3,
    })
    return `
# ${name}

Your awesome graphql client ❤️

## Example usage

\`\`\`js
${exampleCode}
\`\`\`

`
}

export function runCommand({ cmd, cwd }) {
    return new Promise((res, rej) => {
        const ps = exec(
            cmd,
            { cwd, env: { ...process.env, HOME: os.tmpdir() } },
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

export async function createPackage({ // TODO move pkg gen logic in cli, 
    endpoint,
    name,
    callback,
}: GenerateApiParams & { callback }) {
    const { path: tmpPath, cleanup } = await tmp.dir({
        unsafeCleanup: true,
    })
    try {
        const packageJson = generatePackageJson({ name })
        if (!(await packageNameAvailable(packageJson.name))) {
            throw new Error('package name already exists')
        }
        await generateProject({
            endpoint,
            output: tmpPath,
        })
        await fs.writeFile(
            path.join(tmpPath, 'package.json'),
            JSON.stringify(packageJson, null, 4),
        )
        const readme = generateReadme({
            name: packageJson.name,
            schema: await fs.readFile(
                path.join(tmpPath, 'schema.graphql'),
                'utf-8',
            ),
        })
        await fs.writeFile(path.join(tmpPath, 'README.md'), readme)
        const cwd = path.join(tmpPath)
        await callback({ name: packageJson.name, cwd })
        return packageJson
    } catch (e) {
        throw new Error('Could not publish package: ' + String(e))
    } finally {
        await cleanup()
    }
}

export interface GenerateApiParams {
    name: string
    endpoint: string
}

export interface Package {
    name: string
    graphql_endpoint: string
    user_uid: string
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { name, endpoint } = await req.body
        const { uid } = await getFirebaseDecodedToken(req)
        if (!uid) {
            throw new Error('you must be authenticated')
        }
        const packageJson = await createPackage({
            endpoint,
            name,
            callback: async ({ name, cwd }) => {
                // await npmLoginPromise(username, password, email)

                await runCommand({
                    cmd: `npm set _authToken ${NPM_TOKEN} --prefix='${os.tmpdir()}'`,
                    cwd,
                })
                await runCommand({
                    cmd: `npm publish --access public --prefix='${os.tmpdir()}'`,
                    cwd,
                })
                await runCommand({
                    cmd: `npm unpublish ${name} --force --prefix='${os.tmpdir()}'`,
                    cwd,
                })
                // TODO add the generated package name to the user in database
            },
        })
        const r = await admin
            .firestore()
            .collection('packages')
            .add({
                user_uid: uid,
                name: packageJson.name,
                graphql_endpoint: endpoint,
                created_at: new Date().toUTCString(),
            } as Package)

        console.log('generated package files')
        res.status(200).json({ ...packageJson, ok: true })
    } catch (e) {
        console.error(e)
        res.status(200).json({ ok: false, error: String(e) })
        
    }
}
