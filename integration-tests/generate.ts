import { generate } from '@genql/cli/src/main'
import fs from 'fs'
import path from 'path'

const schema = path.join(__dirname, 'schema.graphql')
console.log('generating types from', schema)
generate({
    schema: fs.readFileSync(schema).toString(),
    output: path.join(__dirname, 'generated'),
    scalarTypes: {
        MongoID: 'string',
        MyCustomScalar: `{ x: string }`,
    },
    // verbose: false,
}).catch(console.error)
