import { NavLink } from 'react-router-dom'

const links = [
  { label: 'Work', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export function Header() {
  return (
    <header className="flex items-center justify-between py-6">
      <NavLink to="/" className="font-display text-xl font-semibold tracking-tight text-ink">
        AM<span className="text-coral">.</span>
      </NavLink>
      <nav aria-label="Main navigation" className="flex items-center gap-5 text-sm text-ink/65 md:gap-8">
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} className={({ isActive }) => isActive ? 'text-ink underline decoration-coral decoration-2 underline-offset-8' : 'transition-colors hover:text-ink'}>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}