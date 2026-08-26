import React from 'react';
import { PROCESS_STEPS } from '../data/content';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-[#F4F1EA] text-[#0A0A0B] border-b border-[#0A0A0B]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A0A0B] tracking-tight">
            How We <span className="text-[#789C48]">Work</span>
          </h2>
          <p className="text-[#0A0A0B]/70 text-base sm:text-lg">
            A structured engineering journey built for clarity, speed, and long-term production reliability.
          </p>
        </div>

        {/* Minimal Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto text-left">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="bg-white p-8 rounded-3xl border border-[#0A0A0B]/10 space-y-4 shadow-lg shadow-[#0A0A0B]/5 hover:border-[#789C48]/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold text-[#789C48] bg-[#F4F1EA] px-3 py-1 rounded-md border border-[#0A0A0B]/10 inline-block">
                  STEP {step.number}
                </span>

                <h3 className="text-xl font-bold text-[#0A0A0B] tracking-tight">
                  {step.title}
                </h3>

                <p className="text-sm text-[#0A0A0B]/75 leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#0A0A0B]/10 space-y-1 text-xs font-mono text-[#789C48]">
                {step.deliverables.map((deliv, dIdx) => (
                  <div key={dIdx}>• {deliv}</div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
