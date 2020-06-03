import {
    generateQueryOp,
    createClient,
    everything,
} from '../generated'
import { prettify } from 'genql-cli/dist/helpers/prettify'
import { parse } from 'graphql'
import { SearchType } from '../generated'

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
        console.log(prettify(query, 'graphql'))
    })
})


