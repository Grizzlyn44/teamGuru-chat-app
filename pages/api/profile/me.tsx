import type { NextApiRequest, NextApiResponse } from 'next'
import jwt, {DecodeOptions} from "jsonwebtoken"
import { getToken } from "next-auth/jwt"
// import { connectToDatabase } from "utils/mongo/mongodb"

type Data = {
    id: string;
    email: string;
    name: string;
    users: Array<any>;
}

export default async function handler( req: NextApiRequest, res: NextApiResponse<any> ) {

  return res.status(200).send({})

  const token = await getToken({ req, secret: process.env.JWT_SECRET }).catch( err => res.status(403).end() )

  const profileObj = {
      id: "1",
      email: "placeholder",
      name: "placeholder",
      users: [],
  }

  res.status(200).json(profileObj)

}
