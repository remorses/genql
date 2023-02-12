import { expect, describe, test } from 'vitest'
import { getSiteMeta } from './utils'

describe('getSiteMeta', () => {
    test('getSiteMeta', async () => {
        let meta = await getSiteMeta('https://sourcegraph.com')
        // expect(meta).toMatchInlineSnapshot(`
        //   {
        //     "description": "Sourcegraph is a web-based code search and navigation tool for dev teams. Search, navigate, and review code. Find answers.",
        //     "favicon": "",
        //     "image": "",
        //     "title": "Sourcegraph",
        //   }
        // `)
        expect(meta?.description).toBeTruthy()
        expect(meta?.title).toBeTruthy()
    })
})
