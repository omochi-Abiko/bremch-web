import { type Achievement, type TechStack, TECH_LABELS } from '@/data/achievements'

interface AchievementCardProps {
  item: Achievement
}

export default function AchievementCard({ item }: AchievementCardProps) {
  const techEntries = (Object.entries(item.tech) as [keyof TechStack, string][])
    .filter(([, value]) => value !== '')

  return (
    <div className="flex h-full flex-col rounded-xl border border-forest-700/10 bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
      <div className="rounded-t-xl bg-forest-700 px-4 py-3">
        <h3 className="text-xs font-bold leading-relaxed text-cream sm:text-sm">
          {item.title}
        </h3>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-3">
          <span className="rounded-full bg-forest-700/10 px-2.5 py-0.5 text-[10px] font-bold text-forest-800">
            {item.role}
          </span>
        </div>

        <div className="mb-3">
          <p className="text-[10px] font-bold text-forest-900/50">担当工程</p>
          <p className="mt-0.5 text-[11px] leading-relaxed text-forest-900/80">
            {item.processes}
          </p>
        </div>

        <div className="mb-3 rounded-lg bg-forest-700/[0.04] p-3">
          <p className="mb-1.5 text-[10px] font-bold text-forest-900/50">技術領域</p>
          <div className="space-y-0.5">
            {techEntries.map(([key, value]) => (
              <div key={key} className="text-[10px] leading-relaxed">
                <span className="font-bold text-forest-800">{TECH_LABELS[key]}：</span>
                <span className="text-forest-900/70">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto">
          <p className="mb-1.5 text-[10px] font-bold text-forest-900/50">作業内容</p>
          <ul className="space-y-0.5">
            {item.tasks.map((task, j) => (
              <li key={j} className="flex items-start gap-1.5 text-[10px] leading-relaxed text-forest-900/70">
                <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-forest-600" />
                {task}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
