import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { supabase } from '@/lib/customSupabaseClient';
import { Loader2, AlertTriangle, Image as ImageIcon, X, Phone, Mail, MapPin, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { motion, AnimatePresence } from 'framer-motion';

const AdminPage = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchQuotes = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('quotes')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(100);

      if (error) {
        setError(error.message);
        console.error("Error fetching quotes:", error);
      } else {
        setQuotes(data);
      }
      setLoading(false);
    };

    fetchQuotes();

    const channel = supabase
      .channel('realtime quotes')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'quotes' }, (payload) => {
        setQuotes(currentQuotes => [payload.new, ...currentQuotes]);
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  const ImageModal = ({ imageUrl, onClose }) => (
    <AnimatePresence>
      {imageUrl && (
        <AlertDialog open onOpenChange={onClose}>
        <AlertDialogContent className="p-0 border-0 bg-transparent shadow-none max-w-4xl">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative"
          >
            <img-replace src={imageUrl} alt="Quote submission" className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl" />
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-3 -right-3 bg-white text-black rounded-full h-10 w-10 hover:bg-yellow-400 z-10"
              onClick={onClose}
            >
              <X className="h-6 w-6" />
            </Button>
          </motion.div>
        </AlertDialogContent>
        </AlertDialog>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <Helmet>
        <title>Admin Dashboard - Hercules Junk Removal</title>
        <meta name="description" content="View all incoming quote requests." />
      </Helmet>
      <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl md:text-4xl font-black text-yellow-400">Admin Dashboard</h1>
            <p className="text-md md:text-lg text-gray-400">Live Lead Feed</p>
          </div>

          {loading && (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-16 w-16 animate-spin text-yellow-400" />
            </div>
          )}

          {error && (
            <div className="bg-red-900/50 border border-red-700 text-red-300 px-4 py-3 rounded-lg flex items-center">
              <AlertTriangle className="h-5 w-5 mr-3" />
              <span>Error loading leads: {error}</span>
            </div>
          )}

          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {quotes.map((quote) => (
                  <motion.div 
                    key={quote.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="bg-black/50 rounded-xl shadow-2xl p-6 flex flex-col space-y-4"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold text-xl text-white">{quote.name}</p>
                        <p className="text-xs text-gray-400">{formatDate(quote.created_at)}</p>
                      </div>
                      {quote.sms_opt_in ? (
                        <span className="flex items-center rounded-full bg-green-900/70 px-3 py-1 text-xs font-medium text-green-300 ring-1 ring-inset ring-green-600/20">
                          <CheckCircle className="h-4 w-4 mr-1.5" /> Opted-In
                        </span>
                      ) : (
                         <span className="flex items-center rounded-full bg-red-900/70 px-3 py-1 text-xs font-medium text-red-300 ring-1 ring-inset ring-red-600/20">
                          <AlertCircle className="h-4 w-4 mr-1.5" /> No SMS
                        </span>
                      )}
                    </div>
                    
                    <div className="border-t border-gray-700 pt-4 space-y-3 text-sm">
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-3 text-yellow-400" />
                        <a href={`tel:${quote.phone}`} className="text-gray-300 hover:text-yellow-400">{quote.phone}</a>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-3 text-yellow-400" />
                        <a href={`mailto:${quote.email}`} className="text-gray-300 hover:text-yellow-400">{quote.email}</a>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="h-4 w-4 mr-3 text-yellow-400 mt-1" />
                        <span className="text-gray-300">{quote.location}</span>
                      </div>
                      <div className="flex items-start">
                        <FileText className="h-4 w-4 mr-3 text-yellow-400 mt-1" />
                        <p className="text-gray-300">{quote.description}</p>
                      </div>
                    </div>

                    {quote.image_path && (
                      <div className="pt-4 border-t border-gray-700">
                        <AlertDialogTrigger asChild>
                           <Button variant="outline" onClick={() => setSelectedImage(quote.image_path)} className="w-full bg-yellow-400 text-black hover:bg-white font-semibold">
                            <ImageIcon className="h-4 w-4 mr-2"/> View Junk Photo
                          </Button>
                        </AlertDialogTrigger>
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
      <ImageModal imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />
    </>
  );
};

export default AdminPage;