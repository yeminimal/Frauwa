
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
    // Handle lovable uploads format
    if (image.startsWith("public/lovable-uploads/")) {
      return image.replace("public/", "/");
    }
    // Handle direct lovable uploads format
    else if (image.startsWith("/lovable-uploads/")) {
      return image;
    }
    // Handle absolute path format
    else if (image.startsWith("/")) {
      return image;
    }
    // Handle http/https URLs
    else if (image.startsWith("http")) {
      return image;
    }
    // Default case - add leading slash
    else {
      return `/${image}`;
    }
  }, [image]);

  return (
    <div 
      className="service-card aspect-square rounded-lg overflow-hidden animate-reveal shadow-card relative group"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="eager"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          console.log("Image failed to load:", imageUrl);
          target.src = "/placeholder.svg";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-frauwa-800/90 via-frauwa-800/50 to-frauwa-800/20"></div>
      <div className="service-card-content absolute bottom-0 left-0 w-full p-6 z-10">
        <h3 className="text-xl font-display text-white tracking-tightest drop-shadow-md">{title}</h3>
        <p className="service-card-description text-white/90 text-sm tracking-tighter mt-2 opacity-100 drop-shadow-md">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
