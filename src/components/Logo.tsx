import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
}) => {
  // Dimensions for Farogh AI Logo Identity/favicon.png
  const heightClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-11',
    lg: 'h-12 sm:h-14',
  };

  return (
    <div className={`inline-flex items-center bg-transparent select-none shrink-0 ${className}`}>
      {/* 
        Exact Official Logo Asset requested by user:
        D:\Desktop\Startup\Farogh AI Logo Identity\favicon.png
      */}
      <img
        src="/favicon.png"
        alt="Farogh AI Logo"
        className={`${heightClasses[size]} w-auto object-contain bg-transparent transition-transform duration-300 hover:scale-105`}
        style={{
          filter: 'drop-shadow(0 0 12px rgba(37, 99, 235, 0.45))',
        }}
      />
    </div>
  );
};
