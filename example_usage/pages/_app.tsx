import { Stack, DarkMode } from '@chakra-ui/core'
import { LandingProvider } from 'landing-blocks'
import React from 'react'

import { createClient } from '../generated/createClient'

export const client = createClient() // TODO instead of passing a fetcher you can pass options to fetch function like headers, url, method, ...

export default function App(props) {
    const { Component, pageProps } = props
    return (
        <DarkMode>
        <LandingProvider
            minH='100%'
            h='100%'
            // background={BG}
            black='#333'
            primary='#D566C5'
        >
            <Stack h='100%' minH='100vh'>
                <Component {...pageProps} />
            </Stack>
        </LandingProvider>
        </DarkMode>
    )
}
