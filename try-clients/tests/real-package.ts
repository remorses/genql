import { createClient } from '@shitty-scope-name/countries'

test('countries client', async () => {
    const client = createClient({})
    const res = await client.query({
        countries: [{ filter: { code: { regex: '.*' } } }, { code: true }],
    })
    console.log(res)
})
