import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    id: string;
    email: string;
    name: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

    const profileObj = {
        id: "1",
        email: "placeholder",
        name: "placeholder"
    }

  res.status(200).json(profileObj)
}
