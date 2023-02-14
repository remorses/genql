import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import yaml from 'yaml'
import fs from 'fs'
import path from 'path'
import {
    CsvDataType,
    dataStore,
    GeneratedEntry,
    generatedStore,
} from 'scraper/src/utils/utils'

export async function getClientsData() {
    let data = await dataStore.read()
    let generated = await generatedStore.read()
    let map = new Map<string, any>()

    data.filter((x) => x.status === 'enabled').forEach((x) => {
        let d = generated.find((y) => y.slug === x.slug)
        map.set(x.slug, { ...d, ...x })
    })
    let composed: (CsvDataType & GeneratedEntry)[] = [...map.values()]

    return composed
}
