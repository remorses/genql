const withTM = require('next-transpile-modules')([
    '@genql/cli',
    // 'landing-blocks',
])
// Tell webpack to compile the "bar" package
// https://www.npmjs.com/package/next-transpile-modules
module.exports = withTM({ pageExtensions: ['js', 'jsx', 'mdx', 'tsx', 'ts'] })
