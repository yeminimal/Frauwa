
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  image,
  delay = 0
}) => {
  return (
    <div 
      className="service-card h-96 rounded-lg overflow-hidden animate-reveal"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <img
        src={image.startsWith("public/") ? image.replace("public/", "/") : image}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="service-card-content">
        <h3 className="text-xl font-display text-white tracking-tightest">{title}</h3>
        <p className="service-card-description text-white/90 text-sm tracking-tighter">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
