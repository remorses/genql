import {
    generateQueryOp,
    createClient,
    everything,
    enumSomeEnum,
} from '../generated'
import { buildASTSchema, OperationDefinitionNode, parse } from 'graphql'
import { generateSubscriptionOp } from '../generated'
import assert from 'assert'
import snapshot from 'snap-shot-it'
import { expectType } from 'tsd'

const prettify = (code, parser) => require('prettier').format(code, { parser })

describe('generate queries', () => {
    it('enum string is present', () => {
        expectType<'X'>(enumSomeEnum.X)
        assert.strictEqual(enumSomeEnum.X, 'X')
        assert.strictEqual(enumSomeEnum.Y, 'Y')
    })
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
        snapshot(prettify(query, 'graphql'))
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
        snapshot(prettify(query, 'graphql'))
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
        snapshot(prettify(query, 'graphql'))
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
        snapshot(prettify(query, 'graphql'))
    })
    it('subscriptions', () => {
        const { query } = generateSubscriptionOp({
            user: {
                __scalar: true,
            },
        })
        snapshot(prettify(query, 'graphql'))
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
        snapshot(prettify(query, 'graphql'))
    })
    it('do not fetch falsy fields', () => {
        const { query } = generateSubscriptionOp({
            user: {
                common: false,
                name: true,
            },
        })
        // assert.strictEqual(op.name, NAME)
        snapshot(prettify(query, 'graphql'))
    })
    it('do not fetch falsy fields with __scalar', () => {
        const { query } = generateSubscriptionOp({
            user: {
                common: false,
                __scalar: true,
            },
        })
        // assert.strictEqual(op.name, NAME)
        snapshot(prettify(query, 'graphql'))
    })
})
