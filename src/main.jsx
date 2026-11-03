import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '@/App.jsx';
import '@/index.css';

const container = document.getElementById('root');
const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// Production HTML is prerendered per route (scripts/prerender.js), so hydrate
// to reuse it. Anything else (dev, a route that wasn't prerendered, or the
// 404 page served for another URL) renders from scratch.
if (container.hasChildNodes() && container.dataset.prerendered === window.location.pathname) {
  hydrateRoot(container, app);
} else {
  container.textContent = '';
  createRoot(container).render(app);
}
