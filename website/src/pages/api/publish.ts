import { exec } from 'child_process'
import admin from 'firebase-admin'
import { promises as fs } from 'fs'
import { generate } from '@genql/cli/src/main'
import { buildSchema } from 'graphql'
import { NextApiRequest, NextApiResponse } from 'next'
import packageNameAvailable from 'npm-name'
import os from 'os'
import path from 'path'
import tmp from 'tmp-promise'
import { NPM_SCOPE, NPM_TOKEN } from '../../constants'
import { generateQueries } from '../../support/generateQueries'
import { getFirebaseDecodedToken } from '../../support/server'

function generatePackageJson({ name, version }) {
    return {
        name,
        description: 'Graphql client',
        version: `1.${version}.0`,
        main: './index.js',
        module: './index.esm.js',
        sideEffects: false,
        types: './index.d.ts',
        dependencies: {
            
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

export async function createPackage({
    // TODO move pkg gen logic in cli,
    endpoint,
    name,
    version,
    callback,
}: GenerateApiParams & { callback; version }) {
    const { path: tmpPath, cleanup } = await tmp.dir({
        unsafeCleanup: true,
    })
    try {
        const packageJson = generatePackageJson({ name, version })
        await generate({
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

export default async function Api(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { name, endpoint } = await req.body
        const { uid } = await getFirebaseDecodedToken(req)
        if (!uid) {
            throw new Error('you must be authenticated')
        }
        const scopedName = `${NPM_SCOPE}/${name}`
        let version = 0
        const aval = await packageNameAvailable(scopedName)
        if (!aval) {
            const r = await admin
                .firestore()
                .collection('packages')
                .where('user_uid', '==', uid)
                .where('name', '==', scopedName)
            const existing = await r.get()
            if (existing.empty) {
                throw new Error('package name already exists')
            } else {
                const doc = existing.docs[0].data()
                version = (doc.version || 0) + 1
            }
        }
        const packageJson = await createPackage({
            endpoint,
            version,
            name: scopedName,
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
                // await runCommand({
                //     cmd: `npm unpublish ${name} --force --prefix='${os.tmpdir()}'`,
                //     cwd,
                // })
                
            },
        })

        const r = await admin
            .firestore()
            .collection('packages')
            .doc(scopedName.replace('/', '').replace('@', ''))
            .set({
                user_uid: uid,
                name: packageJson.name,
                graphql_endpoint: endpoint,
                created_at: new Date().toUTCString(),
                timestamp: new Date().getTime() / 1000,
                version,
            } as Package)

        console.log('generated package files')
        res.status(200).json({ ...packageJson, ok: true })
    } catch (e) {
        console.error(e)
        res.status(200).json({ ok: false, error: String(e) })
    }
}
