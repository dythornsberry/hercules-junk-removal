import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Loader2 } from 'lucide-react';
import { supabase } from '@/lib/customSupabaseClient';

const TestEmailPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: 'Test User',
    email: 'test@example.com',
    phone: '5551234567',
    location: 'Test Location',
    description: 'This is a test message to verify the email functionality via Resend.'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setResult(null);

    try {
      const { data, error } = await supabase.functions.invoke('send-form-notification-email', {
        body: {
          ...formData,
          submissionTime: new Date().toISOString()
        }
      });

      if (error) {
        throw new Error(error.message || 'Unknown error occurred');
      }

      setResult({ type: 'success', data });
      toast({
        title: "Email Sent Successfully",
        description: "Check your inbox.",
      });
    } catch (err) {
      console.error(err);
      setResult({ type: 'error', error: err.message });
      toast({
        title: "Email Test Failed",
        description: err.message,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 pt-24">
      <Helmet>
        <title>Test Email Notification | Admin</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold mb-2">Test Email Notifications</h1>
        <p className="text-gray-600 mb-8">
          This page is for admins only to verify the Resend email integration. Submitting this form will trigger the <code>send-form-notification-email</code> Edge Function.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required className="text-black" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required className="text-black" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required className="text-black" />
            </div>
            <div>
              <Label htmlFor="location">Location</Label>
              <Input id="location" name="location" value={formData.location} onChange={handleInputChange} required className="text-black" />
            </div>
          </div>

          <div>
            <Label htmlFor="description">Message</Label>
            <Textarea id="description" name="description" value={formData.description} onChange={handleInputChange} rows={4} required className="text-black" />
          </div>

          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
            Send Test Email
          </Button>
        </form>

        {result && (
          <div className={`mt-8 p-4 rounded-lg ${result.type === 'success' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
            <h3 className={`font-semibold ${result.type === 'success' ? 'text-green-800' : 'text-red-800'}`}>
              {result.type === 'success' ? 'Success Response:' : 'Error Response:'}
            </h3>
            <pre className="mt-2 text-sm overflow-auto p-2 bg-black/5 rounded text-gray-800">
              {JSON.stringify(result.data || result.error, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestEmailPage;