import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { LanguageProvider } from './context/LanguageContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import { SpeedInsights } from "@vercel/speed-insights/react"
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SpeedInsights></SpeedInsights>
    <ErrorBoundary>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ErrorBoundary>
  </StrictMode>
);
