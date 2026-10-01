import { Link } from 'react-router-dom'
import type { Project } from '../types/portfolio'

interface ProjectCardProps { project: Project; featured?: boolean }

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article className={featured ? 'group md:col-span-2' : 'group'}>
      <Link to={`/projects/${project.slug}`} className="block">
        <div className={`mb-5 overflow-hidden bg-sage ${featured ? 'aspect-[16/8]' : 'aspect-[4/3]'}`}>
          {project.image && <img src={project.image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />}
        </div>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="label mb-2 text-coral">{project.category} / {project.year}</p>
            <h3 className="font-display text-2xl font-medium text-ink">{project.title}</h3>
            <p className="mt-2 max-w-md text-ink/65">{project.shortDescription}</p>
          </div>
          <span aria-hidden="true" className="pt-1 text-2xl text-coral transition-transform group-hover:translate-x-1">↗</span>
        </div>
      </Link>
    </article>
  )
}