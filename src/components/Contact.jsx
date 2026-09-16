import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Linkedin, Github, CheckCircle2, AlertCircle, Sparkles, MessageSquare, User, ExternalLink, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validateForm = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your name';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters long';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setSubmitError('');

  if (!validateForm()) return;

  setIsSending(true);

  try {
    const form = e.currentTarget;
    const data = new FormData(form);

    data.set('form-name', 'contact');

    const response = await fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(data).toString(),
    });

    if (!response.ok) {
      throw new Error(`Netlify returned ${response.status}`);
    }

    setSubmitted(true);

    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 },
      });
    } catch (error) {
      console.log('Confetti error:', error);
    }

    setFormData({
      name: '',
      email: '',
      message: '',
    });

  } catch (error) {
    console.error('Contact form error:', error);

    setSubmitError(
      'Unable to send your message right now. Please try again or email me directly.'
    );
  } finally {
    setIsSending(false);
  }
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-grid-pattern overflow-hidden">
      {/* Glow Ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-sky-500/10 to-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-sky-500/30 text-sky-400 text-xs font-mono">
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build <span className="text-gradient-cyan">Something Together</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            I'm currently seeking Software Developer and Java Full Stack opportunities. Feel free to reach out via message or connect on LinkedIn!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & LinkedIn Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card rounded-3xl p-8 border border-white/10 space-y-6 shadow-xl">
              <h3 className="text-2xl font-bold text-white">Contact & Professional Links</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Whether you have a job opportunity, a project collaboration, or a technical inquiry, I'd love to hear from you.
              </p>

              {/* LinkedIn Showcase Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border border-sky-500/30 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-sky-500 text-white shadow-lg shadow-sky-500/30">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">LinkedIn Profile</h4>
                    <p className="text-xs text-sky-300 font-mono">/in/basavarajkenganal</p>
                  </div>
                </div>

                <a
                  href="https://www.linkedin.com/in/basavarajkenganal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-sky-500 to-indigo-600 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span>Connect on LinkedIn</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* GitHub & Resume */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="https://github.com/Basavarajkenganal9902"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-indigo-400" />
                    <div>
                      <div className="text-sm font-bold text-white">GitHub</div>
                      <div className="text-[11px] text-slate-400 font-mono">View my code</div>
                    </div>
                  </div>
                </a>
                <a
                  href="/Basavaraj-Kenganal-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-emerald-400" />
                    <div>
                      <div className="text-sm font-bold text-white">Resume</div>
                      <div className="text-[11px] text-slate-400 font-mono">View / download PDF</div>
                    </div>
                  </div>
                </a>
              </div>

              {/* Info Badges */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-300 font-mono">
                  <User className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Basavaraj Kenganal</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-300 font-mono">
                  <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>Java Full Stack Developer / Software Developer</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-3xl p-8 border border-white/10 shadow-2xl relative">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>! Your message has been sent successfully. I'll get back to you as soon as possible.
                  </p>
                  
                  <div className="p-4 rounded-2xl bg-slate-900/90 border border-emerald-500/30 text-left max-w-md mx-auto">
                    <p className="text-xs text-slate-400 leading-normal">
                      Your message was submitted through the portfolio contact form. A notification will be sent to the portfolio owner through Netlify Forms.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-mono text-slate-300 transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
  name="contact"
  method="POST"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
  onSubmit={handleSubmit}
  className="space-y-5"
  noValidate
>
  <input type="hidden" name="form-name" value="contact" />

  <p className="hidden">
    <label>
      Don't fill this out:
      <input name="bot-field" />
    </label>
  </p>
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-sky-400" />
                      Send a Direct Message
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400">Validated Input</span>
                  </div>

                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Smith"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition-all ${
                        errors.name
                          ? 'border-rose-500/80 focus:border-rose-500'
                          : 'border-white/10 focus:border-sky-500/80 focus:ring-1 focus:ring-sky-500/50'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-xs text-rose-400 flex items-center gap-1 mt-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider">
                      Your Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition-all ${
                        errors.email
                          ? 'border-rose-500/80 focus:border-rose-500'
                          : 'border-white/10 focus:border-sky-500/80 focus:ring-1 focus:ring-sky-500/50'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-xs text-rose-400 flex items-center gap-1 mt-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider">
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your job opportunity or project..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition-all resize-none ${
                        errors.message
                          ? 'border-rose-500/80 focus:border-rose-500'
                          : 'border-white/10 focus:border-sky-500/80 focus:ring-1 focus:ring-sky-500/50'
                      }`}
                    />
                    {errors.message && (
                      <span className="text-xs text-rose-400 flex items-center gap-1 mt-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {submitError && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs text-rose-300 font-mono">
                      {submitError}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-sky-500 to-indigo-600 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all"
                  >
                    <span>{isSending ? 'Sending...' : 'Send Message'}</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <div className="text-[11px] text-slate-500 text-center font-mono pt-1">
                    * Messages are securely submitted through Netlify Forms.
                  </div>
                </form>
              )}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
