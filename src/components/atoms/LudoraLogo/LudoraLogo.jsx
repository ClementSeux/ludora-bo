import React from 'react';
import './LudoraLogo.css';

const LudoraLogo = () => {
  return (
    <div className="ludora-logo">
      <svg viewBox="0 0 442 99" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="ludoraGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF6B35" />
            <stop offset="50%" stopColor="#F7931E" />
            <stop offset="100%" stopColor="#7442C8" />
          </linearGradient>
        </defs>
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" 
              fill="url(#ludoraGradient)" 
              fontSize="72" 
              fontWeight="800" 
              fontFamily="Brevia, sans-serif"
              letterSpacing="-1.5">
          LUDORA
        </text>
      </svg>
    </div>
  );
};

export default LudoraLogo;
