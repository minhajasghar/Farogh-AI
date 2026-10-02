import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  // Height classes locked at h-8 / h-9 for top-left navbar
  const sizeMap = {
    sm: { heightClass: 'h-7', textClass: 'text-sm', iconSize: 'h-7 w-auto' },
    md: { heightClass: 'h-8.5 sm:h-9', textClass: 'text-base sm:text-lg', iconSize: 'h-8 sm:h-9 w-auto' },
    lg: { heightClass: 'h-10 sm:h-11', textClass: 'text-xl sm:text-2xl', iconSize: 'h-10 sm:h-11 w-auto' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-2.5 bg-transparent select-none shrink-0 ${className}`}>
      {/* 
        Original Farogh AI Geometric Folded FA Glyph SVG/Asset:
        Rendered with transparent background, mix-blend-mode: screen, object-fit: contain,
        and cobalt drop-shadow as requested in requirement 1.
      */}
      <div className={`relative flex items-center justify-center bg-transparent ${currentSize.heightClass}`}>
        <img
          src="/favicon.svg"
          alt="Farogh AI Glyph"
          className={`${currentSize.iconSize} object-contain bg-transparent transition-transform duration-300 hover:scale-105`}
          style={{
            mixBlendMode: 'screen',
            filter: 'drop-shadow(0 0 10px rgba(37, 99, 235, 0.5))',
          }}
        />
      </div>

      {showText && (
        <span className={`font-mono font-extrabold tracking-wider ${currentSize.textClass} text-white flex items-center gap-1.5`}>
          <span>FAROGH</span>
          <span className="text-[#3B82F6] font-mono font-bold tracking-widest">AI</span>
        </span>
      )}
    </div>
  );
};
