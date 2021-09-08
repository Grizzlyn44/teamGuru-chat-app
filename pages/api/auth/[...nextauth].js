import NextAuth from 'next-auth'
import Providers from "next-auth/providers"

const options = {
    providers: [
        Providers.Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async signIn(params) {
            // console.log("signin callback params", params)
            return true
        },
    }
}

export default (req, res) => NextAuth(req, res, options)