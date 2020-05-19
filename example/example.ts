import { createClient, everything } from './generated/createClient'

const client = createClient()

async function main() {
    const q = await client.query({
        viewer: {
            category: {
                // ...everything,
                _id: 1
            },
            order: {
                // ...everything,
                customer: {
                    address: {
                        city: 1,
                    },
                },
            },
        },
    })
    console.log(JSON.stringify(q, null, 4))
    q.viewer.order
    // const m = await client.mutation({
    //     createOrder: [
    //         { record: { customerID: '345345' } },
    //         { record: { _id: 1, details: { product: { name: 1 } } } },
    //     ],
    // })
    // console.log(JSON.stringify(m, null, 4))

    const q2 = await client.chain.query.viewer.category.get({ _id: 1 })
    console.log(JSON.stringify(q2, null, 4))

    const m2 = await client.chain.mutation
        .createOrder({
            record: {
                orderID: Math.floor(Math.random() * 10000),
                details: [{ discount: 0.2 }],
                shipAddress: { city: 'Milano', country: 'Italy' },
            },
        })
        .get({ record: { _id: 1 } })
    console.log(JSON.stringify(m2, null, 4))
}

main().catch(console.error)
