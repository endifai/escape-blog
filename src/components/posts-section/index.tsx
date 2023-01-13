import { FeaturedPosts } from './featured-posts'
import { RecentPosts } from './recent-posts'

export const PostsSection = () => (
  <section className="bg-[#F7F7F7]">
    <div className="section-inner pb-20">
      <FeaturedPosts />

      <RecentPosts />
    </div>
  </section>
)
