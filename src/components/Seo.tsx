import { useEffect } from 'react'
import { siteConfig } from '../config/site'

interface SeoProps {
  title?: string
  description?: string
}

export function Seo({ title, description = siteConfig.description }: SeoProps) {
  useEffect(() => {
    document.title = title ? `${title} | Alex Morgan` : siteConfig.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  }, [description, title])

  return null
}