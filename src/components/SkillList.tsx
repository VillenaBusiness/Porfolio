import type { Skill } from '../types/portfolio'

interface SkillListProps { skills: Skill[] }

export function SkillList({ skills }: SkillListProps) {
  return <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">{skills.map((skill) => <div key={skill.name} className="flex items-baseline justify-between border-b border-ink/15 pb-3"><span className="text-ink">{skill.name}</span><span className="text-xs uppercase tracking-[0.12em] text-ink/45">{skill.category}</span></div>)}</div>
}