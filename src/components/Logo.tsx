
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'default' | 'white';
  withText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ variant = 'default' }) => {
  return (
    <Link 
      to="/" 
      className="flex items-center"
      aria-label="Frauwa Roofs & Interior Decor Logo"
    >
      <img 
        src="/lovable-uploads/b56643bc-e27a-439c-991f-0784723a8e98.png" 
        alt="Frauwa Logo" 
        className={`h-10 md:h-14 object-contain ${variant === 'white' ? 'brightness-0 invert' : ''}`}
      />
    </Link>
  );
};

export default Logo;
