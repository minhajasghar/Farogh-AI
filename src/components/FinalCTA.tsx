import React from 'react';
import { PLACEHOLDERS } from '../data/content';
import { ArrowRight, Mail, MessageSquare } from 'lucide-react';
import { LinkedInIcon } from './SocialIcons';

interface FinalCTAProps {
  onOpenConsultation: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenConsultation }) => {
  const contactChannels = [
    { name: 'Email', icon: <Mail className="w-4 h-4" />, value: PLACEHOLDERS.email },
    { name: 'WhatsApp', icon: <MessageSquare className="w-4 h-4" />, value: PLACEHOLDERS.whatsapp },
    { name: 'LinkedIn', icon: <LinkedInIcon className="w-4 h-4" />, value: PLACEHOLDERS.linkedin }
  ];

  return (
    <section className="py-24 bg-[#0A0A0B] text-[#F4F1EA] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#151618] rounded-3xl p-8 sm:p-14 text-center space-y-8 border border-[#151618] shadow-2xl">
          
          <span className="text-xs font-mono font-semibold text-[#B7F34A] uppercase tracking-widest block">
            09 / CONTACT
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Let's Build <span className="text-[#B7F34A]">Something.</span>
          </h2>

          <p className="text-[#F4F1EA]/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Have a business problem worth solving? Tell us what you're trying to automate, build, or improve.
          </p>

          <div className="pt-2 flex justify-center">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-8 py-4 text-sm font-mono font-bold text-[#0A0A0B] bg-[#B7F34A] hover:bg-[#a6e637] rounded-xl shadow-lg shadow-[#B7F34A]/10 transition-all flex items-center justify-center gap-2"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Official Contact Channels */}
          <div className="pt-8 border-t border-[#0A0A0B] space-y-4">
            <span className="text-xs font-mono text-[#789C48] uppercase tracking-wider block font-semibold">
              DIRECT CONTACT & CHANNELS
            </span>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {contactChannels.map((channel) => (
                <div
                  key={channel.name}
                  className="px-5 py-3 rounded-xl bg-[#0A0A0B] border border-[#151618] text-xs font-mono text-[#F4F1EA]/80 hover:text-[#B7F34A] hover:border-[#B7F34A]/40 transition-all flex items-center gap-2.5 group cursor-pointer"
                >
                  <span className="text-[#789C48] group-hover:text-[#B7F34A] transition-colors">
                    {channel.icon}
                  </span>
                  <span className="font-bold text-white">{channel.name}</span>
                  <span className="text-[11px] text-[#F4F1EA]/50 group-hover:text-[#B7F34A]/80 transition-colors">
                    ({channel.value})
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
