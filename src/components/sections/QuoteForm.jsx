import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { motion } from 'framer-motion';
import { Loader2, AlertTriangle, CheckCircle, ShieldCheck } from 'lucide-react';
import { supabase } from '@/lib/customSupabaseClient';
import { Link } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast.js';

const QuoteForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [smsOptIn, setSmsOptIn] = useState(true);
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const businessPhoneNumberFormatted = '425-406-3445';

  const validateEmail = (email) => {
    if (!email) return true; // Optional
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
      if (!validateEmail(value)) {
        setEmailError('Please enter a valid email address.');
      } else {
        setEmailError('');
      }
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
        description: "Please check the form for errors.",
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
        location: 'Not provided (Quote Page)',
        description: 'Quote Page submission (Standard)',
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
          location: 'Quote Page',
          description: 'Standard Quote Request',
          submissionTime: new Date().toISOString()
        }
      }).catch(err => console.error("Failed to send email notification:", err));

      setSubmissionStatus('success');
      setFormData({ name: '', phone: '', email: '' });
      setSmsOptIn(true);
      window.dispatchEvent(new CustomEvent('form_submitted'));
      
      toast({
        title: "Quote Request Sent!",
        description: "We'll be in touch shortly to confirm details.",
      });

    } catch (error) {
      console.error('Error submitting form:', error.message);
      setSubmissionStatus('error');
      toast({
        title: "Submission Failed",
        description: "There was a problem submitting your request. Please call us directly.",
        variant: "destructive"
      });
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <section id="quote-form" className="py-16 md:py-20 bg-[#FDFBF7]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4 tracking-tight">Get a Free Quote</h2>
          <p className="text-lg text-gray-600">
            Just enter your name and number. We'll call you fast to give you a price.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-lg mx-auto bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden"
        >
          {/* Decorative top border */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-yellow-400"></div>

          {submissionStatus === 'success' ? (
              <div className="text-center py-12">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-2">Request Received!</h3>
                <p className="text-gray-600">We'll call or text you shortly to confirm the details.</p>
                <Button 
                  onClick={() => setSubmissionStatus(null)}
                  className="mt-8 bg-gray-100 text-gray-900 hover:bg-gray-200 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Send another request
                </Button>
              </div>
            ) : submissionStatus === 'error' ? (
              <div className="text-center py-12">
                <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <AlertTriangle className="h-10 w-10 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">Connection Error</h3>
                <p className="text-gray-600 mb-6">We couldn't submit your form. Please try again or call us directly.</p>
                <a href={`tel:${businessPhoneNumberFormatted.replace(/-/g, '')}`}>
                  <Button variant="cta" className="w-full transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-xl">
                    Call {businessPhoneNumberFormatted}
                  </Button>
                </a>
              </div>
            ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
               <div className="flex items-center justify-center gap-2 mb-2">
                 <ShieldCheck className="w-5 h-5 text-green-600" />
                 <span className="text-sm font-semibold text-gray-600">Your information is secure</span>
               </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="name-quote" className="text-base font-bold text-gray-900 ml-1">Name</Label>
                  <Input
                    id="name-quote"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1.5 bg-gray-50 border-gray-200 focus:bg-white focus:border-yellow-400 h-14 text-lg px-4 transition-all duration-300 text-black"
                    placeholder="Your Name"
                  />
                </div>
                
                 <div>
                  <Label htmlFor="email-quote" className="text-base font-bold text-gray-900 ml-1">Email <span className="text-gray-400 font-normal">(Optional)</span></Label>
                  <Input
                    id="email-quote"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`mt-1.5 bg-gray-50 border-gray-200 focus:bg-white focus:border-yellow-400 h-14 text-lg px-4 transition-all duration-300 text-black ${emailError ? 'border-red-500 bg-red-50' : ''}`}
                    placeholder="email@example.com"
                  />
                  {emailError && <p className="text-red-500 text-sm mt-1 ml-1 font-medium">{emailError}</p>}
                </div>
                
                <div>
                  <Label htmlFor="phone-quote" className="text-base font-bold text-gray-900 ml-1">Phone Number</Label>
                  <Input
                    id="phone-quote"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`mt-1.5 bg-gray-50 border-gray-200 focus:bg-white focus:border-yellow-400 h-14 text-lg px-4 transition-all duration-300 text-black ${phoneError ? 'border-red-500 bg-red-50' : ''}`}
                    placeholder="(425) 555-0123"
                  />
                   {phoneError && <p className="text-red-500 text-sm mt-1 ml-1 font-medium">{phoneError}</p>}
                   <p className="text-sm text-gray-500 mt-2 ml-1">Serving Kenmore, Bothell, Kirkland & Lynnwood.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 pt-2 p-3 bg-gray-50 rounded-lg border border-gray-100">
                <Checkbox 
                  id="smsOptIn-quote" 
                  checked={smsOptIn} 
                  onCheckedChange={setSmsOptIn} 
                  className="mt-1 w-5 h-5 border-gray-400 data-[state=checked]:bg-yellow-400 data-[state=checked]:text-black" 
                />
                <div className="grid gap-0.5 leading-none">
                  <label
                    htmlFor="smsOptIn-quote"
                    className="text-sm sm:text-base font-medium text-gray-700 cursor-pointer"
                  >
                    I agree to be contacted about my quote{' '}
                    <Link to="/privacy-policy" className="text-blue-600 hover:underline" onClick={(e) => e.stopPropagation()}>Privacy Policy</Link>
                  </label>
                  <span className="text-xs text-gray-500">(Call or text)</span>
                </div>
              </div>

              <div className="pt-2">
                <Button 
                  type="submit" 
                  variant="cta" 
                  className="w-full h-16 rounded-xl text-xl transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-xl" 
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Get My Free Quote →'
                  )}
                </Button>
                <p className="text-center text-xs text-gray-400 mt-4 font-medium">
                  We'll call you within 5–15 minutes to confirm details and price.
                </p>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteForm;