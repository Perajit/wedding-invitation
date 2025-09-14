'use client';

import { FC, useEffect } from 'react';

const ServiceWorkerProvider: FC = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((reg) => console.log('SW registered', reg))
        .catch((err) => console.error('SW registration failed', err));
    }
  }, []);

  return null;
};

export default ServiceWorkerProvider;
