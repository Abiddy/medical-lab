import type { Metadata } from 'next'
import { Red_Hat_Display, Manrope } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

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
    <html lang="en" className={`${redHatDisplay.variable} ${manrope.variable}`}>
      <style>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap');
</style>
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
