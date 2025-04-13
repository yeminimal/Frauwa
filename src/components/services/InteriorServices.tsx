
import React from 'react';
import ServiceSection from './ServiceSection';
import ServiceCard from './ServiceCard';

const InteriorServices = () => {
  const services = [
    {
      title: "UV Marble Sheets",
      description: "High-quality UV marble sheets that add elegance and sophistication to interior walls, countertops, and decorative elements with the look of natural marble.",
      image: "/public/lovable-uploads/122dbb46-e5d1-417e-bf8a-38f5f613aedd.png"
    },
    {
      title: "WPC Sheets",
      description: "Versatile Wood-Plastic Composite sheets offering the warm aesthetics of wood with enhanced durability and moisture resistance for interior applications.",
      image: "/public/lovable-uploads/88df1e36-062f-425d-8c55-4179b2d03d79.png"
    },
    {
      title: "Sintered Stones",
      description: "Premium sintered stone surfaces that combine the beauty of natural stone with advanced performance characteristics for countertops and wall cladding.",
      image: "/public/lovable-uploads/b03eea3e-3350-419b-99a4-0843a045e52c.png"
    },
    {
      title: "Aluco Panels",
      description: "Sleek and modern aluminum composite panels for feature walls and design elements, offering versatility and contemporary appeal to indoor spaces.",
      image: "/public/lovable-uploads/4974683f-3f58-4cb0-886f-2dc9d3f79b00.png"
    },
    {
      title: "3D Wall Panels",
      description: "Stunning three-dimensional wall panels that create texture, depth, and visual interest in living spaces, offices, and commercial interiors.",
      image: "/public/lovable-uploads/6528797f-7be1-4a59-be12-5ffe51ab25a3.png"
    },
    {
      title: "Office Space Design & Partitioning",
      description: "Comprehensive office design and partitioning solutions that optimize workspace functionality while maintaining aesthetic appeal and brand alignment.",
      image: "/public/lovable-uploads/821faeae-e9ca-46d5-8324-f781e1f50ff9.png"
    }
  ];

  return (
    <ServiceSection
      id="interior"
      title="Interior Design & Décor"
      subtitle="Transform Your Indoor Space"
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

export default InteriorServices;
