import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Home } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Hercules Junk Removal</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="flex-grow bg-black min-h-[60vh] flex items-center justify-center">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-6xl md:text-8xl font-black text-yellow-400 mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Page Not Found</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto">
            The page you are looking for does not exist or has been moved. Let us help you find what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 text-lg font-bold px-8 py-6 rounded-xl">
                <Home className="mr-2 h-5 w-5" /> Go Home
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black text-lg font-bold px-8 py-6 rounded-xl">
                View Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
