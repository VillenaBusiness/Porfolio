import type { Experience } from '../types/portfolio'

interface ExperienceTimelineProps { experience: Experience[] }

export function ExperienceTimeline({ experience }: ExperienceTimelineProps) {
  return <div className="divide-y divide-ink/15">{experience.map((item) => <article key={`${item.company}-${item.startDate}`} className="grid gap-4 py-7 md:grid-cols-[1fr_2fr] md:gap-10"><p className="text-sm text-ink/50">{item.startDate} — {item.endDate ?? 'Present'}</p><div><h3 className="font-display text-xl text-ink">{item.role} <span className="text-ink/40">at</span> {item.company}</h3><p className="mt-2 max-w-xl text-ink/65">{item.description}</p>{item.highlights && <ul className="mt-4 space-y-1 text-sm text-ink/55">{item.highlights.map((highlight) => <li key={highlight}>+ {highlight}</li>)}</ul>}</div></article>)}</div>
}