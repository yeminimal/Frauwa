
import React from 'react';

interface WhatsappIconProps {
  size?: number;
  className?: string;
}

const WhatsappIcon: React.FC<WhatsappIconProps> = ({ size = 24, className = '' }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
      <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
      <path d="M8.5 14a.5.5 0 0 0 .5-.5c0-.833.833-1.5 3-1.5s3 .667 3 1.5a.5.5 0 0 0 1 0c0-1.5-1.5-2.5-4-2.5s-4 1-4 2.5a.5.5 0 0 0 .5.5Z" />
    </svg>
  );
};

export default WhatsappIcon;
