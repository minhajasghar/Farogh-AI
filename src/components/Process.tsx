import React from 'react';
import { PROCESS_STEPS } from '../data/content';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-slate-900/40 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-xs font-mono text-cyan-400">
            OUR WORKING PROCESS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            From Business Problem to <span className="text-emerald-gradient">Production System.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We follow a disciplined engineering framework to ensure solutions are built on time, integrated cleanly, and deliver measurable operational value.
          </p>
        </div>

        {/* 4 Process Steps Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.number}
              className="glass-panel rounded-2xl p-6 border border-slate-800 flex flex-col justify-between relative group hover:border-emerald-500/40 transition-colors"
            >
              <div className="space-y-4">
                {/* Number Badge */}
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-extrabold font-mono text-emerald-400 opacity-80 group-hover:opacity-100 transition-opacity">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">STAGE {index + 1}</span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {step.description}
                </p>

                {/* Deliverables List */}
                <div className="pt-3 border-t border-slate-800/80 space-y-1.5">
                  <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold block">Key Deliverables</span>
                  {step.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-400">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span className="truncate">{item}</span>
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
