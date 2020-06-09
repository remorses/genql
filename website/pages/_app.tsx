import { ColorModeSwitch, DokzProvider } from 'dokz'
import { AuthProvider, useAuthData } from 'firebase-react-components'
import firebase from 'firebase/app'
import 'firebase/auth'
import Cookies from 'js-cookie'
import { Footer, LandingProvider, Link, NavBar } from 'landing-blocks'
import { Box, Stack } from 'layout-kit-react'
import Head from 'next/head'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { DOCS_LINK, firebaseConfig, FIREBASE_ID_TOKEN_COOKIE, GITHUB_LINK } from '../constants'

export const BG = '#2d3748'
// 'radial-gradient( 37.86% 77.79% at 50% 100%, rgba(113,128,150,0.25) 0%, rgba(113,128,150,0) 100% ), linear-gradient(180deg,#1a202c 0%,#2d3748 100%), linear-gradient(180deg,#0d0f14 0%,rgba(27,32,43,0) 100%),#2f3747'

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export default function App(props) {
    const { Component, pageProps } = props
    const { pathname } = useRouter()
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
    // console.log({ pathname })
    if (pathname.startsWith('/docs')) {
        return (
            <>
                <Head>
                    <script src='https://embed.runkit.com'></script>
                </Head>
                <DokzProvider
                    headerItems={
                        <Stack direction='row' spacing='30px' align='center'>
                            <Link href='/'>Website</Link>,
                            <Link
                                isExternal
                                href='https://github.com/remorses/genql'
                            >
                                Github
                            </Link>
                            ,
                            <ColorModeSwitch />,
                        </Stack>
                    }
                    docsRootPath='pages/docs'
                    headerLogo={<Logo />}
                >
                    <Component {...pageProps} />
                </DokzProvider>
            </>
        )
    }
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
                primary='#48BB79'
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
                    <MyLink href='https://twitter.com/__morse'>
                        My Twitter
                    </MyLink>,
                    <MyLink href='https://github.com/remorses/'>
                        My Github
                    </MyLink>,
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
                <Logo />
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

const Logo = () => (
    <NextLink href='/'>
        <Box cursor='pointer' fontWeight='medium' fontSize='24px'>
            Genql
        </Box>
    </NextLink>
)

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
