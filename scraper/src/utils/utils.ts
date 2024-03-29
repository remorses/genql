import Papa from 'papaparse'
import path from 'path'
import { sort } from 'fast-sort'
import posthtml from 'posthtml'
import fs from 'fs'
import { spawn } from 'child_process'
import { NPM_SCOPE } from '../constants'

export type CsvDataType = {
    slug?: string
    url: string
    title?: string
    description?: string
    status?: 'discarded' | '' | 'failed' | 'failed:schema' | 'works' | 'enabled'
    website?: string
}

export type GeneratedEntry = {
    slug: string
    version?: string
    schemaHash?: string
    // Use markdown for queries code, use OpenAI to generate descriptions
    queriesCode: string
    favicon?: string
    tempFolder?: string
    lastPublished?: string
    createdAt?: string
}

export class CsvStore<T> {
    data: T[] = []
    idKey: (x: T) => string
    firstHeaders: string[]
    transform: (x: T[]) => T[]
    constructor(
        public path: string,
        idKey: (x: T) => string,
        transform: (x: T[]) => T[],
        firstHeaders?: string[],
    ) {
        this.path = path
        this.firstHeaders = firstHeaders || []
        this.idKey = idKey
        this.transform = transform
    }
    async read(): Promise<T[]> {
        let csvData: T[] = []
        if (!fs.existsSync(this.path)) {
            console.log('file not found', this.path)
            return []
        }
        let csv = fs.readFileSync(this.path, 'utf-8')
        // console.log('read', this.path)
        return await new Promise((resolve, reject) => {
            let r = Papa.parse(csv, {
                header: true,
                skipEmptyLines: true,
                delimiter: ',',
                transform(value, field) {
                    if (typeof value === 'string') {
                        return value.trim()
                    }
                    return value
                },

                transformHeader(header) {
                    return header.trim()
                },

                complete: (res) => {
                    if (res.errors.length) {
                        return reject(new Error(JSON.stringify(res.errors)))
                    }
                    csvData = this.transform(res.data.filter(Boolean) as any)

                    this.data = csvData
                    resolve(csvData)
                },
            })
        })
    }
    async upsert(data: (T | undefined)[]) {
        let csvData = (await this.read()) || []
        let map = new Map<string, T>()
        csvData.forEach((x) => {
            map.set(this.idKey(x), x)
        })
        data.forEach((x) => {
            if (!x) {
                return
            }
            map.set(this.idKey(x), x)
        })
        this.data = [...map.values()]
        await this.write(this.data)
    }
    async write(data: (T | undefined)[]) {
        data = unique(data, this.idKey)
        data = this.transform(data)
        let csv = Papa.unparse(data.filter(Boolean), {
            header: true,
            skipEmptyLines: true,
            columns: this.firstHeaders?.length
                ? [
                      ...new Set([
                          ...this.firstHeaders,
                          ...Object.keys(data[0] || {}),
                      ]),
                  ]
                : undefined,
            delimiter: ',',
        })

        console.log(`Writing to ${this.path}`)
        fs.writeFileSync(this.path, csv, 'utf8')
    }
}

export function unique<T>(arr: T[], key: (x: T) => string) {
    let map = new Map<string, T>()
    arr.forEach((x) => {
        map.set(key(x), x)
    })
    return [...map.values()]
}

export let dataStore = new CsvStore<CsvDataType>(
    path.resolve('../scraper/data.csv'),

    (x) => getCleanUrl(x.url),
    (data) => {
        data = sort(data).desc([(x) => x.status, (x) => x.slug])
        return data
    },
    ['slug', 'status', 'website', 'url', 'description', 'title'],
)
export let generatedStore = new CsvStore<GeneratedEntry>(
    path.resolve(`../scraper/${NPM_SCOPE}-generated.csv`),
    (x) => x.slug.trim(),
    (data) => {
        data = sort(data).desc([(x) => x.version, (x) => x.slug])
        return data
    },
)

export async function getSiteMeta(site: string) {
    try {
        if (!site.startsWith('http')) {
            site = 'https://' + site
        }
        let u = new URL(site)
        site = u.origin
        const res = await fetchWithTimeout(
            site,
            {
                // like chrome
                headers: { accept: 'text/html', 'user-agent': 'Mozilla/5.0' },
            },
            7000,
        )
        if (!res.ok) {
            console.log(`Failed meta for ${site}: ${res.status}`)
            return
        }
        const html = await res.text()
        if (!html) {
            console.log(`No html for ${site}: ${res.status}`)
            return
        }
        let description = ''
        let title = ''
        let image = ''
        let favicon = ''

        posthtml()
            .use((tree) => {
                tree.walk((node) => {
                    if (node?.attrs?.['rel'] === 'apple-touch-icon') {
                        favicon = urlWithBase(node.attrs?.['href'] || '', site)
                        return node
                    }
                    if (node?.attrs?.['rel'] === 'icon') {
                        favicon = urlWithBase(node.attrs?.['href'] || '', site)
                        return node
                    }

                    return node
                })
            })
            .use((tree) => {
                tree.walk((node) => {
                    // console.log(node)
                    if (node.tag === 'title') {
                        title = arrayToText(node.content)
                    }
                    // get description and title
                    if (node.tag === 'meta') {
                        if (node.attrs?.['name'] === 'description') {
                            description = arrayToText(node.attrs?.['content'])
                        }

                        // og image
                        // if (node.attrs?.property === 'og:image') {
                        //     image = urlWithBase(node.attrs?.content || '', site)
                        // }
                    }
                    return node
                })
            })
            .process(html, { sync: true })
        let validIcon = await validateFavicon(favicon)
        if (!validIcon) {
            favicon = ''
        }
        return { description, title, image, favicon }
    } catch (e) {
        console.log(`Could not fetch ${site}`, e?.['message'])
        return
    }
}

async function validateFavicon(url) {
    try {
        let res = await fetchWithTimeout(
            url,
            {
                headers: { accept: 'image/*' },
            },
            5000,
        )
        if (!res.ok) {
            return false
        }
        let content = res.headers.get('content-type')
        if (content && !content?.startsWith('image/')) {
            return false
        }
        return true
    } catch {
        return false
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

function arrayToText(arr: any) {
    if (typeof arr === 'string') {
        return arr
    }
    if (Array.isArray(arr)) {
        return arr.map((x) => x?.toString()).join(' ')
    }
    return ''
}

// executes a command and returns the output, it also prints the stdout and stderr in real time
export function executeCommand(command: string) {
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

export function getCleanUrl(url) {
    try {
        let u = new URL(url)
        return u.origin + u.pathname
    } catch {
        return ''
    }
}
