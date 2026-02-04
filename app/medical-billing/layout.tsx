import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Medical Billing',
  description:
    'BDL Medical Billing: revenue cycle management, coding, prior authorization, eligibility verification, A/R, denial management, and credentialing for healthcare providers.',
  openGraph: {
    title: 'Medical Billing | BDL - BioAnalysis Diagnostic Laboratories',
    description:
      'Full-service medical billing, revenue cycle, denial management, and credentialing.',
  },
}

export default function MedicalBillingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
