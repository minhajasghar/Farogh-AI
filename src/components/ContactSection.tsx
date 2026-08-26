import React, { useState } from 'react';
import { PLACEHOLDERS } from '../data/content';
import { Send, MessageSquare, CheckCircle, Mail } from 'lucide-react';
import { LinkedInIcon } from './SocialIcons';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactInfo: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#0A0A0B] text-[#F4F1EA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left Details */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Tell us what you're <br className="hidden sm:inline" />
              <span className="text-[#B7F34A]">trying to build.</span>
            </h2>

            <p className="text-[#F4F1EA]/80 text-base leading-relaxed">
              Give us the problem, workflow, or idea. We'll help you determine what can be automated, what should be built, and where AI actually makes sense.
            </p>

            {/* Direct Contact Links */}
            <div className="space-y-3 pt-4 font-mono">
              <div className="p-4 rounded-xl bg-[#151618] border border-[#151618] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#0A0A0B] flex items-center justify-center text-[#B7F34A]">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#789C48]">Direct WhatsApp</div>
                    <div className="text-sm font-bold text-white">{PLACEHOLDERS.whatsapp}</div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#151618] border border-[#151618] flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#0A0A0B] flex items-center justify-center text-[#F4F1EA]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#789C48]">Email Inquiry</div>
                  <div className="text-sm font-bold text-white">{PLACEHOLDERS.email}</div>
                </div>
              </div>

              <a
                href={PLACEHOLDERS.linkedin.startsWith('http') ? PLACEHOLDERS.linkedin : '#'}
                target={PLACEHOLDERS.linkedin.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#151618] border border-[#151618] flex items-center gap-3 hover:border-[#B7F34A]/40 transition-colors block"
              >
                <div className="w-9 h-9 rounded-lg bg-[#0A0A0B] flex items-center justify-center text-[#789C48]">
                  <LinkedInIcon className="w-5 h-5 text-[#789C48]" />
                </div>
                <div>
                  <div className="text-xs text-[#789C48]">Company LinkedIn</div>
                  <div className="text-sm font-bold text-white">{PLACEHOLDERS.linkedin}</div>
                </div>
              </a>
            </div>
          </div>

          {/* Simplified 3-Field Intake Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#151618] rounded-3xl p-6 sm:p-10 border border-[#151618] text-left">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#0A0A0B] border border-[#B7F34A] text-[#B7F34A] flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Consultation Request Received</h3>
                  <p className="text-sm text-[#F4F1EA]/80 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Our founding team will review your inquiry and reach out shortly.
                  </p>
                  <button
                    onClick={() => {
                      setFormData({ name: '', contactInfo: '', message: '' });
                      setSubmitted(false);
                    }}
                    className="mt-4 px-6 py-2.5 text-xs font-mono font-semibold bg-[#0A0A0B] text-[#F4F1EA] hover:text-[#B7F34A] rounded-lg cursor-pointer transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-white border-b border-[#0A0A0B] pb-3 font-mono">
                    Book a Consultation
                  </h3>

                  {/* 1. Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#F4F1EA]/80 font-medium">Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0A0A0B] border border-[#151618] text-white text-sm focus:outline-none focus:border-[#B7F34A] transition-colors"
                    />
                  </div>

                  {/* 2. Email or WhatsApp */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#F4F1EA]/80 font-medium">Email or WhatsApp Number *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter Your Email or Whatsapp Number"
                      value={formData.contactInfo}
                      onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0A0A0B] border border-[#151618] text-white text-sm focus:outline-none focus:border-[#B7F34A] transition-colors"
                    />
                  </div>

                  {/* 3. What are you trying to build? */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#F4F1EA]/80 font-medium">What are you trying to build? *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Briefly describe your business process, bottleneck, or system idea..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0A0A0B] border border-[#151618] text-white text-sm focus:outline-none focus:border-[#B7F34A] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl font-mono font-bold text-[#0A0A0B] bg-[#B7F34A] hover:bg-[#a6e637] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#B7F34A]/10 cursor-pointer text-sm"
                  >
                    <span>Book a Free Consultation</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
