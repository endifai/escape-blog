import Image from 'next/image'
import Link from 'next/link'

import headerBackground from 'src/assets/header-background.jpeg'

import { NavBar } from '../nav-bar'

export const Header = () => (
  <section className="relative h-[500px]">
    <Image
      src={headerBackground}
      fill
      className="object-cover object-center"
      alt="background"
    />

    <div className="section-inner flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-overlay opacity-50" />

      <NavBar className="relative z-10 w-full text-white" />

      <div className="z-10 flex flex-1 flex-col items-center pt-24 text-center font-lora  text-white">
        <h1 className="mb-5">Let&apos;s do it together.</h1>

        <p className="mb-7 opacity-[.63]">
          We travel the world in search of stories. Come along for the ride.
        </p>

        <Link href="#latest" className="rounded bg-[#DD783F] py-3 px-8">
          View latest posts
        </Link>
      </div>
    </div>
  </section>
)
