export const initCalendlyWidget = () => {
  if (!document.getElementById('calendly-widget-script')) {
    const script = document.createElement('script');
    script.id = 'calendly-widget-script';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }
  
  if (!document.getElementById('calendly-widget-css')) {
    const link = document.createElement('link');
    link.id = 'calendly-widget-css';
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }
};

export const openCalendlyPopup = (url = 'https://calendly.com/hercjunk/junk-removal-pickup?hide_event_type_details=1') => {
  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url });
  } else {
    console.warn('Calendly script not fully loaded yet. Initializing...');
    initCalendlyWidget();
    // Retry after a short delay
    setTimeout(() => {
      if (window.Calendly) {
        window.Calendly.initPopupWidget({ url });
      }
    }, 1000);
  }
  return false;
};