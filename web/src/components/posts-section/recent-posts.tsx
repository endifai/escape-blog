import Image from 'next/image'

import { imageUrlFor } from 'src/core/client'
import type { Post } from 'src/types'

import { User } from '../user'
import { Container } from './container'
import { formatDate } from './format-date'

interface Props {
  posts: Post[]
}

export const RecentPosts = ({ posts }: Props) => (
  <Container id="latest" header="Most Recent">
    <div className=" grid grid-cols-1 gap-5 p-2 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <article key={post.title} className="w-full bg-white text-secondary">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={imageUrlFor(post.image)}
              className="object-cover object-center"
              alt={post.title}
              draggable={false}
              fill
            />
          </div>

          <div className="w-full ">
            <div className="border-b-[1px] border-[#EFEFEF] p-3.5">
              <p className="mb-1.5 font-lora text-[#101315]">{post.title}</p>

              <p className="h-10 text-sm text-secondary">{post.description}</p>
            </div>

            <div className="flex items-center justify-between bg-[#FCFCFC] p-3.5 text-xs text-[#999999]">
              <User
                name={post.author.name}
                img={imageUrlFor(post.author.avatar)}
              />

              <p>{formatDate(new Date(post._createdAt))}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  </Container>
)
