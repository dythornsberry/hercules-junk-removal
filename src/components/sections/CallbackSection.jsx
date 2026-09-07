import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Checkbox } from '@/components/ui/checkbox.jsx';
import { Loader2, CheckCircle2, Phone, MessageCircle } from 'lucide-react';
import { submitLead } from '@/lib/leadSubmission.js';

const DEFAULT_PHONE = '4254063445';
const DEFAULT_PHONE_FORMATTED = '(425) 406-3445';

const CallbackSection = ({
  sourceLabel = 'Website',
  heading = 'Get a free quote',
  description = 'Leave your number. Dylan will call to go over the job.',
  compact = false,
  headingLevel = 'h2',
  sectionId,
}) => {
  const Heading = headingLevel;
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
          <div className="mb-5">
            <Heading className="text-3xl md:text-4xl font-bold text-white">{heading}</Heading>
            <p className="mt-2 text-base text-gray-300">{description}</p>
          </div>

          <div className="bg-[#1A1A1A] border border-gray-700">
            <div className="px-5 py-5 sm:px-6 sm:py-6">
              {submissionStatus === 'success' ? (
                <div className="text-center py-2" role="status">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-black text-white mb-1">Thanks, we got your request.</h3>
                  <p className="text-sm text-gray-400 mb-3">Dylan will call to go over the job.</p>
                  <Button
                    type="button"
                    onClick={() => setSubmissionStatus(null)}
                    className="bg-white/10 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    Send another request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" aria-label="Request a free quote">
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
                        aria-invalid={Boolean(phoneError)}
                        aria-describedby={phoneError ? `callback-phone-error-${fieldIdBase}` : undefined}
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
                      {phoneError && <p id={`callback-phone-error-${fieldIdBase}`} className="text-red-400 text-sm">{phoneError}</p>}
                    </div>
                  </div>

                  <div className="flex items-start gap-3 border-2 border-white/10 bg-black/30 p-3">
                    <Checkbox
                      id={`callback-sms-${fieldIdBase}`}
                      checked={smsOptIn}
                      onCheckedChange={(checked) => setSmsOptIn(Boolean(checked))}
                      className="mt-0.5 border-gray-600 data-[state=checked]:bg-[#FFC107] data-[state=checked]:text-black"
                    />
                    <label htmlFor={`callback-sms-${fieldIdBase}`} className="text-sm leading-relaxed text-gray-300 cursor-pointer">
                      I agree to be contacted about my quote by call or text. See the{' '}
                      <Link to="/privacy-policy" className="text-[#FFC107] hover:underline">
                        privacy policy
                      </Link>
                      .
                    </label>
                  </div>

                  {submissionStatus === 'error' && (
                    <p role="alert" className="text-sm text-red-400">
                      Could not submit your request right now. Please try again or call directly.
                    </p>
                  )}

                  <div className="flex flex-col gap-4">
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-[#FFC107] text-black hover:bg-[#e6ae06] h-12 rounded-md font-black shadow-[4px_4px_0_rgba(255,255,255,0.1)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none active:scale-95"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Get my quote'
                      )}
                    </Button>
                    <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-semibold">
                      <a href={`tel:${DEFAULT_PHONE}`} className="inline-flex items-center gap-2 py-2 text-white hover:underline">
                        <Phone className="h-4 w-4" /> Call {DEFAULT_PHONE_FORMATTED}
                      </a>
                      <a href={`sms:${DEFAULT_PHONE}`} className="inline-flex items-center gap-2 py-2 text-[#FFC107] underline underline-offset-4">
                        <MessageCircle className="h-4 w-4" /> Text a photo
                      </a>
                    </div>
                  </div>
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
