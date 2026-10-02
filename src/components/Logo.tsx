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
  // Height and dimensions based on size
  const heightMap = {
    sm: { height: 28, iconSize: 26, textClass: 'text-sm' },
    md: { height: 36, iconSize: 32, textClass: 'text-lg' },
    lg: { height: 48, iconSize: 42, textClass: 'text-2xl' },
  };

  const currentSize = heightMap[size];

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Pure SVG Icon with transparent wrapper & fill="none" */}
      <svg
        width={currentSize.iconSize}
        height={currentSize.iconSize}
        viewBox="0 0 48 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
        style={{
          filter: 'drop-shadow(0 0 10px rgba(37, 99, 235, 0.45))',
        }}
      >
        <defs>
          <linearGradient id="farogh-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#863BFF" />
          </linearGradient>
          <linearGradient id="farogh-grad-2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1D4ED8" />
            <stop offset="100%" stopColor="#60A5FA" />
          </linearGradient>
          <radialGradient id="farogh-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Outer Glow Path */}
        <path
          d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z"
          fill="url(#farogh-grad-1)"
        />
        {/* Highlight inner facet */}
        <path
          d="M23.925 44.24c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471"
          fill="url(#farogh-grad-2)"
          opacity="0.8"
        />
        <circle cx="24" cy="23" r="6" fill="url(#farogh-glow)" />
      </svg>

      {/* Brand Typography */}
      {showText && (
        <span className={`font-mono font-extrabold tracking-wider ${currentSize.textClass} text-white flex items-center gap-1.5`}>
          <span>FAROGH</span>
          <span className="text-[#3B82F6] font-mono font-bold tracking-widest text-opacity-95">AI</span>
        </span>
      )}
    </div>
  );
};
