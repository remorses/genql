const fs = require('fs')
const path = require('path')
const cjson = require('compressed-json')

const DIRECTORY = 'github'

const data = fs
    .readFileSync(path.join(__dirname, DIRECTORY +'/generated/types.json'))
    .toString()
// Convert json object
const compressedString = cjson.compress.toString({
    data,
})

fs.writeFileSync(
    path.join(__dirname, DIRECTORY + '/generated/types_compressed.json'),
    compressedString,
)
