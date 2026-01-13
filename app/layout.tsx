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

export const metadata: Metadata = {
  title: 'BDL - BioAnalysis Diagnostic Laboratories',
  description: 'Your partner in better healthcare',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${redHatDisplay.variable} ${manrope.variable} ${instrumentSerif.variable} ${aldrich.variable}`}>
      <body>
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
