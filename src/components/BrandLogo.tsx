import React from 'react';

type BrandLogoProps = {
  imageClassName?: string;
  wordmarkClassName?: string;
  showWordmark?: boolean;
  variant?: 'light' | 'dark' | 'auto';
};

const BrandLogo = ({
  imageClassName = 'h-10 w-10',
  wordmarkClassName = 'text-2xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800 bg-clip-text text-transparent',
  showWordmark = true,
  variant = 'auto',
}: BrandLogoProps) => {
  // Use transparent logo for dark backgrounds or standard logo
  const logoSrc = variant === 'light' 
    ? '/logos/nhancio-logo-transparent.png' 
    : '/logos/Nhancio-logo.png';

  const defaultWordmarkClass = variant === 'light'
    ? 'text-2xl font-extrabold text-white tracking-tight'
    : wordmarkClassName;

  return (
    <span className="inline-flex items-center gap-2.5 select-none group">
      <img
        src={logoSrc}
        alt="Nhancio - AI Engineering Agency"
        width="40"
        height="40"
        loading="eager"
        decoding="async"
        className={`${imageClassName} shrink-0 object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-xs`}
        onError={(e) => {
          (e.target as HTMLImageElement).src = '/logos/nhancio-logo-transparent.png';
        }}
      />
      {showWordmark && (
        <span className={`${defaultWordmarkClass} tracking-tight font-extrabold transition-colors`}>
          Nhancio
        </span>
      )}
    </span>
  );
};

export default BrandLogo;
