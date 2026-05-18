import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Checkbox } from '@/components/ui/checkbox.jsx';
import { Loader2, CheckCircle2, Phone } from 'lucide-react';
import { submitLead } from '@/lib/leadSubmission.js';

const DEFAULT_PHONE = '4254063445';
const DEFAULT_PHONE_FORMATTED = '(425) 406-3445';

const CallbackSection = ({
  sourceLabel = 'Website',
  heading = 'Prefer a callback instead?',
  description = 'Name, phone, what needs to go.',
  compact = false,
  sectionId,
}) => {
  const fieldIdBase = sourceLabel.toLowerCase().replace(/[^a-z0-9]+/g, '-');
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

    const submissionTime = new Date().toISOString();
    const quoteData = {
      name: formData.name.trim(),
      phone: normalizedPhone,
      email: '',
      location: sourceLabel,
      description: `Callback request from ${sourceLabel}`,
      sms_opt_in: smsOptIn,
      created_at: submissionTime,
    };

    try {
      await submitLead(quoteData);
      setSubmissionStatus('success');
      setFormData({ name: '', phone: '' });
      setSmsOptIn(true);
      window.dispatchEvent(new CustomEvent('form_submitted'));
    } catch (error) {
      console.error('Error submitting callback form:', error);
      setSubmissionStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  const wrapperClasses = compact ? 'py-10 bg-[#111111]' : 'py-14 md:py-16 bg-slate-900';

  return (
    <section id={sectionId} className={`${wrapperClasses} scroll-mt-28`}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-5"
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-[#FFC107]/30 bg-[#FFC107]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#FFC107]">
              Quick Contact
            </p>
            <h2 className="mt-4 text-2xl md:text-3xl font-black text-white">{heading}</h2>
            <p className="mt-3 text-sm md:text-base text-gray-400 max-w-xl mx-auto">{description}</p>
          </motion.div>

          <div className="bg-[#1A1A1A] border-4 border-gray-800 shadow-[6px_6px_0_rgba(0,0,0,0.4)] overflow-hidden">
            <div className="border-b-2 border-gray-800 px-5 py-5 sm:px-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">Want to talk first?</h3>
                  <p className="mt-1 text-sm text-gray-400">
                    Send the basics and get a quote.
                  </p>
                </div>
                <p className="text-xs text-gray-500">
                  Prefer to call instead? <a href={`tel:${DEFAULT_PHONE}`} className="text-[#FFC107] hover:underline">Call {DEFAULT_PHONE_FORMATTED}</a>
                </p>
              </div>
            </div>

            <div className="px-5 py-5 sm:px-6 sm:py-6">
              {submissionStatus === 'success' ? (
                <div className="text-center py-2">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-black text-white mb-1">Got it.</h3>
                  <p className="text-sm text-gray-400 mb-3">We'll call you back fast — usually under 30 min.</p>
                  <Button
                    type="button"
                    onClick={() => setSubmissionStatus(null)}
                    className="bg-white/10 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    Send another request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label htmlFor={`callback-name-${fieldIdBase}`} className="text-sm font-semibold text-white">
                        Name
                      </label>
                      <Input
                        id={`callback-name-${fieldIdBase}`}
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                        autoComplete="name"
                        className="bg-black/50 border-2 border-gray-700 text-white placeholder:text-gray-500 h-12 rounded-md px-4 focus-visible:ring-[#FFC107]"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor={`callback-phone-${fieldIdBase}`} className="text-sm font-semibold text-white">
                        Phone number
                      </label>
                      <Input
                        id={`callback-phone-${fieldIdBase}`}
                        name="phone"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(425) 555-0123"
                        required
                        className={`bg-black/50 border-2 border-gray-700 text-white placeholder:text-gray-500 h-12 rounded-md px-4 focus-visible:ring-[#FFC107] ${
                          phoneError ? 'border-red-500' : ''
                        }`}
                      />
                      {phoneError && <p className="text-red-500 text-xs">{phoneError}</p>}
                    </div>
                  </div>

                  <div className="flex items-start gap-3 border-2 border-white/10 bg-black/30 p-3">
                    <Checkbox
                      id={`callback-sms-${fieldIdBase}`}
                      checked={smsOptIn}
                      onCheckedChange={(checked) => setSmsOptIn(Boolean(checked))}
                      className="mt-0.5 border-gray-600 data-[state=checked]:bg-[#FFC107] data-[state=checked]:text-black"
                    />
                    <label htmlFor={`callback-sms-${fieldIdBase}`} className="text-xs leading-relaxed text-gray-400 cursor-pointer">
                      I agree to be contacted about my quote by call or text. See the{' '}
                      <Link to="/privacy-policy" className="text-[#FFC107] hover:underline">
                        privacy policy
                      </Link>
                      .
                    </label>
                  </div>

                  {submissionStatus === 'error' && (
                    <p className="text-sm text-red-400">
                      Could not submit your request right now. Please try again or call directly.
                    </p>
                  )}

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full sm:flex-1 bg-[#FFC107] text-black hover:bg-[#e6ae06] h-12 rounded-md font-black shadow-[4px_4px_0_rgba(255,255,255,0.1)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none active:scale-95"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Send My Info'
                      )}
                    </Button>
                    <Button
                      asChild
                      className="w-full sm:w-auto border border-gray-700 bg-[#111111] text-white hover:bg-white/10"
                    >
                      <a href={`tel:${DEFAULT_PHONE}`}>
                        <Phone className="mr-2 h-4 w-4" />
                        Call {DEFAULT_PHONE_FORMATTED}
                      </a>
                    </Button>
                  </div>

                  <p className="text-xs text-gray-500">
                    Name and phone is enough to get started.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallbackSection;
