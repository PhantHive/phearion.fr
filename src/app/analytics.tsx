'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '');

    // Ensure dataLayer exists
    window.dataLayer = window.dataLayer || [];

    // Define gtag function if not already defined
    if (!window.gtag) {
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
  }, [pathname, searchParams]);

  return null;
}

// Track specific events
export function trackEvent(
  eventName: string,
  eventParams?: Record<string, string | number | boolean>
) {
  if (typeof window !== 'undefined' && window.gtag) {
    if (eventParams) {
      window.gtag('event', eventName, eventParams);
    } else {
      window.gtag('event', eventName);
    }
  }
}