import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
}) => {
  // Dimensions for crystal clear logo locked in navbar
  const sizeMap = {
    sm: { heightClass: 'h-7', iconSize: 'h-7 w-auto', textClass: 'text-base sm:text-lg' },
    md: { heightClass: 'h-9', iconSize: 'h-9 w-auto', textClass: 'text-xl sm:text-2xl' },
    lg: { heightClass: 'h-11', iconSize: 'h-11 w-auto', textClass: 'text-2xl sm:text-3xl' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3 bg-transparent select-none shrink-0 ${className}`}>
      {/* 
        Pure 100% Transparent Farogh AI Logo Mark (Matches Chrome Tab Bar Vector SVG)
        Zero black box artifacts, crystal clear rendering on all dark & glass backgrounds.
      */}
      <img
        src="/favicon.svg"
        alt="Farogh AI Logo Emblem"
        className={`${currentSize.iconSize} object-contain bg-transparent transition-transform duration-300 hover:scale-105`}
        style={{
          filter: 'drop-shadow(0 0 14px rgba(37, 99, 235, 0.65))',
        }}
      />

      {/* Crisp Brand Typography: FAROGH (White) + AI (Electric Blue) */}
      <div className={`font-mono font-extrabold tracking-wider ${currentSize.textClass} text-white flex items-center gap-1.5`}>
        <span className="text-white">FAROGH</span>
        <span className="text-[#3B82F6] font-mono font-bold tracking-widest">AI</span>
      </div>
    </div>
  );
};
