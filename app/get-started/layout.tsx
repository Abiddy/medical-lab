import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get Started',
  description:
    'Contact BDL to get started with Specialized Care, Saliva & Genetic Testing, or Medical Billing. Complete the form or call (562) 924-2299.',
  openGraph: {
    title: 'Get Started | BDL - BioAnalysis Diagnostic Laboratories',
    description:
      'Contact BDL to get started. Complete the form or call (562) 924-2299.',
  },
}

export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
