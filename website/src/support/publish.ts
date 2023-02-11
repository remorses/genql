import { exec } from 'child_process'
import resolve from 'resolve'
import { promises as fs } from 'fs'
import { generate } from '@genql/cli/src/main'
import { buildSchema } from 'graphql'
import { NextApiRequest, NextApiResponse } from 'next'
import packageNameAvailable from 'npm-name'
import os from 'os'
import path from 'path'
import fsx from 'fs-extra'
import tmp from 'tmp-promise'
import { NPM_SCOPE, NPM_TOKEN, websiteUrl } from '../constants'
import { generateQueries } from '../support/generateQueries'
import { YamlFileData } from '@app/pages/clients/[slug]'
import { red } from 'kleur'

function generateReadme({
    slug,
    website,
    exampleCode,
}: YamlFileData & { slug: string }) {
    const host = new URL(website).host
    return `

# ${host} TypeScript API client

GraphQl client for ${host} with full typescript support

## Installation

\`\`\`
npm install ${NPM_SCOPE}/${slug}
\`\`\`

## Docs

You can read more about usage in the [client docs](${websiteUrl}/clients/${slug}) and [Genql docs](${websiteUrl}/docs)})

## Example usage

\`\`\`js
${exampleCode}
\`\`\`

## Sponsor

This project is sponsored by [Notaku](https://notaku.so)

[![Notaku](https://notaku.so/github_banner.jpg)](https://notaku.so)

`
}

export function runCommand({ cmd, cwd }) {
    return new Promise((res, rej) => {
        let stderr = ''
        let stdout = ''
        const ps = exec(
            cmd,
            { cwd, env: { ...process.env } },
            (err, stdout, stderr) => {
                if (err) {
                    rej(new Error(`${cmd} failed: ${stdout}\n${stderr}\n`))
                }
                res(stdout)
            },
        )
        ps.stderr.on('data', (data) => {
            stderr += data.toString()
        })
        ps.stdout.on('data', (data) => {
            stdout += data.toString()
        })

        ps.stdout.pipe(process.stdout)
        ps.stderr.pipe(process.stdout)
    })
}

export async function createPackage(
    args: YamlFileData & { slug: string; publish: boolean },
) {
    const { endpoint, slug, version } = args
    const { path: tmpPath, cleanup } = await tmp.dir({
        unsafeCleanup: true,
    })
    console.log('tmpPath', slug, tmpPath)
    const host = new URL(endpoint).host
    try {
        const packageJson = {
            name: `${NPM_SCOPE}/${slug}`,
            description: `SDK client for ${host} GraphQL API`,
            version: version,
            main: './dist/index.js',
            files: ['dist', 'src', 'README.md', 'package.json'],
            // module: './index.esm.js',
            sideEffects: false,
            repository: {
                type: 'git',
                url: 'https://github.com/remorses/genql',
            },
            types: './dist/index.d.ts',
            dependencies: {
                // graphql: '^16.6.0',
                undici: '^5.18.0',
                'native-fetch': '^4.0.2',
            },
        }

        await generate({
            endpoint,
            output: path.resolve(tmpPath, 'src'),
            fetchImport: "import { fetch } from 'native-fetch'",
        })

        await fs.writeFile(
            path.join(tmpPath, 'package.json'),
            JSON.stringify(packageJson, null, 4),
        )
        // await fs.writeFile(
        //     path.join(tmpPath, 'src/index.ts'),
        //     generateIndex({}),
        // )
        await fs.writeFile(
            path.join(tmpPath, 'tsconfig.json'),
            JSON.stringify(tsconfig, null, 4),
        )
        // await runCommand({ cmd: `tree`, cwd: tmpPath })
        // await runCommand({ cmd: `pnpm i`, cwd: tmpPath })
        // await runCommand({ cmd: `npm i`, cwd: tmpPath })
        // copy native-fetch into node_modules
        fsx.copySync(
            path.resolve(resolve.sync('native-fetch/package.json'), '..'),
            path.join(tmpPath, 'node_modules/native-fetch'),
        )
        await runCommand({ cmd: `tsc`, cwd: tmpPath })
        // await runCommand({ cmd: `tree`, cwd: tmpPath })

        const readme = generateReadme({
            ...args,
            slug,
        })
        await fs.writeFile(path.join(tmpPath, 'README.md'), readme)
        if (args.publish) {
            console.log(`publishing ${slug}`)
            await runCommand({
                cmd: `npm publish --access public`,
                cwd: tmpPath,
            })
        }
        // await cleanup()
        return packageJson
    } catch (e) {
        throw new Error(red('Could not publish: ' + String(e)))
    } finally {
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

const tsconfig = {
    compilerOptions: {
        noImplicitReturns: true,
        noUnusedParameters: false,
        rootDir: 'src',
        noImplicitAny: false,
        strict: true,
        declaration: true,
        target: 'ES2015',
        module: 'CommonJS',
        moduleResolution: 'node',
        resolveJsonModule: true,
        outDir: './dist',
        esModuleInterop: true,
        allowJs: true,
        sourceMap: true,
        lib: ['dom', 'es2017', 'ES2015', 'esnext.asynciterable'],
        skipLibCheck: true,
        isolatedModules: true,
    },
    include: ['src'],
    exclude: [
        'node_modules',
        'package.json',
        '**/*.case.ts',
        'tests',
        'example',
        'dist',
        '**/__tests__',
    ],
}
