import { Box, Stack } from '@chakra-ui/core'
import Router, { useRouter } from 'next/router'
import {
    LandingProvider,
    Link,
    SectionTitle,
    PageContainer,
} from 'landing-blocks'
import {
    AuthProvider,
    GoogleButton,
    GithubButton,
    useAuthData,
} from 'firebase-react-components'
import React, { Fragment, useEffect } from 'react'
import Cookies from 'js-cookie'
import firebase from 'firebase/app'
import 'firebase/auth'
import { FIREBASE_ID_TOKEN_COOKIE } from '../constants'

const Page = () => {
    useEffect(() => {
        firebase
            .auth()
            .signOut()
            .then((_) => Cookies.remove(FIREBASE_ID_TOKEN_COOKIE))
            .then((_) => Router.push('/'))
    }, [])

    return null
}
export default Page
