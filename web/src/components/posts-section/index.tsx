import { Post } from 'src/types'

import { FeaturedPosts } from './featured-posts'
import { RecentPosts } from './recent-posts'

interface Props {
  featuredPosts: Post[]
  recentPosts: Post[]
}

export const PostsSection = ({ featuredPosts, recentPosts }: Props) => (
  <section className="bg-[#F7F7F7]">
    <div className="section-inner pb-20">
      <FeaturedPosts posts={featuredPosts} />

      <RecentPosts posts={recentPosts} />
    </div>
  </section>
)
