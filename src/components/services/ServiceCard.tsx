
import React from 'react';
import { cn } from "@/lib/utils";

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
  // Properly handle image paths
  const imageUrl = React.useMemo(() => {
    if (image.startsWith("public/")) {
      return image.replace("public/", "/");
    } else if (!image.startsWith("/") && !image.startsWith("http")) {
      return `/${image}`;
    }
    return image;
  }, [image]);

  return (
    <div 
      className="service-card h-96 rounded-lg overflow-hidden animate-reveal shadow-card"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          console.log("Image failed to load:", imageUrl);
          target.src = "/placeholder.svg";
        }}
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
