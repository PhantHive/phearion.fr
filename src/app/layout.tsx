import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Phearion - Creating Digital Magic',
  description: 'We build projects that help and entertain people, with a commitment to giving back.',
  keywords: ['Discord Bot', 'Gaming', 'Student Assistant', 'Web Development', 'Open Source', 'AI', 'LLM'],
  authors: [{ name: 'Phearion Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://phearion.fr',
    title: 'Phearion - Creating Digital Magic',
    description: 'We build projects that help and entertain people, with a commitment to giving back.',
    siteName: 'Phearion',
    images: [
      {
        url: 'https://phearion.fr/images/logo.png',
        width: 800,
        height: 600,
        alt: 'Phearion Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Phearion - Creating Digital Magic',
    description: 'We build projects that help and entertain people, with a commitment to giving back.',
    images: [
      {
        url: 'https://phearion.fr/images/logo.png',
        alt: 'Phearion Logo',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

import CookieNotice from '@/components/CookieNotice';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-E5E8HN8117"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-E5E8HN8117');
            `,
          }}
        />
      </Head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-amber-50 via-white to-rose-50">
          {/* Warm geometric background pattern */}
          <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>

          {/* Warm gradient overlay */}
          <div className="fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-100/30 via-transparent to-rose-100/30"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
          </div>

          <CookieNotice />
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}