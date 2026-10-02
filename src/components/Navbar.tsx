import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Mail } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Streamlined Nav Links per Requirement 2
  const navLinks = [
    { name: 'Solutions', href: '#services' },
    { name: 'Work', href: '#case-studies' },
    { name: 'Capabilities', href: '#about' },
    { name: 'Process', href: '#process' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#050811]/60 border-b border-white/5 transition-all duration-300">
      {/* Top Utility Micro-Bar for Direct Email & Quick Contact */}
      <div className="bg-[#050811]/90 border-b border-white/5 py-1.5 px-4 sm:px-6 lg:px-8 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>PRACTICAL AI & SOFTWARE ENGINEERING STUDIO</span>
          </div>

          <div className="flex items-center gap-4 ml-auto sm:ml-0">
            <a
              href="mailto:hello.faroghai@gmail.com"
              className="text-xs text-slate-400 hover:text-blue-400 flex items-center gap-1.5 transition-colors font-mono"
            >
              <Mail className="w-3.5 h-3.5 text-blue-500" />
              <span>hello.faroghai@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Brand Logo Locked in Top-Left Navbar (h-8/h-9) */}
        <a href="#" className="flex items-center shrink-0" aria-label="Farogh AI — Home">
          <Logo size="md" />
        </a>

        {/* 4 Streamlined Nav Links: Solutions | Work | Capabilities | Process */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-8 text-xs font-mono font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-blue-400 transition-colors tracking-wider uppercase font-semibold"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Primary CTA with Subtle Cobalt Glow */}
        <div className="hidden lg:flex items-center shrink-0 gap-4">
          <button
            onClick={onOpenConsultation}
            className="px-4.5 py-2.5 text-xs font-mono font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2 shadow-lg shadow-blue-600/25 cursor-pointer"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-200 hover:text-blue-400"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#050811] border-b border-white/10 px-6 pt-4 pb-6 space-y-4 text-left font-mono">
          <div className="pb-3 border-b border-white/10 flex items-center justify-between">
            <Logo size="sm" />
            <a
              href="mailto:hello.faroghai@gmail.com"
              className="text-xs text-slate-400 hover:text-blue-400 flex items-center gap-1 font-mono"
            >
              <Mail className="w-3.5 h-3.5 text-blue-500" />
              <span>Email Us</span>
            </a>
          </div>

          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-slate-200 hover:text-blue-400 py-1 border-b border-white/5 font-semibold"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 text-xs font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-600/25"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
