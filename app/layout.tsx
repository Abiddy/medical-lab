import type { Metadata } from 'next'
import { Red_Hat_Display, Manrope, Instrument_Serif } from 'next/font/google'
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
    <html lang="en" className={`${redHatDisplay.variable} ${manrope.variable} ${instrumentSerif.variable}`}>
      <body>
      <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
