import type { Project } from '../types/portfolio'
import { ProjectCard } from './ProjectCard'

interface ProjectGridProps { projects: Project[] }

export function ProjectGrid({ projects }: ProjectGridProps) {
  return <div className="grid gap-x-6 gap-y-14 md:grid-cols-2">{projects.map((project, index) => <ProjectCard key={project.id} project={project} featured={index === 0} />)}</div>
}