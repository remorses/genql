import { generateProject } from 'genql/dist/main'
import path from 'path'

generateProject({
    endpoint: 'https://graphql-compose.herokuapp.com/northwind/',
    output: path.join(__dirname, 'generated'),
    scalarTypes: {
        MongoID: 'string',
    },
})
