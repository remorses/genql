const { config } = require('dotenv')

config({ path: 'test.env', })
// require('ts-node/register')
require('sucrase/register')
