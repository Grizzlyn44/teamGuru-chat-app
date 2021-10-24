import dbConnect from "utils/mongo/mongoose"
import UserSchema from "models/User"
import { FilterQuery, UpdateQuery, QueryOptions } from "mongoose"
import { User } from 'next-auth'
import _ from "lodash"

import type { NextApiRequest, NextApiResponse } from 'next'

dbConnect()

export interface IResponseIsNewUser {
    isNewUser?: boolean;
}

interface IBody {
    user: User;
}

export const apiRoute = "auth/createUser"

export const apiCreateUser = async (method: string, user: User) => {

    const { NEXT_PUBLIC_WEB_ROOT_URL } = process.env
    if(!NEXT_PUBLIC_WEB_ROOT_URL) throw new Error("WEB_ROOT_URL ENV is missing")

    const bodyData:IBody = { user }

    await fetch(`${NEXT_PUBLIC_WEB_ROOT_URL}/api/${apiRoute}`, {
        method,
        body: JSON.stringify(bodyData)
    })
}

export default async ( req: NextApiRequest, res: NextApiResponse<any> ) => {
    
    const { method } = req
    const { user } = JSON.parse(req.body) as IBody
    
    if(!user || _.isEmpty(user) ) return res.status(500).end()

    switch(method) {
        case "POST": {
            try {
                const username = user?.name?.toLowerCase().replace(" ", "_").normalize("NFD").replace(/[\u0300-\u036f]/g, "");

                const queryFilter:FilterQuery<unknown> = { _id: user.id }
                const queryUpdate:UpdateQuery<unknown> = { $set: { isNewUser: true, name: username } }
                const queryOptions:QueryOptions = { new: true }
                    
                const User = await UserSchema.findOneAndUpdate( queryFilter, queryUpdate, queryOptions )
    
                await User.save()
                return res.status(200).end()
            } catch {
                return res.status(500).end()
            }
        }
        default: {
            return res.status(404).send
        }
    }

}
