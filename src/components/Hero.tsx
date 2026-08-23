import React from 'react';
import { COMPANY_NAME, COMPANY_LOCATION } from '../data/content';
import { HeroDashboardMockup } from './mockups/HeroDashboardMockup';
import { ArrowRight, ChevronRight, ShieldCheck, Sparkles, Zap, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-gradient">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[250px] bg-cyan-500/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 backdrop-blur-md text-xs text-slate-300 shadow-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="font-semibold text-emerald-400">Practical AI & Custom Software Studio</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-slate-400" />
              {COMPANY_LOCATION} & Global
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
            AI Systems That Automate <br className="hidden sm:inline" />
            <span className="text-emerald-gradient">Your Business Operations.</span>
          </h1>

          {/* Supporting Subheadline */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            <strong className="text-white font-semibold">{COMPANY_NAME}</strong> builds AI-powered automation workflows, computer vision analytics, intelligent chatbots, and custom software applications that reduce repetitive manual work, optimize daily operations, and turn business processes into scalable code.
          </p>

          {/* Call to Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-8 py-4 text-base font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-xl shadow-lg shadow-emerald-500/25 hover:from-emerald-300 hover:to-teal-300 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="#case-studies"
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 rounded-xl backdrop-blur-md transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Our Work</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>

          {/* Quick Value Metrics */}
          <div className="pt-4 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Production-Ready Engineering</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>Custom Workflow Integration</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Business Outcomes Focused</span>
            </div>
          </div>
        </div>

        {/* Hero Technology Product Showcase Preview */}
        <div className="mt-12 lg:mt-16 max-w-5xl mx-auto">
          <div className="p-1 rounded-3xl bg-gradient-to-b from-slate-700/50 via-slate-800/30 to-emerald-500/20 shadow-2xl">
            <HeroDashboardMockup />
          </div>
          <div className="mt-3 text-center text-xs font-mono text-slate-400">
            ↑ Technology & System Interface Preview
          </div>
        </div>
      </div>
    </section>
  );
};
