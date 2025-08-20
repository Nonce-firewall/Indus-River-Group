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
          <polygon points="50,20 46,45 50,42 54,45" />
          
          {/* Northeast Point - Short */}
          <polygon points="70.71,29.29 55,45 57.07,47.07 59.14,45" />
          
          {/* East Point - Long */}
          <polygon points="80,50 55,46 58,50 55,54" />
          
          {/* Southeast Point - Short */}
          <polygon points="70.71,70.71 59.14,55 57.07,52.93 55,55" />
          
          {/* South Point - Long */}
          <polygon points="50,80 54,55 50,58 46,55" />
          
          {/* Southwest Point - Short */}
          <polygon points="29.29,70.71 45,55 42.93,52.93 40.86,55" />
          
          {/* West Point - Long */}
          <polygon points="20,50 45,54 42,50 45,46" />
          
          {/* Northwest Point - Short */}
          <polygon points="29.29,29.29 40.86,45 42.93,47.07 45,45" />
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