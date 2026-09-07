import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Checkbox } from '@/components/ui/checkbox.jsx';
import { Phone, CheckCircle2, Loader2, ArrowRight, MessageCircle } from 'lucide-react';
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
    <section className="bg-[#FFC107]">
      <div className="container mx-auto px-4 py-6 md:py-12">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:gap-12 items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide mb-3">Kenmore, WA · Licensed & insured</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black leading-[1.05] tracking-tight">
              Junk removal.<br />From $99.
            </h1>
            <p className="mt-4 max-w-lg text-lg text-black leading-relaxed">
              Serving Kenmore, Bothell & nearby. Same-day pickup when available.
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-3">
              <a href={`tel:${DEFAULT_PHONE}`} className="inline-flex items-center gap-2 py-2 text-lg font-bold text-black hover:underline">
                <Phone className="h-5 w-5" /> {DEFAULT_PHONE_FORMATTED}
              </a>
              <a href={`sms:${DEFAULT_PHONE}`} className="inline-flex items-center gap-2 py-2 text-base font-bold text-black underline underline-offset-4">
                <MessageCircle className="h-5 w-5" /> Text a photo
              </a>
            </div>
          </div>
          <div className="bg-black p-4 sm:p-7 lg:row-span-2 lg:col-start-2 lg:row-start-1">
            {submissionStatus === 'success' ? (
              <div className="text-center py-4" role="status">
                <CheckCircle2 className="w-14 h-14 text-green-500 mx-auto mb-3" />
                <h3 className="text-xl font-black text-white mb-1">Thanks, we got your request.</h3>
                <p className="text-sm text-gray-400 mb-3">Dylan will call to go over the job.</p>
                <Button
                  type="button"
                  onClick={() => setSubmissionStatus(null)}
                  className="bg-white/10 text-white hover:bg-white/20"
                >
                  Send another request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3" aria-label="Request a free quote">
                <div>
                  <h2 className="text-2xl font-bold text-white">Get a free quote</h2>
                  <p className="mt-2 text-base text-gray-300">Leave your number. Dylan will call you.</p>
                </div>
                <div className="grid gap-3">
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
                      aria-invalid={Boolean(phoneError)}
                      aria-describedby={phoneError ? "hero-phone-error" : undefined}
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
                    {phoneError && <p id="hero-phone-error" className="text-red-400 text-sm">{phoneError}</p>}
                  </div>
                </div>

                <div className="flex items-start gap-2.5 border-2 border-white/10 bg-white/5 p-2.5">
                  <Checkbox
                    id="hero-sms"
                    checked={smsOptIn}
                    onCheckedChange={(checked) => setSmsOptIn(Boolean(checked))}
                    className="mt-0.5 border-gray-600 data-[state=checked]:bg-[#FFC107] data-[state=checked]:text-black"
                  />
                  <label htmlFor="hero-sms" className="text-sm leading-relaxed text-gray-400 cursor-pointer">
                    I agree to be contacted by call or text. See the{' '}
                    <Link to="/privacy-policy" className="text-[#FFC107] hover:underline">privacy policy</Link>.
                  </label>
                </div>

                {submissionStatus === 'error' && (
                  <p role="alert" className="text-sm text-red-400">
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
                      Get my quote <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
          <picture className="block lg:col-start-1">
            <source srcSet="/images/hercules-truck.webp" type="image/webp" />
            <img
              src="/images/hercules-truck.jpg"
              alt="Hercules Junk Removal truck at a local job"
              className="aspect-[16/9] w-full object-cover"
              loading="eager"
              width="1024"
              height="1024"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Hero;
