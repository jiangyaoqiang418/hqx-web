export interface NavigationItem {
  label: string
  to: string
  primary?: boolean
}

export interface MetricItem {
  value: string
  unit?: string
  label: string
  accessibleValue?: string
}

export interface PageCta {
  label: string
  to: string
}

export interface PageHeroProps {
  title: string
  subtitle?: string
  description: string
  metrics?: MetricItem[]
  primaryCta?: PageCta
  secondaryCta?: PageCta
}

export interface PageSeoInput {
  title: string
  description: string
  path: string
  type?: 'website' | 'article'
}

export interface NewsDocument {
  title: string
  slug: string
  description: string
  category: string
  cover?: string
  publishedAt: string
  updatedAt?: string
  department: string
  seoTitle?: string
  seoDescription?: string
  featured?: boolean
}
