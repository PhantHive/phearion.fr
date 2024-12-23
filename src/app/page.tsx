'use client';

import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Team from '@/components/Team';
import Mission from '@/components/Mission';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <Team />
      <Mission />
    </main>
  );
}