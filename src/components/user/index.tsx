import Image from 'next/image'

interface Props {
  name: string
  img: string
  className?: string
}

export const User = ({ className, name, img }: Props) => (
  <div className={`flex items-center ${className ?? ''}`}>
    <Image
      src={img}
      className="mr-2.5 h-[26px] w-[26px] rounded-full object-cover"
      alt={name}
      width={26}
      height={26}
    />

    <p>{name}</p>
  </div>
)
