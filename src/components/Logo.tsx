import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
}) => {
  // Locked heights for top-left navbar and global brand identity
  const heightClasses = {
    sm: 'h-7 sm:h-8',
    md: 'h-8.5 sm:h-9',
    lg: 'h-11 sm:h-12',
  };

  return (
    <div className={`inline-flex items-center bg-transparent select-none shrink-0 ${className}`}>
      {/* Real Official Farogh AI Logo Asset (/logo-dark.png) */}
      <img
        src="/logo-dark.png"
        alt="Farogh AI"
        className={`${heightClasses[size]} w-auto object-contain bg-transparent transition-transform duration-300 hover:scale-105`}
        style={{
          mixBlendMode: 'screen',
          filter: 'drop-shadow(0 0 12px rgba(37, 99, 235, 0.45))',
        }}
      />
    </div>
  );
};
