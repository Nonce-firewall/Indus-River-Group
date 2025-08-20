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
          innerCircle: '#FFFFFF',
          spokes: '#08164F',
          centerCircle: '#08164F'
        };
      case 'symbol-only':
      case 'primary':
      default:
        return {
          outerCircle: '#08164F',
          innerCircle: '#39A4D2',
          spokes: '#FFFFFF',
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
        
        {/* Inner Circle - Light Blue */}
        <circle
          cx="50"
          cy="50"
          r="30"
          fill={colors.innerCircle}
        />
        
        {/* 8-Pointed Compass Rose - White Spokes */}
        <g fill={colors.spokes}>
          {/* North Point - Long Cardinal */}
          <polygon points="50,8 45,42 50,38 55,42" />
          
          {/* Northeast Point - Short Diagonal */}
          <polygon points="65,35 52,48 56,50 60,46" />
          
          {/* East Point - Long Cardinal */}
          <polygon points="92,50 58,45 62,50 58,55" />
          
          {/* Southeast Point - Short Diagonal */}
          <polygon points="65,65 60,54 56,50 52,52" />
          
          {/* South Point - Long Cardinal */}
          <polygon points="50,92 55,58 50,62 45,58" />
          
          {/* Southwest Point - Short Diagonal */}
          <polygon points="35,65 40,54 44,50 48,52" />
          
          {/* West Point - Long Cardinal */}
          <polygon points="8,50 42,55 38,50 42,45" />
          
          {/* Northwest Point - Short Diagonal */}
          <polygon points="35,35 40,46 44,50 48,48" />
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