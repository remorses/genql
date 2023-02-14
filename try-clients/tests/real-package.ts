import { parse } from 'graphql'
import assert from 'assert'
import { createClient, everything } from '@shitty-scope-name/countries'

describe('countries real package', () => {
    const client = createClient({})
    it('simple query', async () => {
        const res = await client.query({
            countries: [
                { filter: { code: { eq: 'US' } } },
                {
                    ...everything,
                },
            ],
        })
        console.log(res)
        assert(res)
    })
})
