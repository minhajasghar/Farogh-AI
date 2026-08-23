import React, { useState } from 'react';
import { CASE_STUDIES_DATA } from '../data/content';
import type { CaseStudyItem } from '../data/content';
import { RestaurantMockup } from './mockups/RestaurantMockup';
import { ClinicMockup } from './mockups/ClinicMockup';
import { ArrowRight, CheckCircle, X, ShieldAlert, Cpu } from 'lucide-react';

export const CaseStudies: React.FC = () => {
  const [activeCaseModal, setActiveCaseModal] = useState<CaseStudyItem | null>(null);

  const renderMockup = (type: string) => {
    switch (type) {
      case 'restaurant':
        return <RestaurantMockup />;
      case 'clinic':
        return <ClinicMockup />;
      default:
        return <RestaurantMockup />;
    }
  };

  return (
    <section id="case-studies" className="py-24 bg-slate-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/40 text-xs font-mono text-emerald-400">
            PROOF OF WORK & CASE STUDIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Real Systems Built For <span className="text-emerald-gradient">Real Business Problems.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We focus on software architectures and custom AI systems engineered around specific operational challenges.
          </p>
        </div>

        {/* Case Studies Vertical Showcase Cards */}
        <div className="space-y-12">
          {CASE_STUDIES_DATA.map((item, index) => (
            <div
              key={item.id}
              className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-700/70 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-panel-hover"
            >
              {/* Left Column: Information (6 cols) */}
              <div className="lg:col-span-6 space-y-5 text-left order-2 lg:order-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950 px-3 py-1 rounded border border-emerald-800">
                    CASE STUDY 0{index + 1}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {item.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-300 mt-2">
                    {item.subtitle}
                  </p>
                </div>

                {/* Problem vs Solution Brief */}
                <div className="space-y-3 pt-2">
                  <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800 text-xs space-y-1">
                    <div className="font-semibold text-red-400 flex items-center gap-1.5">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      Business Problem:
                    </div>
                    <p className="text-slate-300 leading-relaxed">{item.problem}</p>
                  </div>

                  <div className="bg-slate-900/90 p-3.5 rounded-xl border border-emerald-900/50 text-xs space-y-1">
                    <div className="font-semibold text-emerald-400 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5" />
                      Engineering Solution:
                    </div>
                    <p className="text-slate-300 leading-relaxed">{item.solution}</p>
                  </div>
                </div>

                {/* Capabilities / Outcomes */}
                <div className="space-y-1.5 pt-2">
                  <span className="text-[11px] font-mono text-slate-400 uppercase font-semibold">Business Capabilities:</span>
                  {item.outcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags & CTA Button */}
                <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800">
                  <div className="flex flex-wrap gap-1.5">
                    {item.technologies.map((tech) => (
                      <span key={tech} className="text-[10px] font-mono bg-slate-950 border border-slate-800 text-slate-300 px-2.5 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveCaseModal(item)}
                    className="px-4 py-2 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Column: Live Mockup Showcase (6 cols) */}
              <div className="lg:col-span-6 order-1 lg:order-2">
                <div className="p-1 rounded-2xl bg-gradient-to-b from-slate-700/40 via-slate-800/20 to-emerald-500/10 shadow-2xl">
                  {renderMockup(item.screenshotType)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {activeCaseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-3xl w-full p-6 md:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto text-left">
            <button
              onClick={() => setActiveCaseModal(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="border-b border-slate-800 pb-4 space-y-2">
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded border border-emerald-800">
                {activeCaseModal.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{activeCaseModal.title}</h3>
              <p className="text-slate-300 text-sm">{activeCaseModal.subtitle}</p>
            </div>

            <div className="p-2 rounded-xl bg-slate-950 border border-slate-800">
              {renderMockup(activeCaseModal.screenshotType)}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <h4 className="font-semibold text-red-400">The Problem</h4>
                <p className="text-slate-300 leading-relaxed">{activeCaseModal.problem}</p>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <h4 className="font-semibold text-emerald-400">The Solution</h4>
                <p className="text-slate-300 leading-relaxed">{activeCaseModal.solution}</p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono text-slate-400 uppercase font-semibold">Technologies Applied</h4>
              <div className="flex flex-wrap gap-2">
                {activeCaseModal.technologies.map((t) => (
                  <span key={t} className="text-xs font-mono bg-slate-950 border border-slate-700 text-emerald-300 px-3 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setActiveCaseModal(null)}
                className="px-6 py-2.5 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
