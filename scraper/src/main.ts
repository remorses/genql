import { spawn } from 'child_process'
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

// TODO create a csv file i can use to keep state so i can add graphql clients one a a time and mark them when completed
// csv should contain api endpoint, added, discarded, fake, website, website title, website description
async function main() {
    const res = await sourceGraph.query({
        search: [
            {
                query: `/\\((?:"|')https:\\/\\/.*\\/graphql/ count:500`,
                patternType: 'standard',
                // patternType: 'regexp',
            },
            {
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
        ],
    })
    const lines = res?.search?.results.results.flatMap((x) => {
        if (x.__typename === 'FileMatch') {
            return x.lineMatches.map((x) => x.preview.trim())
        }
        return []
    })
    const urls = [
        ...new Set(
            lines
                ?.map((x) => {
                    const match = x.match(urlRegex)
                    if (match) {
                        return match[0]
                    }
                    return ''
                })
                ?.map((x) => {
                    try {
                        let u = new URL(x)
                        return u.origin + u.pathname
                    } catch {
                        return ''
                    }
                })
                .filter((x) => {
                    if (!x) {
                        return false
                    }
                    if (!x.includes('.')) {
                        return false
                    }
                    if (ignore.some((y) => x.includes(y))) {
                        return false
                    }
                    return true
                }),
        ),
    ]
    // console.log(JSON.stringify(res, null, 2))
    // console.log(lines?.join(`\n\n`))
    console.log(urls?.join(`\n\n`))
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
    // 'herokuapp.',
    // 'vercel.app', // TODO exclude vercel.app?
]

const urlRegex = /https:\/\/[^\s"'\)]*/

main()
