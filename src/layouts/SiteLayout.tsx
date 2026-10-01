import type { ReactNode } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { profile } from '../data/profile'

export function SiteLayout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-paper text-ink"><div className="mx-auto flex min-h-screen w-[min(100%-2rem,76rem)] flex-col"><Header /><main className="flex-1">{children}</main><Footer profile={profile} /></div></div>
}