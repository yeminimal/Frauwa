
import React from 'react';
import ServiceSection from './ServiceSection';
import ServiceCard from './ServiceCard';

const ExteriorServices = () => {
  const services = [
    {
      title: "Window Fabrication",
      description: "Custom window fabrication services with premium materials that enhance your building's aesthetics while providing optimal functionality and energy efficiency.",
      image: "/lovable-uploads/6daf215a-3d61-4d88-ab9e-d388df4d6328.png" // Villa with windows image
    },
    {
      title: "Window Installation",
      description: "Professional window installation by skilled technicians ensuring perfect fit, weather sealing, and performance for all types of residential and commercial buildings.",
      image: "/lovable-uploads/6daf215a-3d61-4d88-ab9e-d388df4d6328.png" // Villa with windows image
    },
    {
      title: "Wall Cutting",
      description: "Precision wall cutting services for renovations, additions, and architectural modifications, delivered with minimal disruption and expert craftsmanship.",
      image: "/lovable-uploads/563f3082-c16d-4f5d-a668-9465241c2959.png" // Interior decor image
    },
    {
      title: "Stainless Steel Railings",
      description: "Elegant and durable stainless steel railings for balconies, staircases, and outdoor areas that combine safety with sophisticated aesthetics.",
      image: "/lovable-uploads/563f3082-c16d-4f5d-a668-9465241c2959.png" // Interior decor image
    },
    {
      title: "Balcony Design",
      description: "Creative balcony design solutions that transform outdoor spaces into functional, beautiful extensions of your living area with materials that withstand the elements.",
      image: "/lovable-uploads/6daf215a-3d61-4d88-ab9e-d388df4d6328.png" // Villa with windows image
    },
    {
      title: "Exterior Wall Claddings",
      description: "Stunning exterior wall cladding options that protect your building while enhancing its architectural appeal, available in various materials and finishes.",
      image: "/lovable-uploads/a7bb13be-d2e7-454c-add0-bf9473aba5c0.png" // Roof cladding image that can also work for wall cladding
    }
  ];

  return (
    <ServiceSection
      id="exterior"
      title="Exterior Design & Décor"
      subtitle="Enhance Your Building's Exterior"
      bgColor="bg-frauwa-50"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
