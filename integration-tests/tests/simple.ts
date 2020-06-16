import { generateQueryOp, createClient, everything } from '../generated'
import { prettify } from 'genql-cli/dist/helpers/prettify'
import { parse } from 'graphql'
import { generateSubscriptionOp } from '../generated'

describe('generate queries', () => {
    it('query', () => {
        const { query } = generateQueryOp({
            repository: [
                {
                    name: 'repo',
                    owner: 'owner',
                },
                {
                    createdAt: true,
                    forks: {
                        cursor: true,
                        node: {
                            ...everything,
                        },
                    },
                },
            ],
        })
        console.log(prettify(query, 'graphql'))
    })
    it('subscriptions', () => {
        const { query } = generateSubscriptionOp({
            user: {
                __scalar: true,
            },
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
                        cursor: true,
                        node: {
                            ...everything,
                        },
                    },
                },
            ],
            user: {
                ...everything,
            },
        })
        console.log(prettify(query, 'graphql'))
    })
})
