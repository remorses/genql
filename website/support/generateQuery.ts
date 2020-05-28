import { Box, Stack } from '@chakra-ui/core'
import { useRouter } from 'next/router'
import {
    LandingProvider,
    Link,
    SectionTitle,
    PageContainer,
} from 'landing-blocks'
import { print } from 'genql-cli/src/printer'
import React, { Fragment } from 'react'
import { generateRandomQuery } from 'graphql-query-generator'
import {
    buildSchema,
    validate,
    DocumentNode,
    OperationDefinitionNode,
    DefinitionNode,
    parse,
    GraphQLSchema,
} from 'graphql'

export function generateQuery(p: {
    packageName: string
    schema: GraphQLSchema
}) {
    const { queryDocument, variableValues, seed } = generateRandomQuery(
        p.schema,
        {
            // seed: 2,
        },
    )
    // console.log(variableValues)
    const thenCode = 'console.log'

    let code = `import { createClient } from '${p.packageName}'\n`
    code += `const client = createClient()\n`
    code += '\n\n'
    code += print(queryDocument, {
        clientVarName: 'client',
        transformVariableName,
        thenCode
    })
    return code
}

const transformVariableName = (x) => {
    return x
        .replace('Query__', '')
        .replace('Mutation__', '')
        .replace('Subscription__', '')
}
