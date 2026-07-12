import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prime Agency Insurance',
  description:
    'Prime Agency Insurance helps families compare Medicare Advantage, Medicare Supplement, and prescription drug coverage with clear, no-cost guidance.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
