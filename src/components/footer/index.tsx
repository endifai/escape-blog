import Image from 'next/image'

import footerBackground from 'src/assets/footer-background.png'

import { NavBar } from '../nav-bar'
import { FeedbackForm } from './feedback-form'

export const Footer = () => (
  <footer className="relative">
    <Image
      src={footerBackground}
      fill
      alt="footer-background"
      className="object-cover object-center"
    />

    <FeedbackForm />

    <NavBar className="relative z-10 bg-[#232f38]/[.6] text-white/60" />
  </footer>
)
