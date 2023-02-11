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

let csvPath = path.resolve('data.csv')

type CsvDataType = {
    url: string
    added: boolean
    discarded: boolean
    website: string
}

// TODO create a csv file i can use to keep state so i can add graphql clients one a a time and mark them when completed
// csv should contain api endpoint, added, discarded, fake, website, website title, website description
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
    'github.com',
    'githubusercontent.com',
    'herokuapp.com',
    'cloudfunctions.net',
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
