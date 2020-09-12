import { generateQueryOp, createClient, everything } from '../generated'
import { prettify } from '@genql/cli/dist/helpers/prettify'
import { buildASTSchema, OperationDefinitionNode, parse } from 'graphql'
import { generateSubscriptionOp } from '../generated'
import assert from 'assert'

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
    it('recursive type', () => {
        const { query } = generateQueryOp({
            recursiveType: {
                value: 1,
                recurse: {
                    ...everything,
                    recurse: {
                        value: 1,
                        recurse: {
                            ...everything,
                            recurse: {
                                ...everything,
                            },
                        },
                    },
                },
            },
        })
        console.log(prettify(query, 'graphql'))
    })
    it('recursive type with args', () => {
        const { query } = generateQueryOp({
            recursiveType: [
                { requiredVal: ['ciao'] },
                {
                    value: 1,
                    recurse: {
                        ...everything,
                        recurse: {
                            value: 1,
                            recurse: {
                                ...everything,
                                recurse: {
                                    ...everything,
                                },
                            },
                        },
                    },
                },
            ],
        })
        console.log(prettify(query, 'graphql'))
    })

    it('use __name operation name', () => {
        const NAME = 'SomeName'
        const { query } = generateSubscriptionOp({
            __name: NAME,
            user: {
                __scalar: true,
            },
        })
        // assert.strictEqual(op.name, NAME)
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
                        edges: {
                            cursor: true,
                            node: {
                                ...everything,
                            },
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
