const withTM = require('next-transpile-modules')(['genql-cli'])

// Tell webpack to compile the "bar" package
// https://www.npmjs.com/package/next-transpile-modules
module.exports = withTM()
