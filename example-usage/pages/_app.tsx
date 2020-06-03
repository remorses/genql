import { Stack, DarkMode } from '@chakra-ui/core'
import { LandingProvider } from 'landing-blocks'
import React from 'react'

import { createClient } from '../generated'

export const client = createClient()

export default function App(props) {
    const { Component, pageProps } = props
    return (
        <DarkMode>
            <LandingProvider
                minH='100%'
                h='100%'
                // background={BG}
                black='#333'
            >
                <Stack h='100%' minH='100vh'>
                    <Component {...pageProps} />
                </Stack>
            </LandingProvider>
        </DarkMode>
    )
}
