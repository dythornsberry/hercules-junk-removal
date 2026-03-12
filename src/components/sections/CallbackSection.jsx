import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Checkbox } from '@/components/ui/checkbox.jsx';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { supabase } from '@/lib/customSupabaseClient.js';
import { useToast } from '@/components/ui/use-toast.js';

const CallbackSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [smsOptIn, setSmsOptIn] = useState(true);
  const [phoneError, setPhoneError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'phone') {
      const digits = value.replace(/\D/g, '');
      if (digits.length > 0 && digits.length !== 10) setPhoneError('Phone must be 10 digits.');
      else setPhoneError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.phone.replace(/\D/g, '').length !== 10) {
      setPhoneError('Phone must be 10 digits.');
      return;
    }
    if (phoneError) return;

    setIsLoading(true);
    setSubmissionStatus(null);

    try {
      const { error } = await supabase.from('quotes').insert([
        { 
          name: formData.name, 
          phone: formData.phone,
          email: formData.email,
          description: 'Callback Request', 
          sms_opt_in: smsOptIn, 
          location: 'Website',
          created_at: new Date().toISOString() 
        }
      ]);
      
      if (error) throw new Error('Failed to send data.');
      
      // Also try to hit the zapier webhook via edge function if it was used previously
      await supabase.functions.invoke('forward-to-zapier', {
        body: { ...formData, description: 'Callback Request', sms_opt_in: smsOptIn, created_at: new Date().toISOString() },
      }).catch(e => console.error("Zapier forward failed", e));

      // Send email notification independently
      supabase.functions.invoke('send-form-notification-email', {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          location: 'Callback Request',
          description: 'User requested a callback ASAP',
          submissionTime: new Date().toISOString()
        }
      }).catch(err => console.error("Failed to send email notification:", err));

      setSubmissionStatus('success');
      setFormData({ name: '', phone: '', email: ''});
      toast({
        title: "Callback Requested",
        description: "We'll be in touch shortly!",
      });
    } catch (error) {
      console.error(error);
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
    <section className="bg-slate-900 py-16 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Prefer a callback?</h2>
            <p className="text-gray-400 text-lg">Leave your info and we'll get back to you within the hour.</p>
          </motion.div>

          <div className="bg-[#1A1A1A] p-6 sm:p-8 rounded-2xl border border-gray-800 shadow-2xl">
            {submissionStatus === 'success' ? (
              <div className="text-center py-10">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Got it!</h3>
                <p className="text-gray-400 mb-6">We'll text or call you shortly.</p>
                <Button 
                  onClick={() => setSubmissionStatus(null)}
                  className="bg-white/10 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Send another request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500 h-14 rounded-xl px-5 focus-visible:ring-[#FFC107] transition-all duration-300"
                />
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email (Optional)"
                  className="bg-black/50 border-gray-700 text-white placeholder:text-gray-500 h-14 rounded-xl px-5 focus-visible:ring-[#FFC107] transition-all duration-300"
                />
                <div>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    required
                    className={`bg-black/50 border-gray-700 text-white placeholder:text-gray-500 h-14 rounded-xl px-5 focus-visible:ring-[#FFC107] transition-all duration-300 ${phoneError ? 'border-red-500' : ''}`}
                  />
                  {phoneError && <p className="text-red-500 text-xs mt-1 px-1">{phoneError}</p>}
                </div>
                <div className="flex items-start gap-3 p-3 bg-black/30 rounded-lg border border-white/5">
                  <Checkbox 
                    id="callbackSmsOptIn" 
                    checked={smsOptIn} 
                    onCheckedChange={setSmsOptIn}
                    className="mt-0.5 data-[state=checked]:bg-[#FFC107] data-[state=checked]:text-black border-gray-600"
                  />
                  <label htmlFor="callbackSmsOptIn" className="text-xs text-gray-400 leading-tight cursor-pointer">
                    I agree to be contacted about my quote (Call or text)
                  </label>
                </div>
                {submissionStatus === 'error' && (
                  <p className="text-red-500 text-sm text-center">There was an error submitting your request. Please try again or call us.</p>
                )}
                <Button 
                  type="submit" 
                  disabled={isLoading} 
                  className="w-full bg-[#FFC107] text-black hover:bg-[#e6ae06] h-14 rounded-xl font-bold text-lg mt-2 shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-xl"
                >
                  {isLoading ? <Loader2 className="w-6 h-6 animate-spin" /> : 'Get a Free Quote'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallbackSection;