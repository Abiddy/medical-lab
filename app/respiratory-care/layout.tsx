import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Respiratory Care Program',
  description:
    'BDL Respiratory Care Program: same-day PCR for respiratory infections, facility-driven collection, designated courier, and clear digital reporting for SNFs and post-acute care.',
  openGraph: {
    title: 'Respiratory Care Program | BDL - BioAnalysis Diagnostic Laboratories',
    description:
      'Same-day respiratory PCR, easy collection, and clear reporting for facilities.',
  },
}

export default function RespiratoryCareLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
