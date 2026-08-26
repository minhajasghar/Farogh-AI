import React from 'react';
import { TECH_STACK_LAYERS } from '../data/content';
import { Cpu, Database, Layout, Workflow } from 'lucide-react';

const LAYER_ICONS: Record<string, React.ReactNode> = {
  INTELLIGENCE: <Cpu className="w-5 h-5 text-[#B7F34A]" />,
  SYSTEMS: <Database className="w-5 h-5 text-[#B7F34A]" />,
  EXPERIENCE: <Layout className="w-5 h-5 text-[#B7F34A]" />,
  INTEGRATIONS: <Workflow className="w-5 h-5 text-[#B7F34A]" />
};

export const TechStack: React.FC = () => {
  return (
    <section id="tech-stack" className="py-24 bg-[#0A0A0B] text-[#F4F1EA] border-b border-[#151618] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technology is the foundation. <br className="hidden sm:inline" />
            <span className="text-[#B7F34A]">Business outcomes are the goal.</span>
          </h2>
          <p className="text-[#F4F1EA]/70 text-base sm:text-lg">
            We choose every layer in our technology stack for performance, security, and long-term enterprise scalability.
          </p>
        </div>

        {/* 4 Ecosystem Layers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {TECH_STACK_LAYERS.map((layer, idx) => (
            <div
              key={layer.layerName}
              className="bg-[#151618] p-6 rounded-2xl border border-[#151618] hover:border-[#B7F34A]/40 transition-all text-left space-y-5"
            >
              <div className="flex items-center justify-between border-b border-[#0A0A0B] pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#0A0A0B] shrink-0">
                    {LAYER_ICONS[layer.layerName]}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#789C48] block uppercase">LAYER 0{idx + 1}</span>
                    <h3 className="text-base font-bold text-white tracking-tight font-mono">
                      {layer.layerName}
                    </h3>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-[#B7F34A] bg-[#0A0A0B] px-2.5 py-0.5 rounded border border-[#789C48]/40">
                  {layer.layerTag}
                </span>
              </div>

              {/* Items */}
              <div className="grid grid-cols-2 gap-2.5">
                {layer.items.map((item) => (
                  <div
                    key={item.name}
                    className="bg-[#0A0A0B] p-3 rounded-xl border border-[#151618] space-y-0.5"
                  >
                    <div className="text-xs font-bold text-white">{item.name}</div>
                    <div className="text-[10px] font-mono text-[#789C48]">{item.tag}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
