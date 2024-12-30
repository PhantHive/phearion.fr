'use client';

import { Suspense } from 'react';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Team from '@/components/Team';
import Mission from '@/components/Mission';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<div>Loading Hero...</div>}>
        <Hero />
      </Suspense>
      <Suspense fallback={<div>Loading Projects...</div>}>
        <Projects />
      </Suspense>
      <Suspense fallback={<div>Loading Team...</div>}>
        <Team />
      </Suspense>
      <Suspense fallback={<div>Loading Mission...</div>}>
        <Mission />
      </Suspense>
    </main>
  );
}