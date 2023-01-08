import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, surname, email } = req.body
  
   res.status(200).json('Success')
   res.status(400).json('Bad request')
}
