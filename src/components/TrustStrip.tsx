import React from 'react';
import { CAPABILITY_STRIP_ITEMS } from '../data/content';
import { CheckCircle2, Cpu } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  return (
    <section className="py-8 bg-slate-950/90 border-y border-slate-800/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold whitespace-nowrap">
            <Cpu className="w-4 h-4 text-emerald-400" />
            <span>Built For Real Business Operations</span>
            <span className="hidden lg:inline text-slate-700">|</span>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-2.5 sm:gap-3">
            {CAPABILITY_STRIP_ITEMS.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 hover:border-emerald-500/50 hover:text-emerald-300 transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                {item}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
