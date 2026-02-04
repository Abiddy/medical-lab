import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hormone Testing',
  description:
    'BDL saliva-based hormone testing: steroid hormones, stress response, metabolic health. Non-invasive, CLIA-compliant testing for practices and wellness centers.',
  openGraph: {
    title: 'Hormone Testing | BDL - BioAnalysis Diagnostic Laboratories',
    description:
      'Saliva hormone testing for steroid hormones, stress, and metabolic health. Non-invasive, CLIA-compliant.',
  },
}

export default function HormoneTestingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
