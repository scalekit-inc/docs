import React from 'react';
import { ScalekitPostHogProvider } from '@site/src/components/PostHogProvider';

// Default implementation, that you can customize
export default function Root({ children }) {
  return <ScalekitPostHogProvider>{children}</ScalekitPostHogProvider>;
}
