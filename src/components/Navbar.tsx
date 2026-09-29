import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

/**
 * Logo rendering note:
 * logo-dark.png is a 6250×6250 square canvas. The actual logo artwork
 * (symbol + FAROGH AI wordmark) occupies roughly:
 *   x: 5% → 80%  (i.e. pixels 312–5000 of the 6250px canvas)
 *   y: 35% → 64%  (i.e. pixels 2187–4000 of the 6250px canvas)
 *
 * Strategy: render the <img> at 155×155px (scaling the canvas down 40×),
 * then use a wrapper with overflow:hidden + negative margin-top to crop
 * away the empty whitespace above/around the artwork.
 *
 *   At 155px canvas:  artwork starts at y = 35% × 155 ≈ 54px from top
 *                     artwork ends   at y = 64% × 155 ≈ 99px  → height ≈ 45px
 *                     artwork starts at x =  5% × 155 ≈  8px from left
 *                     artwork ends   at x = 80% × 155 ≈ 124px → width  ≈ 116px
 */
const LogoImg: React.FC<{ wrapWidth?: number; wrapHeight?: number; imgSize?: number; mtop?: number; mleft?: number; alt?: string }> = ({
  wrapWidth = 116,
  wrapHeight = 44,
  imgSize = 155,
  mtop = -54,
  mleft = -8,
  alt = 'Farogh AI Logo',
}) => (
  <div
    style={{
      width: `${wrapWidth}px`,
      height: `${wrapHeight}px`,
      overflow: 'hidden',
      flexShrink: 0,
      display: 'block',
    }}
  >
    <img
      src="/logo-dark.png"
      alt={alt}
      style={{
        width: `${imgSize}px`,
        height: `${imgSize}px`,
        display: 'block',
        marginTop: `${mtop}px`,
        marginLeft: `${mleft}px`,
        objectFit: 'fill',
      }}
    />
  </div>
);

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

        {/* ─── Brand Logo ─── */}
        <a href="#" className="flex items-center shrink-0" aria-label="Farogh AI — Home">
          <LogoImg />
        </a>

        {/* ─── 5 Top Nav Links ─── */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-8 text-xs font-mono font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#F4F1EA]/80 hover:text-[#3B82F6] transition-colors tracking-wider uppercase font-semibold"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* ─── Primary CTA ─── */}
        <div className="hidden lg:flex items-center shrink-0">
          <button
            onClick={onOpenConsultation}
            className="px-4 py-2.5 text-xs font-mono font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2 shadow-lg shadow-[#2563EB]/20 cursor-pointer"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* ─── Mobile Toggle ─── */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#F4F1EA] hover:text-[#3B82F6]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* ─── Mobile Drawer ─── */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0A0B] border-b border-[#151618] px-6 pt-4 pb-6 space-y-4 text-left font-mono">
          {/* Mobile logo */}
          <div className="pb-3 border-b border-[#151618]">
            <LogoImg wrapWidth={100} wrapHeight={38} imgSize={135} mtop={-47} mleft={-7} />
          </div>

          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-[#F4F1EA] hover:text-[#3B82F6] py-1 border-b border-[#151618]/50 font-semibold"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-[#151618]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 text-xs font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-lg flex items-center justify-center gap-2 cursor-pointer"
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
