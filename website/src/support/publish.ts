import { exec } from 'child_process'
import { promises as fs } from 'fs'
import { generate } from '@genql/cli/src/main'
import { buildSchema } from 'graphql'
import { NextApiRequest, NextApiResponse } from 'next'
import packageNameAvailable from 'npm-name'
import os from 'os'
import path from 'path'
import tmp from 'tmp-promise'
import { NPM_SCOPE, NPM_TOKEN, websiteUrl } from '../constants'
import { generateQueries } from '../support/generateQueries'
import { YamlFileData } from '@app/pages/clients/[slug]'

function generateReadme({
    name,
    slug,
    exampleCode,
}: YamlFileData & { slug: string }) {
    return `
# ${name}

GraphQl client for ${name} with full typescript support

## Installation

\`\`\`
npm install ${NPM_SCOPE}/${name}
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
        const ps = exec(
            cmd,
            { cwd, env: { ...process.env } },
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

export async function createPackage(
    args: YamlFileData & { slug: string; publish: boolean },
) {
    const { endpoint, name, slug, version } = args
    const { path: tmpPath, cleanup } = await tmp.dir({
        unsafeCleanup: true,
    })
    console.log('tmpPath', tmpPath)
    try {
        const packageJson = {
            name: `${NPM_SCOPE}/${slug}`,
            description: `SDK client for ${name} GraphQL API`,
            version: version,
            main: './dist/index.js',
            // module: './index.esm.js',
            sideEffects: false,
            repository: {
                type: 'git',
                url: 'https://github.com/remorses/genql',
            },
            types: './dist/index.d.ts',
            dependencies: {
                graphql: '^16.0.0',
                'isomorphic-unfetch': '*', // TODO replace isomorphic-unfetch with native-fetch
            },
        }

        await generate({
            endpoint,
            output: path.resolve(tmpPath, 'src'),
        })

        await fs.writeFile(
            path.join(tmpPath, 'package.json'),
            JSON.stringify(packageJson, null, 4),
        )
        await fs.writeFile(
            path.join(tmpPath, 'tsconfig.json'),
            JSON.stringify(tsconfig, null, 4),
        )
        // await runCommand({ cmd: `tree`, cwd: tmpPath })
        await runCommand({ cmd: `pnpm i`, cwd: tmpPath })
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
