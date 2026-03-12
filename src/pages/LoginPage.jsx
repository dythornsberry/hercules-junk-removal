import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Toaster } from '@/components/ui/toaster';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const LoginPage = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // This is a simple, client-side password. For a real-world app,
    // you would use a proper authentication service.
    if (password === 'hercules123') {
      sessionStorage.setItem('hercules-auth', 'true');
      toast({
        title: "Success!",
        description: "Redirecting to your dashboard.",
      });
      navigate('/admin');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin Login - Hercules Junk Removal</title>
      </Helmet>
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="bg-black text-white p-8 md:p-12 rounded-3xl shadow-2xl">
            <div className="text-center mb-8">
              <Shield className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
              <h1 className="text-3xl font-black text-yellow-400">Admin Access</h1>
              <p className="text-gray-400 mt-2">Enter the password to view your leads.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="password" className="text-yellow-400 text-lg">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError('');
                  }}
                  className="bg-gray-800 text-white border-gray-700 h-12 text-lg"
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <div>
                <Button type="submit" className="w-full bg-yellow-400 text-black font-bold text-xl py-6 rounded-xl hover:bg-white hover:scale-105 transition-transform duration-300">
                  Unlock Dashboard
                </Button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
      <Toaster />
    </>
  );
};

export default LoginPage;