export interface ContactInformation {
  email: string
  phone?: string
}

export interface SocialLink {
  label: string
  href: string
  handle?: string
}

export interface Profile {
  name: string
  headline: string
  description: string
  location: string
  availability?: string
  contact: ContactInformation
  socialLinks: SocialLink[]
}

export interface ProjectLink {
  label: string
  href: string
}

export interface Project {
  id: string
  slug: string
  title: string
  shortDescription: string
  description: string
  category: string
  year: number
  status?: string
  featured?: boolean
  image?: string
  gallery?: string[]
  highlights?: string[]
  technologies: string[]
  links?: ProjectLink[]
}

export interface Experience {
  company: string
  role: string
  startDate: string
  endDate?: string
  description: string
  highlights?: string[]
}

export interface Skill {
  name: string
  category: string
  level?: string
}