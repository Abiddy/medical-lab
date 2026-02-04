import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'FAQs about BDL Specialized Care, saliva & genetic testing, wound care PCR, respiratory diagnostics, and how to get started with our programs.',
  openGraph: {
    title: 'FAQ | BDL - BioAnalysis Diagnostic Laboratories',
    description:
      'Frequently asked questions about BDL programs, testing, and getting started.',
  },
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
