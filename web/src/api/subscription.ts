interface Params {
  email: string
}

interface Response {
  data?: {
    ok: boolean
  }
  error?: string
}

export const subscribeToEmail = async ({ email }: Params) => {
  const res = await fetch('/api/subscription', {
    method: 'POST',
    body: JSON.stringify({
      email,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const { data, error }: Response = await res.json()

  if (!res.ok) {
    throw new Error(error)
  }

  if (data) {
    return data
  }

  throw new Error('')
}
