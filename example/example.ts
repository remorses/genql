import { createClient } from './generated/createClient'

const client = createClient({})

async function main() {
    const x = await client.query({
        continents: {
            code: 1,
            name: 1,
        },
    })
    console.log(JSON.stringify(x, null, 4))
}

main()
