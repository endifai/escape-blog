import type { Topic } from 'src/types'

interface Props {
  topics: Topic[]
}

export const Topics = ({ topics }: Props) => (
  <div className="section-inner flex justify-between gap-5 overflow-auto py-3 ">
    {topics.map(({ title }) => (
      <div
        key={title}
        className="py-3 px-6 font-lora text-sm text-[#768088] transition-opacity hover:cursor-pointer hover:opacity-50">
        {title}
      </div>
    ))}
  </div>
)
