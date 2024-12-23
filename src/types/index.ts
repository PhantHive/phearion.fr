export interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  link: string;
  status: 'active' | 'upcoming';
}

// src/app/layout.tsx
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Phearion - Creating Digital Magic',
  description: 'We build projects that help and entertain people, with a commitment to giving back.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-purple-50 to-blue-50`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}