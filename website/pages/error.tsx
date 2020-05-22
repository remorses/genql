import { Box } from '@chakra-ui/core'
import { useRouter } from 'next/router'
import { LandingProvider, Link, SectionTitle } from 'landing-blocks'
import React, { Fragment } from 'react'

const BG =
    'radial-gradient( 37.86% 77.79% at 50% 100%, rgba(113,128,150,0.25) 0%, rgba(113,128,150,0) 100% ), linear-gradient(180deg,#1a202c 0%,#2d3748 100%), linear-gradient(180deg,#0d0f14 0%,rgba(27,32,43,0) 100%),#2f3747'

const Page = () => {
    const { query } = useRouter()
    return (
        <Fragment>
            <LandingProvider>
                <SectionTitle
                    my='100px'
                    heading='Got an error 😢'
                    subheading={<Box color='red.500'>{query.error}</Box>}
                />
            </LandingProvider>
        </Fragment>
    )
}
export default Page
