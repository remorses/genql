import { Stack, Box, Spinner, Input, Link } from '@chakra-ui/core'
import NextLink from 'next/link'
import { Hero, SectionTitle, PageContainer } from 'landing-blocks'
import React, { useState } from 'react'
import useSWR from 'swr'
import { client } from './_app'
import { everything } from '../generated'

const paths: Record<any, any> = {
    'react-query': '/react-query',
    swr: '/swr',
    apollo: '/apollo',
}

const Page = () => {
    return (
        <Stack spacing='40px' mt='40px'>
            <Hero subheading='Example of usage with genql' />
            <PageContainer spacing='40px'>
                {Object.keys(paths).map((k) => (
                    <Box
                        color='green.400'
                        borderRadius='10px'
                        p='20px'
                        borderWidth='1px'
                        minW='100%'
                    >
                        <NextLink href={paths[k]}>
                            <Link>{k}</Link>
                        </NextLink>
                    </Box>
                ))}
            </PageContainer>
        </Stack>
    )
}

export default Page
