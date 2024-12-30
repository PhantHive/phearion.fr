'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const searchParams = window.location.search;
    const url = pathname + (searchParams ? searchParams : '');

    // Ensure dataLayer exists
    window.dataLayer = window.dataLayer || [];

    // Define gtag function if not already defined
    if (!window.gtag) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      window.gtag = (...args: any[]) => {
        window.dataLayer.push(args);
      };
    }

    // Load gtag script dynamically
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-E5E8HN8117`;
    document.head.appendChild(script);

    // Initialize gtag
    window.gtag('js', new Date());
    window.gtag('config', 'G-E5E8HN8117', {
      page_path: url,
    });

    // Cleanup script when component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, [pathname]);

  return null;
}