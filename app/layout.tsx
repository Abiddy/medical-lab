import type { Metadata } from 'next'
import Script from 'next/script'
import { Red_Hat_Display, Manrope, Instrument_Serif, Aldrich } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const redHatDisplay = Red_Hat_Display({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-red-hat-display',
  display: 'swap',
})

const manrope = Manrope({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  display: 'swap',
})

const aldrich = Aldrich({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-aldrich',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bdlusa.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'BDL - BioAnalysis Diagnostic Laboratories | Healthcare Diagnostics & Support',
    template: '%s | BDL',
  },
  description:
    'Your partner in better healthcare. Specialized care, saliva & genetic testing, wound care PCR, respiratory diagnostics, and workflow support for SNFs, LTACs, and facilities.',
  keywords: [
    'diagnostic laboratory',
    'healthcare diagnostics',
    'wound care PCR',
    'respiratory testing',
    'saliva testing',
    'genetic testing',
    'SNF',
    'skilled nursing',
    'clinical laboratory',
    'BDL',
    'Bioanalysis Diagnostic Laboratories',
  ],
  authors: [{ name: 'Bioanalysis Diagnostic Laboratories', url: siteUrl }],
  creator: 'Bioanalysis Diagnostic Laboratories',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'BDL - BioAnalysis Diagnostic Laboratories',
    title: 'BDL - BioAnalysis Diagnostic Laboratories | Your Partner in Better Healthcare',
    description:
      'Specialized care, saliva & genetic testing, wound care PCR, respiratory diagnostics, and workflow support for healthcare facilities.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BDL - BioAnalysis Diagnostic Laboratories',
    description: 'Your partner in better healthcare. Diagnostics and support for facilities nationwide.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: siteUrl },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Bioanalysis Diagnostic Laboratories',
    alternateName: 'BDL',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description:
      'Your partner in better healthcare. Specialized care, diagnostics, and workflow support for healthcare facilities.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-562-924-2299',
      email: 'connect@bdlusa.com',
      contactType: 'customer service',
      areaServed: 'US',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
  }

  return (
    <html lang="en" className={`${redHatDisplay.variable} ${manrope.variable} ${instrumentSerif.variable} ${aldrich.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      <Navigation />
        {children}
        <Footer />
        {/* UserWay Accessibility Widget */}
        <Script
          id="userway-accessibility"
          strategy="afterInteractive"
          src="https://cdn.userway.org/widget.js"
          data-account="REPLACE_WITH_YOUR_ID"
          data-position="3" 
        />
      </body>
    </html>
  )
}
