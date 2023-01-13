import { Lora, Oxygen } from '@next/font/google'
import Head from 'next/head'

import { Footer, Header, Topics } from 'src/components'
import { PostsSection } from 'src/components/posts-section'

const oxygen = Oxygen({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-oxygen',
})
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' })

const HomePage = () => (
  <>
    <Head>
      <title>Escape</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <main className={`${oxygen.variable} ${lora.variable}`}>
      <Header />

      <Topics />
      <PostsSection />

      <Footer />
    </main>
  </>
)

export default HomePage
