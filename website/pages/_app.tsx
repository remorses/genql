import NextLink from 'next/link'
import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import { Link, Stack, Box, useColorMode } from '@chakra-ui/core'

import { AuthProvider, useAuthData } from 'firebase-react-components'
import { LandingProvider, NavBar, Footer } from 'landing-blocks'
import firebase from 'firebase'
import 'firebase/app'
import {
    firebaseConfig,
    FIREBASE_ID_TOKEN_COOKIE,
    GITHUB_LINK,
    DOCS_LINK,
} from '../constants'

export const BG =
    'radial-gradient( 37.86% 77.79% at 50% 100%, rgba(113,128,150,0.25) 0%, rgba(113,128,150,0) 100% ), linear-gradient(180deg,#1a202c 0%,#2d3748 100%), linear-gradient(180deg,#0d0f14 0%,rgba(27,32,43,0) 100%),#2f3747'

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export default function App(props) {
    const { Component, pageProps } = props
    useEffect(() => {
        // TODO this could be a npm package
        return firebase.auth().onIdTokenChanged(async (user) => {
            if (!user) {
                // Cookies.remove(FIREBASE_ID_TOKEN_COOKIE)
                return
            }
            const uid = await user.getIdToken()
            Cookies.set(FIREBASE_ID_TOKEN_COOKIE, uid, {
                path: '/',
            })
        })
    }, [])
    return (
        <AuthProvider
            // noPersistence // disable firebase persistence
            onLogin={async (user, creds) => {
                console.log(user, creds.toJSON())
                // const uid = await user.getIdToken()
                // Cookies.set(FIREBASE_ID_TOKEN_COOKIE, uid, {
                //     path: '/',
                // })
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
            businessName='Genql'
            columns={{
                Resources: [
                    <MyLink href={GITHUB_LINK}>Github</MyLink>,
                    <MyLink href={DOCS_LINK}>Docs</MyLink>,
                ],
                'Find Us': [
                    <MyLink href='https://twitter.com/__morse'>Twitter</MyLink>,
                    <MyLink href='https://github.com/remorses/'>Github</MyLink>,
                ],
                'Who made this?': [
                    <MyLink href='https://twitter.com/__morse'>My Twitter</MyLink>,
                    <MyLink href='https://github.com/remorses/'>My Github</MyLink>,
                ],
            }}
            {...rest}
        />
    )
}
export function MyNavbar({ ...rest }) {
    const { user, loading } = useAuthData()
    const navs = [
        <MyLink href={GITHUB_LINK}>Github</MyLink>,
        <MyLink href={DOCS_LINK}>Docs</MyLink>,
        user ? (
            <MyLink href='/me'>Dashboard</MyLink>
        ) : (
            <MyLink href='/login'>Login</MyLink>
        ),
    ]
    if (user) {
        navs.push(<MyLink href='/logout'>Logout</MyLink>)
    }
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
    const isExternal = href.startsWith('http')
    if (isExternal) {
        return (
            <Link
                fontWeight='medium'
                isExternal={isExternal}
                href={href}
                // color='black'
                // color={{ light: 'blue.400', dark: 'white' }[colorMode]}
                {...rest}
            />
        )
    }
    return (
        <NextLink
            prefetch={isExternal}
            shallow={isExternal}
            href={href}
            passHref
            {...rest}
        >
            <Link
                fontWeight='medium'
                isExternal={isExternal}
                // color='black'
                // color={{ light: 'blue.400', dark: 'white' }[colorMode]}
                {...rest}
            />
        </NextLink>
    )
}
