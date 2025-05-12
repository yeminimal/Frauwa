
import React from 'react';
import ServiceSection from './ServiceSection';
import ServiceCard from './ServiceCard';

const ExteriorServices = () => {
  const services = [
    {
      title: "Window Fabrication",
      description: "Custom window fabrication services with premium materials that enhance your building's aesthetics while providing optimal functionality and energy efficiency.",
      image: "/lovable-uploads/WindowFabrication.jpg" // Modern window installation
    },
    {
      title: "Window Installation",
      description: "Professional window installation by skilled technicians ensuring perfect fit, weather sealing, and performance for all types of residential and commercial buildings.",
      image: "/lovable-uploads/WindowInstallation.jpg" // Windows with view
    },
    {
      title: "Wall Cutting",
      description: "Precision wall cutting services for renovations, additions, and architectural modifications, delivered with minimal disruption and expert craftsmanship.",
      image: "/lovable-uploads/WallCutting.jpg" // Interior decor image
    },
    {
      title: "Stainless Steel Railings",
      description: "Elegant and durable stainless steel railings for balconies, staircases, and outdoor areas that combine safety with sophisticated aesthetics.",
      image: "/lovable-uploads/StainlessSteelRailings.jpg" // Interior design elements
    },
    {
      title: "Balcony Design",
      description: "Creative balcony design solutions that transform outdoor spaces into functional, beautiful extensions of your living area with materials that withstand the elements.",
      image: "/lovable-uploads/BalconyDesign.jpg" // Villa with balcony
    },
    {
      title: "Exterior Wall Claddings",
      description: "Stunning exterior wall cladding options that protect your building while enhancing its architectural appeal, available in various materials and finishes.",
      image: "/lovable-uploads/ExteriorWallCladding.jpeg" // Cladding image
    }
  ];

  return (
    <ServiceSection
      id="exterior"
      title="Exterior Design & Décor"
      subtitle="Enhance Your Building's Exterior"
      bgColor="bg-frauwa-50"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
            delay={index * 100}
          />
        ))}
      </div>
    </ServiceSection>
  );
};

export default ExteriorServices;
