import { spawn } from 'child_process'
import { red } from 'kleur'
import { fetchSchema } from '@genql/cli/src/schema/fetchSchema'

import { CsvStore, getSiteMeta } from './utils'
import { Sema } from 'async-sema'
import fs, { stat } from 'fs'
import Papa from 'papaparse'
import path from 'path'
import { createClient } from './generated'

const { SOURCEGRAPH_TOKEN } = process.env

if (!SOURCEGRAPH_TOKEN) {
    throw new Error('SOURCEGRAPH_TOKEN is not set')
}
const sourceGraph = createClient({
    headers: { Authorization: `token ${SOURCEGRAPH_TOKEN}` },
})

type CsvDataType = {
    url: string
    description?: string
    title?: string
    favicon?: string
    status?: 'discarded' | '' | 'failed' | 'works' | 'enabled'
    website?: string
    slug?: string
}

/*

how the data for the website is collected

# discovering new APIs
- read csv file
- get new graphql stuff from sourcegraph
- add the ones that are not in the csv file
- fill some data automatically like website, slug, url, seo description, etc
- new entries have status "raw"
- generate queries in another csv file

# let people add new clients
- open issue with template and inputs
- manually add to csv file

# generating the clients
- read csv file
- generate clients for all entries with status "raw"
- if it fails set status to "failed" and maybe also set error message
- if it succeeds set status to "works"

# making a client available in website
- manually change csv status to "enabled"
- add some description for SEO
- maybe add some hint for generated queries like { mutations: [updateCountry, somethingElse, ...]}

# generating queries
- useful for SEO and add more content
- use hints from main csv to decide what fields to generate
- use OpenAI to add description to queries
- save in another csv file associated with slug (because machine generated, to not clutter manually updated csv file)

# updating client
- every n days check for all enabled clients that
- generate client again, if changed increment version and publish (to determine changes use schema hash? i should sort it first)
- if changed, regenerate queries


*/

// TODO add fields to csv if missing like
// added, discarded, SEO description, authorization type (Bearer, None, etc), description

type CsvQueryType = {
    slug: string
    query1: string
    query2: string
    query3: string
    query4: string
    query5: string
}

async function discover() {
    let dataStore = new CsvStore<CsvDataType>('data.csv', (x) =>
        getCleanUrl(x.url),
    )
    await dataStore.read()
    let queriesStore = new CsvStore<CsvQueryType>('queries.csv', (x) => x.slug)
    await queriesStore.read()

    let apiToRecord = new Map<string, CsvDataType>()
    for (let record of dataStore.data) {
        let hostname = getCleanUrl(record.url)
        if (hostname) {
            apiToRecord.set(hostname, record)
        }
    }

    // TODO also find graphql urls from
    // graphql codegen config files like https://sourcegraph.com/github.com/raycast/extensions/-/blob/extensions/sourcegraph/graphql-codegen.yml?L2:18&subtree=true
    // go graphql.NewClient(
    const res = await sourceGraph.query({
        search: {
            __args: {
                query: `/\\((?:"|')https:\\/\\/.*\\/graphql/ count:500`,
                patternType: 'standard',
                // patternType: 'regexp',
            },
            results: {
                matchCount: true,
                resultCount: true,
                approximateResultCount: true,
                limitHit: true,

                results: {
                    on_FileMatch: {
                        __scalar: true,
                        lineMatches: { preview: true },
                        // chunkMatches: {
                        //     __scalar: true,
                        // },
                    },
                },
            },
        },
    })
    const lines = res?.search?.results.results.flatMap((x) => {
        if (x.__typename === 'FileMatch') {
            return x.lineMatches.map((x) => x.preview.trim())
        }
        return []
    })
    let sourcegraphUrls = lines!
        .map((x) => {
            const match = x.match(urlRegex)
            if (!match) {
                return
            }
            let url = match[0]
            try {
                let u = new URL(url)
                if (u.pathname.length > 200) {
                    return null
                }
                if (u.port) {
                    return null
                }
                url = u.origin + u.pathname
            } catch {
                return null
            }
            return { url, line: x }
        })
        ?.filter((data) => {
            let x = data?.url
            if (!x) {
                return false
            }
            if (!x.includes('.')) {
                return false
            }
            if (ignore.some((y) => x!.includes(y))) {
                return false
            }
            return true
        })
    let allUrls = [...sourcegraphUrls]
    let sema = new Sema(10)
    let data = await Promise.all(
        allUrls!.map(async (x) => {
            await sema.acquire()
            let url = x?.url! || ''
            try {
                const record = apiToRecord.get(getCleanUrl(url))
                if (record?.status) {
                    console.log(
                        `Skipping ${url} because status is ${record?.status}`,
                    )
                    return
                }
                let website = topLevelDomainUrl(url)
                let meta = await getSiteMeta(website)
                let status: CsvDataType['status'] = ''
                // if (!meta) {
                //     status = 'failed'
                // }
                let schema = await fetchSchema({
                    endpoint: url,
                    timeout: 10 * 1000,
                    // usePost: false,
                })
                let { description, title, favicon, image } = meta || {}
                let r: CsvDataType = {
                    url,
                    // line: x,
                    website,
                    description,
                    title,
                    favicon,
                    status,
                    // image,
                }
                return r
            } catch (e) {
                console.error(red(e?.['message']))
                let r: CsvDataType = {
                    url,
                    status: 'failed',
                    // image,
                }
                return r
            } finally {
                sema.release()
            }
        }),
    )

    data = unique(data, (x) => x?.url!)
    // console.log(JSON.stringify(res, null, 2))
    // console.log(lines?.join(`\n\n`))
    console.log(data.map((x) => JSON.stringify(x, null, 2))?.join(`\n\n`))
    await dataStore.upsert(data)
    console.log(res?.search?.results.matchCount)
}

const ignore = [
    'example.com', //
    'foo.bar', //
    '%s',
    'localhost:',
    '{',
    'myapi.com',
    'twitter.com',
    'github.com',
    'githubusercontent.com',
    'herokuapp.com',
    'cloudfunctions.net',
    'instagram.com',
    // 'herokuapp.',
    // 'vercel.app', // TODO exclude vercel.app?
]

const urlRegex = /https:\/\/[^\s"'\)]*/

discover()

// gets the last domain with only 1 dot
function topLevelDomainUrl(url: string) {
    let u = new URL(url)
    let origin = u.hostname
    let parts = origin.split('.')
    if (parts.length < 3) {
        return u.origin
    }
    return 'https://' + parts.slice(-2).join('.')
}

function unique<T>(arr: T[], key: (x: T) => string) {
    let map = new Map<string, T>()
    arr.forEach((x) => {
        map.set(key(x), x)
    })
    return [...map.values()]
}

// executes a command and returns the output, it also prints the stdout and stderr in real time
function executeCommand(command: string) {
    return new Promise((resolve, reject) => {
        const p = spawn(command, [], { shell: true })
        let stdout = ''
        p.stdout.on('data', (data) => {
            let str = data.toString()
            console.log(str)
            stdout += str
        })
        p.stderr.on('data', (data) => {
            let str = data.toString()
            console.log(str)
        })

        p.on('close', (code) => {
            if (code === 0) {
                resolve({ stdout })
            } else {
                reject()
            }
        })
    })
}

function getCleanUrl(url) {
    try {
        let u = new URL(url)
        return u.origin + u.pathname
    } catch {
        return ''
    }
}
