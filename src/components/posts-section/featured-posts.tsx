import Image from 'next/image'

import { User } from '../user'
import { Container } from './container'
import { featuredPosts } from './data'

export const FeaturedPosts = () => (
  <Container header="Featured Posts">
    <div className=" grid grid-cols-1 gap-5 p-2 md:grid-cols-2">
      {featuredPosts.map((post) => {
        return (
          <article
            key={post.title}
            className="relative flex aspect-[16/9] w-full items-end overflow-hidden rounded p-5 text-white">
            <Image
              src={post.image}
              className="object-cover object-center"
              alt={post.title}
              draggable={false}
              fill
            />

            {post.topic && (
              <p className="absolute top-5 left-5 rounded bg-[#DD783F] py-2 px-3 text-xs uppercase">
                {post.topic}
              </p>
            )}

            <div className="relative w-full">
              <p className="mb-1.5 font-lora text-3xl">{post.title}</p>

              <p className="mb-3 text-white/70">{post.description}</p>

              <div className="flex items-center justify-between text-xs text-white/70">
                <User name={post.author.name} img={post.author.img} />

                <p>{post.createdAt}</p>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  </Container>
)
