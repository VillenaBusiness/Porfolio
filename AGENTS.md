# AGENTS.md

## Project overview

This repository is a personal portfolio site built with React, TypeScript, Vite, and React Router. The app is intentionally data-driven: most portfolio content lives in `src/data`, while reusable UI lives under `src/components` and route composition lives under `src/pages`.

## Key conventions

- Keep the app content-driven: edit `src/data/*.ts` for portfolio sections, experience, skills, and project data.
- Keep reusable UI in `src/components`; keep route-level composition in `src/pages`.
- Keep shared shell/layout behavior in `src/layouts/SiteLayout.tsx`.
- Keep shared domain types in `src/types/portfolio.ts`.
- Keep site metadata in `src/config/site.ts`.
- Prefer updating data and types over hard-coding project-specific content inside components.

## Architecture notes

- `src/App.tsx` defines the route table.
- `src/pages/*` represents page-level composition and page-specific layout.
- `src/components/*` should stay reusable and generic unless intentionally tied to a specific portfolio item.
- `src/data/projects.ts` is the canonical source for project entries; project cards/detail pages consume the shared `Project` type.

## Build and validation

Use the existing scripts from `package.json`:

```bash
npm install
npm run dev
npm run build
npm run lint
```

Important:

- `npm run build` runs `tsc -b && vite build`, so TypeScript and production build checks both matter.
- `npm run lint` runs ESLint across the repository.
- Changes should keep the project passing both build and lint before being considered complete.

## Editing guidance

- If a content change is needed, update the matching data file first.
- If a new field is needed, update the corresponding interface in `src/types/portfolio.ts`.
- If a new page or route is added, update both the route configuration in `src/App.tsx` and the page component under `src/pages`.
- Keep styling consistent with the current portfolio design; prefer updating shared patterns over one-off hacks.

## Helpful references

- [README.md](README.md)
- [src/App.tsx](src/App.tsx)
- [src/data/projects.ts](src/data/projects.ts)
- [src/types/portfolio.ts](src/types/portfolio.ts)
