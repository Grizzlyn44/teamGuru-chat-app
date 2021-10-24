import NextAuth, { User, Session } from 'next-auth'
import type { NextApiRequest, NextApiResponse } from 'next'
import Providers from "next-auth/providers"
import { apiCreateUser } from "pages/api/auth/createUser"

import dbConnect from "utils/mongo/mongoose"
import UserSchema from "models/User";
import { JWT } from 'next-auth/jwt'

export default async function auth(req: NextApiRequest, res: NextApiResponse) {

    const { MONGODB_URL, NEXT_PUBLIC_WEB_ROOT_URL, JWT_SECRET, JWT_HASH_ALGORITHM, SESSION_SECRET } = process.env

    if(!MONGODB_URL) throw new Error("MISSING process.env.MONGODB_URL")
    if(!NEXT_PUBLIC_WEB_ROOT_URL) throw new Error("MISSING process.env.NEXT_PUBLIC_WEB_ROOT_URL")
    if(!JWT_SECRET) throw new Error("MISSING process.env.JWT_SECRET")
    if(!JWT_HASH_ALGORITHM) throw new Error("MISSING process.env.JWT_HASH_ALGORITHM")
    if(!SESSION_SECRET) throw new Error("MISSING process.env.SESSION_SECRET")

    // checkEnvValues( [MONGODB_URL, NEXT_PUBLIC_WEB_ROOT_URL, JWT_SECRET, JWT_HASH_ALGORITHM] )

    return await NextAuth(req, res, {
        providers: [
            Providers.Google({
                clientId: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            }),
        ],
        callbacks: {
            async session(session: Session, token) {
                console.log("session callback")
                await dbConnect()
                const User = await UserSchema.findById( { _id: token.sub } ).catch( err => { throw new Error("Session callback error") } )
                const modifiedUser = {...session.user, name: User.name, isNewUser: User.isNewUser }
                session.user = modifiedUser
                return Promise.resolve(session)
            },
            async jwt(token, user, account, profile, isNewUser) {

                // console.log("token, user, account, profile, isNewUser", token, user, account, profile, isNewUser)
                return token
            }
        },
        session: {
            jwt: true,
            maxAge: 60 * 60,
            updateAge: 60 * 30
        },
        jwt: {
            secret: JWT_SECRET,
            maxAge: 60 * 60
        },
        events: {
            async createUser(user: User) {                
                await apiCreateUser("POST", user)
            }
        },
        database: MONGODB_URL,
        theme: "dark"
    })
}