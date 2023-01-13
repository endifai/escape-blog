const topics = [
  'Nature',
  'Photography',
  'Relaxation',
  'Vacation',
  'Travel',
  'Adventure',
]

export const Topics = () => (
  <div className="section-inner flex justify-between gap-5 overflow-auto py-3 ">
    {topics.map((topic) => (
      <div
        key={topic}
        className="py-3 px-6 font-lora text-sm text-[#768088] transition-opacity hover:cursor-pointer hover:opacity-50">
        {topic}
      </div>
    ))}
  </div>
)
