import nextCookies from 'next-cookies'
import { FIREBASE_ID_TOKEN_COOKIE, FIREBASE_ADMIN_CONFIG } from '../constants'
import { NextApiRequest } from 'next'
import admin from 'firebase-admin'

export async function getFirebaseDecodedToken(req: {
    headers: { cookie?: string }
}): Promise<Partial<admin.auth.DecodedIdToken>> {
    try {
        initAdmin()
        const c = nextCookies({ req })
        if (!c) {
            return {}
        }
        const idToken = c[FIREBASE_ID_TOKEN_COOKIE]
        if (!idToken) {
            return {}
        }
        const res = await admin.auth().verifyIdToken(idToken)
        return res
    } catch (e) {
        console.error('id token not valid', e)
        return {}
    }
    return {}
}

export function initAdmin() {
    if (!admin.apps.length) {
        admin.initializeApp({
            credential: admin.credential.cert(FIREBASE_ADMIN_CONFIG),
        })
    }
    return admin
}
