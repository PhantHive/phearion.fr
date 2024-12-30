// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GTagInput = any[];

interface Window {
  dataLayer: unknown[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  gtag: (...args: any[]) => void;
}

declare global {
  interface Window {
    dataLayer: unknown[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag: (...args: any[]) => void;
  }
}

export {};