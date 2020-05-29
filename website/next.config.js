const withTM = require('next-transpile-modules')(['genql-cli'])
const {withDokz} = require('dokz/dist/plugin')
// Tell webpack to compile the "bar" package
// https://www.npmjs.com/package/next-transpile-modules
module.exports = withTM(withDokz({pageExtensions: ['js', 'jsx', 'mdx', 'tsx'],}))
