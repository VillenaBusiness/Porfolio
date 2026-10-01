import type { ReactNode } from 'react'

interface SectionProps {
  eyebrow?: string
  title: string
  children: ReactNode
  className?: string
}

export function Section({ eyebrow, title, children, className = '' }: SectionProps) {
  return (
    <section className={`border-t border-ink/15 py-16 md:py-24 ${className}`}>
      <div className="mb-10 flex flex-col gap-3 md:mb-14 md:flex-row md:items-baseline md:justify-between">
        {eyebrow && <p className="label text-coral">{eyebrow}</p>}
        <h2 className="max-w-xl text-3xl font-medium tracking-tight text-ink md:text-5xl">{title}</h2>
      </div>
      {children}
    </section>
  )
}