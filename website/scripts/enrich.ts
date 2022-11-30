import yaml from 'yaml'
import semver from 'semver'
import url from 'url'
import { fetch } from 'native-fetch'
import path from 'path'
import pLimit from 'p-limit'
import fs from 'fs'
import parseHead from 'parse-head'
import { print } from '@genql/cli/src/printer'
import { GraphQLSchema } from 'graphql'

import { YamlFileData } from '../src/pages/clients/[slug]'
import { fetchSchema } from '@genql/cli/src/schema/fetchSchema'
import { generateQueries } from '../src/support/generateQueries'
import { createPackage } from '../src/support/publish'

async function main() {
    const folder = path.resolve('./clients')
    const files = await fs.readdirSync(folder).map((x) => path.join(folder, x))
    const limit = pLimit(10)
    await Promise.all(
        files.map((file) =>
            limit(async () => {
                try {
                    const content = await fs.readFileSync(file, 'utf-8')
                    const slug = path.basename(file, '.yml')
                    const data: YamlFileData = yaml.parse(content)
                    const { name, website, useGet, endpoint } = data
                    const enriched = {
                        ...data,
                    }
                    const res = await fetch(website, {
                        headers: { accept: 'text/html' },
                    })

                    const html = await res.text()
                    const head = await parseHead(html)
                    // console.log(head)
                    const favs: any[] = await getFavicons(head, {})
                    // console.log(favs)

                    const schema = await fetchSchema({
                        endpoint,
                        usePost: !useGet,
                        // headers: config.headers,
                    }).catch((e) => {
                        console.log(`Failed fetching schema fro ${slug}`, e)
                        return null
                    })
                    if (!schema) {
                        console.log(`Failed fetching schema fro ${slug}`)
                    }
                    if (schema) {
                        const exampleCode = generateQueries({
                            packageName: `@genql/${slug}`,
                            number: 3,
                            schema,
                        })
                        enriched.exampleCode = exampleCode
                    } else {
                        enriched.exampleCode = ''
                    }

                    if (favs.length) {
                        enriched.favicon = new URL(
                            favs[0].href,
                            website,
                        ).toString()
                    }
                    {
                        const json = await createPackage({
                            ...enriched,
                            slug,
                            publish: true,
                        })
                        enriched.version = semver.inc(json.version, 'minor')
                    }
                    console.log('Writing file', path.basename(file))
                    fs.writeFileSync(
                        file,
                        yaml.stringify({
                            ...enriched,
                            version: enriched.version,
                            exampleCode: enriched.exampleCode,
                            favicon: enriched.favicon,
                        }),
                        'utf-8',
                    )
                } catch (e) {
                    console.log('ERROR', e)
                }
            }),
        ),
    )
}

main()

const DEFAULT_OPTIONS = {
    all: false,
    baseUrl: '',
    msTile: false,
}
function getFavicons(headers, args) {
    const options = Object.assign({}, DEFAULT_OPTIONS, args)

    if (!Array.isArray(headers)) {
        throw new Error(
            'getFavicons first and only argument should be an array of HTML <head> attributes.',
        )
    }

    return headers
        .map((x) => mapIcon(options, x))
        .filter((icon) => icon && icon.href)
        .sort((a, b) => getWidth(b.sizes) - getWidth(a.sizes))
        .filter(generateAllFilter(options))
        .filter(uniqueHrefFilter)
        .map(generateBaseUrlMap(options, headers))
}

function mapIcon(options, header) {
    // apple-touch-icon
    if (header.rel && header.rel === 'apple-touch-icon') {
        return {
            href: header.href || null,
            sizes: header.sizes || '',
        }
    }

    // modern icon (also covers IE9 w/ type="image/x-icon")
    if (header.rel === 'icon') {
        return {
            href: header.href || null,
            sizes: header.sizes || '',
        }
    }

    // Microsoft TileImage
    if (
        options.msTile &&
        header.name &&
        header.name === 'msapplication-TileImage'
    ) {
        return {
            href: header.content || null,
            sizes: '', // fetch it from URL pattern
        }
    }

    // legacy favicon.ico
    if (
        header.rel &&
        header.rel.indexOf('icon') &&
        header.rel.indexOf('shortcut') !== -1
    ) {
        return {
            href: header.href || null,
            sizes: '',
        }
    }
}

function getWidth(sizes) {
    return sizes ? parseInt(sizes.split('x')[0]) : 0
}

function generateAllFilter(options) {
    const MAX_ITEMS = 1

    return options.all
        ? (x) => x
        : (icon, i, array) => {
              return icon.sizes === '' || array.slice(0, i).length < MAX_ITEMS
          }
}

function uniqueHrefFilter(icon, i, array) {
    return array.slice(i + 1).find((d) => d.href === icon.href) === undefined
}

function generateBaseUrlMap(options, headers) {
    let baseUrl = options.baseUrl

    if (!baseUrl) {
        const header = headers.find((h) => h.nodeName === 'BASE' && h.href)

        if (header && header.href) {
            baseUrl = header.href
        }
    }

    return !baseUrl
        ? (x) => x
        : (icon) =>
              Object.assign(icon, { href: url.resolve(baseUrl, icon.href) })
}
