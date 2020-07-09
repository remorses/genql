import { generateProject } from 'genql-cli/src/main'
import fs from 'fs'
import path from 'path'

generateProject({
    schema: path.join(__dirname, 'schema.graphql'),
    output: path.join(__dirname, 'generated'),
    scalarTypes: {
        MongoID: 'string',
    },
}).catch(console.error)
