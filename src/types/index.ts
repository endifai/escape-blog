export interface Post {
  title: string
  description: string
  image: string
  topic?: string
  author: {
    name: string
    img: string
  }
  createdAt: string
}
