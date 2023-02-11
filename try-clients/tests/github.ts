import { createClient, everything } from '../github/generated'

describe('github', () => {
    const token = process.env.GITHUB_TOKEN
    if (!token) {
        throw new Error(
            'you need to provide a GITHUB_TOKEN as env to run this test',
        )
    }
    const client = createClient({
        url: 'https://api.github.com/graphql',
        headers: {
            Authorization: 'Bearer ' + token,
        },
    })
    it('simple normal syntax', async () => {
        var res1 = await client.query({
            repository: {
                __args: {
                    name: 'genql',
                    owner: 'remorses',
                },
                ...everything,
                codeOfConduct: {
                    body: true,
                },
            },
        })
        console.log(res1)
    })
})
