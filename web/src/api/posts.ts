import { client } from 'src/core'
import type { Post } from 'src/types'

const fields = `{
    ...,
    "author": {
        "name": author.name,
        "avatar": author.avatar,
    },
    "topic": {
        "title": topic->title
    }
  }`

export const getRecentPosts = () =>
  client.fetch<Post[]>(`*[_type == "post"] | order(_createdAt desc)${fields}`)

export const getFeaturedPosts = () =>
  client.fetch<Post[]>(
    `*[_type == "post" && isFeatured == true][0...2] | order(_createdAt desc)${fields}`,
  )
