'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams.toString();

    // Ensure gtag function exists
    window.dataLayer = window.dataLayer || [];

    // Define gtag function if not already defined
    if (!window.gtag) {
      window.gtag = function() {
        window.dataLayer.push(arguments);
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

// Optional: Track specific events with type-safe implementation
export function trackEvent(
  eventName: string,
  eventParams?: Record<string, any>
) {
  if (typeof window !== 'undefined' && window.gtag) {
    if (eventParams) {
      window.gtag('event', eventName, eventParams);
    } else {
      window.gtag('event', eventName);
    }
  }
}