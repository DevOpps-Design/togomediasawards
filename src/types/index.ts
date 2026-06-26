export interface NavLink {
  to: string
  label: string
}

export interface Activity {
  title: string
  desc: string
  date: string
}

export interface Category {
  id: number
  label: string
  objective: string
  criteria: string[]
  type: 'individual' | 'organization'
}

export interface ContactInfo {
  label: string
  value: string
  icon: string
  icon2?: string
}

export type FormErrors = Record<string, string>

export type ButtonVariant = 'primary' | 'secondary' | 'ghost'

/* ── Sanity types ── */

export interface SanityPost {
  _id: string
  title: string
  slug: string
  author?: string
  publishedAt: string
  date?: string
  readTime?: string
  category: string
  categorySlug: string
  tags?: { label: string; slug: string }[]
  excerpt?: string
  image?: string
  body?: unknown[]
  featured?: boolean
}

export interface SanityCategory {
  title: string
  slug: string
  description?: string
}


