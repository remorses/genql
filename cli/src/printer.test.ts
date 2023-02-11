import { parse, __EnumValue } from 'graphql'
import { print } from './printer'

let client = {
    query: (x) => x,
}

describe('printer', () => {
    it('should print code', () => {
        const ast = parse(`
            query {
                user {
                    name
                }
            }
        `)
        const code = print(ast)
    })
    it('printed code is valid', () => {
        const ast = parse(`
            query {
                user {
                    name
                }
            }
        `)
        const code = print(ast)
        console.log(code)
        eval(code)
    })
    it('printed code is valid, args', () => {
        const ast = parse(`
            query {
                user(name: "xxx", number: 3, another: {a: 1, b: "2"}) {
                    name
                    field {
                        scalar
                    }
                }
            }
        `)
        const code = print(ast)
        console.log(code)
        eval(code)
    })
    it('printed code is valid, fragments', () => {
        const ast = parse(`
            query {
                user(name: "xxx", number: 3) {
                    ...userFragment
                    another
                    ...userFragment
                }
            }
            fragment userFragment on User {
                name
                field {
                    scalar
                }
            }
        `)
        const code = print(ast)
        console.log(code)
        eval(code)
    })
    it('printed code is valid, unions', () => {
        const ast = parse(`
            query {
                user(name: "xxx", number: 3) {
                    ...on User {
                        name
                    }
                    ...on Account {
                        account
                        ...userFragment
                    }
                    anotherOne
                }
            }
            fragment userFragment on User {
                name
                field {
                    scalar
                }
            }
        `)
        const code = print(ast)
        console.log(code)
        eval(code)
    })
})
