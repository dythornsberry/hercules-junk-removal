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

const showLoadingOverlay = () => {
  // Don't create duplicate overlays
  if (document.getElementById('calendly-loading-overlay')) return;

  const overlay = document.createElement('div');
  overlay.id = 'calendly-loading-overlay';
  overlay.style.cssText = `
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.6); z-index: 999999;
    display: flex; align-items: center; justify-content: center;
    flex-direction: column; gap: 16px;
  `;
  overlay.innerHTML = `
    <div style="width:48px;height:48px;border:4px solid rgba(255,193,7,0.3);border-top:4px solid #FFC107;border-radius:50%;animation:calSpin 0.8s linear infinite;"></div>
    <div style="color:#fff;font-family:sans-serif;font-size:16px;font-weight:600;">Loading booking...</div>
    <style>@keyframes calSpin{to{transform:rotate(360deg)}}</style>
  `;
  document.body.appendChild(overlay);
};

const hideLoadingOverlay = () => {
  const overlay = document.getElementById('calendly-loading-overlay');
  if (overlay) overlay.remove();
};

export const openCalendlyPopup = (url = 'https://calendly.com/hercjunk/junk-removal-pickup?hide_event_type_details=1') => {
  if (window.Calendly) {
    showLoadingOverlay();
    window.Calendly.initPopupWidget({ url });
    // Hide overlay once Calendly iframe loads
    const checkInterval = setInterval(() => {
      const calendlyOverlay = document.querySelector('.calendly-overlay');
      if (calendlyOverlay) {
        hideLoadingOverlay();
        clearInterval(checkInterval);
      }
    }, 100);
    // Safety timeout — hide after 5s no matter what
    setTimeout(() => {
      hideLoadingOverlay();
      clearInterval(checkInterval);
    }, 5000);
  } else {
    showLoadingOverlay();
    console.warn('Calendly script not fully loaded yet. Initializing...');
    initCalendlyWidget();
    // Retry after a short delay
    setTimeout(() => {
      if (window.Calendly) {
        window.Calendly.initPopupWidget({ url });
        const checkInterval = setInterval(() => {
          const calendlyOverlay = document.querySelector('.calendly-overlay');
          if (calendlyOverlay) {
            hideLoadingOverlay();
            clearInterval(checkInterval);
          }
        }, 100);
        setTimeout(() => {
          hideLoadingOverlay();
          clearInterval(checkInterval);
        }, 5000);
      } else {
        hideLoadingOverlay();
      }
    }, 1000);
  }
  return false;
};
