import './globals.css';
import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { Inter } from 'next/font/google';

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

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
    'sustainable growth', 'family business', 'middle market', 'buy and hold',
    'long term investment', 'indus river group', 'business acquisition', 'small business investment'
  ],
  authors: [{ name: 'Indus River Group' }],
  creator: 'Indus River Group',
  publisher: 'Indus River Group',
  generator: 'Gaurav',
  category: 'business',
  // UPDATE: Theme color updated to match site.webmanifest
  [span_0](start_span)themeColor: "#08164F", //[span_0](end_span)
  viewport: "width=device-width, initial-scale=1",
  
  icons: {
    // UPDATE: Icon paths updated to match site.webmanifest
    icon: [
      [span_1](start_span){ url: '/images/favicon-original.png', sizes: '16x16', type: 'image/png' }, //[span_1](end_span)
      [span_2](start_span){ url: '/images/favicon-original.png', sizes: '32x32', type: 'image/png' }, //[span_2](end_span)
      [span_3](start_span){ url: '/images/favicon-original.png', sizes: '192x192', type: 'image/png' } //[span_3](end_span)
    ],
    apple: [
      [span_4](start_span){ url: '/images/favicon-original.png', sizes: '180x180', type: 'image/png' } //[span_4](end_span)
    ],
    shortcut: [
      [span_5](start_span){ url: '/images/favicon-original.png', type: 'image/png' } //[span_5](end_span)
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
        // UPDATE: Image path updated to match site.webmanifest
        [span_6](start_span)url: '/images/favicon-original.png', //[span_6](end_span)
        [span_7](start_span)width: 512, //[span_7](end_span)
        [span_8](start_span)height: 512, //[span_8](end_span)
        alt: 'Indus River Group - Private Investment Firm for Small Businesses',
        type: 'image/png'
      }
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Indus River Group - Private Investment Firm | Patient Capital',
    description: 'Indus River Group specializes in acquiring established small businesses ($1M-$5M EBITDA) with patient capital and operational expertise.',
    // UPDATE: Image path updated to match site.webmanifest
    [span_9](start_span)images: ['/images/favicon-original.png'], //[span_9](end_span)
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
    <html lang='en' className={`${geist.variable} ${inter.variable} antialiased`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
