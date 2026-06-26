import React from 'react'
import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  canonical?: string
  ogImage?: string
}

export const SEO: React.FC<SEOProps> = ({ title, description, canonical, ogImage }) => {
  const siteTitle = 'Togo Médias Awards 2026'
  const fullTitle = `${title} | ${siteTitle}`

  return (
    <Helmet>
      <html lang="fr" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage || '/brand/tma-logo.webp'} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}