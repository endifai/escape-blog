import { HTMLAttributes, ReactNode } from 'react'

import { Title } from '../title'

interface Props extends HTMLAttributes<HTMLDivElement> {
  header: string
  children: ReactNode
}

export const Container = ({ children, header, ...props }: Props) => (
  <div {...props}>
    <Title className="text-black">{header}</Title>

    {children}
  </div>
)
