import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
}) => {
  // Dimensions calibrated to crop canvas padding and make the Farogh AI artwork prominent & bold
  const config = {
    sm: { wrapWidth: 130, wrapHeight: 40, imgHeight: 150, mtop: -53, mleft: -8 },
    md: { wrapWidth: 165, wrapHeight: 52, imgHeight: 195, mtop: -69, mleft: -10 },
    lg: { wrapWidth: 200, wrapHeight: 62, imgHeight: 235, mtop: -83, mleft: -12 },
  };

  const c = config[size];

  return (
    <div
      className={`inline-flex items-center bg-transparent select-none shrink-0 ${className}`}
      style={{
        width: `${c.wrapWidth}px`,
        height: `${c.wrapHeight}px`,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Real Farogh AI Logo Asset cropped to display emblem + text mark boldly */}
      <img
        src="/logo-dark.png"
        alt="Farogh AI"
        style={{
          height: `${c.imgHeight}px`,
          width: 'auto',
          maxWidth: 'none',
          marginTop: `${c.mtop}px`,
          marginLeft: `${c.mleft}px`,
          mixBlendMode: 'screen',
          objectFit: 'contain',
          filter: 'drop-shadow(0 0 14px rgba(37, 99, 235, 0.55))',
        }}
        className="transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
};
