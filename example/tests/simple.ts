import { generateQueryOp } from '../generated/createClient'
import { Choice } from '../generated/schema'
import { prettify } from 'genql-cli/dist/helpers/prettify'

describe('simple', () => {
    it('simple', () => {
        const { query } = generateQueryOp({
            user: [
                { username: '', choice: Choice.ONE },
                { name: 1, company: { ceo: { name: 1 } } },
            ],
        })
        console.log(prettify(query, 'graphql'))
    })
})
