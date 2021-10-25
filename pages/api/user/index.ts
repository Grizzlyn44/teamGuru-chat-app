import dbConnect from "utils/mongo/mongoose"
import type { NextApiRequest, NextApiResponse } from 'next'
import { getToken, encode, decode } from "next-auth/jwt"
import UserSchema from "models/User"
import { FilterQuery, UpdateQuery, QueryOptions } from "mongoose"
import _ from "lodash"

export interface IResponseIsNewUser {
    isNewUser?: boolean;
}

// export const apiRouteRoot = "user"

// export const apiUpdateUser = async (updateObject: object) => {

//     const { NEXT_PUBLIC_WEB_ROOT_URL } = process.env

//     console.log("0", process.env)

//     if(!NEXT_PUBLIC_WEB_ROOT_URL) throw new Error("NEXT_PUBLIC_WEB_ROOT_URL ENV is missing")

//     console.log("1")

//     // const bodyData:IBody = { user }

//     return await fetch(`${NEXT_PUBLIC_WEB_ROOT_URL}/api/${apiRouteRoot}`, {
//         method: "POST",
//         body: JSON.stringify(updateObject)
//     })
// }

const usernameCheck = (username: string) => {
    const normalUsername = username.replace(" ", "_").normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    if(username !== normalUsername) {
        // some conflict
    }
    return username
}

const generateUpdateObject = (bodyData: any) => {

    const {username, email, image, emailVerified, updatedAt, isNewUser} = bodyData

    let finalObject = {}

    if(username) finalObject = {...finalObject, name: username}
    if(email) finalObject = {...finalObject, email}
    if(image) finalObject = {...finalObject, image}
    // if(emailVerified) should be only trough verify link
    // if(updatedAt)  manual set
    if(isNewUser !== undefined ) finalObject = {...finalObject, isNewUser}

    if(!_.isEmpty(finalObject)) {
        finalObject = {...finalObject, updatedAt: new Date()}
    }
    
    return finalObject

}

export default async ( req: NextApiRequest, res: NextApiResponse<any> ) => {
    await dbConnect()

    const { method } = req

    if( method === "POST") {
        try {

            const secret = process.env.JWT_SECRET
            const claims:any = await getToken({ req, secret })

            const bodyData = JSON.parse(req.body)

            const userId = claims.sub

            const updateData = generateUpdateObject(bodyData)

            console.log("updateData", updateData)

            const queryFilter:FilterQuery<unknown> = { _id: userId }
            const queryUpdate:UpdateQuery<unknown> = { $set: updateData }
            const queryOptions:QueryOptions = { new: true }
                
            const User = await UserSchema.findOneAndUpdate(queryFilter, queryUpdate, queryOptions) //( queryFilter, queryUpdate, queryOptions )

            console.log("User", User)


            console.log("claims", claims)
            console.log("bodyData", bodyData)

            return res.status(200).end()

        } catch {
            return res.status(500).end()
        }
    }

    return res.status(404).end()
}
