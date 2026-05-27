import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Checkbox } from '@/components/ui/checkbox.jsx';
import { Phone, CheckCircle2, Loader2, ArrowRight, MapPin, Truck } from 'lucide-react';
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
    <section className="relative flex items-center bg-[#FFC107] overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 pt-28 pb-16 lg:py-28">
        <div className="max-w-3xl mx-auto text-center lg:text-left">

          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
            <span className="inline-flex -rotate-1 items-center gap-1.5 bg-black text-[#FFC107] border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-wide shadow-[3px_3px_0_rgba(0,0,0,0.25)]">
              <MapPin className="w-3.5 h-3.5" /> Kenmore, WA
            </span>
            <span className="inline-flex rotate-1 items-center gap-1.5 bg-white text-black border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-wide shadow-[3px_3px_0_#000]">
              ★★★★★ 5.0 · 9 Google reviews
            </span>
            <span className="inline-flex -rotate-1 items-center gap-1.5 bg-black text-white border-2 border-black px-3 py-1 text-xs font-bold uppercase tracking-wide shadow-[3px_3px_0_rgba(0,0,0,0.25)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Booking Today
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-black leading-[1.02] mb-4 tracking-[-0.04em] rotate-[-0.5deg]">
            Junk gone. Same day.
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-black/85 font-black mb-8 max-w-2xl mx-auto lg:mx-0 leading-snug">
            Quotes from <span className="bg-black text-[#FFC107] px-2 py-0.5 inline-block rotate-[-1deg]">$99</span>. Serving Kenmore, Bothell, Kirkland, Lynnwood + nearby.
          </p>

          {/* Lead Form */}
          <div className="bg-black p-5 sm:p-6 shadow-[8px_8px_0_rgba(0,0,0,0.35)] border-4 border-black max-w-lg mx-auto lg:mx-0 rotate-[0.6deg]">
            {submissionStatus === 'success' ? (
              <div className="text-center py-4">
                <CheckCircle2 className="w-14 h-14 text-green-500 mx-auto mb-3" />
                <h3 className="text-xl font-black text-white mb-1">Got it.</h3>
                <p className="text-sm text-gray-400 mb-3">We'll call you back within 30 min.</p>
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
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#FFC107]">Get a price in 10 min</p>
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
                    I agree to be contacted by call or text. See the{' '}
                    <Link to="/privacy-policy" className="text-[#FFC107] hover:underline">privacy policy</Link>.
                  </label>
                </div>

                {submissionStatus === 'error' && (
                  <p className="text-sm text-red-400">
                    Something went wrong. Please try again or call directly.
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
                      Get A Quote <ArrowRight className="ml-2 h-5 w-5" />
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
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-sm font-black text-black bg-white/60 p-4 border-2 border-black inline-flex shadow-[4px_4px_0_#000] mt-6 -rotate-[0.4deg]">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> Fast Quotes</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> Licensed & Insured</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-black" /> Big Box Truck</span>
          </div>

          <figure className="mt-6 max-w-2xl border-4 border-black bg-white p-2 text-left rotate-[0.8deg] shadow-[8px_8px_0_rgba(0,0,0,0.3)]">
            <picture>
              <source srcSet="/images/hercules-truck.webp" type="image/webp" />
              <img
                src="/images/hercules-truck.jpg"
                alt="Hercules Junk Removal box truck with logo parked in a driveway"
                className="h-auto w-full object-cover"
                loading="eager"
                width="1024"
                height="1024"
              />
            </picture>
            <figcaption className="pt-2 text-sm font-black text-black">
              Big box truck based in Kenmore.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
