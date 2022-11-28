import { createClient, everything } from '../hasura/generated'

describe('hasura', () => {
    const client = createClient({})
    const name = 'John'
    const id = '4'
    it('simple normal syntax', async () => {
        var res4 = client
            .subscription({
                user: {
                    __scalar: true,
                },
            })
            .subscribe({
                next: (x) => console.log('next1', x),
                error: console.log,
                complete: () => console.log('complete1'),
            })

        var res2 = await client.query({
            user: {
                ...everything,
            },
        })
        console.log(res2)

        res4.unsubscribe()
        client.wsClient.close()
        console.log(client.wsClient.operations)
    })
})
