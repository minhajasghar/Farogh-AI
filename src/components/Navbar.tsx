import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
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

  // Standardized 5 Nav Links corresponding 1:1 with site sections
  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-md bg-[#050811]/80 border-b border-white/5 ${
        isScrolled ? 'py-3 shadow-2xl shadow-blue-950/20' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Real Official Farogh AI Brand Logo in Top-Left Navbar */}
        <a href="#" className="flex items-center shrink-0" aria-label="Farogh AI — Home">
          <Logo size="md" />
        </a>

        {/* Top Nav Links: Services | Work | About | Process | Contact */}
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
        <div className="hidden lg:flex items-center shrink-0">
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
          <div className="pb-3 border-b border-white/10">
            <Logo size="sm" />
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
