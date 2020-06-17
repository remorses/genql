import { createClient, everything } from '../hasura/generated'

describe('hasura', () => {
    const client = createClient({})
    it('simple normal syntax', async () => {
        var res3 = await client.chain.mutation
            .delete_user({
                where: { id: { _eq: '3' } },
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
            })

        var res5 = client.chain.subscription
            .user({ limit: 4 })
            .get({ ...everything })
            .subscribe({ next: (x) => console.log('next2', x) })

        var res1 = await client.chain.mutation
            .insert_user({
                objects: [
                    {
                        age: 1,
                        id: '3',
                        name: 'xxxx',
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
    })
})
