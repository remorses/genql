import { createClient, everything } from '../hasura/generated'

describe('hasura', () => {
    const client = createClient({})
    const name = 'John'
    const id = '4'
    it('simple normal syntax', async () => {
        var res3 = await client.chain.mutation
            .delete_user({
                where: { id: { _eq: id } },
            })
            .get({ ...everything })
        console.log(res3)
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

        var res5 = client.chain.subscription
            .user({ limit: 4 })
            .get({ ...everything })
            .subscribe({
                next: (x) => console.log('next2', x),
                error: console.log,
                complete: () => console.log('complete2'),
            })

        var res1 = await client.chain.mutation
            .insert_user({
                objects: [
                    {
                        age: 1,
                        id,
                        name,
                    },
                ],
            })
            .get({ ...everything, returning: { ...everything } })
        console.log(res1)

        var res2 = await client.query({
            user: {
                ...everything,
            },
        })
        console.log(res2)

        res4.unsubscribe()
        res5.unsubscribe()
        client.wsClient.close()
        console.log(client.wsClient.operations)
    })
})
