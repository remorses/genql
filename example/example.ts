import {
    createClient,
    createSubscriptionClient,
    everything,
    generateQueryOp,
    QueryResult,
} from './generated/createClient'

const client = createClient()

const subClient = createSubscriptionClient({
    url: 'ws://graphql-compose.herokuapp.com/northwind/',
})

async function main() {
    const s1 = await subClient
        .subscription({
            orderCreated: {
                ...everything,
            },
        })
        .subscribe(
            {
                next(x) {
                    console.log('got value ' + x)
                },
                error(err) {
                    console.error('something wrong occurred: ' + err)
                },
                complete() {
                    console.log('done')
                },
            },
            // console.error,
        )

    const q = await client.query({
        viewer: {
            category: {
                ...everything,
                _id: 1,
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
    q.viewer.category._id
    console.log(JSON.stringify(q, null, 4))
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
        .get({ record: { _id: 1, customer: { _id: 1 } } })
    // m2.record.customer?.companyName
    console.log(JSON.stringify(m2, null, 4))
    m2.record._id
    m2.record.customer?._id

    s1.unsubscribe()
}

main().catch(console.error)

const q = {
    viewer: {
        category: {
            _id: 1,
        },
    },
}
const { query, variables } = generateQueryOp(q)

const res: QueryResult<typeof q> = {
    viewer: {
        category: {
            _id: 234,
        },
    },
}

res

console.log(query)
