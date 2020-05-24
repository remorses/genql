import NextLink from 'next/link'
import React from 'react'
import { Link, Stack, Box, useColorMode } from '@chakra-ui/core'

import { AuthProvider, useAuthData } from 'firebase-react-components'
import { LandingProvider, NavBar, Footer } from 'landing-blocks'
import firebase from 'firebase'
import 'firebase/app'
import { firebaseConfig } from '../constants'

export const BG =
    'radial-gradient( 37.86% 77.79% at 50% 100%, rgba(113,128,150,0.25) 0%, rgba(113,128,150,0) 100% ), linear-gradient(180deg,#1a202c 0%,#2d3748 100%), linear-gradient(180deg,#0d0f14 0%,rgba(27,32,43,0) 100%),#2f3747'

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export default function App(props) {
    const { Component, pageProps } = props
    return (
        <AuthProvider
            noPersistence // disable firebase persistence
            onLogin={async (user, creds) => {
                console.log(user, creds.toJSON())
            }}
            onError={(e) => alert(e.message)}
        >
            <LandingProvider
                minH='100%'
                h='100%'
                background={BG}
                black='#333'
                primary='#D566C5'
            >
                <MyNavbar />
                <Stack h='100%' minH='100vh'>
                    <Component {...pageProps} />
                </Stack>
                <MyFooter dark />
            </LandingProvider>
        </AuthProvider>
    )
}

export function MyFooter({ ...rest }) {
    return (
        <Footer
            businessName='Landing Blocks'
            columns={{
                Developers: [
                    <MyLink href='#'>Components</MyLink>,
                    <MyLink href='#'>Components</MyLink>,
                    <MyLink href='#'>Components</MyLink>,
                ],
                Company: [<MyLink href='#'>Components</MyLink>],
                Product: [<MyLink href='#'>Components</MyLink>],
            }}
            {...rest}
        />
    )
}
export function MyNavbar({ ...rest }) {
    const { user, loading } = useAuthData()
    const navs = [
        <MyLink>Use Cases</MyLink>,
        <MyLink>Pricing</MyLink>,
        <MyLink>About Us</MyLink>,
        user ? <MyLink>User</MyLink> : <MyLink href='/login'>Login</MyLink>, // TODO add pages for user page
    ]
    return (
        <NavBar
            dark
            logo={
                <NextLink href='/'>
                    <Box cursor='pointer' fontWeight='medium' fontSize='24px'>
                        Genql
                    </Box>
                </NextLink>
                // <Image
                //     width='120px'
                //     stroke='#000'
                //     src='/logo_on_black.svg'
                // />
            }
            navs={navs}
            {...rest}
        />
    )
}

export function MyLink({ href = '#', ...rest }) {
    return (
        <NextLink href={href} passHref {...rest}>
            <Link
                fontWeight='medium'
                // color='black'
                // color={{ light: 'blue.400', dark: 'white' }[colorMode]}
                {...rest}
            />
        </NextLink>
    )
}
