import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Genetic Testing',
  description:
    'BDL genetic testing: MTHFR and COMT panels for nutrient metabolism, stress response, and neurotransmitter pathways. Swab-based, clinically actionable results.',
  openGraph: {
    title: 'Genetic Testing | BDL - BioAnalysis Diagnostic Laboratories',
    description:
      'MTHFR and COMT genetic panels. Swab-based, clinically actionable DNA insights for providers.',
  },
}

export default function GeneticTestingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
