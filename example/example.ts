import { createClient } from './generated/createClient'

const client = createClient({})

async function main() {
    const q = await client.query({
        viewer: {
            category: {
                _id: 1,
                name: 1,
            },
            order: {
                customer: {
                    address: {
                        city: 1,
                    },
                },
            },
        },
    })
    console.log(JSON.stringify(q, null, 4))

    const m = await client.mutation({
        createOrder: [
            { record: { customerID: '345345' } },
            { record: { _id: 1, details: { product: { name: 1 } } } },
        ],
    })
    console.log(JSON.stringify(m, null, 4))

}

main().catch(console.error)
