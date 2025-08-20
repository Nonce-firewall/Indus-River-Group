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
          {/* North Point - Long */}
          <polygon points="50,15 47,40 50,38 53,40" />
          
          {/* Northeast Point - Short */}
          <polygon points="67,33 52,48 54,50 56,48" />
          
          {/* East Point - Long */}
          <polygon points="85,50 60,47 62,50 60,53" />
          
          {/* Southeast Point - Short */}
          <polygon points="67,67 56,52 54,50 52,52" />
          
          {/* South Point - Long */}
          <polygon points="50,85 53,60 50,62 47,60" />
          
          {/* Southwest Point - Short */}
          <polygon points="33,67 48,52 46,50 44,52" />
          
          {/* West Point - Long */}
          <polygon points="15,50 40,53 38,50 40,47" />
          
          {/* Northwest Point - Short */}
          <polygon points="33,33 44,48 46,50 48,48" />
        </g>
        
        {/* Center Circle */}
        <circle
          cx="50"
          cy="50"
          r="8"
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