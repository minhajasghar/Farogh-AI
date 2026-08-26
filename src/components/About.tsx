import React, { useState } from 'react';
import { WHY_CHOOSE_US, FOUNDERS_DATA } from '../data/content';
import { Target, Code2, Cpu, Sliders, UserCheck, X, ChevronDown, ExternalLink } from 'lucide-react';
import { LinkedInIcon } from './SocialIcons';

const PRINCIPLE_ICONS: Record<string, React.ReactNode> = {
  Target: <Target className="w-5 h-5 text-[#B7F34A]" />,
  Code2: <Code2 className="w-5 h-5 text-[#B7F34A]" />,
  Cpu: <Cpu className="w-5 h-5 text-[#B7F34A]" />,
  Sliders: <Sliders className="w-5 h-5 text-[#B7F34A]" />
};

export const About: React.FC = () => {
  const [selectedFounderId, setSelectedFounderId] = useState<string | null>(null);

  const selectedFounder = FOUNDERS_DATA.find((f) => f.id === selectedFounderId) || null;

  const handleCardClick = (id: string) => {
    setSelectedFounderId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="about" className="py-24 bg-[#0A0A0B] text-[#F4F1EA] border-b border-[#151618] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pragmatic Engineering & <span className="text-[#B7F34A]">Founding Team</span>
          </h2>
          <p className="text-[#F4F1EA]/75 text-base sm:text-lg leading-relaxed">
            We partner with companies as a serious technical team focused strictly on problem-solving, clean code, and business ROI.
          </p>
        </div>

        {/* 1. Founding Partners Showcase (FIRST) */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold text-[#B7F34A] uppercase tracking-wider block">
              THE FOUNDERS
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Five Partners. Full-Stack Execution.
            </h3>
          </div>

          {/* 5 Equal Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {FOUNDERS_DATA.map((founder, idx) => {
              const isSelected = selectedFounderId === founder.id;

              return (
                <button
                  key={founder.id}
                  onClick={() => handleCardClick(founder.id)}
                  className={`bg-[#151618] rounded-2xl p-6 border transition-all duration-300 flex flex-col items-center justify-between text-center space-y-5 cursor-pointer group shadow-lg min-h-[310px] ${
                    isSelected
                      ? 'border-[#B7F34A] bg-[#1a1c20] ring-1 ring-[#B7F34A]/50 shadow-[#B7F34A]/10'
                      : 'border-[#151618] hover:border-[#B7F34A]/40 hover:bg-[#18191c]'
                  }`}
                >
                  {/* Round Photo Container */}
                  <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-[#0A0A0B] border-2 border-[#151618] group-hover:border-[#B7F34A]/50 transition-all overflow-hidden flex items-center justify-center shrink-0 mx-auto shadow-md p-0">
                    {founder.image ? (
                      <img
                        src={founder.image}
                        alt={founder.placeholderName}
                        className={`w-full h-full rounded-full object-cover transition-transform duration-300 ${
                          founder.id === 'founder-1'
                            ? 'object-[center_15%] scale-165 group-hover:scale-170'
                            : 'object-center scale-115 group-hover:scale-120'
                        }`}
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-center space-y-1">
                        <div className="w-12 h-12 rounded-full bg-[#151618] flex items-center justify-center text-[#B7F34A] group-hover:scale-110 transition-transform">
                          <UserCheck className="w-6 h-6 text-[#B7F34A]" />
                        </div>
                        <span className="text-[10px] font-mono text-[#789C48] uppercase font-bold">
                          FOUNDER 0{idx + 1}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Name & Role Only */}
                  <div className="space-y-1 w-full">
                    <h3 className="text-base font-bold text-white tracking-tight group-hover:text-[#B7F34A] transition-colors truncate">
                      {founder.placeholderName}
                    </h3>
                    <p className="text-xs font-mono text-[#F4F1EA]/60 truncate">
                      {founder.role}
                    </p>
                  </div>

                  {/* Toggle indicator */}
                  <div className={`text-[11px] font-mono flex items-center justify-center gap-1 transition-colors ${
                    isSelected ? 'text-[#B7F34A] font-bold' : 'text-[#789C48] group-hover:text-[#B7F34A]'
                  }`}>
                    <span>{isSelected ? 'Close Bio' : 'View Bio'}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isSelected ? 'rotate-180' : ''}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Smooth In-Page Expanding Panel */}
          {selectedFounder && (
            <div className="max-w-4xl mx-auto bg-[#151618] border border-[#B7F34A]/40 rounded-3xl p-6 sm:p-8 text-left space-y-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300 relative">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedFounderId(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#0A0A0B] text-[#F4F1EA]/70 hover:text-[#B7F34A] border border-[#151618] transition-colors cursor-pointer"
                aria-label="Close panel"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header Identity */}
              <div className="flex items-center gap-4 border-b border-[#0A0A0B] pb-4">
                <div className="w-18 h-18 rounded-full bg-[#0A0A0B] border-2 border-[#789C48]/50 overflow-hidden shrink-0 flex items-center justify-center p-0">
                  {selectedFounder.image ? (
                    <img
                      src={selectedFounder.image}
                      alt={selectedFounder.placeholderName}
                      className={`w-full h-full rounded-full object-cover ${
                        selectedFounder.id === 'founder-1'
                          ? 'object-[center_15%] scale-165'
                          : 'object-center scale-115'
                      }`}
                    />
                  ) : (
                    <UserCheck className="w-7 h-7 text-[#B7F34A]" />
                  )}
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#789C48] uppercase tracking-wider block font-bold">
                    FOUNDING PARTNER
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {selectedFounder.placeholderName}
                  </h3>
                  <p className="text-xs font-mono text-[#B7F34A]">
                    {selectedFounder.role}
                  </p>
                </div>
              </div>

              {/* Bio Section */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-[#789C48] uppercase font-bold block">
                  BIOGRAPHY & RESPONSIBILITIES
                </span>
                <p className="bg-[#0A0A0B] p-4 rounded-xl border border-[#151618] text-sm text-[#F4F1EA]/85 leading-relaxed font-sans">
                  {selectedFounder.bio}
                </p>
              </div>

              {/* Specialty Tags & Direct Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-[#789C48] uppercase font-bold block">
                    SPECIALTIES & EXPERTISE
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedFounder.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="text-xs font-mono bg-[#0A0A0B] border border-[#151618] text-[#B7F34A] px-3 py-1 rounded-lg"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-[#789C48] uppercase font-bold block">
                    CONNECT DIRECTLY
                  </span>
                  <div className="flex items-center gap-3 text-xs font-mono">
                    <a
                      href={selectedFounder.linkedin.startsWith('http') ? selectedFounder.linkedin : `https://${selectedFounder.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 p-3 rounded-xl bg-[#0A0A0B] border border-[#151618] flex items-center justify-center gap-2 text-[#F4F1EA] hover:text-[#B7F34A] hover:border-[#B7F34A]/30 transition-all cursor-pointer"
                    >
                      <LinkedInIcon className="w-4 h-4 text-[#789C48]" />
                      <span>LinkedIn Profile</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* 2. Why Us / Core Engineering Principles Grid (SECOND) */}
        <div className="space-y-6 max-w-5xl mx-auto pt-10 border-t border-[#151618]">
          <div className="text-center">
            <span className="text-xs font-mono font-bold text-[#789C48] uppercase tracking-wider block">
              OUR ENGINEERING PRINCIPLES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#151618] p-6 rounded-2xl border border-[#151618] hover:border-[#B7F34A]/40 transition-all space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0A0A0B] border border-[#151618] flex items-center justify-center shrink-0">
                    {PRINCIPLE_ICONS[item.iconName] || <Target className="w-5 h-5 text-[#B7F34A]" />}
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
