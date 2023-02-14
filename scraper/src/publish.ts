import { fetchSchemaWithRetry } from '@genql/cli/src/schema/fetchSchema'
import { Sema } from 'async-sema'
import { createHash } from 'crypto'
import { GraphQLSchema, lexicographicSortSchema, printSchema } from 'graphql'
import { NPM_SCOPE } from './constants'
import { generateQueries } from './utils/generateQueries'
import { createPackage } from './utils/publish'
import {
    CsvDataType,
    dataStore,
    GeneratedEntry,
    generatedStore,
    getSiteMeta,
} from './utils/utils'

let DRY = process.env.DRY
if (!DRY) {
    throw new Error('DRY is not set')
}

let dry = Number(DRY) === 1

export async function publish() {
    let data = await dataStore.read()
    let generated = await generatedStore.read()
    let sema = new Sema(10)

    let newGenerations: GeneratedEntry[] = []
    await Promise.all(
        data
            .filter((x) => x && x.slug && x.status === 'enabled')
            .map(async (x) => {
                try {
                    await sema.acquire()
                    let previous = generated.find((y) => y.slug === x.slug)
                    let generatedEntry = await generateData(x, previous)
                    let publish = !dry
                    if (previous?.version) {
                        if (previous.schemaHash === generatedEntry.schemaHash) {
                            console.log(
                                `Skipping publish for ${x.slug} because schema is the same`,
                            )
                            publish = false
                        } else if (publish) {
                            console.log(
                                `Publishing new version for ${x.slug} because schema changed: ${previous.version} -> ${generatedEntry.version}`,
                            )
                        }
                    }
                    const { tempFolder } = await createPackage({
                        ...generatedEntry,
                        ...x,
                        publish,
                    })
                    if (!publish) {
                        generatedEntry.version = previous?.version || ''
                    }
                    if (publish) {
                        generatedEntry.lastPublished = new Date().toISOString()
                    }
                    newGenerations.push({ ...generatedEntry, tempFolder })
                } catch (e) {
                    console.error(`Could not publish:`, e?.message)
                } finally {
                    sema.release()
                }
            }),
    )
    await generatedStore.upsert(newGenerations)
}

async function generateData(entry: CsvDataType, previous: GeneratedEntry) {
    if (!previous.createdAt) {
        previous.createdAt = new Date().toISOString()
    }
    let schema = await fetchSchemaWithRetry({ endpoint: entry.url })
    let schemaHash = schema ? hashSchema(schema) : ''
    if (schema) {
        schema = lexicographicSortSchema(schema)
    }
    let queriesCode = await generateQueries({
        packageName: `${NPM_SCOPE}/${entry.slug}`,
        schema,
    })
    let meta = await getSiteMeta(entry.website)
    let version = previous?.version || '0.0.0'
    if (schemaHash !== previous?.schemaHash) {
        version = incrementVersion(version)
    }
    let generated: GeneratedEntry = {
        ...previous,
        slug: entry.slug,
        schemaHash,
        queriesCode,
        favicon: meta?.favicon || previous?.favicon,
        version,
    }
    return generated
}

function incrementVersion(version: string) {
    if (!version) {
        return '0.0.0'
    }
    let [major, minor, patch] = version.split('.').map((x) => parseInt(x, 10))
    minor++
    return `${major}.${minor}.${patch}`
}

function hashSchema(schema: GraphQLSchema) {
    return createHash('sha256').update(printSchema(schema)).digest('hex')
}

publish()
