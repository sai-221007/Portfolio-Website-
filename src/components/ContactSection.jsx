import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import {
  Send,
  Mail,
  Copy,
  Check,
  MapPin,
  Clock,
  Sparkles,
  AlertCircle,
  MessageSquare
} from 'lucide-react';

export default function ContactSection() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    botField: '', // Honeypot spam trap
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'fallback_email' | 'error'
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please specify a subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write a message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.botField) return; // Silent discard for spambots

    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // 1. Attempt connection to optional Node/Express backend if running
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2500);

      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        setSubmitStatus('success');
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.7 },
        });
        setFormData({ name: '', email: '', subject: '', message: '', botField: '' });
      } else {
        throw new Error('Backend error');
      }
    } catch {
      // 2. Honest Fallback: Open pre-composed email in client's default mail application
      const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
        `[Portfolio] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Hello Sai Manikanta,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
      )}`;

      window.location.href = mailtoUrl;

      setSubmitStatus('fallback_email');
      confetti({
        particleCount: 50,
        spread: 50,
        origin: { y: 0.7 },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-theme-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-theme-surface border border-theme-border text-xs font-mono uppercase tracking-wider text-theme-muted">
            <MessageSquare className="w-3.5 h-3.5 text-portfolio-rose" />
            <span>Initiate Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-theme-text tracking-tight">
            Let's Connect
          </h2>
          <p className="text-base sm:text-lg text-theme-muted max-w-2xl leading-relaxed">
            Have an internship inquiry, project collaboration idea, or question? Send a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Info & Quick Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-theme-card border border-theme-border shadow-sm space-y-6">
              <h3 className="text-xl font-display font-semibold text-theme-text">
                Direct Contact Details
              </h3>
              <p className="text-sm text-theme-muted leading-relaxed">
                I am actively seeking software engineering roles, internships, and collaborative open-source projects. Feel free to reach out directly via email or the form.
              </p>

              {/* Email Copy Card */}
              <div className="p-4 rounded-2xl bg-theme-surface border border-theme-border flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-portfolio-rose/15 flex items-center justify-center text-portfolio-rose flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="block text-[11px] font-mono text-theme-muted uppercase">
                      Email Address
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-theme-text truncate block">
                      {personal.email}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-theme-card hover:bg-theme-surfaceHover border border-theme-border text-xs font-mono text-theme-text transition-colors flex items-center gap-1.5 flex-shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-theme-muted" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Status & Location Meta */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-theme-muted">
                  <MapPin className="w-4 h-4 text-portfolio-rose flex-shrink-0" />
                  <span>Based in {personal.location} (Open to remote & relocation)</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-theme-muted">
                  <Clock className="w-4 h-4 text-portfolio-rose flex-shrink-0" />
                  <span>Response time: Usually within 24 hours</span>
                </div>
              </div>
            </div>

            {/* Backend Configuration Transparency Notice */}
            <div className="p-5 rounded-2xl bg-theme-surface/70 border border-theme-border text-xs text-theme-muted space-y-1.5">
              <span className="font-semibold text-theme-text flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-portfolio-rose" />
                Dual-Mode Submission
              </span>
              <p className="leading-relaxed">
                If the Node/Express backend is running locally with MongoDB configured, messages persist directly to the database. Otherwise, the form seamlessly launches your default email client with your pre-filled inquiry.
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-theme-card border border-theme-border shadow-md">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Spam Honeypot Field (Hidden from real users) */}
              <input
                type="text"
                name="botField"
                value={formData.botField}
                onChange={handleChange}
                tabIndex="-1"
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              {/* Name & Email inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono text-theme-muted uppercase tracking-wider mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Johnson"
                    className={`w-full px-4 py-3 rounded-xl bg-theme-surface border text-sm text-theme-text placeholder-theme-muted/50 focus:outline-none focus:ring-2 focus:ring-portfolio-rose/40 transition-colors ${
                      errors.name ? 'border-rose-500' : 'border-theme-border'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-500 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono text-theme-muted uppercase tracking-wider mb-2"
                  >
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-theme-surface border text-sm text-theme-text placeholder-theme-muted/50 focus:outline-none focus:ring-2 focus:ring-portfolio-rose/40 transition-colors ${
                      errors.email ? 'border-rose-500' : 'border-theme-border'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-500 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Subject Input */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-mono text-theme-muted uppercase tracking-wider mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Internship Opportunity / Project Collaboration"
                  className={`w-full px-4 py-3 rounded-xl bg-theme-surface border text-sm text-theme-text placeholder-theme-muted/50 focus:outline-none focus:ring-2 focus:ring-portfolio-rose/40 transition-colors ${
                    errors.subject ? 'border-rose-500' : 'border-theme-border'
                  }`}
                />
                {errors.subject && (
                  <p className="text-xs text-rose-500 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.subject}</span>
                  </p>
                )}
              </div>

              {/* Message Input */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono text-theme-muted uppercase tracking-wider mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className={`w-full px-4 py-3 rounded-xl bg-theme-surface border text-sm text-theme-text placeholder-theme-muted/50 focus:outline-none focus:ring-2 focus:ring-portfolio-rose/40 transition-colors ${
                    errors.message ? 'border-rose-500' : 'border-theme-border'
                  }`}
                />
                {errors.message && (
                  <p className="text-xs text-rose-500 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit Status Banner */}
              {submitStatus === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm flex items-center gap-2.5 animate-fade-in">
                  <Check className="w-4 h-4 flex-shrink-0" />
                  <span>Your message was sent and stored successfully! Thank you.</span>
                </div>
              )}

              {submitStatus === 'fallback_email' && (
                <div className="p-4 rounded-xl bg-portfolio-rose/15 border border-portfolio-rose/40 text-theme-text text-xs sm:text-sm space-y-1 animate-fade-in">
                  <div className="flex items-center gap-2 font-semibold">
                    <Sparkles className="w-4 h-4 text-portfolio-rose" />
                    <span>Email client launched!</span>
                  </div>
                  <p className="text-theme-muted">
                    Your default mail application has been opened with your inquiry pre-composed to Sai Manikanta.
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-portfolio-midnight text-portfolio-ivory hover:bg-portfolio-midnight/90 dark:bg-portfolio-ivory dark:text-portfolio-midnight dark:hover:bg-portfolio-rose font-medium text-sm sm:text-base shadow-md transition-all duration-200 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
