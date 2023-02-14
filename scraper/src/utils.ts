import Papa from 'papaparse'
import posthtml from 'posthtml'
import fs from 'fs'

export class CsvStore<T> {
    data: T[] = []
    idKey: (x: T) => string
    constructor(public path: string, idKey: (x: T) => string) {
        this.path = path
        this.idKey = idKey
    }
    async read(): Promise<T[]> {
        let csvData: T[] = []
        if (!fs.existsSync(this.path)) {
            return []
        }
        let csv = fs.readFileSync(this.path, 'utf-8')
        return await new Promise((resolve, reject) => {
            let r = Papa.parse(csv, {
                header: true,
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
                        return reject(new Error(res.errors.join(', ')))
                    }
                    csvData = res.data.filter(Boolean) as any
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
        let csv = Papa.unparse(data.filter(Boolean), {
            header: true,
            delimiter: ',',
        })

        console.log(`Writing to ${this.path}`)
        fs.writeFileSync(this.path, csv, 'utf8')
    }
}

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
                        if (node.attrs?.name === 'description') {
                            description = arrayToText(node.attrs.content)
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
        return { description, title, image, favicon }
    } catch (e) {
        console.log(`Could not fetch ${site}`, e?.['message'])
        return
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
