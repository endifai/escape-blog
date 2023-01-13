import NextLink from 'next/link'

interface Link {
  name: string
  url: string
}

const links: Link[] = [
  {
    name: 'Home',
    url: '#home',
  },
  {
    name: 'Categories',
    url: '#categories',
  },
  {
    name: 'About',
    url: '#about',
  },
  {
    name: 'Contact',
    url: '#contact',
  },
]

interface Props {
  className?: string
}

export const NavBar = ({ className }: Props) => (
  <div className={className}>
    <nav className="section-inner flex items-center justify-between py-8  ">
      <p className="font-lora text-2xl text-white">Escape.</p>

      <div className="ml-4 flex flex-1 justify-end gap-5">
        {links.map(({ name, url }) => (
          <NextLink
            key={name}
            href={url}
            className="text-sm uppercase leading-5 transition-opacity hover:opacity-50">
            {name}
          </NextLink>
        ))}
      </div>
    </nav>
  </div>
)
