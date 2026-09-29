import React from 'react';
import { WHY_CHOOSE_US } from '../data/content';
import { Target, Code2, Cpu, Sliders } from 'lucide-react';

const PRINCIPLE_ICONS: Record<string, React.ReactNode> = {
  Target: <Target className="w-5 h-5 text-[#3B82F6]" />,
  Code2: <Code2 className="w-5 h-5 text-[#3B82F6]" />,
  Cpu: <Cpu className="w-5 h-5 text-[#3B82F6]" />,
  Sliders: <Sliders className="w-5 h-5 text-[#3B82F6]" />
};

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0A0A0B] text-[#F4F1EA] border-b border-[#151618] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pragmatic Engineering & <span className="text-[#3B82F6]">Our Principles</span>
          </h2>
          <p className="text-[#F4F1EA]/75 text-base sm:text-lg leading-relaxed">
            We partner with companies as a serious technical team focused strictly on problem-solving, clean code, and business ROI.
          </p>
        </div>

        {/* Core Engineering Principles Grid */}
        <div className="space-y-6 max-w-5xl mx-auto">
          <div className="text-center">
            <span className="text-xs font-mono font-bold text-[#2563EB]/80 uppercase tracking-wider block">
              OUR ENGINEERING PRINCIPLES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#151618] p-6 rounded-2xl border border-[#151618] hover:border-[#2563EB]/40 transition-all space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0A0A0B] border border-[#151618] flex items-center justify-center shrink-0">
                    {PRINCIPLE_ICONS[item.iconName] || <Target className="w-5 h-5 text-[#3B82F6]" />}
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-[#F4F1EA]/75 leading-relaxed font-sans pl-13">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
