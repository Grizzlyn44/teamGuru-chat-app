import dbConnect from "utils/mongo/mongoose"
import type { NextApiRequest, NextApiResponse } from 'next'
import { getToken, encode, decode } from "next-auth/jwt"
import UserSchema from "models/User"
import { FilterQuery, UpdateQuery, QueryOptions } from "mongoose"
import _ from "lodash"

export default async ( req: NextApiRequest, res: NextApiResponse<any> ) => {
    await dbConnect()

    const { method } = req

    if( method === "POST") {
        try {

            const secret = process.env.JWT_SECRET
            const claims = await getToken({ req, secret })

            if(!claims) return res.status(403).end()

            const bodyData = JSON.parse(req.body)

            const {searchQuery} = bodyData

            if(!searchQuery) return res.status(200).send([])

            console.log("searchQuery", searchQuery)

            // const queryFilter:FilterQuery<unknown> = { id: userId }
            // const queryUpdate:UpdateQuery<unknown> = { $set: updateData }
            // const queryOptions:QueryOptions = { new: true }
                
            const Users = await UserSchema.find(
                { "name": { "$regex": '^' + searchQuery, "$options": "i" } }
                // function(err,docs) { 
                //     console.log("err, docs", err, docs)
                // } 
            ).exec();

            console.log("Users", Users)

            const response = Users.map( user => {
                return {
                    username: user.name,
                    image: user.image,
                }
            })

            return res.status(200).send(response)

        } catch {
            return res.status(500).end()
        }
    }

    return res.status(404).end()
}
