import { Seo } from '../components/Seo'
import { ProjectGrid } from '../components/ProjectGrid'
import { projects } from '../data/projects'

export function Projects() { return <><Seo title="Work" /><section className="py-16 md:py-24"><p className="label mb-8 text-coral">Portfolio / 2023—2025</p><h1 className="max-w-3xl font-display text-5xl font-medium leading-none tracking-tight md:text-8xl">Selected work<span className="text-coral">.</span></h1><p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/65">A selection of collaborations, products, and experiments across design and technology.</p><div className="mt-16"><ProjectGrid projects={projects} /></div></section></> }