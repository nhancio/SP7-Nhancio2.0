import React from 'react';

type BrandLogoProps = {
  imageClassName?: string;
  wordmarkClassName?: string;
  showWordmark?: boolean;
  variant?: 'light' | 'dark' | 'auto';
};

const BrandLogo = ({
  imageClassName = 'h-10 w-10',
  wordmarkClassName = 'text-2xl font-bold text-purple-600',
  showWordmark = true,
  variant = 'auto',
}: BrandLogoProps) => {
  // Use transparent logo for dark backgrounds or standard logo
  const logoSrc = variant === 'light' 
    ? '/logos/nhancio-logo-transparent.png' 
    : '/logos/Nhancio-logo.png';

  return (
    <span className="inline-flex items-center gap-2.5 select-none group">
      <img
        src={logoSrc}
        alt="Nhancio - EnhanceShow AI Agency Logo"
        width="40"
        height="40"
        loading="eager"
        decoding="async"
        className={`${imageClassName} shrink-0 rounded-xl object-contain transition-transform duration-300 group-hover:scale-105 shadow-sm`}
        onError={(e) => {
          (e.target as HTMLImageElement).src = '/logos/Nhancio-logo.png';
        }}
      />
      {showWordmark && (
        <span className={`${wordmarkClassName} tracking-tight font-extrabold transition-colors`}>
          Nhancio
        </span>
      )}
    </span>
  );
};

export default BrandLogo;
