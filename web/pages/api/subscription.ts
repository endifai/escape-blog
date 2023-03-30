import fetch from 'isomorphic-fetch'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req

  if (method === 'POST') {
    const { email } = body

    await fetch(process.env.API_URL + '/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    res.status(200).json({ data: { ok: true } })
  } else {
    res.status(404).json({ error: 'Incorrect method' })
  }
}

export default handler
