import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

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

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#case-studies' },
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-4 bg-[#0A0A0B]/90 backdrop-blur-xl border-b border-[#151618] shadow-2xl'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center shrink-0" aria-label="Farogh AI — Home">
          <img
            src="/logo-dark.png"
            alt="Farogh AI Logo"
            style={{
              width: '180px',
              height: 'auto',
              display: 'block',
              objectFit: 'contain',
            }}
          />
        </a>

        {/* 5 Top Nav Items */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-8 text-xs font-mono font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#F4F1EA]/80 hover:text-[#B7F34A] transition-colors tracking-wider uppercase font-semibold"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Primary CTA */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <button
            onClick={onOpenConsultation}
            className="px-4 py-2.5 text-xs font-mono font-bold text-[#0A0A0B] bg-[#B7F34A] hover:bg-[#a6e637] rounded-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2 shadow-lg shadow-[#B7F34A]/10 cursor-pointer"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#F4F1EA] hover:text-[#B7F34A]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0A0B] border-b border-[#151618] px-6 pt-4 pb-6 space-y-4 text-left font-mono max-h-[80vh] overflow-y-auto">
          {/* Mobile drawer logo */}
          <div className="pb-3 border-b border-[#151618]">
            <img
              src="/logo-dark.png"
              alt="Farogh AI Logo"
              style={{ width: '160px', height: 'auto', objectFit: 'contain', display: 'block' }}
            />
          </div>
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-[#F4F1EA] hover:text-[#B7F34A] py-1 border-b border-[#151618]/50 font-semibold"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-[#151618]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 text-xs font-bold text-[#0A0A0B] bg-[#B7F34A] rounded-lg flex items-center justify-center gap-2 cursor-pointer"
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
