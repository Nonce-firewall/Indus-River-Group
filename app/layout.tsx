import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Indus River Group - Patient Capital for Enduring Businesses',
  description: 'Private investment firm specializing in acquiring and scaling established small businesses through patient stewardship and flexible deal structures.',
  keywords: 'private equity, small business acquisition, patient capital, business stewardship, investment firm',
  authors: [{ name: 'Indus River Group' }],
  icons: {
    icon: '/Indus River logo alone.png',
    shortcut: '/Indus River logo alone.png',
    apple: '/Indus River logo alone.png',
  },
  openGraph: {
    title: 'Indus River Group - Patient Capital for Enduring Businesses',
    description: 'Private investment firm specializing in acquiring and scaling established small businesses through patient stewardship and flexible deal structures.',
    type: 'website',
    locale: 'en_US',
  },
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