import { Box, Spinner, Input } from '@chakra-ui/core'
import { Hero, SectionTitle, PageContainer } from 'landing-blocks'
import { Stack } from 'layout-kit-react'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { client } from './_app'
import { everything } from '../generated/'

const Page = () => {
    const [regex, setRegex] = useState('.*')
    const func = (_: any, regex: string) =>
        client.query({
            countries: [
                { filter: { continent: { regex: regex } } },
                { name: 1, code: 1 },
            ],
        })
    const { data, error } = useQuery(['countries', regex], func)
    return (
        <Stack spacing='40px' mt='40px'>
            <Hero
                bullet='Genql lets you write graphql queries as code'
                heading='Example use of Genql'
                subheading='Search for countries via https://countries.trevorblades.com'
            />
            <PageContainer>
                <Box>Search a continent</Box>
                <Input
                    variant='filled'
                    value={regex}
                    onChange={(e: any) => setRegex(e.target.value)}
                    placeholder='.*'
                />
            </PageContainer>
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

export default Page
