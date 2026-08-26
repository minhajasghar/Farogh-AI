import React, { useState } from 'react';
import { CASE_STUDIES_DATA } from '../data/content';
import { Check, ShieldCheck, Camera, Layout, MessageSquare, Sparkles } from 'lucide-react';
import { RestaurantMockup } from './mockups/RestaurantMockup';

const INDUSTRY_FILTERS = [
  { id: 'all', label: 'All Systems' },
  { id: 'restaurants', label: 'Restaurants' },
  { id: 'clinics', label: 'Healthcare & Clinics' },
  { id: 'ecommerce', label: 'E-Commerce' }
];

export const CaseStudies: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredCaseStudies = CASE_STUDIES_DATA.filter((cs) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'restaurants') return cs.id.includes('restaurant');
    if (activeFilter === 'clinics') return cs.id.includes('clinic');
    if (activeFilter === 'ecommerce') return cs.id.includes('ecommerce') || cs.id.includes('social');
    return true;
  });

  return (
    <section id="case-studies" className="py-24 bg-[#F4F1EA] text-[#0A0A0B] border-b border-[#0A0A0B]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A0A0B] tracking-tight">
            Engineered Work & <span className="text-[#789C48]">Case Studies</span>
          </h2>
          <p className="text-[#0A0A0B]/70 text-base sm:text-lg">
            Production systems built for real operations—from vision analytics to clinic portals and WhatsApp AI agents.
          </p>
        </div>

        {/* Industry Filter Buttons (Merged Industries Nav) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {INDUSTRY_FILTERS.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                activeFilter === filter.id
                  ? 'bg-[#0A0A0B] text-[#B7F34A] shadow-md'
                  : 'bg-white text-[#0A0A0B]/70 hover:text-[#0A0A0B] border border-[#0A0A0B]/10'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-10 max-w-5xl mx-auto">
          {filteredCaseStudies.map((cs, idx) => (
            <div
              key={cs.id}
              className="bg-white rounded-3xl p-7 sm:p-10 border border-[#0A0A0B]/10 space-y-6 text-left shadow-xl shadow-[#0A0A0B]/5 hover:border-[#789C48]/30 transition-all"
            >
              {/* Top Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#0A0A0B]/10 pb-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-[#0A0A0B] bg-[#B7F34A] px-3 py-1 rounded-md">
                    PROJECT 0{idx + 1}
                  </span>
                  <span className="text-xs font-mono text-[#789C48] font-semibold">
                    {cs.category}
                  </span>
                </div>
                <span className="text-xs font-mono text-[#0A0A0B]/60 bg-[#F4F1EA] px-3 py-1 rounded border border-[#0A0A0B]/10">
                  {cs.metricsLabel}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A0A0B] tracking-tight">
                  {cs.title}
                </h3>
                <p className="text-sm font-mono text-[#789C48] mt-1 font-semibold">
                  {cs.subtitle}
                </p>
              </div>

              {/* Problem & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="bg-[#F4F1EA] p-4 rounded-2xl border border-[#0A0A0B]/10 space-y-1">
                  <span className="text-[10px] font-mono text-[#0A0A0B]/60 font-bold uppercase block">
                    OPERATIONAL CHALLENGE
                  </span>
                  <p className="text-[#0A0A0B] leading-relaxed">{cs.problem}</p>
                </div>
                <div className="bg-[#F4F1EA] p-4 rounded-2xl border border-[#789C48]/30 space-y-1">
                  <span className="text-[10px] font-mono text-[#789C48] font-bold uppercase block">
                    WHAT WE ENGINEERED
                  </span>
                  <p className="text-[#0A0A0B] font-medium leading-relaxed">{cs.solution}</p>
                </div>
              </div>

              {/* Visual Graphic & 2-3 Short Key Results Bullets */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-2">
                
                {/* Visual Frame */}
                <div className="lg:col-span-6">
                  {cs.screenshotType === 'restaurant' ? (
                    <RestaurantMockup />
                  ) : (
                    <div className="w-full rounded-2xl border border-[#151618] bg-[#0A0A0B] p-5 text-left font-mono space-y-3">
                      <div className="flex items-center justify-between text-xs text-[#F4F1EA]/70 border-b border-[#151618] pb-2">
                        <span className="font-bold text-white uppercase">{cs.screenshotType} SYSTEM STREAM</span>
                        <span className="text-[#B7F34A] text-[11px]">Production Verified</span>
                      </div>
                      <div className="bg-[#151618] p-4 rounded-xl border border-[#151618] flex items-center justify-between">
                        <div>
                          <div className="text-xs text-white font-bold">{cs.title}</div>
                          <div className="text-[10px] text-[#789C48] mt-0.5">Status: Automated Pipeline Running</div>
                        </div>
                        <Sparkles className="w-5 h-5 text-[#B7F34A]" />
                      </div>
                    </div>
                  )}
                </div>

                {/* 2-3 Short Key Result Bullets in Plain Text */}
                <div className="lg:col-span-6 space-y-3 text-left pl-0 lg:pl-2">
                  <span className="text-xs font-mono font-bold text-[#789C48] uppercase tracking-wider block">
                    KEY VERIFIED OUTCOMES
                  </span>
                  <div className="space-y-2 text-sm text-[#0A0A0B]/90 font-sans">
                    {cs.outcomes.slice(0, 3).map((outcome, oIdx) => (
                      <div key={oIdx} className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-[#789C48]/15 text-[#789C48] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-medium text-[#0A0A0B]">{outcome}</span>
                      </div>
                    ))}
                </div>

              </div>

              </div>

            </div>
          ))}
        </div>

        {/* Real Systems Trust Banner */}
        <div className="mt-16 max-w-4xl mx-auto bg-[#0A0A0B] text-[#F4F1EA] rounded-2xl p-8 border border-[#151618] text-center space-y-3 shadow-xl">
          <div className="inline-flex items-center gap-2 text-[#B7F34A] font-mono text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>REAL SYSTEMS. REAL ENGINEERING.</span>
          </div>
          <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            We don't showcase imaginary concepts. We showcase systems we've actually designed, built, and deployed.
          </h4>
        </div>

      </div>
    </section>
  );
};
