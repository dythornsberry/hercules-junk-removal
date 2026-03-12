import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { supabase } from '@/lib/customSupabaseClient';
import { Loader2 } from 'lucide-react';

const DebugPage = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('debug_logs')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(50);

        if (error) {
          throw error;
        }
        setLogs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLogs();
  }, []);

  return (
    <>
      <Helmet>
        <title>Debug Logs - Hercules Junk Removal</title>
        <meta name="description" content="Debug logs for API integrations." />
      </Helmet>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col">
        <Header />
        <main className="flex-grow py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-black text-yellow-400 mb-8">Debug Logs</h1>
            
            {loading && (
              <div className="flex justify-center items-center py-20">
                <Loader2 className="w-12 h-12 animate-spin text-yellow-400" />
              </div>
            )}
            
            {error && <p className="text-red-500">Error fetching logs: {error}</p>}

            {!loading && !error && (
              <div className="bg-black rounded-lg shadow-xl overflow-hidden">
                <div className="divide-y divide-gray-800">
                  {logs.length > 0 ? logs.map(log => (
                    <div key={log.id} className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-bold text-yellow-400 text-lg">{log.log_message}</span>
                        <span className="text-sm text-gray-400">{new Date(log.created_at).toLocaleString()}</span>
                      </div>
                      
                      {log.payload && (
                        <div className="mt-4">
                          <h3 className="font-semibold text-gray-300 mb-2">Payload:</h3>
                          <pre className="bg-gray-800 p-4 rounded-md text-sm text-green-300 overflow-x-auto">
                            {JSON.stringify(log.payload, null, 2)}
                          </pre>
                        </div>
                      )}

                      {log.response && (
                        <div className="mt-4">
                          <h3 className="font-semibold text-gray-300 mb-2">Response:</h3>
                          <pre className="bg-gray-800 p-4 rounded-md text-sm text-red-300 overflow-x-auto">
                            {JSON.stringify(log.response, null, 2)}
                          </pre>
                        </div>
                      )}
                    </div>
                  )) : (
                    <p className="p-6 text-gray-400">No logs found.</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default DebugPage;