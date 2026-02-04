import type { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bdlusa.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/faq',
    '/get-started',
    '/privacy-policy',
    '/providers',
    '/wound-care',
    '/respiratory-care',
    '/hormone-testing',
    '/genetic-testing',
    '/medical-billing',
    '/medical-billing/revenue-cycle',
    '/medical-billing/coding-billing',
    '/medical-billing/prior-authorization',
    '/medical-billing/eligibility-verification',
    '/medical-billing/accounts-receivable',
    '/medical-billing/denial-management',
    '/medical-billing/credentialing',
  ]

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' as const : 'monthly' as const,
    priority: path === '' ? 1 : path.split('/').length === 1 ? 0.9 : 0.8,
  }))
}
