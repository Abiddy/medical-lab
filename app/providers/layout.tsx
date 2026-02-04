import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'For Providers',
  description:
    'BDL provider support: same-day wound and respiratory PCR, coordinated logistics, workflow integration for SNFs, LTACs, ALFs, and medical practices.',
  openGraph: {
    title: 'For Providers | BDL - BioAnalysis Diagnostic Laboratories',
    description:
      'Same-day PCR, coordinated logistics, and workflow support for healthcare providers and facilities.',
  },
}

export default function ProvidersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
