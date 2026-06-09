import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GrantFinder — Find Scholarships & EU Grants in Seconds',
  description: 'Describe your studies and destination. Our AI finds every scholarship, European grant, and national subsidy that matches your profile.',
  openGraph: {
    title: 'GrantFinder — Find Scholarships & EU Grants in Seconds',
    description: 'Stop missing funding. AI-powered grant search for students and researchers.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
