interface Props {
  children: string
  className?: string
}

export const Title = ({ children, className }: Props) => (
  <div
    className={`mb-4 flex flex-col items-center text-white ${className ?? ''}`}>
    <h2 className="pt-14 pb-4 text-center text-xl tracking-[2px] ">
      {children}
    </h2>

    <div className="h-[1px] w-[188px] bg-current" />
  </div>
)
