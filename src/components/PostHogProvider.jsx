import { PostHogProvider } from 'posthog-js/react';
import { useEffect, useState } from 'react';

const options = {
  api_host: 'https://app.posthog.com',
  persistence: 'memory',
  autocapture: false,
  capture_pageview: false,
  capture_pageleave: false,
  disable_session_recording: true,
  disable_persistence: true,
};

export function ScalekitPostHogProvider({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Don't initialize PostHog during SSR
  if (!isClient || process.env.POSTHOG_DISABLE === 'true') {
    return <>{children}</>;
  }

  return (
    <PostHogProvider
      apiKey="phc_85pLP8gwYvRCQdxgLQP24iqXHPRGaLgEw4S4dgZHJZ"
      options={options}
    >
      {children}
    </PostHogProvider>
  );
}
