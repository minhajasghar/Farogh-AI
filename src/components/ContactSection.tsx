import React, { useState } from 'react';
import { PLACEHOLDERS } from '../data/content';
import { Send, CheckCircle, Mail } from 'lucide-react';
import { LinkedInIcon, FacebookIcon } from './SocialIcons';

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
    <section id="contact" className="py-24 bg-[#0A0A0B] text-[#F4F1EA] relative border-b border-[#151618]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left Direct Official Channels */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Tell us what you're <br className="hidden sm:inline" />
              <span className="text-[#3B82F6]">trying to build.</span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed font-normal">
              Give us the problem, workflow, or idea. We'll help you determine what can be automated, what should be built, and where AI produces measurable ROI.
            </p>

            {/* Direct Official Contact Channels */}
            <div className="space-y-3 pt-4 font-mono">
              
              {/* Official Email Channel */}
              <a
                href={`mailto:${PLACEHOLDERS.email}`}
                className="p-4 rounded-xl bg-[#151618] border border-[#151618] flex items-center gap-3 hover:border-blue-500/40 transition-colors block group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0A0A0B] flex items-center justify-center text-blue-400 group-hover:text-blue-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs text-blue-400 font-semibold uppercase tracking-wider">Official Email</div>
                  <div className="text-sm font-bold text-white truncate">{PLACEHOLDERS.email}</div>
                </div>
              </a>

              {/* Official Facebook Page */}
              <a
                href={PLACEHOLDERS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#151618] border border-[#151618] flex items-center gap-3 hover:border-blue-500/40 transition-colors block group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0A0A0B] flex items-center justify-center text-blue-400 group-hover:text-blue-300">
                  <FacebookIcon className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-xs text-blue-400 font-semibold uppercase tracking-wider">Facebook Page</div>
                  <div className="text-sm font-bold text-white">facebook.com/faroghai</div>
                </div>
              </a>

              {/* Official LinkedIn Page */}
              <a
                href={PLACEHOLDERS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#151618] border border-[#151618] flex items-center gap-3 hover:border-blue-500/40 transition-colors block group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0A0A0B] flex items-center justify-center text-blue-400 group-hover:text-blue-300">
                  <LinkedInIcon className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-xs text-blue-400 font-semibold uppercase tracking-wider">Company LinkedIn</div>
                  <div className="text-sm font-bold text-white">linkedin.com/company/faroghai</div>
                </div>
              </a>

            </div>
          </div>

          {/* Simplified 3-Field Intake Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#151618] rounded-3xl p-6 sm:p-10 border border-[#151618] text-left shadow-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#0A0A0B] border border-blue-500 text-blue-400 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Consultation Request Received</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Our founding team will review your inquiry and contact you at <strong className="text-blue-400">{formData.contactInfo}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setFormData({ name: '', contactInfo: '', message: '' });
                      setSubmitted(false);
                    }}
                    className="mt-4 px-6 py-2.5 text-xs font-mono font-semibold bg-[#0A0A0B] text-white hover:text-blue-400 rounded-lg cursor-pointer transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-white border-b border-[#0A0A0B] pb-3 font-mono">
                    Book a Free Consultation
                  </h3>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 font-medium">Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter Your Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0A0A0B] border border-[#151618] text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 font-medium">Email or Phone Number *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter Your Email Address or Phone Number"
                      value={formData.contactInfo}
                      onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0A0A0B] border border-[#151618] text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 font-medium">What are you trying to build? *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Briefly describe your business process, bottleneck, or system requirement..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0A0A0B] border border-[#151618] text-white text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl font-mono font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 cursor-pointer text-sm"
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
