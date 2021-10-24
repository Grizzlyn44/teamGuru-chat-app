import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler( req: NextApiRequest, res: NextApiResponse<any> ) {

    console.log("req", req)

    return res.status(200).send({})
  
    // const token = await getToken({ req, secret: process.env.JWT_SECRET }).catch( err => res.status(403).end() )
  
    // const profileObj = {
    //     id: "1",
    //     email: "placeholder",
    //     name: "placeholder",
    //     users: [],
    // }
  
    // res.status(200).json(profileObj)
  
  }
  