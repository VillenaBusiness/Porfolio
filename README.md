# Personal portfolio

Data-driven portfolio foundation built with React, TypeScript, Vite, Tailwind CSS, and React Router.

## Structure

- `src/data`: portfolio content, currently typed TypeScript objects
- `src/types`: shared content contracts
- `src/components`: reusable presentation components
- `src/pages`: route-level composition
- `src/layouts`: shared application shell
- `src/config`: site-level configuration

To add a project, edit `src/data/projects.ts`. `ProjectCard`, `ProjectGrid`, and `ProjectDetail` consume the `Project` type and do not contain project-specific content.

## Commands

```bash
npm install
npm run dev
npm run build
npm run lint
```