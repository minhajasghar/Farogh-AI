import React, { useState } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    contactInfo: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A0A0B]/85 backdrop-blur-md">
      <div className="bg-[#151618] border border-[#2563EB]/40 rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative text-left font-sans">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#0A0A0B] text-[#F4F1EA]/70 hover:text-[#3B82F6] border border-[#151618] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          {/* Small logo mark inside modal */}
          <div style={{ width: '90px', height: '34px', overflow: 'hidden', marginBottom: '10px' }}>
            <img
              src="/logo-dark.png"
              alt="Farogh AI"
              style={{ width: '120px', height: '120px', display: 'block', marginTop: '-42px', marginLeft: '-6px', objectFit: 'fill' }}
            />
          </div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A0A0B] border border-[#2563EB]/40 text-xs font-mono text-[#3B82F6]">
            BOOK A FREE CONSULTATION
          </span>
          <h3 className="text-2xl font-bold text-white mt-2">Discuss Your System Project</h3>
          <p className="text-xs text-[#F4F1EA]/70 mt-1">
            Tell us what you're looking to automate or build.
          </p>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#0A0A0B] border border-[#2563EB] text-[#3B82F6] flex items-center justify-center mx-auto">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-white">Consultation Booked</h4>
            <p className="text-xs text-[#F4F1EA]/80 leading-relaxed">
              We have received your message, <strong className="text-white">{formData.name}</strong>. Our team will contact you shortly.
            </p>
            <button
              onClick={() => {
                setFormData({ name: '', contactInfo: '', message: '' });
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 text-xs font-mono font-bold bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-xl cursor-pointer transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div className="space-y-1">
              <label className="text-[#F4F1EA]/80 font-mono">Name *</label>
              <input
                type="text"
                required
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#0A0A0B] border border-[#151618] text-white text-xs focus:outline-none focus:border-[#2563EB] transition-colors"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[#F4F1EA]/80 font-mono">Email or WhatsApp Number *</label>
              <input
                type="text"
                required
                placeholder="Enter Your Email or Whatsapp Number"
                value={formData.contactInfo}
                onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#0A0A0B] border border-[#151618] text-white text-xs focus:outline-none focus:border-[#2563EB] transition-colors"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[#F4F1EA]/80 font-mono">What are you trying to build? *</label>
              <textarea
                rows={3}
                required
                placeholder="Describe your bottleneck or software requirement..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#0A0A0B] border border-[#151618] text-white text-xs focus:outline-none focus:border-[#2563EB] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl font-mono font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#2563EB]/15 text-xs"
            >
              <span>Submit Consultation Request</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
