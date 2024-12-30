type GTagConfigParams = {
  page_path?: string;
  send_page_view?: boolean;
  [key: string]: string | number | boolean | undefined;
};

type GTagEventParams = {
  [key: string]: string | number | boolean | undefined;
};

type GTagMethod =
  | ['js', Date]
  | ['config', string, GTagConfigParams?]
  | ['event', string, GTagEventParams?];

interface Window {
  dataLayer: unknown[];
  gtag: (...args: GTagMethod) => void;
}

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: GTagMethod) => void;
  }
}

export {};