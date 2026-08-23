import React from 'react';
import { TECH_STACK } from '../data/content';
import { Cpu, Server, Layout } from 'lucide-react';

const categoryIcons: Record<number, React.ElementType> = {
  0: Cpu,
  1: Server,
  2: Layout
};

export const TechStack: React.FC = () => {
  return (
    <section id="tech-stack" className="py-24 bg-slate-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/40 text-xs font-mono text-emerald-400">
            TECHNICAL CAPABILITIES & STACK
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The Stack Behind <span className="text-emerald-gradient">The Solutions.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We use proven, high-performance technology frameworks engineered for reliability, security, and low latency.
          </p>
        </div>

        {/* Categorized Tech Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TECH_STACK.map((group, idx) => {
            const IconComponent = categoryIcons[idx] || Cpu;
            return (
              <div
                key={group.category}
                className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4 text-left"
              >
                <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white font-mono">
                    {group.category}
                  </h3>
                </div>

                <div className="space-y-2">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 flex justify-between items-center text-xs"
                    >
                      <span className="font-bold text-slate-200 font-mono">{item.name}</span>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-900/50">
                        {item.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
