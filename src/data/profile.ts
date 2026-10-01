import type { Profile } from '../types/portfolio'

export const profile: Profile = {
  name: 'Alex Morgan',
  headline: 'Product designer & developer crafting useful digital things.',
  description:
    'I turn complex product problems into clear, thoughtful experiences that people enjoy using.',
  location: 'Based in Amsterdam, working worldwide',
  availability: 'Available for select freelance projects',
  contact: { email: 'hello@alexmorgan.design' },
  socialLinks: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com', handle: '/alexmorgan' },
    { label: 'GitHub', href: 'https://github.com', handle: '/alexmorgan' },
  ],
}