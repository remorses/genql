import { createClient } from './generated/createClient'

const client = createClient({})


async function main() {
    const x =  await client.query({
        user: {
            age: 1,
            id: 1,
        },
    })
    
}
