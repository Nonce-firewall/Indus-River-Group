import React from 'react';

interface IndusRiverLogoProps {
  size?: number;
  variant?: 'primary' | 'white' | 'symbol-only';
  className?: string;
}

export default function IndusRiverLogo({ 
  size = 48, 
  variant = 'primary',
  className = '' 
}: IndusRiverLogoProps) {
  // Ensure minimum size
  const logoSize = Math.max(size, 32);
  
  const getColors = () => {
    switch (variant) {
      case 'white':
        return {
          outerCircle: '#FFFFFF',
          compassBody: '#FFFFFF',
          compassPoints: '#08164F',
          centerCircle: '#08164F'
        };
      case 'symbol-only':
      case 'primary':
      default:
        return {
          outerCircle: '#08164F',
          compassBody: '#39A4D2',
          compassPoints: '#FFFFFF',
          centerCircle: '#39A4D2'
        };
    }
  };

  const colors = getColors();

  return (
    <div 
      className={`inline-flex items-center transition-transform duration-300 hover:scale-105 ${className}`}
      style={{ minWidth: logoSize }}
    >
      <svg
        width={logoSize}
        height={logoSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Indus River Group Logo - 8-pointed compass rose"
      >
        {/* Outer Circle - Dark Blue */}
        <circle
          cx="50"
          cy="50"
          r="50"
          fill={colors.outerCircle}
        />
        
        {/* Inner Compass Body Circle - Light Blue */}
        <circle
          cx="50"
          cy="50"
          r="28"
          fill={colors.compassBody}
        />
        
        {/* 8-Pointed Compass Rose - White Spokes */}
        <g fill={colors.compassPoints}>
          {/* North Point - Long */}
          <path d="M50 22 L48 42 L50 40 L52 42 Z" />
          
          {/* Northeast Point - Short */}
          <path d="M67.07 32.93 L55.86 44.14 L57.28 45.56 L58.7 44.14 Z" />
          
          {/* East Point - Long */}
          <path d="M78 50 L58 48 L60 50 L58 52 Z" />
          
          {/* Southeast Point - Short */}
          <path d="M67.07 67.07 L58.7 55.86 L57.28 54.44 L55.86 55.86 Z" />
          
          {/* South Point - Long */}
          <path d="M50 78 L52 58 L50 60 L48 58 Z" />
          
          {/* Southwest Point - Short */}
          <path d="M32.93 67.07 L44.14 55.86 L42.72 54.44 L41.3 55.86 Z" />
          
          {/* West Point - Long */}
          <path d="M22 50 L42 52 L40 50 L42 48 Z" />
          
          {/* Northwest Point - Short */}
          <path d="M32.93 32.93 L41.3 44.14 L42.72 45.56 L44.14 44.14 Z" />
        </g>
        
        {/* Center Circle */}
        <circle
          cx="50"
          cy="50"
          r="6"
          fill={colors.centerCircle}
        />
      </svg>
      
      {variant !== 'symbol-only' && (
        <div className="ml-3 flex flex-col">
          <span className="font-black text-xl leading-tight tracking-wide text-indus-blue">
            INDUS RIVER
          </span>
          <span className="text-xs tracking-widest font-medium text-charcoal-grey">
            GROUP
          </span>
        </div>
      )}
    </div>
  );
}