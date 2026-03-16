import React, { useEffect } from 'react';
import { initCalendlyWidget } from '@/lib/calendlyUtils.js';

const CalendlyPopup = () => {
  useEffect(() => {
    // Ensures the Calendly external scripts are injected properly without duplicates
    initCalendlyWidget().catch(() => {
      // Booking clicks handle their own fallback if the preload fails.
    });
    
    return () => {
      // Optional cleanup if component unmounts, but usually we want to keep it
      // so subsequent clicks respond instantly.
    };
  }, []);

  return null; // This is a utility component, no UI needed
};

export default CalendlyPopup;
