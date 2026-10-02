import React from 'react';
import { COMPANY_NAME, COMPANY_LOCATION, PLACEHOLDERS } from '../data/content';
import { MapPin, Mail } from 'lucide-react';
import { LinkedInIcon, FacebookIcon } from './SocialIcons';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0B] text-[#F4F1EA]/70 border-t border-[#151618] text-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Brand */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <a href="#" aria-label="Farogh AI — Home" className="inline-block">
              <Logo size="md" />
            </a>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm font-normal">
              AI automation, computer vision, AI agents, and custom software for modern businesses.
            </p>

            <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono">
              <MapPin className="w-3.5 h-3.5 text-blue-500" />
              <span>{COMPANY_LOCATION} • Serving Global Clients</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-3 text-left">
            <h4 className="font-bold text-white font-mono uppercase tracking-wider text-[11px]">Navigation</h4>
            <ul className="space-y-2 font-mono">
              {[
                { name: 'Services', href: '#services' },
                { name: 'Work', href: '#work' },
                { name: 'About', href: '#about' },
                { name: 'Process', href: '#process' },
                { name: 'Contact', href: '#contact' }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-slate-300 hover:text-blue-400 transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Contact Channels */}
          <div className="space-y-3 text-left">
            <h4 className="font-bold text-white font-mono uppercase tracking-wider text-[11px]">Official Channels</h4>
            <div className="space-y-2.5 text-[11px] font-mono">
              <a
                href={`mailto:${PLACEHOLDERS.email}`}
                className="flex items-center gap-2 text-slate-200 hover:text-blue-400 transition-colors truncate block"
              >
                <Mail className="w-3.5 h-3.5 text-blue-500 shrink-0 inline" />
                <span className="truncate">{PLACEHOLDERS.email}</span>
              </a>

              <a
                href={PLACEHOLDERS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-200 hover:text-blue-400 transition-colors truncate block"
              >
                <FacebookIcon className="w-3.5 h-3.5 text-blue-500 shrink-0 inline" />
                <span className="truncate">facebook.com/faroghai</span>
              </a>

              <a
                href={PLACEHOLDERS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-200 hover:text-blue-400 transition-colors truncate block"
              >
                <LinkedInIcon className="w-3.5 h-3.5 text-blue-500 shrink-0 inline" />
                <span className="truncate">linkedin.com/company/faroghai</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#151618] flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-mono text-slate-500">
          <div>© {currentYear} {COMPANY_NAME}. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span>Practical AI & Software Engineering Studio</span>
            <span>•</span>
            <span>{COMPANY_LOCATION}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
