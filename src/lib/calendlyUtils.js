export const CALENDLY_BOOKING_URL = 'https://calendly.com/hercjunk/junk-removal-pickup?hide_event_type_details=1';

const CALENDLY_SCRIPT_ID = 'calendly-widget-script';
const CALENDLY_CSS_ID = 'calendly-widget-css';
const CALENDLY_LOAD_TIMEOUT_MS = 5000;
const CALENDLY_OVERLAY_TIMEOUT_MS = 2500;

let calendlyLoadPromise = null;

const ensureCalendlyStyles = () => {
  if (document.getElementById(CALENDLY_CSS_ID)) return;

  const link = document.createElement('link');
  link.id = CALENDLY_CSS_ID;
  link.href = 'https://assets.calendly.com/assets/external/widget.css';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
};

const ensureCalendlyScript = () => {
  const existingScript = document.getElementById(CALENDLY_SCRIPT_ID);
  if (existingScript) return existingScript;

  const script = document.createElement('script');
  script.id = CALENDLY_SCRIPT_ID;
  script.src = 'https://assets.calendly.com/assets/external/widget.js';
  script.async = true;
  document.body.appendChild(script);
  return script;
};

const waitForCalendlyWidget = (timeoutMs = CALENDLY_LOAD_TIMEOUT_MS) =>
  new Promise((resolve, reject) => {
    const deadline = Date.now() + timeoutMs;

    const check = () => {
      if (window.Calendly?.initPopupWidget) {
        resolve(window.Calendly);
        return;
      }

      if (Date.now() >= deadline) {
        reject(new Error('Calendly widget timed out while loading.'));
        return;
      }

      window.setTimeout(check, 100);
    };

    check();
  });

export const initCalendlyWidget = () => {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return Promise.resolve(null);
  }

  ensureCalendlyStyles();
  ensureCalendlyScript();

  if (window.Calendly?.initPopupWidget) {
    return Promise.resolve(window.Calendly);
  }

  if (!calendlyLoadPromise) {
    calendlyLoadPromise = waitForCalendlyWidget().catch((error) => {
      calendlyLoadPromise = null;
      throw error;
    });
  }

  return calendlyLoadPromise;
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
    <div style="color:#fff;font-family:sans-serif;font-size:16px;font-weight:600;">Opening booking...</div>
    <style>@keyframes calSpin{to{transform:rotate(360deg)}}</style>
  `;
  document.body.appendChild(overlay);
};

const hideLoadingOverlay = () => {
  const overlay = document.getElementById('calendly-loading-overlay');
  if (overlay) overlay.remove();
};

const waitForCalendlyOverlay = (timeoutMs = CALENDLY_OVERLAY_TIMEOUT_MS) =>
  new Promise((resolve) => {
    const deadline = Date.now() + timeoutMs;

    const check = () => {
      if (document.querySelector('.calendly-overlay')) {
        resolve(true);
        return;
      }

      if (Date.now() >= deadline) {
        resolve(false);
        return;
      }

      window.setTimeout(check, 100);
    };

    check();
  });

const redirectToCalendlyPage = (url) => {
  window.location.assign(url);
};

export const openCalendlyPopup = async (
  url = CALENDLY_BOOKING_URL,
  { fallbackToRedirect = true } = {},
) => {
  if (typeof window === 'undefined') return false;

  showLoadingOverlay();

  try {
    await initCalendlyWidget();

    if (!window.Calendly?.initPopupWidget) {
      throw new Error('Calendly popup is unavailable.');
    }

    window.Calendly.initPopupWidget({ url });

    const overlayOpened = await waitForCalendlyOverlay();
    hideLoadingOverlay();

    if (!overlayOpened) {
      throw new Error('Calendly popup did not open in time.');
    }

    return true;
  } catch (error) {
    hideLoadingOverlay();
    console.error('Unable to open Calendly booking popup.', error);

    if (fallbackToRedirect) {
      redirectToCalendlyPage(url);
    }

    return false;
  }
};

export const handleCalendlyClick = (event, url = CALENDLY_BOOKING_URL) => {
  event?.preventDefault();
  return openCalendlyPopup(url);
};
