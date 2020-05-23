export const NPM_SCOPE =
    process.env.NODE_ENV === 'production'
        ? 'shitty-scope-name'
        : '@shitty-scope-name'
export const NPM_TOKEN = process.env.NPM_TOKEN
console.assert('NPM_TOKEN', NPM_TOKEN)
console.log('NODE_ENV', process.env.NODE_ENV)
