import {
    generateQueryOp,
    createClient,
    everything,
} from '../generated/createClient'
import { prettify } from 'genql-cli/dist/helpers/prettify'
import { parse } from 'graphql'

describe('generate queries', () => {
    it('simple', () => {
        const { query } = generateQueryOp({
            repository: [
                {
                    name: 'repo',
                    owner: 'owner',
                },
                {
                    createdAt: true,
                    forks: {
                        edges: {
                            cursor: true,
                            node: {
                                ...everything,
                            },
                        },
                    },
                },
            ],
        })
        parse(query)
        console.log(prettify(query, 'graphql'))
    })
    it('many', () => {
        const { query } = generateQueryOp({
            repository: [
                {
                    name: 'repo',
                    owner: 'owner',
                },
                {
                    createdAt: true,
                    forks: {
                        edges: {
                            cursor: true,
                            node: {
                                ...everything,
                            },
                        },
                    },
                },
            ],
            enterprise: [
                { slug: 'dsf', invitationToken: '' },
                {
                    ...everything,
                    organizations: {
                        ...everything,
                    },
                },
            ],
        })
        parse(query)
        console.log(prettify(query, 'graphql'))
    })
})

// const client = createClient()

// client.query({
//     company: {
//         name: true,
//         id: true,
//     }
// })
