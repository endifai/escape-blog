import Image from 'next/image'

import footerBackground from 'src/assets/footer-background.png'

import { NavBar } from '../nav-bar'
import { Title } from '../title'

export const Footer = () => (
  <footer className="relative">
    <Image
      src={footerBackground}
      fill
      alt="footer-background"
      className="object-cover object-center"
    />

    <form className="pt-15 section-inner relative z-10 flex  flex-1 flex-col items-center text-white">
      <Title>Stay in touch</Title>

      <div className="mb-20 flex w-full max-w-[500px] overflow-hidden rounded">
        <input
          name="email"
          required
          placeholder="Enter your email address"
          type="email"
          className="flex-1 py-4 px-8 text-sm text-[#817F83]"
        />
        <button type="submit" className="bg-white/[.28] px-11 text-sm">
          Submit
        </button>
      </div>
    </form>

    <NavBar className="relative z-10 bg-[#232f38]/[.6] text-white/60" />
  </footer>
)
