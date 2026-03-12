import React, { useEffect } from 'react';

const GoogleReviewsWidget = () => {
  useEffect(() => {
    // Check if the script is already loaded to avoid duplicates
    const scriptId = 'elfsight-platform-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://elfsightcdn.com/platform.js';
      script.setAttribute('data-use-service-core', '');
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="py-16 md:py-20 bg-gray-50 border-y border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">See What Our Customers Say</h2>
          <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
            Don't just take our word for it. See what your neighbors are saying about our fast and reliable service.
          </p>
        </div>
        {/* Elfsight Google Reviews Widget Container */}
        <div 
          className="elfsight-app-493efd55-cf04-4acf-a5b8-44e73ecb9757 min-h-[400px]" 
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
};

export default GoogleReviewsWidget;