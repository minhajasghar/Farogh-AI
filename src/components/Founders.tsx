import React from 'react';
import { FOUNDERS_DATA, COMPANY_NAME } from '../data/content';
import { UserCheck, Code, Cpu, Terminal, CheckCircle2 } from 'lucide-react';

export const Founders: React.FC = () => {
  return (
    <section id="founders" className="py-24 bg-slate-900/60 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-xs font-mono text-cyan-400">
            ENGINEERING LEADERSHIP
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Built by Engineers <span className="text-emerald-gradient">Who Build.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            <strong className="text-white">{COMPANY_NAME}</strong> was founded by technical professionals with active backgrounds spanning artificial intelligence, machine learning, computer vision, and full-stack software development.
          </p>
        </div>

        {/* Founder Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {FOUNDERS_DATA.map((founder, idx) => (
            <div
              key={founder.id}
              className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-700/80 space-y-6 text-left hover:border-emerald-500/40 transition-colors"
            >
              {/* Photo & Identity Header */}
              <div className="flex items-center gap-4">
                {/* Photo Placeholder */}
                <div className="relative w-16 h-16 rounded-xl bg-slate-900 border border-slate-700 flex flex-col items-center justify-center text-center p-1 shrink-0 overflow-hidden shadow-inner">
                  <UserCheck className="w-6 h-6 text-emerald-400" />
                  <span className="text-[8px] font-mono text-slate-400 uppercase mt-1">FOUNDER {idx + 1} PHOTO</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {founder.placeholderName}
                  </h3>
                  <p className="text-xs font-mono text-emerald-400">
                    {founder.role}
                  </p>
                  <span className="text-[11px] text-slate-400">
                    {COMPANY_NAME} Co-Founder
                  </span>
                </div>
              </div>

              {/* Technical Bio */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                {founder.bio}
              </p>

              {/* Core Skill Focus */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold block">Core Technical Focus</span>
                <div className="flex flex-wrap gap-1.5">
                  {founder.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-mono bg-slate-900 border border-slate-800 text-slate-300 px-2.5 py-1 rounded"
                    >
                      {skill}
                    </span>
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
