import {
    createClient,
    everything,
} from '@shitty-scope-name/hasura-testing-client-example-for-tests'

describe('hasura', () => {
    const client = createClient({})
    it('simple normal syntax', async () => {
        // console.log('x')
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
        var res3 = await client.chain.mutation
            .delete_user({
                where: { id: { _eq: '3' } },
            })
            .get({ ...everything })
        console.log(res3)
    })
})
