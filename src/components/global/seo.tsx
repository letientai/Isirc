import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile' | 'video' | 'music'
  siteName?: string
  locale?: string
  author?: string
  publishedTime?: string
  modifiedTime?: string
  section?: string
  tags?: string[]
  noIndex?: boolean
  noFollow?: boolean
  canonical?: string
}

const defaultSEO = {
  title: 'ISIRC Conference 2026 – International Conference on Culture, Tourism & Hospitality',
  description:
    'ISIRC Conference is an international academic event bringing together researchers, practitioners, and industry leaders to explore culture, tourism, hospitality, sustainable tourism, digital innovation, and global trends. Join us in Macau, China, February 24–28, 2026.',
  keywords: [
    'ISIRC Conference',
    'International culture tourism hospitality conference',
    'Macau 2026 tourism conference',
    'cultural tourism research',
    'hospitality management conference',
    'sustainable tourism event',
    'academic conference culture tourism',
  ],
  image: '', 
  siteName: 'ISIRC International Conference',
  locale: 'en_US',
  type: 'website' as const,
}

export function SEO({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website',
  siteName,
  locale = 'en_US',
  author,
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  noIndex = false,
  noFollow = false,
  canonical,
}: SEOProps) {
  const seo = {
    title: title ? `${title} | ${defaultSEO.siteName}` : defaultSEO.title,
    description: description || defaultSEO.description,
    keywords: [...defaultSEO.keywords, ...keywords],
    image: image || defaultSEO.image,
    url: url || (typeof window !== 'undefined' ? window.location.href : ''),
    siteName: siteName || defaultSEO.siteName,
    locale,
    type,
  }

  const fullImageUrl = seo.image.startsWith('http') ? seo.image : `${seo.url}${seo.image}`

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords.join(', ')} />
      {author && <meta name="author" content={author} />}

      {/* Robots Meta Tags */}
      <meta
        name="robots"
        content={`${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}`}
      />

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:type" content={seo.type} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content={seo.siteName} />
      <meta property="og:locale" content={seo.locale} />

      {/* Article specific Open Graph */}
      {type === 'article' && (
        <>
          {author && <meta property="article:author" content={author} />}
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag) => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#fddf67" />
      <meta name="application-name" content={seo.siteName} />
      <meta name="apple-mobile-web-app-title" content={seo.siteName} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': type === 'article' ? 'Article' : 'WebSite',
          name: seo.title,
          description: seo.description,
          url: seo.url,
          image: fullImageUrl,
          ...(type === 'article' && {
            author: author ? { '@type': 'Person', name: author } : undefined,
            datePublished: publishedTime,
            dateModified: modifiedTime,
          }),
        })}
      </script>
    </Helmet>
  )
}

export const seoConfigs = {
  home: {
    title: 'ISIRC Conference 2026 – International Conference on Culture, Tourism & Hospitality',
    description:
      'ISIRC Conference is an international academic event bringing together researchers, practitioners, and industry leaders to explore culture, tourism, hospitality, sustainable tourism, digital innovation, and global trends. Join us in Macau, China, February 24–28, 2026.',
    keywords: [
      'ISIRC Conference',
      'International culture tourism hospitality conference',
      'Macau 2026 tourism conference',
      'cultural tourism research',
      'hospitality management conference',
      'sustainable tourism event',
      'academic conference culture tourism',
    ],
    image: '',
    siteName: 'ISIRC International Conference',
    locale: 'en_US',
    type: 'website' as const,
  },
}

// Hook for dynamic SEO
export function useSEO(config: SEOProps) {
  return <SEO {...config} />
}

// Utility function to generate structured data
export function generateStructuredData(type: string, data: Record<string, any>) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  }
}

// SEO validation helpers
export const seoHelpers = {
  validateTitle: (title: string): boolean => {
    return title.length >= 10 && title.length <= 60
  },

  validateDescription: (description: string): boolean => {
    return description.length >= 120 && description.length <= 160
  },

  generateSlug: (text: string): string => {
    return text
      .toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-')
      .trim()
  },

  generateKeywords: (content: string): string[] => {
    // Simple keyword extraction - in production, you might want to use a more sophisticated algorithm
    const words = content.toLowerCase().match(/\b\w+\b/g) || []
    const frequency: Record<string, number> = {}

    words.forEach((word) => {
      if (word.length > 3) {
        frequency[word] = (frequency[word] || 0) + 1
      }
    })

    return Object.entries(frequency)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .map(([word]) => word)
  },
}
