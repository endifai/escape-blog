import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: 'production',
  apiVersion: process.env.NEXT_PUBLIC_API_VERSION,
  useCdn: false,
})

const builder = imageUrlBuilder(client)

export const imageUrlFor = (source: SanityImageSource) => {
  return builder.image(source).url()
}
