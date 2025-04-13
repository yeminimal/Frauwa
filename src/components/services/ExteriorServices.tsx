
import React from 'react';
import ServiceSection from './ServiceSection';
import ServiceCard from './ServiceCard';

const ExteriorServices = () => {
  const services = [
    {
      title: "Window Fabrication",
      description: "Custom window fabrication services with premium materials that enhance your building's aesthetics while providing optimal functionality and energy efficiency.",
      image: "/public/lovable-uploads/122dbb46-e5d1-417e-bf8a-38f5f613aedd.png"
    },
    {
      title: "Window Installation",
      description: "Professional window installation by skilled technicians ensuring perfect fit, weather sealing, and performance for all types of residential and commercial buildings.",
      image: "/public/lovable-uploads/6528797f-7be1-4a59-be12-5ffe51ab25a3.png"
    },
    {
      title: "Wall Cutting",
      description: "Precision wall cutting services for renovations, additions, and architectural modifications, delivered with minimal disruption and expert craftsmanship.",
      image: "/public/lovable-uploads/88df1e36-062f-425d-8c55-4179b2d03d79.png"
    },
    {
      title: "Stainless Steel Railings",
      description: "Elegant and durable stainless steel railings for balconies, staircases, and outdoor areas that combine safety with sophisticated aesthetics.",
      image: "/public/lovable-uploads/4974683f-3f58-4cb0-886f-2dc9d3f79b00.png"
    },
    {
      title: "Balcony Design",
      description: "Creative balcony design solutions that transform outdoor spaces into functional, beautiful extensions of your living area with materials that withstand the elements.",
      image: "/public/lovable-uploads/b03eea3e-3350-419b-99a4-0843a045e52c.png"
    },
    {
      title: "Exterior Wall Claddings",
      description: "Stunning exterior wall cladding options that protect your building while enhancing its architectural appeal, available in various materials and finishes.",
      image: "/public/lovable-uploads/821faeae-e9ca-46d5-8324-f781e1f50ff9.png"
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
