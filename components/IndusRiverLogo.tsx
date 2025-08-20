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
          centerDot: '#08164F'
        };
      case 'symbol-only':
      case 'primary':
      default:
        return {
          outerCircle: '#08164F',
          compassBody: '#39A4D2',
          compassPoints: '#FFFFFF',
          centerDot: '#FFFFFF'
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
        {/* Outer Circle */}
        <circle
          cx="50"
          cy="50"
          r="50"
          fill={colors.outerCircle}
        />
        
        {/* Inner Compass Body Circle */}
        <circle
          cx="50"
          cy="50"
          r="28"
          fill={colors.compassBody}
        />
        
        {/* 8-Pointed Compass Rose */}
        {/* Main Cardinal Points (N, E, S, W) - Longer */}
        <g fill={colors.compassPoints}>
          {/* North Point */}
          <polygon points="50,15 46,35 54,35" />
          
          {/* East Point */}
          <polygon points="85,50 65,46 65,54" />
          
          {/* South Point */}
          <polygon points="50,85 54,65 46,65" />
          
          {/* West Point */}
          <polygon points="15,50 35,54 35,46" />
          
          {/* Diagonal Points (NE, SE, SW, NW) - Shorter */}
          {/* Northeast Point */}
          <polygon points="73.5,26.5 60,37 66,43" />
          
          {/* Southeast Point */}
          <polygon points="73.5,73.5 66,57 60,63" />
          
          {/* Southwest Point */}
          <polygon points="26.5,73.5 40,63 34,57" />
          
          {/* Northwest Point */}
          <polygon points="26.5,26.5 34,43 40,37" />
        </g>
        
        {/* Center Dot */}
        <circle
          cx="50"
          cy="50"
          r="6"
          fill={colors.centerDot}
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