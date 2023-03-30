import { FormEventHandler, useCallback } from 'react'

import { subscribeToEmail } from 'src/api'

import { Title } from '../title'

export const FeedbackForm = () => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    async (event) => {
      event.preventDefault()

      if (!(event.target instanceof HTMLFormElement)) {
        return
      }

      const formData = new FormData(event.target)
      const { email } = Object.fromEntries(formData) as { email: string }

      try {
        const { ok } = await subscribeToEmail({ email })
      } catch {
      } finally {
        event.target.reset()
      }
    },
    [],
  )

  return (
    <form
      className="pt-15 section-inner relative z-10 flex  flex-1 flex-col items-center text-white"
      onSubmit={handleSubmit}>
      <Title>Stay in touch</Title>

      <div className="mb-20 flex w-full max-w-[500px] overflow-hidden rounded">
        <input
          name="email"
          required
          placeholder="Enter your email address"
          type="email"
          className="flex-1 py-4 px-8 text-sm text-[#817F83]"
        />
        <button type="submit" className="bg-white/[.28] px-11 text-sm">
          Submit
        </button>
      </div>
    </form>
  )
}
