import { websiteUrl } from '../src/constants'
import { DOMParser } from 'xmldom'

import fs from 'fs'
import { getClientsData } from '../src/support/utils'

async function generate() {
    let items = await getClientsData()
    const paths = [
        '/', //
        '/apis',
        ...items.map((x) => `/apis/${x.slug}`),
    ]
    const myUrls = paths
        .map((relativeP) => {
            const u = new URL(relativeP, websiteUrl).toString()
            return `<url><loc>${u}</loc></url>`
        })
        .join('\n')

    let [docs] = await Promise.all([
        getUrlsFromSitemap({
            url: new URL('/docs/sitemap.xml', websiteUrl).toString(),
        }),
    ])
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${myUrls}
        ${docs}
    </urlset>
    `
    fs.writeFileSync('public/sitemap.xml', sitemap)
}
const parser = new DOMParser()

async function getUrlsFromSitemap({ url }) {
    const docsSitemap = await (
        await fetch(url, {
            headers: {
                accept: 'text/xml',
            },
        })
    ).text()

    const xml = parser.parseFromString(docsSitemap, 'text/xml')

    const urls = Array.from(xml.getElementsByTagName('loc'))
        .map((x: any) => x.textContent)
        .map((url) => {
            const u = new URL(new URL(url).pathname, websiteUrl).toString()
            return `<url><loc>${u}</loc></url>`
        })
        .join('\n')
    return urls
}

generate()
