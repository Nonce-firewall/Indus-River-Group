import './globals.css'; [span_0](start_span)//[span_0](end_span)
import type { Metadata } from 'next'; [span_1](start_span)//[span_1](end_span)
import { Inter } from 'next/font/google'; [span_2](start_span)//[span_2](end_span)

const inter = Inter({ subsets: ['latin'], variable: "--font-inter" }); [span_3](start_span)//[span_3](end_span)

export const metadata: Metadata = {
  metadataBase: new URL('https://indusrivergroup.com'),
  title: {
    default: 'Indus River Group - Private Investment Firm | [span_4](start_span)Patient Capital for Small Businesses', //[span_4](end_span)
    template: '%s | [span_5](start_span)Indus River Group', //[span_5](end_span)
  },
  description: 'Indus River Group is a private investment firm specializing in acquiring established small businesses ($1M-$5M EBITDA). [span_6](start_span)We provide patient capital, operational expertise, and flexible deal structures for sustainable growth.', //[span_6](end_span)
  keywords: [
    'private equity', 'small business acquisition', 'patient capital', 'business stewardship',
    'investment firm', 'independent sponsor', 'business partnership', 'operational excellence',
  themeColor: '#08164F',
  authors: [{ name: 'Indus River Group' }],
  creator: 'Indus River Group',
  publisher: 'Indus River Group',
  generator: 'Gaurav',
  category: 'business',
  
  [span_7](start_span)themeColor: [ //[span_7](end_span)
    [span_8](start_span){ color: '#08164F' } //[span_8](end_span)
  [span_9](start_span)], //[span_9](end_span)

  viewport: "width=device-width, initial-scale=1",
  
  icons: {
    icon: [
      { url: '/images/favicon-original.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon-original.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon-original.png', sizes: '192x192', type: 'image/png' }
    ],
    apple: [
      { url: '/images/favicon-original.png', sizes: '180x180', type: 'image/png' }
    ],
    [span_10](start_span)shortcut: [ //[span_10](end_span)
      [span_11](start_span){ url: '/images/favicon-original.png', type: 'image/png' } //[span_11](end_span)
    [span_12](start_span)] //[span_12](end_span)
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
    title: 'Indus River Group - Private Investment Firm | [span_13](start_span)Patient Capital for Small Businesses', //[span_13](end_span)
    description: 'Indus River Group is a private investment firm specializing in acquiring established small businesses ($1M-$5M EBITDA). [span_14](start_span)We provide patient capital, operational expertise, and flexible deal structures.', //[span_14](end_span)
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
    
      [span_15](start_span)} //[span_15](end_span)
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Indus River Group - Private Investment Firm | [span_16](start_span)Patient Capital', //[span_16](end_span)
    description: 'Indus River Group specializes in acquiring established small businesses ($1M-$5M EBITDA) with patient capital and operational expertise.',
    images: ['/images/favicon-original.png'],
    creator: '@indusrivergroup',
  },

  alternates: {
    canonical: 'https://indusrivergroup.com',
  },
};

[span_17](start_span)export default function RootLayout({ //[span_17](end_span)
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${inter.variable} antialiased`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
[span_18](start_span)} //[span_18](end_span)
