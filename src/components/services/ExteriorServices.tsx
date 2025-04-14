
import React from 'react';
import ServiceSection from './ServiceSection';
import ServiceCard from './ServiceCard';

const ExteriorServices = () => {
  const services = [
    {
      title: "Window Fabrication",
      description: "Custom window fabrication services with premium materials that enhance your building's aesthetics while providing optimal functionality and energy efficiency.",
      image: "/lovable-uploads/0c0ae755-2d64-4573-83a2-2b08fe271a55.png" // Modern window installation
    },
    {
      title: "Window Installation",
      description: "Professional window installation by skilled technicians ensuring perfect fit, weather sealing, and performance for all types of residential and commercial buildings.",
      image: "/lovable-uploads/14b0c6e1-14cd-49f2-99a4-7a0f54edc6b6.png" // Windows with view
    },
    {
      title: "Wall Cutting",
      description: "Precision wall cutting services for renovations, additions, and architectural modifications, delivered with minimal disruption and expert craftsmanship.",
      image: "/lovable-uploads/563f3082-c16d-4f5d-a668-9465241c2959.png" // Interior decor image
    },
    {
      title: "Stainless Steel Railings",
      description: "Elegant and durable stainless steel railings for balconies, staircases, and outdoor areas that combine safety with sophisticated aesthetics.",
      image: "/lovable-uploads/3f0b7484-8909-4d96-907c-f151491ea9ba.png" // Interior design elements
    },
    {
      title: "Balcony Design",
      description: "Creative balcony design solutions that transform outdoor spaces into functional, beautiful extensions of your living area with materials that withstand the elements.",
      image: "/lovable-uploads/6daf215a-3d61-4d88-ab9e-d388df4d6328.png" // Villa with balcony
    },
    {
      title: "Exterior Wall Claddings",
      description: "Stunning exterior wall cladding options that protect your building while enhancing its architectural appeal, available in various materials and finishes.",
      image: "/lovable-uploads/a7bb13be-d2e7-454c-add0-bf9473aba5c0.png" // Cladding image
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
