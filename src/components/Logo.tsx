import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
}) => {
  const sizeMap = {
    sm: { iconWidth: 26, iconHeight: 26, textClass: 'text-base sm:text-lg' },
    md: { iconWidth: 34, iconHeight: 34, textClass: 'text-xl sm:text-2xl' },
    lg: { iconWidth: 44, iconHeight: 44, textClass: 'text-2xl sm:text-3xl' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3 bg-transparent select-none shrink-0 ${className}`}>
      {/* 
        Exact Farogh AI Geometric Monogram Emblem (FA Glyph)
        Slanted "F" in crisp white + diagonal "A" leg in cobalt blue (#2563EB)
        100% Pure Transparent SVG - Zero black box artifacts!
      */}
      <svg
        width={currentSize.iconWidth}
        height={currentSize.iconHeight}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
        style={{
          filter: 'drop-shadow(0 0 12px rgba(37, 99, 235, 0.65))',
        }}
      >
        <defs>
          <linearGradient id="fa-white-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E2E8F0" />
          </linearGradient>
          <linearGradient id="fa-blue-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
        </defs>

        {/* Slanted Geometric 'F' Body */}
        <path
          d="M 4 35 L 10 5 H 34 L 27 13 H 15.5 L 14.5 18 H 26 L 21 25 H 13 L 10.5 35 H 4 Z"
          fill="url(#fa-white-grad)"
        />

        {/* Angled Cobalt Blue 'A' Diagonal Leg */}
        <path
          d="M 21.5 19.5 L 35 35 H 26.5 L 15.5 22.5 Z"
          fill="url(#fa-blue-grad)"
        />
      </svg>

      {/* Crisp Brand Typography: FAROGH (White) + AI (Electric Blue) */}
      <div className={`font-mono font-extrabold tracking-wider ${currentSize.textClass} text-white flex items-center gap-1.5`}>
        <span className="text-white">FAROGH</span>
        <span className="text-[#3B82F6] font-mono font-bold tracking-widest">AI</span>
      </div>
    </div>
  );
};
