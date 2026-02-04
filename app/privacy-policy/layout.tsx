import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Bioanalysis Diagnostic Laboratories (BDL). How we collect, use, and protect information. Effective 1/13/2026.',
  openGraph: {
    title: 'Privacy Policy | BDL - BioAnalysis Diagnostic Laboratories',
    description: 'BDL Privacy Policy. How we collect, use, and protect information.',
  },
  robots: { index: true, follow: true },
}

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
