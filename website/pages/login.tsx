import { Stack } from '@chakra-ui/core'
import { AuthProvider, GithubButton } from 'firebase-react-components'
import { PageContainer, SectionTitle } from 'landing-blocks'
import Router, { useRouter } from 'next/router'
import React from 'react'

const BG =
    'radial-gradient( 37.86% 77.79% at 50% 100%, rgba(113,128,150,0.25) 0%, rgba(113,128,150,0) 100% ), linear-gradient(180deg,#1a202c 0%,#2d3748 100%), linear-gradient(180deg,#0d0f14 0%,rgba(27,32,43,0) 100%),#2f3747'

const Page = () => {
    const { query } = useRouter()
    const href = `https://www.npmjs.com/package/${query.name}`
    return (
        <PageContainer>
            <AuthProvider onLogin={() => Router.push('/me')}>
                <Stack
                    minH='300px'
                    justify='center'
                    align='center'
                    borderRadius='lg'
                    bg='white'
                    p='40px'
                    spacing='40px'
                >
                    <SectionTitle subheading='Login or Sign up to Genql' />
                    <Stack maxW='300px'>
                        <GithubButton />
                    </Stack>
                </Stack>
            </AuthProvider>
        </PageContainer>
    )
}
export default Page
