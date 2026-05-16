import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Checkbox } from '@/components/ui/checkbox.jsx';
import { Phone, CheckCircle2, Star, Loader2, ArrowRight, MapPin, Truck } from 'lucide-react';
import { submitLead } from '@/lib/leadSubmission.js';

const DEFAULT_PHONE = '4254063445';
const DEFAULT_PHONE_FORMATTED = '(425) 406-3445';

const Hero = () => {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [smsOptIn, setSmsOptIn] = useState(true);
  const [phoneError, setPhoneError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'phone') {
      const digits = value.replace(/\D/g, '');
      setPhoneError(digits.length > 0 && digits.length !== 10 ? 'Phone must be 10 digits.' : '');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const normalizedPhone = formData.phone.replace(/\D/g, '');
    let hasError = false;

    if (normalizedPhone.length !== 10) {
      setPhoneError('Phone must be 10 digits.');
      hasError = true;
    }
    if (hasError) return;

    setIsLoading(true);
    setSubmissionStatus(null);

    const quoteData = {
      name: formData.name.trim(),
      phone: normalizedPhone,
      email: '',
      location: 'Hero',
      description: 'Quote request from Hero',
      sms_opt_in: smsOptIn,
      created_at: new Date().toISOString(),
    };

    try {
      await submitLead(quoteData);
      setSubmissionStatus('success');
      setFormData({ name: '', phone: '' });
      setSmsOptIn(true);
      window.dispatchEvent(new CustomEvent('form_submitted'));
    } catch (error) {
      console.error('Error submitting hero form:', error);
      setSubmissionStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative min-h-[75vh] flex items-center bg-[#FFC107] overflow-hidden">
      {/* Background Image for splitting on large screens */}
      <div className="absolute inset-0 z-0 hidden lg:block w-1/2 left-1/2 h-full">
        <picture>
          <source srcSet="/images/hercules-truck.webp" type="image/webp" />
          <img
            src="/images/hercules-truck.jpg"
            alt="Hercules Junk Removal branded yellow truck with dumbbell logo parked in residential driveway"
            className="w-full h-full object-cover object-center"
            loading="eager"
            width="1024"
            height="1024"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFC107] via-[#FFC107]/60 to-transparent"></div>
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24 pb-20 lg:py-32">
        <div className="max-w-3xl mx-auto lg:mx-0 lg:w-[55%] text-center lg:text-left">

          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
            <span className="inline-flex rotate-1 items-center gap-1.5 bg-black text-[#FFC107] border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-wide shadow-[3px_3px_0_rgba(0,0,0,0.25)]">
              <Truck className="w-3.5 h-3.5" /> 18.6 Yard Box Truck
            </span>
            <span className="inline-flex -rotate-1 items-center gap-1.5 bg-white text-black border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-wide shadow-[3px_3px_0_#000]">
              <MapPin className="w-3.5 h-3.5" /> Kenmore, WA Based
            </span>
            <span className="inline-flex rotate-1 items-center gap-1.5 bg-black text-white border-2 border-black px-3 py-1 text-xs font-bold uppercase tracking-wide shadow-[3px_3px_0_rgba(0,0,0,0.25)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Same-Day Pickup
            </span>
            <span className="inline-flex -rotate-1 items-center gap-1 bg-white text-black border-2 border-black px-3 py-1 text-xs font-bold uppercase tracking-wide shadow-[3px_3px_0_#000]">
              <Star className="w-3 h-3 fill-current" /> 5-Star Google
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black leading-[1.02] mb-4 tracking-[-0.04em] drop-shadow-sm"
          >
            Junk removal in Kenmore, WA.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl lg:text-2xl text-black/85 font-black mb-8 max-w-2xl mx-auto lg:mx-0 leading-snug"
          >
            Fast quotes. Same-day pickup.
          </motion.p>

          <div className="mb-6 grid max-w-2xl grid-cols-1 gap-2 text-left sm:grid-cols-3">
            {['Call or text', 'Credit cards ok', '18.6 yd capacity'].map((item) => (
              <div
                key={item}
                className="border-2 border-black bg-white px-3 py-2 text-sm font-black uppercase tracking-tight shadow-[3px_3px_0_#000]"
              >
                {item}
              </div>
            ))}
          </div>

          {/* Lead Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="bg-black p-5 sm:p-6 shadow-[8px_8px_0_rgba(0,0,0,0.35)] border-4 border-black max-w-lg mx-auto lg:mx-0 rotate-[0.35deg]"
          >
            {submissionStatus === 'success' ? (
              <div className="text-center py-4">
                <CheckCircle2 className="w-14 h-14 text-green-500 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-white mb-2">Got it, thanks.</h3>
                <p className="text-gray-400 mb-4 text-sm">We will text or call you back as soon as we can.</p>
                <Button
                  type="button"
                  onClick={() => setSubmissionStatus(null)}
                  className="bg-white/10 text-white hover:bg-white/20"
                >
                  Send another request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="border-b-2 border-white/15 pb-3">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#FFC107]">Quick quote</p>
                  <p className="mt-1 text-lg font-black text-white">We will call or text you back.</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="space-y-1">
                    <label htmlFor="hero-name" className="text-sm font-semibold text-white">
                      Name
                    </label>
                    <Input
                      id="hero-name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                      required
                      autoComplete="name"
                      className="bg-white/10 border-2 border-gray-700 text-white placeholder:text-gray-500 h-11 rounded-md px-4 focus-visible:ring-[#FFC107]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="hero-phone" className="text-sm font-semibold text-white">
                      Phone
                    </label>
                    <Input
                      id="hero-phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(425) 555-0123"
                      required
                      className={`bg-white/10 border-2 border-gray-700 text-white placeholder:text-gray-500 h-11 rounded-md px-4 focus-visible:ring-[#FFC107] ${phoneError ? 'border-red-500' : ''}`}
                    />
                    {phoneError && <p className="text-red-400 text-xs">{phoneError}</p>}
                  </div>
                </div>

                <div className="flex items-start gap-2.5 border-2 border-white/10 bg-white/5 p-2.5">
                  <Checkbox
                    id="hero-sms"
                    checked={smsOptIn}
                    onCheckedChange={(checked) => setSmsOptIn(Boolean(checked))}
                    className="mt-0.5 border-gray-600 data-[state=checked]:bg-[#FFC107] data-[state=checked]:text-black"
                  />
                  <label htmlFor="hero-sms" className="text-xs leading-relaxed text-gray-400 cursor-pointer">
                    I agree to be contacted by call or text. See our{' '}
                    <Link to="/privacy-policy" className="text-[#FFC107] hover:underline">privacy policy</Link>.
                  </label>
                </div>

                {submissionStatus === 'error' && (
                  <p className="text-sm text-red-400">
                    Something went wrong. Please try again or call us directly.
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#FFC107] text-black hover:bg-[#e6ae06] h-12 rounded-md border-2 border-[#FFC107] font-black text-lg shadow-[4px_4px_0_rgba(255,255,255,0.15)] transition-all duration-300 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none active:scale-95"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send My Number <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>

                <a
                  href={`tel:${DEFAULT_PHONE}`}
                  className="flex items-center justify-center gap-2 border-2 border-white/20 bg-white/10 px-4 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-white/15"
                >
                  <Phone className="w-4 h-4 text-[#FFC107]" />
                  Call or text {DEFAULT_PHONE_FORMATTED}
                </a>
              </form>
            )}
          </motion.div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-sm font-black text-black bg-white/60 p-4 border-2 border-black inline-flex shadow-[4px_4px_0_#000] mt-6 -rotate-[0.4deg]">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> Fast Quotes</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> Licensed & Insured</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> 18.6 Yard Truck</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
