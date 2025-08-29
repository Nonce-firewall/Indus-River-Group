import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Indus River Group - Private Investment Firm | Patient Capital for Small Businesses',
    template: '%s | Indus River Group'
  },
  description: 'Indus River Group is a private investment firm specializing in acquiring established small businesses ($1M-$5M EBITDA). We provide patient capital, operational expertise, and flexible deal structures for sustainable growth.',
  keywords: [
    'private equity',
    'small business acquisition',
    'patient capital',
    'business stewardship',
    'investment firm',
    'independent sponsor',
    'business partnership',
    'operational excellence',
    'sustainable growth',
    'family business',
    'middle market',
    'buy and hold',
    'long term investment',
    'indus river group',
    'business acquisition',
    'small business investment'
  ],
  authors: [{ name: 'Indus River Group' }],
  creator: 'Indus River Group',
  publisher: 'Indus River Group',
  metadataBase: new URL('https://indusrivergroup.com'),
  openGraph: {
    title: 'Indus River Group - Private Investment Firm | Patient Capital for Small Businesses',
    description: 'Indus River Group is a private investment firm specializing in acquiring established small businesses ($1M-$5M EBITDA). We provide patient capital, operational expertise, and flexible deal structures.',
    type: 'website',
    url: 'https://indusrivergroup.com',
    siteName: 'Indus River Group',
    locale: 'en_US',
    images: [
      {
        url: '/images/favicon-original.png',
        width: 1200,
        height: 630,
        alt: 'Indus River Group - Private Investment Firm for Small Businesses',
        type: 'image/png'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Indus River Group - Private Investment Firm | Patient Capital',
    description: 'Indus River Group specializes in acquiring established small businesses ($1M-$5M EBITDA) with patient capital and operational expertise.',
    images: ['/images/favicon-original.png'],
    creator: '@indusrivergroup',
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#08164F",
  manifest: "/site.webmanifest",
  icons: {
    icon: '/images/favicon-original.png',
    shortcut: '/images/favicon-original.png',
    apple: '/images/favicon-original.png',
  },
  alternates: {
    canonical: 'https://indusrivergroup.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'business'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
