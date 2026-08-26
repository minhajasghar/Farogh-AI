import React from 'react';
import { SERVICES_DATA } from '../data/content';
import { Cpu, Camera, Bot, MessageSquare, Layout, Check } from 'lucide-react';

const CAPABILITY_ICONS: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-6 h-6 text-[#B7F34A]" />,
  Camera: <Camera className="w-6 h-6 text-[#B7F34A]" />,
  Bot: <Bot className="w-6 h-6 text-[#B7F34A]" />,
  MessageSquare: <MessageSquare className="w-6 h-6 text-[#B7F34A]" />,
  Layout: <Layout className="w-6 h-6 text-[#B7F34A]" />
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#0A0A0B] text-[#F4F1EA] border-b border-[#151618] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Services & <span className="text-[#B7F34A]">Capabilities</span>
          </h2>
          <p className="text-[#F4F1EA]/70 text-base sm:text-lg font-normal">
            Practical engineering solutions focused strictly on workflow automation, operational clarity, and ROI.
          </p>
        </div>

        {/* 5 Simple Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-[#151618] rounded-2xl p-7 border border-[#151618] hover:border-[#B7F34A]/40 transition-all duration-300 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4 text-left">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#0A0A0B] border border-[#151618] flex items-center justify-center group-hover:scale-105 group-hover:border-[#B7F34A]/30 transition-all">
                    {CAPABILITY_ICONS[service.iconName]}
                  </div>
                  <span className="text-xs font-mono font-bold text-[#789C48]">
                    {service.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#B7F34A] transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-[#F4F1EA]/75 leading-relaxed font-sans">
                  {service.shortDesc}
                </p>
              </div>

              {/* Concrete Deliverables Section */}
              <div className="pt-4 border-t border-[#0A0A0B] space-y-2 text-left">
                <span className="text-[11px] font-mono font-bold text-[#789C48] uppercase tracking-wider block">
                  CONCRETE DELIVERABLES
                </span>
                <div className="space-y-1.5 font-sans">
                  {service.capabilities.map((del, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#F4F1EA]/85">
                      <div className="w-4 h-4 rounded-full bg-[#789C48]/20 text-[#B7F34A] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-[#B7F34A]" />
                      </div>
                      <span className="font-medium">{del}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
