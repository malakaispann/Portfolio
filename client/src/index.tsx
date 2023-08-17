// React-specific
import React from 'react';
import ReactDOM from 'react-dom/client';
import SiteLayout from './common/SiteLayout';
import { Analytics } from '@vercel/analytics/react'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <SiteLayout />
        <Analytics />
    </React.StrictMode>
);

