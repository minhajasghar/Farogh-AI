import React from 'react';
import { WHY_CHOOSE_US, COMPANY_NAME } from '../data/content';
import { Target, Code2, Sliders, Zap, ShieldCheck, TrendingUp } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Target,
  Code2,
  Sliders,
  Zap,
  ShieldCheck,
  TrendingUp
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-slate-950 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/40 text-xs font-mono text-emerald-400">
            WHY WORK WITH US
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Businesses Trust <span className="text-emerald-gradient">{COMPANY_NAME}</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We avoid empty buzzwords, overhyped promises, and freelancer shortcuts. Here is how we partner with companies as a serious technology team.
          </p>
        </div>

        {/* 6 Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComponent = iconMap[item.iconName] || ShieldCheck;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover rounded-2xl p-6 space-y-4 border border-slate-800 text-left"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400">
                  <IconComponent className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
