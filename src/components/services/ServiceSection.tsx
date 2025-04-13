
import React from 'react';

interface ServiceSectionProps {
  id: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  bgColor?: string;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ 
  id, 
  title, 
  subtitle, 
  children,
  bgColor = "bg-white" 
}) => {
  return (
    <section id={id} className={`py-24 ${bgColor}`}>
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-frauwa-100 text-frauwa-800 rounded-full text-sm font-medium mb-5 animate-reveal">
            {subtitle}
          </span>
          <h2 className="text-4xl md:text-5xl font-display tracking-tightest animate-reveal text-frauwa-800" style={{ transitionDelay: '100ms' }}>
            {title}
          </h2>
          <div className="w-20 h-1 bg-frauwa-800/30 mx-auto mt-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {children}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
