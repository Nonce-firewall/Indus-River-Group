import './globals.css';
import type { Metadata } from 'next';
import type React from 'react';
import { GeistSans } from '@vercel/geist';
import { Manrope } from 'next/font/google';
import { Inter } from 'next/font/google';

const geist = GeistSans({ subsets: ['latin'], variable: "--font-geist" });
const manrope = Manrope({ subsets: ['latin'], variable: "--font-manrope" });
const inter = Inter({ subsets: ['latin'], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL('https://indusrivergroup.com'),
  title: {
    default: 'Indus River Group - Private Investment Firm | Patient Capital for Small Businesses',
    template: '%s | Indus River Group',
  },
  description: 'Indus River Group is a private investment firm specializing in acquiring established small businesses ($1M-$5M EBITDA). We provide patient capital, operational expertise, and flexible deal structures for sustainable growth.',
  keywords: [
    'private equity', 'small business acquisition', 'patient capital', 'business stewardship',
    'investment firm', 'independent sponsor', 'business partnership', 'operational excellence',
  ],
  themeColor: '#08164F',
  authors: [{ name: 'Indus River Group' }],
  creator: 'Indus River Group',
  publisher: 'Indus River Group',
  generator: 'Gaurav',
  category: 'business',
  
  viewport: "width=device-width, initial-scale=1",
  
  icons: {
    icon: [
      { url: '/favicon-original.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-original.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-original.png', sizes: '192x192', type: 'image/png' }
    ],
    apple: [
      { url: '/favicon-original.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: [
      { url: '/favicon-original.png', type: 'image/png' }
    ]
  },
  
  manifest: '/site.webmanifest',

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
        width: 512,
        height: 512,
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

  alternates: {
    canonical: 'https://indusrivergroup.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${geist.variable} ${manrope.variable} ${inter.variable} antialiased`}>
      <body className={geist.className}>{children}</body>
    </html>
  );
}
