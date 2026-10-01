import { Link } from 'react-router-dom'
import type { Profile } from '../types/portfolio'

interface FooterProps { profile: Profile }

export function Footer({ profile }: FooterProps) {
  return (
    <footer className="border-t border-ink/15 py-8 text-sm text-ink/60">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div className="flex gap-5">
          {profile.socialLinks.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="hover:text-ink">{social.label}</a>)}
          <Link to="/contact" className="text-ink underline decoration-coral underline-offset-4">Get in touch</Link>
        </div>
      </div>
    </footer>
  )
}