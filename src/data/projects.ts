import type { Project } from '../types/portfolio'

export const projects: Project[] = [
  {
    id: 'northstar',
    slug: 'northstar',
    title: 'Northstar',
    shortDescription: 'A calmer way for teams to make decisions together.',
    description:
      'Northstar is a collaborative planning tool that gives growing teams a shared view of priorities, progress, and the next right decision.',
    category: 'Product design',
    year: 2025,
    status: 'Live product',
    featured: true,
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=85',
    ],
    highlights: ['Reduced planning time by 40%', 'Designed and shipped the v1 product', 'Built a flexible visual system'],
    technologies: ['Research', 'UX strategy', 'TypeScript', 'React'],
    links: [{ label: 'Visit product', href: 'https://example.com' }],
  },
  {
    id: 'field-notes',
    slug: 'field-notes',
    title: 'Field Notes',
    shortDescription: 'A digital garden for curious people and unfinished ideas.',
    description:
      'Field Notes creates a small, intentional space for collecting observations, references, and ideas before they become something more.',
    category: 'Web experience',
    year: 2024,
    featured: true,
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1400&q=85',
    highlights: ['Editorial content model', 'Accessible reading experience', 'Modular publishing toolkit'],
    technologies: ['Art direction', 'Prototyping', 'Content design'],
  },
  {
    id: 'luma',
    slug: 'luma',
    title: 'Luma',
    shortDescription: 'Making energy use visible, understandable, and actionable.',
    description:
      'Luma helps households understand their energy habits and make small changes with a meaningful cumulative impact.',
    category: 'Service design',
    year: 2023,
    status: 'Case study',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=85',
    technologies: ['Service design', 'Data visualization', 'Product strategy'],
  },
]