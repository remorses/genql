const withTM = require('next-transpile-modules')(['genql'])

// Tell webpack to compile the "bar" package
// https://www.npmjs.com/package/next-transpile-modules
module.exports = withTM()
