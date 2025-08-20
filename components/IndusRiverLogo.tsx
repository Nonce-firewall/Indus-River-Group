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
          r="32"
          fill={colors.compassBody}
        />
        
        {/* 8-Pointed Star/Compass Rose - White */}
        <g fill={colors.compassPoints}>
          {/* Main 4 points (N, E, S, W) - Longer diamond shapes */}
          {/* North Point */}
          <path d="M50 18 L45 38 L50 35 L55 38 Z" />
          
          {/* East Point */}
          <path d="M82 50 L62 45 L65 50 L62 55 Z" />
          
          {/* South Point */}
          <path d="M50 82 L55 62 L50 65 L45 62 Z" />
          
          {/* West Point */}
          <path d="M18 50 L38 55 L35 50 L38 45 Z" />
          
          {/* Diagonal 4 points (NE, SE, SW, NW) - Shorter diamond shapes */}
          {/* Northeast Point */}
          <path d="M71.5 28.5 L57 40 L60 37 L63 40 Z" />
          
          {/* Southeast Point */}
          <path d="M71.5 71.5 L63 60 L60 63 L57 60 Z" />
          
          {/* Southwest Point */}
          <path d="M28.5 71.5 L43 60 L40 63 L37 60 Z" />
          
          {/* Northwest Point */}
          <path d="M28.5 28.5 L37 40 L40 37 L43 40 Z" />
        </g>
        
        {/* Center Circle - Same as compass body */}
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