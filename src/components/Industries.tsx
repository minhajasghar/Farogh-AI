import React, { useState } from 'react';
import { INDUSTRIES_DATA } from '../data/content';
import type { IndustryItem } from '../data/content';
import { Utensils, Stethoscope, ShoppingBag, Building2, CheckCircle2, ArrowRight } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Utensils,
  Stethoscope,
  ShoppingBag,
  Building2
};

export const Industries: React.FC = () => {
  const [activeIndustryId, setActiveIndustryId] = useState<string>(INDUSTRIES_DATA[0].id);

  const activeIndustry = INDUSTRIES_DATA.find((ind) => ind.id === activeIndustryId) || INDUSTRIES_DATA[0];
  const IconComponent = iconMap[activeIndustry.iconName] || Building2;

  return (
    <section id="industries" className="py-24 bg-slate-900/60 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-xs font-mono text-cyan-400">
            INDUSTRIES WE SERVE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tailored AI & Software Solutions for <span className="text-emerald-gradient">Your Industry.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We understand the specific operational demands, customer communication challenges, and workflow bottlenecks of modern business sectors.
          </p>
        </div>

        {/* Industry Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {INDUSTRIES_DATA.map((ind) => {
            const Icon = iconMap[ind.iconName] || Building2;
            const isActive = ind.id === activeIndustryId;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveIndustryId(ind.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-lg shadow-emerald-500/20 scale-105'
                    : 'bg-slate-950 border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Industry Detail Card */}
        <div className="glass-panel rounded-2xl p-6 md:p-10 border border-slate-700/70 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-950 border border-slate-800 text-xs font-mono text-emerald-400">
              <IconComponent className="w-4 h-4" />
              <span>INDUSTRY SOLUTION OVERVIEW</span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {activeIndustry.name}
              </h3>
              <p className="text-sm font-mono text-cyan-400 mt-1">
                {activeIndustry.tagline}
              </p>
            </div>

            <p className="text-slate-300 text-base leading-relaxed">
              {activeIndustry.description}
            </p>

            {/* Feature List */}
            <div className="space-y-2.5 pt-2">
              <span className="text-xs font-mono text-slate-400 uppercase font-semibold block">Key Operational Applications</span>
              {activeIndustry.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (5 cols) Outcome Banner */}
          <div className="lg:col-span-5 bg-slate-950 rounded-xl p-6 border border-slate-800 space-y-4 text-left flex flex-col justify-between h-full">
            <div>
              <div className="text-xs font-mono text-slate-400 uppercase font-semibold border-b border-slate-800 pb-2">
                Operational Outcome
              </div>
              <p className="mt-4 text-slate-200 text-sm leading-relaxed font-medium">
                "{activeIndustry.exampleOutcome}"
              </p>
            </div>

            <div className="pt-6 border-t border-slate-800 space-y-3">
              <div className="text-xs text-slate-400">
                Have a business in this space? We build tailored systems for your exact workflow.
              </div>
              <a
                href="#contact"
                className="w-full py-2.5 px-4 rounded-lg bg-emerald-950 border border-emerald-800 hover:bg-emerald-900 text-emerald-300 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <span>Discuss {activeIndustry.name} Solution</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
