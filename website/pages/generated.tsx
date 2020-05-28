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
} from 'graphql'

const schema = buildSchema(`
interface Node {
    id: ID
  }
  
  enum Choice {
    ONE,
    TWO,
    THREE
  }
  
  type User implements Node {
    name: String
    company(id: String): Company
    employerCompany: Company
    pastEmployers(max: Int! = 1): [Company]
    id: ID
  }
  
  type DirectorConnection {
    ceos: [User],
    cursor: ID
  }
  
  type Nested {
    user: User
  }
  
  type Company implements Node {
    name: String
    nested: Nested
    legalForm: String
    ceo: User
    id: ID
    employees(limit: Int! = 1): [User]
    directors(limit: Int! = 1): DirectorConnection,
    choice: Choice
  }
  
  type Query {
    user(username: String!, choice: Choice!): User
    users(limit: Int! = 1, first: Int = 1, last: Int = 1): [User]
    company(id: String!, max: Int! = 1): Company
    node(id: ID): Node
    other(_id: ID!): String
  }
  
  schema {
    query: Query
  }`)

export async function getServerSideProps() {
    const { queryDocument, variableValues, seed } = generateRandomQuery(
        schema,
        {
            // seed: 2,
        },
    )
    return {
        props: {
            query: print(queryDocument),
        },
    }
}

const Page = ({ query }) => {
    return (
        <LandingProvider bg='white' primary='#D566C5'>
            <SectionTitle my='100px' heading='Example query' />
            <PageContainer>
                <Box fontSize='14px' as='pre'>
                    {query}
                </Box>
            </PageContainer>
        </LandingProvider>
    )
}
export default Page
