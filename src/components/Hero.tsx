import React from 'react';
import { COMPANY_NAME } from '../data/content';
import { ArrowRight, ChevronRight } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-[#0A0A0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Top Subtle Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151618] border border-[#789C48]/40 text-xs font-mono text-[#B7F34A]">
            <span className="w-2 h-2 rounded-full bg-[#B7F34A] animate-pulse" />
            <span>PRACTICAL AI & CUSTOM SOFTWARE STUDIO</span>
          </div>

          {/* Large Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
            We Build the Systems <br className="hidden sm:inline" />
            <span className="text-[#B7F34A]">Behind Smarter Businesses.</span>
          </h1>

          {/* Slogan / Tagline */}
          <p className="text-xl sm:text-2xl font-mono font-semibold text-[#B7F34A] tracking-wide">
            "Engineering the Light Ahead."
          </p>

          {/* Short Supporting Paragraph */}
          <p className="text-base sm:text-lg lg:text-xl text-[#F4F1EA]/80 max-w-3xl mx-auto leading-relaxed font-normal">
            <strong className="text-white font-semibold">{COMPANY_NAME}</strong> builds AI automation, computer vision, intelligent agents, and custom software that turn repetitive business operations into scalable systems.
          </p>

          {/* CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-8 py-4 text-sm font-mono font-bold text-[#0A0A0B] bg-[#B7F34A] hover:bg-[#a6e637] rounded-xl shadow-lg shadow-[#B7F34A]/15 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#case-studies"
              className="w-full sm:w-auto px-8 py-4 text-sm font-mono font-semibold text-[#F4F1EA] bg-[#151618] hover:bg-[#1f2124] border border-[#151618] rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <span>See What We've Built</span>
              <ChevronRight className="w-4 h-4 text-[#789C48]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
