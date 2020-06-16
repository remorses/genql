import {
    createClient,
    createSubscriptionClient,
    everything,
} from '../generated'

describe('hasura', () => {
    const client = createClient({})
    const subCLient = createSubscriptionClient({})
    it('simple normal syntax', async () => {
        // console.log('x')
        var res4 = await subCLient
            .subscription({
                user: {
                    __scalar: true,
                },
            })
            .subscribe({
                next: (x) => console.log('next', x),
                error: console.log,
            })
        var res5 = await subCLient.chain.subscription
            .user({})
            .get({ ...everything })
            .subscribe({ next: (x) => console.log('next', x) })
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

        // console.log(res4)
        var res2 = await client.query({
            user: {
                ...everything,
            },
        })
        console.log(res2)

        var res3 = await client.chain.mutation
            .delete_user({
                where: { id: { _eq: '3' } },
            })
            .get({ ...everything })
        console.log(res3)

        res4.unsubscribe()
    })
})
