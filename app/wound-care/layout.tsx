import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wound Care Program',
  description:
    'BDL Wound Care Program: same-day PCR diagnostics, biopsy coordination, designated courier, and optional clinical support for SNFs, LTACs, and facilities.',
  openGraph: {
    title: 'Wound Care Program | BDL - BioAnalysis Diagnostic Laboratories',
    description:
      'Same-day wound PCR, biopsy coordination, and clinical support for facility-based wound management.',
  },
}

export default function WoundCareLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
