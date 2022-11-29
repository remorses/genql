export const NPM_SCOPE =
    process.env.NODE_ENV === 'production' ? '@genql' : '@shitty-scope-name'
export const NPM_TOKEN = process.env.NPM_TOKEN

export const SESSION_STORAGE_CONFIG_KEY = 'SESSION_STORAGE_CONFIG_KEY'
console.assert('NPM_TOKEN', NPM_TOKEN)
console.log('NODE_ENV', process.env.NODE_ENV)

export const BG = '#2d3748'

export const GITHUB_LINK = 'https://github.com/remorses/genql'
export const DOCS_LINK = '/docs'
export const CHANGELOG_LINK = 'https://changelog.genql.dev'
export const websiteUrl = 'https://genql.dev'
