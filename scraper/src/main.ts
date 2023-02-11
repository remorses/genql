import { spawn } from 'child_process'
import fs from 'fs'
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

let csvPath = path.resolve('data.csv')

type CsvDataType = {
    url: string
    added: boolean
    discarded: boolean
    website: string
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

async function main() {
    let csvData: CsvDataType[] = []
    if (fs.existsSync(csvPath)) {
        let csv = fs.readFileSync(csvPath, 'utf-8')
        Papa.parse(csv, {
            header: true,
            complete(res) {
                if (res.errors.length) {
                    throw new Error(res.errors.join(', '))
                }
                csvData = res.data as any
            },
        })
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
    let data = [
        ...new Set(
            lines
                ?.map((x) => {
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
                    let website = topLevelDomain(url)
                    return { url, line: x, website }
                })
                .filter((data) => {
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
                }),
        ),
    ]
    data = unique(data, (x) => x?.url!)
    // console.log(JSON.stringify(res, null, 2))
    // console.log(lines?.join(`\n\n`))
    console.log(data.map((x) => JSON.stringify(x, null, 2))?.join(`\n\n`))
    let csv = Papa.unparse(data, { header: true, delimiter: ',' })

    console.log(`Writing to ${csvPath}`)
    fs.writeFileSync(csvPath, csv, 'utf8')
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

main()

// gets the last domain with only 1 dot
function topLevelDomain(url: string) {
    let u = new URL(url)
    let origin = u.hostname
    let parts = origin.split('.')
    if (parts.length < 3) {
        return url
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
import posthtml from 'posthtml'

async function getSiteMeta(site: string) {
    const res = await fetchWithTimeout(
        site,
        {
            // like chrome
            headers: { accept: 'text/html', 'user-agent': 'Mozilla/5.0' },
        },
        7000,
    )
    const html = await res.text()
    let description = ''
    let title = ''
    let image = ''
    let favicon = ''

    posthtml()
        .use((tree) => {
            tree.walk((node) => {
                if (node?.attrs?.rel === 'apple-touch-icon') {
                    favicon = urlWithBase(node.attrs.href || '', site)
                    return node
                }
                if (node?.attrs?.rel === 'icon') {
                    favicon = urlWithBase(node.attrs.href || '', site)
                    return node
                }

                return node
            })
        })
        .use((tree) => {
            tree.walk((node) => {
                // get description and title
                if (node.tag === 'meta') {
                    if (node.attrs?.description) {
                        description = node.attrs?.description
                    }
                    if (node.attrs?.title) {
                        title = node.attrs?.title
                    }
                    // og image
                    if (node.attrs?.property === 'og:image') {
                        image = urlWithBase(node.attrs?.content || '', site)
                    }
                }
                return node
            })
        })
        .process(html, { sync: true })
    return { description, title, image, favicon }
}

function urlWithBase(url: string, base: string) {
    if (!url) {
        return ''
    }
    try {
        return new URL(url, base).href
    } catch {
        return ''
    }
}

function fetchWithTimeout(
    url,
    options: RequestInit,
    timeout,
): Promise<Response> {
    const controller = new AbortController()
    return Promise.race([
        fetch(url, { ...options, signal: controller.signal }),

        new Promise<any>((_, reject) =>
            setTimeout(() => {
                controller.abort()
                reject(new Error('fetch timeout for ' + url))
            }, timeout),
        ),
    ])
}
