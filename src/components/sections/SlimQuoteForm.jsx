import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Loader2, AlertTriangle, CheckCircle } from 'lucide-react';
import { supabase } from '@/lib/customSupabaseClient';
import { useToast } from '@/components/ui/use-toast.js';

const SlimQuoteForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    description: '',
  });
  const [smsOptIn, setSmsOptIn] = useState(true);
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); 
  const businessPhoneNumberFormatted = '425-406-3445';

  const validateEmail = (email) => {
    if (!email) return true;
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'phone') {
      const digits = value.replace(/\D/g, '');
      if (digits.length > 0 && digits.length !== 10) {
        setPhoneError('Phone must be 10 digits.');
      } else {
        setPhoneError('');
      }
    }
    if (name === 'email') {
      if (!validateEmail(value)) setEmailError('Please enter a valid email address.');
      else setEmailError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    let hasError = false;
    if (formData.phone.replace(/\D/g, '').length !== 10) {
      setPhoneError('Phone must be 10 digits.');
      hasError = true;
    }
    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address.');
      hasError = true;
    }
    
    if (hasError) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    setSubmissionStatus(null);

    try {
      const quoteData = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        description: formData.description || 'Slim form submission',
        location: 'Not provided', 
        sms_opt_in: smsOptIn,
        created_at: new Date().toISOString(),
      };
      
      const { error: invokeError } = await supabase.functions.invoke('forward-to-zapier', {
        body: quoteData,
      });

      if (invokeError) throw new Error('Failed to send data to Zapier proxy.');

      // Send email notification independently
      supabase.functions.invoke('send-form-notification-email', {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          location: 'Slim Form',
          description: formData.description || 'Slim form submission',
          submissionTime: new Date().toISOString()
        }
      }).catch(err => console.error("Failed to send email notification:", err));
      
      setSubmissionStatus('success');
      setFormData({ name: '', phone: '', email: '', description: ''});
      setSmsOptIn(true);
      window.dispatchEvent(new CustomEvent('form_submitted'));
      
      toast({
        title: "Quote Requested",
        description: "We'll be in touch shortly!",
      });

    } catch (error) {
      console.error('Error submitting form:', error.message);
      setSubmissionStatus('error');
      toast({
        title: "Request Failed",
        description: "Please try again or call us directly.",
        variant: "destructive"
      });
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
      <h3 className="text-3xl font-bold text-black mb-6 text-center">Get Your Free Quote!</h3>
      {submissionStatus === 'success' ? (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <p className="text-2xl font-bold text-black">✅ Got it!</p>
                <p className="text-lg text-gray-700 mb-6">We’ll text you shortly.</p>
                <Button 
                  onClick={() => setSubmissionStatus(null)}
                  className="bg-gray-100 text-gray-900 hover:bg-gray-200 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Send another request
                </Button>
              </div>
            ) : submissionStatus === 'error' ? (
              <div className="text-center py-12">
                <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-4" />
                <p className="text-xl font-bold text-black">Oops! Something went wrong.</p>
                <p className="text-md text-gray-700 mt-2">Please call/text us at <a href={`tel:${businessPhoneNumberFormatted.replace(/-/g, '')}`} className="text-yellow-600 font-bold hover:underline">{businessPhoneNumberFormatted}</a>.</p>
                <Button 
                  onClick={() => setSubmissionStatus(null)}
                  className="mt-6 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Try Again
                </Button>
              </div>
            ) : (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name-slim" className="text-black font-semibold">Name</Label>
          <Input
            id="name-slim"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 bg-gray-100 border-gray-300 text-black placeholder:text-gray-500 transition-all duration-300"
            placeholder="Your Name"
          />
        </div>
        <div>
          <Label htmlFor="email-slim" className="text-black font-semibold">Email <span className="font-normal text-gray-500">(Optional)</span></Label>
          <Input
            id="email-slim"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`mt-1 bg-gray-100 border-gray-300 text-black placeholder:text-gray-500 transition-all duration-300 ${emailError ? 'border-red-500' : ''}`}
            placeholder="email@example.com"
          />
          {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
        </div>
        <div>
          <Label htmlFor="phone-slim" className="text-black font-semibold">Phone</Label>
          <Input
            id="phone-slim"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleInputChange}
            className={`mt-1 bg-gray-100 border-gray-300 text-black placeholder:text-gray-500 transition-all duration-300 ${phoneError ? 'border-red-500' : ''}`}
            placeholder="10-digit phone number"
          />
          {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}
        </div>
        <div>
          <Label htmlFor="description-slim" className="text-black font-semibold">Describe what you've got (optional)</Label>
          <Textarea
            id="description-slim"
            name="description"
            rows={2}
            value={formData.description}
            onChange={handleInputChange}
            className="mt-1 bg-gray-100 border-gray-300 text-black placeholder:text-gray-500 transition-all duration-300"
            placeholder="e.g., old sofa, garage junk"
          />
        </div>
        
        <div className="flex items-start space-x-3 pt-2">
          <Checkbox id="smsOptIn-slim" checked={smsOptIn} onCheckedChange={setSmsOptIn} className="border-gray-400 bg-gray-100" />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="smsOptIn-slim"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700"
            >
              ✅ Yes, text my quote for the fastest response!
            </label>
          </div>
        </div>
        <div className="pt-2">
          <Button 
            type="submit" 
            variant="cta" 
            className="w-full h-12 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-xl" 
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : (
              'Get My Free Quote'
            )}
          </Button>
          <p className="text-center text-gray-600 text-sm mt-4">or call/text us at <a href={`tel:${businessPhoneNumberFormatted.replace(/-/g, '')}`} className="text-black font-bold hover:underline">{businessPhoneNumberFormatted}</a></p>
        </div>
      </form>
      )}
    </div>
  );
};

export default SlimQuoteForm;