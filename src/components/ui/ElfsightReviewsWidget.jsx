import React, { useState, useRef, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

const ElfsightReviewsWidget = ({ appId = "493efd55-cf04-4acf-a5b8-44e73ecb9757" }) => {
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef(null);

  // We use srcdoc to isolate the Elfsight script from the main React application
  // This prevents any DOM manipulation conflicts between React and the widget
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { 
            margin: 0; 
            padding: 0; 
            background: transparent;
            overflow-y: hidden; /* Prevent double scrollbars */
          }
        </style>
      </head>
      <body>
        <script src="https://elfsightcdn.com/platform.js" data-use-service-core defer></script>
        <div class="elfsight-app-${appId}" data-elfsight-app-lazy></div>
        
        <script>
          // Set up a mutation observer to detect when the widget finishes loading
          // and to send height updates back to the parent React component
          document.addEventListener('DOMContentLoaded', () => {
            const body = document.body;
            
            // Send initial message
            window.parent.postMessage({ type: 'elfsight-ready' }, '*');

            // Set up ResizeObserver to track height changes as the widget loads/expands
            const resizeObserver = new ResizeObserver(entries => {
              for (let entry of entries) {
                const height = entry.contentRect.height;
                // Only send meaningful heights to prevent collapsing
                if (height > 50) {
                  window.parent.postMessage({ 
                    type: 'elfsight-resize', 
                    height: height + 20 // Add a small buffer
                  }, '*');
                }
              }
            });

            resizeObserver.observe(body);
            
            // Fallback interval to check height in case ResizeObserver misses something
            // specific to shadow DOMs or late-rendering iframes
            setInterval(() => {
              const height = document.body.scrollHeight;
              if (height > 50) {
                window.parent.postMessage({ type: 'elfsight-resize', height: height + 20 }, '*');
              }
            }, 1000);
          });
        </script>
      </body>
    </html>
  `;

  useEffect(() => {
    const handleMessage = (event) => {
      // Security check could go here if we were receiving from an external URL, 
      // but with srcdoc it's same-origin
      
      if (event.data?.type === 'elfsight-resize' && iframeRef.current) {
        // Dynamically adjust iframe height
        iframeRef.current.style.height = `${Math.max(event.data.height, 400)}px`;
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div className="w-full relative min-h-[400px] rounded-2xl overflow-hidden bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-2 md:p-6 transition-all duration-300">
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10 rounded-2xl">
          <Loader2 className="w-10 h-10 animate-spin text-[#FF9500] mb-4" />
          <p className="text-gray-500 font-medium">Loading customer reviews...</p>
        </div>
      )}
      
      <iframe
        ref={iframeRef}
        srcDoc={htmlContent}
        title="HercJunk Customer Reviews"
        className="w-full border-none transition-opacity duration-500"
        style={{ 
          opacity: isLoading ? 0 : 1, 
          minHeight: '400px',
          display: 'block'
        }}
        onLoad={() => {
          // Add a slight delay to allow the widget to render its skeleton/content
          setTimeout(() => setIsLoading(false), 800);
        }}
        scrolling="no"
      />
    </div>
  );
};

export default ElfsightReviewsWidget;