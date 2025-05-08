import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import siteContent from '@/app/content/texts.json';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: {
    default: siteContent.siteInfo.title,
    template: `%s | ${siteContent.siteInfo.title}`,
  },
  description: siteContent.siteInfo.description,
  keywords: ['Tattoo', 'Tätowierung', 'Tattoo Studio', 'Kunst', 'Körperkunst'],
  authors: [{ name: siteContent.siteInfo.title }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: siteContent.siteInfo.title,
    description: siteContent.siteInfo.description,
    url: siteContent.siteInfo.url,
    siteName: siteContent.siteInfo.title,
    images: [
      {
        url: `${siteContent.siteInfo.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: siteContent.siteInfo.title,
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: siteContent.siteInfo.twitterHandle,
    creator: siteContent.siteInfo.twitterHandle,
    title: siteContent.siteInfo.title,
    description: siteContent.siteInfo.description,
    images: [`${siteContent.siteInfo.url}/twitter-image.jpg`],
  },
  alternates: {
    canonical: siteContent.siteInfo.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-light text-primary">
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
