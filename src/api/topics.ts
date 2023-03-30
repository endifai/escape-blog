import { client } from 'src/core'
import type { Topic } from 'src/types'

export const getTopics = () => client.fetch<Topic[]>(`*[_type == "topic"]`)
