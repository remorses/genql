import firebase from 'firebase/app'
import 'firebase/auth'
import Cookies from 'js-cookie'
import Router from 'next/router'
import { useEffect } from 'react'
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
