import React from 'react';
import { COMPANY_NAME } from '../data/content';
import { ArrowRight, ChevronRight, Zap } from 'lucide-react';

interface FinalCTAProps {
  onOpenConsultation: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute inset-0 bg-radial-gradient opacity-80 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 lg:p-16 text-center space-y-6 border border-emerald-500/30 shadow-2xl shadow-emerald-950/30">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-700/60 text-xs font-mono text-emerald-300">
            <Zap className="w-3.5 h-3.5" />
            <span>READY TO AUTOMATE YOUR OPERATIONS?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Your Next Business System <br className="hidden sm:inline" />
            <span className="text-emerald-gradient">Could Be Automated.</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From intelligent camera analytics to WhatsApp AI customer service and custom software portals, <strong className="text-white font-semibold">{COMPANY_NAME}</strong> builds production systems engineered for how your business actually works.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-8 py-4 text-base font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-xl shadow-lg shadow-emerald-500/25 hover:from-emerald-300 hover:to-teal-300 transition-all flex items-center justify-center gap-2"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="#case-studies"
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-slate-200 bg-slate-900 border border-slate-700 hover:bg-slate-800 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Our Work</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
