import React, { useEffect, useState } from 'react';

// Lightweight, resilient motion component for React 19 that supports floating keyframes & stagger entry
interface MotionProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  initial?: string | object;
  animate?: string | object;
  variants?: Record<string, any>;
  transition?: Record<string, any>;
  className?: string;
}

export const motion = {
  div: React.forwardRef<HTMLDivElement, MotionProps>(({ children, className = '', animate, transition, variants, initial, ...props }, ref) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => setIsVisible(true), 50);
      return () => clearTimeout(timer);
    }, []);

    // Check if this is a floating element with infinite repeat
    const isFloat = typeof animate === 'object' && animate && 'y' in animate;

    let extraStyle: React.CSSProperties = {};
    if (isFloat) {
      extraStyle = {
        animation: `floatAnimation ${transition?.duration || 4}s ease-in-out infinite`,
      };
    }

    return (
      <div
        ref={ref}
        className={`${className} transition-all duration-700 ease-out ${
          !isFloat ? (isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6') : ''
        }`}
        style={{
          ...props.style,
          ...extraStyle,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }),

  h1: React.forwardRef<HTMLHeadingElement, MotionProps>(({ children, className = '', ...props }, ref) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
    }, []);

    return (
      <h1
        ref={ref}
        className={`${className} transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
        {...props}
      >
        {children}
      </h1>
    );
  }),

  p: React.forwardRef<HTMLParagraphElement, MotionProps>(({ children, className = '', ...props }, ref) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => setIsVisible(true), 150);
      return () => clearTimeout(timer);
    }, []);

    return (
      <p
        ref={ref}
        className={`${className} transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
        {...props}
      >
        {children}
      </p>
    );
  }),

  span: React.forwardRef<HTMLSpanElement, MotionProps>(({ children, className = '', ...props }, ref) => (
    <span ref={ref} className={className} {...props}>
      {children}
    </span>
  )),
};
