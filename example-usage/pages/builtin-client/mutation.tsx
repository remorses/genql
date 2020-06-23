import { Stack, Box, Spinner, Input, Button, useToast } from '@chakra-ui/core'
import { Hero, SectionTitle, PageContainer } from 'landing-blocks'
import React, { useState, FormEvent } from 'react'
import useSWR from 'swr'
import { client } from '../_app'
import { everything } from '../../generated'
import { useQuery, useMutation } from '../../client'

const Page = () => {
    const [name, setName] = useState('')
    const [execute, { loading, error, result: data }] = useMutation(
        async (name: string) => {
            if (name.split(' ').length > 1) {
                throw new Error('cannot contain spaces')
            }
            return {
                insert_user: [
                    {
                        objects: [
                            {
                                name,
                                id: Math.floor(Math.random() * 10000).toFixed(
                                    0,
                                ),
                            },
                        ],
                    },
                    { returning: { ...everything }, ...everything },
                ],
            }
        },
    )
    const toast = useToast()
    return (
        <Stack align='center' spacing='40px' mt='40px'>
            <Hero bullet='Mutation' heading='Mutation Example' subheading='' />
            <PageContainer spacing='10' maxWidth='500px'>
                <Input
                    placeholder='Name'
                    value={name}
                    onChange={(e: any) => setName(e.target.value)}
                />
                <Button
                    isLoading={loading}
                    onClick={() => {
                        execute(name).catch()
                    }}
                >
                    Insert User
                </Button>
                <Box as='pre'>{data && JSON.stringify(data, null, 4)}</Box>
                {error && (
                    <Box color='red.500' as='pre'>
                        {error && error.message}
                    </Box>
                )}
            </PageContainer>
        </Stack>
    )
}

export default Page
