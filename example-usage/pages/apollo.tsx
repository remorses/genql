import { useQuery, ApolloProvider } from '@apollo/react-hooks'
import { Box, Spinner, Stack } from '@chakra-ui/core'
import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'
import { Hero, PageContainer, SectionTitle } from 'landing-blocks'
import React from 'react'
import { generateQueryOp } from '../generated/createClient'

const Page = () => {
    const { query, variables } = generateQueryOp({
        countries: {
            name: 1,
            code: 1,
        },
    })
    const { data, error } = useQuery(gql(query), { variables })
    return (
        <Stack spacing='40px' mt='40px'>
            <Hero
                bullet='Genql lets you write graphql queries as code'
                heading='Example use of Genql'
                subheading='countries fetched via https://countries.trevorblades.com'
            />
            <PageContainer>
                <SectionTitle heading='Countries' />
                {!data && (
                    <Stack justify='center' align='center'>
                        <Spinner />
                    </Stack>
                )}
                {data && (
                    <Stack spacing='20px'>
                        {data?.countries?.map((x) => (
                            <Box borderRadius='10px' p='20px' borderWidth='1px'>
                                {x.name}
                            </Box>
                        ))}
                    </Stack>
                )}
                {error && <Box color='red'>{error.message}</Box>}
            </PageContainer>
        </Stack>
    )
}


const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com',
})


const PageWrapped = () => {
    return (
        <ApolloProvider client={client}>
            <Page />
        </ApolloProvider>
    )
}

export default PageWrapped
