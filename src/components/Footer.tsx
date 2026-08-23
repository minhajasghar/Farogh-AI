import React from 'react';
import { COMPANY_NAME, COMPANY_LOCATION, PLACEHOLDERS } from '../data/content';
import { Cpu, MapPin, Mail, MessageSquare, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Company Brand (2 cols) */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-slate-950 font-bold">
                <Cpu className="w-4 h-4 text-slate-950" />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                {COMPANY_NAME}
              </span>
            </a>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              AI automation, computer vision, AI agents, and custom software solutions for modern businesses locally and internationally.
            </p>

            <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Based in {COMPANY_LOCATION} • Serving Global Clients</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 text-left">
            <h4 className="font-bold text-white font-mono uppercase tracking-wider text-[11px]">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">Services & Capabilities</a>
              </li>
              <li>
                <a href="#industries" className="hover:text-emerald-400 transition-colors">Industries We Serve</a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-emerald-400 transition-colors">Case Studies & Work</a>
              </li>
              <li>
                <a href="#process" className="hover:text-emerald-400 transition-colors">How We Work</a>
              </li>
            </ul>
          </div>

          {/* Company Details */}
          <div className="space-y-3 text-left">
            <h4 className="font-bold text-white font-mono uppercase tracking-wider text-[11px]">
              Company & Team
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#why-us" className="hover:text-emerald-400 transition-colors">Why Choose {COMPANY_NAME}</a>
              </li>
              <li>
                <a href="#founders" className="hover:text-emerald-400 transition-colors">About Us & Founders</a>
              </li>
              <li>
                <a href="#tech-stack" className="hover:text-emerald-400 transition-colors">Technology Stack</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors">Book Consultation</a>
              </li>
            </ul>
          </div>

          {/* Contact Placeholders */}
          <div className="space-y-3 text-left">
            <h4 className="font-bold text-white font-mono uppercase tracking-wider text-[11px]">
              Direct Placeholders
            </h4>
            <div className="space-y-2 text-[11px] font-mono">
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate">{PLACEHOLDERS.email}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate">{PLACEHOLDERS.whatsapp}</span>
              </div>
              <div className="pt-2 flex items-center gap-3 text-slate-400">
                <span className="hover:text-emerald-400 cursor-pointer">LinkedIn ({PLACEHOLDERS.linkedin})</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <span className="hover:text-emerald-400 cursor-pointer">GitHub ({PLACEHOLDERS.github})</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-mono text-slate-500">
          <div>
            © {currentYear} {COMPANY_NAME}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>B2B AI & Software Engineering Studio</span>
            <span>•</span>
            <span>Pakistan</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
