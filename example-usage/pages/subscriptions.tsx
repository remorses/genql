import { Stack, Box, Spinner, Input } from '@chakra-ui/core'
import { Hero, SectionTitle, PageContainer } from 'landing-blocks'
import React, { useState } from 'react'
import useSWR from 'swr'
import { createClient } from '../hasura'
import { everything } from '../generated'
import { useObservable } from 'react-extra-hooks'

const client = createClient({
    subscription: {
        url: 'wss://hasura-2334534.herokuapp.com/v1/graphql',
    },
})

console.log('client', client)

const Page = () => {
    const { result: data, loading, error } = useObservable(() =>
        client.subscription({
            user: {
                name: true,
            },
        }),
    )
    return (
        <Stack spacing='40px' mt='40px'>
            <Hero
                bullet='Genql lets you write graphql queries as code'
                heading='Example use of Genql'
                subheading='Search for countries via https://countries.trevorblades.com'
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
                        {data?.user?.map((x) => (
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
