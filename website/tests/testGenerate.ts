import { createPackage, runCommand } from '../pages/api/publish'

it('createPackage', async () => {
    await createPackage({
        endpoint: 'https://countries.trevorblades.com',
        name: 'xxxxxxxxx',
        version: 0,
        callback: async ({ cwd }) => {
            console.log(await runCommand({ cmd: `ls -l`, cwd }))
            console.log(await runCommand({ cmd: `cat package.json`, cwd }))
        },
    })
})
