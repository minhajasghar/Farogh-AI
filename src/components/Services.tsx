import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/content';
import type { ServiceItem } from '../data/content';
import { Cpu, Camera, MessageSquare, Bot, Layout, BrainCircuit, ArrowRight, Check, X, Code2 } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Cpu,
  Camera,
  MessageSquare,
  Bot,
  Layout,
  BrainCircuit
};

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/40 text-xs font-mono text-emerald-400">
            WHAT WE BUILD
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technology That Solves <span className="text-emerald-gradient">Business Problems.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            We don't ship generic code or surface-level wrappers. We engineer custom AI systems, computer vision models, autonomous agents, and full-stack software tailored around your exact operational workflows.
          </p>
        </div>

        {/* 6 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service) => {
            const Icon = iconMap[service.iconName] || Cpu;
            return (
              <div
                key={service.id}
                className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between group cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/50 group-hover:bg-emerald-950/30 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title & Short Description */}
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Top Capabilities List */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                    {service.capabilities.slice(0, 3).map((cap, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Tech Badges & CTA */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {service.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-[10px] font-mono bg-slate-900 border border-slate-800 text-slate-400 px-2 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Details <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-700/80 rounded-2xl max-w-2xl w-full p-6 md:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800/60"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400">
                {React.createElement(iconMap[selectedService.iconName] || Cpu, { className: 'w-5 h-5' })}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{selectedService.title}</h3>
                <span className="text-xs font-mono text-emerald-400">PRODUCTION CAPABILITY SPECIFICATION</span>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              {selectedService.fullDesc}
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">Core Capabilities</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedService.capabilities.map((cap, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-200 bg-slate-950/60 p-2.5 rounded border border-slate-800">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">Real-World Use Cases</h4>
              <div className="space-y-1.5 text-xs text-slate-300">
                {selectedService.useCases.map((uc, i) => (
                  <div key={i} className="bg-slate-950 p-2.5 rounded border border-slate-800 flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>{uc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-800">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">Technology Stack</h4>
              <div className="flex flex-wrap gap-2">
                {selectedService.technologies.map((tech) => (
                  <span key={tech} className="text-xs font-mono bg-slate-950 border border-slate-700 text-emerald-300 px-3 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setSelectedService(null)}
                className="px-6 py-2.5 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors"
              >
                Close Technical Overview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
