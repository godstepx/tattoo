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