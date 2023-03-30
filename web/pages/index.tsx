import { Lora, Oxygen } from '@next/font/google'
import { NextPage } from 'next'
import Head from 'next/head'

import { getFeaturedPosts, getRecentPosts } from 'src/api/posts'
import { getTopics } from 'src/api/topics'
import { Footer, Header, Topics } from 'src/components'
import { PostsSection } from 'src/components/posts-section'
import { Post, Topic } from 'src/types'

const oxygen = Oxygen({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-oxygen',
})
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' })

type Page = NextPage<{
  topics: Topic[]
  featuredPosts: Post[]
  recentPosts: Post[]
}>

const HomePage: Page = ({ topics, featuredPosts, recentPosts }) => (
  <>
    <Head>
      <title>Escape</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <main className={`${oxygen.variable} ${lora.variable}`}>
      <Header />

      <Topics topics={topics} />
      <PostsSection featuredPosts={featuredPosts} recentPosts={recentPosts} />

      <Footer />
    </main>
  </>
)

export const getServerSideProps = async () => {
  const [recentPosts, featuredPosts, topics] = await Promise.all([
    getRecentPosts(),
    getFeaturedPosts(),
    getTopics(),
  ])

  return {
    props: {
      recentPosts,
      featuredPosts,
      topics,
    },
  }
}

export default HomePage
