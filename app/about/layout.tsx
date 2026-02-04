import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Bioanalysis Diagnostic Laboratories (BDL). We connect diagnostics, clinical workflow support, and revenue cycle performance to help facilities deliver better care.',
  openGraph: {
    title: 'About Us | BDL - BioAnalysis Diagnostic Laboratories',
    description:
      'Learn about BDL. We connect diagnostics, clinical workflow support, and revenue cycle performance to help facilities deliver better care.',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
