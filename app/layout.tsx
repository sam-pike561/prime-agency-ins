import './globals.css'
import type { Metadata } from 'next'
import BottomBanner from '@/components/layout/BottomBanner'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.primeagencyins.com'),
  title: 'Prime Agency',
  description:
    'Prime Agency helps families compare Medicare Advantage, Medicare Supplement, and prescription drug coverage with clear, no-cost guidance.',
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const siteLinksSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Prime Agency',
    url: 'https://www.primeagencyins.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.primeagencyins.com/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
    hasPart: [
      {
        '@type': 'WebPage',
        name: 'About',
        url: 'https://www.primeagencyins.com/about',
      },
      {
        '@type': 'WebPage',
        name: 'Careers',
        url: 'https://www.primeagencyins.com/careers',
      },
      {
        '@type': 'WebPage',
        name: 'Contact',
        url: 'https://www.primeagencyins.com/contact',
      },
      {
        '@type': 'WebPage',
        name: 'Medicare Guidance',
        url: 'https://www.primeagencyins.com/medicare-guidance',
      },
    ],
  }

  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteLinksSchema) }} />
        {children}
        <BottomBanner />
        <Footer />
      </body>
    </html>
  )
}
