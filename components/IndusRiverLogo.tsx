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
        style={{ 
          shapeRendering: 'geometricPrecision',
          imageRendering: 'crisp-edges'
        }}
      >
        <defs>
          <filter id="crisp" x="0%" y="0%" width="100%" height="100%">
            <feComponentTransfer>
              <feFuncA type="discrete" tableValues="0 .5 1"/>
            </feComponentTransfer>
          </filter>
        </defs>
        
        {/* Outer Circle - Dark Blue */}
        <circle
          cx="50"
          cy="50"
          r="50"
          fill={colors.outerCircle}
          filter="url(#crisp)"
        />
        
        {/* Inner Circle - Light Blue */}
        <circle
          cx="50"
          cy="50"
          r="30"
          fill={colors.innerCircle}
          filter="url(#crisp)"
        />
        
        {/* 8-Pointed Compass Rose - White Spokes with precise paths */}
        <g fill={colors.spokes} filter="url(#crisp)">
          {/* North Point - Long Cardinal */}
          <path d="M 50,0 L 46,40 L 50,36 L 54,40 Z" />
          
          {/* Northeast Point - Short Diagonal */}
          <path d="M 71.2,28.8 L 54,46 L 57,48 L 60,45 Z" />
          
          {/* East Point - Long Cardinal */}
          <path d="M 100,50 L 60,46 L 64,50 L 60,54 Z" />
          
          {/* Southeast Point - Short Diagonal */}
          <path d="M 71.2,71.2 L 60,55 L 57,52 L 54,54 Z" />
          
          {/* South Point - Long Cardinal */}
          <path d="M 50,100 L 54,60 L 50,64 L 46,60 Z" />
          
          {/* Southwest Point - Short Diagonal */}
          <path d="M 28.8,71.2 L 40,55 L 43,52 L 46,54 Z" />
          
          {/* West Point - Long Cardinal */}
          <path d="M 0,50 L 40,54 L 36,50 L 40,46 Z" />
          
          {/* Northwest Point - Short Diagonal */}
          <path d="M 28.8,28.8 L 40,45 L 43,48 L 46,46 Z" />
        </g>
        
        {/* Center Circle */}
        <circle
          cx="50"
          cy="50"
          r="6"
          fill={colors.centerCircle}
          filter="url(#crisp)"
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