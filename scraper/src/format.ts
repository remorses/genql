import { dataStore, generatedStore } from './utils/utils'

async function format() {
    await dataStore.read()
    await dataStore.upsert([])
    await generatedStore.read()
    await generatedStore.upsert([])
}

format()
