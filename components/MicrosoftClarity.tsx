'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    clarity?: (action: string, ...args: any[]) => void;
  }
}

export function MicrosoftClarity() {
  const clarityProjectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

  useEffect(() => {
    if (!clarityProjectId) {
      console.warn('Microsoft Clarity project ID is not configured');
      return;
    }

    // Check if Clarity is already loaded
    if (window.clarity) {
      return;
    }

    // Inject Microsoft Clarity script
    (function(c: any, l: Document, a: string, r: string, i: string, t?: HTMLScriptElement, y?: Element) {
      c[a] = c[a] || function() {
        (c[a].q = c[a].q || []).push(arguments);
      };
      t = l.createElement(r) as HTMLScriptElement;
      t.async = true;
      t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0];
      y?.parentNode?.insertBefore(t, y);
    })(window, document, "clarity", "script", clarityProjectId);
  }, [clarityProjectId]);

  return null;
}
