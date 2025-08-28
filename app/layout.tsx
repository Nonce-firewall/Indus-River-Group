import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Indus River Group - Patient Capital for Enduring Businesses',
    template: '%s | Indus River Group'
  },
  description: 'Private investment firm specializing in acquiring and scaling established small businesses through patient stewardship and flexible deal structures. EBITDA $1M-$5M, Revenue $3.5M-$50M.',
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
    'long term investment'
  ],
  authors: [{ name: 'Indus River Group' }],
  creator: 'Indus River Group',
  publisher: 'Indus River Group',
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
  icons: {
    icon: [
      { url: '/Indus%20River%20logo%20alone.png', sizes: '32x32', type: 'image/png' },
      { url: '/Indus%20River%20logo%20alone.png', sizes: '16x16', type: 'image/png' },
      { url: '/Indus%20River%20logo%20alone.png', sizes: '96x96', type: 'image/png' }
    ],
    shortcut: '/Indus%20River%20logo%20alone.png',
    apple: [
      { url: '/Indus%20River%20logo%20alone.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'mask-icon', url: '/Indus%20River%20logo%20alone.png', color: '#08164F' }
    ]
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Indus River Group - Patient Capital for Enduring Businesses',
    description: 'Private investment firm specializing in acquiring and scaling established small businesses through patient stewardship and flexible deal structures. EBITDA $1M-$5M, Revenue $3.5M-$50M.',
    type: 'website',
    url: 'https://indusrivergroup.com',
    siteName: 'Indus River Group',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Indus River Group - Patient Capital for Enduring Businesses',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Indus River Group - Patient Capital for Enduring Businesses',
    description: 'Private investment firm specializing in acquiring and scaling established small businesses through patient stewardship and flexible deal structures.',
    images: ['/og-image.png'],
    creator: '@indusrivergroup',
  },
  alternates: {
    canonical: 'https://indusrivergroup.com',
  },
  category: 'business',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}