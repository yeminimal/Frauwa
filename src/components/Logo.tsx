
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'default' | 'white';
  withText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ variant = 'default', withText = true }) => {
  return (
    <Link 
      to="/" 
      className={`flex items-center gap-2 ${withText ? 'md:gap-4' : ''}`}
      aria-label="Frauwa Roofs & Interior Decor Logo"
    >
      <img 
        src="/public/lovable-uploads/2540f768-8c07-421b-b9b5-3abe55579bf9.png" 
        alt="Frauwa Logo" 
        className={`h-10 md:h-14 object-contain ${variant === 'white' ? 'brightness-0 invert' : ''}`}
      />
      
      {withText && (
        <div className="hidden md:block">
          <h1 className={`font-display text-2xl md:text-3xl tracking-tightest ${variant === 'white' ? 'text-white' : 'text-frauwa-800'}`}>
            FRAUWA
          </h1>
          <p className={`text-xs md:text-sm font-light tracking-tighter -mt-1 ${variant === 'white' ? 'text-white/80' : 'text-frauwa-800/80'}`}>
            • Roofs & Interior Decor •
          </p>
        </div>
      )}
    </Link>
  );
};

export default Logo;
