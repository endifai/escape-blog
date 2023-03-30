export interface Topic {
  title: string
}

export interface Post {
  _id: string
  title: string
  description: string
  image: string
  topic?: Topic
  author: {
    name: string
    avatar: string
  }
  _createdAt: string
}
