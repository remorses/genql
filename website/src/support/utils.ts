import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import yaml from 'yaml'
import fs from 'fs'
import path from 'path'

export type YamlFileData = {
    // name: string
    content: string
    website: string
    favicon?: string
    endpoint: string
    version: string
    exampleCode?: string
    useGet?: boolean
    disabled?: boolean
    // tags: string[]
}

export function getClientsData() {
    const clientsFolder = path.resolve(process.cwd(), 'clients')
    const allFiles = fs.readdirSync(clientsFolder)

    const items = allFiles.map((fileName) => {
        const slug = fileName.replace('.yml', '')
        const abs = path.resolve(clientsFolder, fileName)
        const str = fs.readFileSync(abs, 'utf8')
        const data: YamlFileData = yaml.parse(str)
        return {
            ...data,
            slug,
        }
    })
    return items
}
