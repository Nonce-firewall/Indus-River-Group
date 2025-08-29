import './globals.css';
import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { Manrope } from 'next/font/google';
import { Inter } from 'next/font/google';

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

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
  images: [
      {
        url: '/images/favicon-original.png',
        width: 512,
        height: 512,
        alt: 'Indus River Group Logo',
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Indus River Group',
    description: 'Indus River Group is a private investment firm specializing in acquiring established small businesses ($1M-$5M EBITDA). We provide patient capital, operational expertise, and flexible deal structures for sustainable growth.',
    images: ['/images/favicon-original.png'],
    creator: '@Gaurav',
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0891b2",
  manifest: "/manifest.json",
  icons: {
    icon: '/images/favicon-original.png',
    apple: '/images/favicon-original.png',
  },
    generator: 'Guarav'
}
  
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
      { url: '/Indus%20River%20logo%20alone.png', sizes: '16x16', type: 'image/png' },
      { url: '/Indus%20River%20logo%20alone.png', sizes: '32x32', type: 'image/png' },
      { url: '/Indus%20River%20logo%20alone.png', sizes: '48x48', type: 'image/png' },
      { url: '/Indus%20River%20logo%20alone.png', sizes: '96x96', type: 'image/png' },
      { url: '/Indus%20River%20logo%20alone.png', sizes: '192x192', type: 'image/png' }
    ],
    shortcut: [
      { url: '/Indus%20River%20logo%20alone.png', type: 'image/png' }
    ],
    apple: [
      { url: '/Indus%20River%20logo%20alone.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'mask-icon', url: '/Indus%20River%20logo%20alone.png', color: '#08164F' },
      { rel: 'icon', url: '/Indus%20River%20logo%20alone.png', type: 'image/png' }
    ]
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Indus River Group - Private Investment Firm | Patient Capital for Small Businesses',
    description: 'Indus River Group is a private investment firm specializing in acquiring established small businesses ($1M-$5M EBITDA). We provide patient capital, operational expertise, and flexible deal structures.',
    type: 'website',
    url: 'https://indusrivergroup.com',
    siteName: 'Indus River Group',
    locale: 'en_US',
    images: [
      {
        url: '/Indus%20River%20logo%20alone.png',
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
    images: ['/Indus%20River%20logo%20alone.png'],
    creator: '@indusrivergroup',
  },
  alternates: {
    canonical: 'https://indusrivergroup.com',
  },
  category: 'business'
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={`${geist.variable} ${manrope.variable} antialiased`}>
     crossorigin="anonymous"></script>
        <link rel='canonical' href='https://indusrivergroup.com' />
        <meta name='application-name' content='Indus River Group' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='Indus River Group' />
        <meta name="format-detection" content="telephone=no" />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-TileColor' content='#0891b2' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name="theme-color" content="#4F35E1" />
        <link rel='manifest' href='/manifest.json' />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
