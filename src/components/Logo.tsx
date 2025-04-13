
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
      <div className="relative h-8 w-8 md:h-10 md:w-10">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 5C15.4 5 11.7 8.7 11.7 13.3V26.7C11.7 31.3 15.4 35 20 35C24.6 35 28.3 31.3 28.3 26.7V13.3C28.3 8.7 24.6 5 20 5ZM20 8.3C22.8 8.3 25 10.5 25 13.3V26.7C25 29.5 22.8 31.7 20 31.7C17.2 31.7 15 29.5 15 26.7V13.3C15 10.5 17.2 8.3 20 8.3ZM20 11.7C19.1 11.7 18.3 12.4 18.3 13.3V26.7C18.3 27.6 19.1 28.3 20 28.3C20.9 28.3 21.7 27.6 21.7 26.7V13.3C21.7 12.4 20.9 11.7 20 11.7Z"
            fill={variant === 'white' ? 'white' : '#0D4D33'} 
          />
        </svg>
      </div>
      
      {withText && (
        <div>
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
