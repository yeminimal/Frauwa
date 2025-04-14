
import React from 'react';
import ServiceSection from './ServiceSection';
import ServiceCard from './ServiceCard';

const InteriorServices = () => {
  const services = [
    {
      title: "UV Marble Sheets",
      description: "High-quality UV marble sheets that add elegance and sophistication to interior walls, countertops, and decorative elements with the look of natural marble.",
      image: "/lovable-uploads/85a4a46e-6755-42f7-808d-360a15c8f519.png" // Interior decor image
    },
    {
      title: "WPC Sheets",
      description: "Versatile Wood-Plastic Composite sheets offering the warm aesthetics of wood with enhanced durability and moisture resistance for interior applications.",
      image: "/lovable-uploads/3bba5ccd-42f3-4897-aead-56c153ef3b46.png" // Interior shelving image
    },
    {
      title: "Sintered Stones",
      description: "Premium sintered stone surfaces that combine the beauty of natural stone with advanced performance characteristics for countertops and wall cladding.",
      image: "/lovable-uploads/0fe48341-8e6b-45c5-bb5e-5f4c138b1e3d.png" // Interior design image
    },
    {
      title: "Aluco Panels",
      description: "Sleek and modern aluminum composite panels for feature walls and design elements, offering versatility and contemporary appeal to indoor spaces.",
      image: "/lovable-uploads/7c10cfdf-80b5-4611-822b-791410782873.png" // Interior decor image
    },
    {
      title: "3D Wall Panels",
      description: "Stunning three-dimensional wall panels that create texture, depth, and visual interest in living spaces, offices, and commercial interiors.",
      image: "/lovable-uploads/16b35968-4e0b-45e5-913d-14a583a24c89.png" // Interior design image
    },
    {
      title: "Office Space Design & Partitioning",
      description: "Comprehensive office design and partitioning solutions that optimize workspace functionality while maintaining aesthetic appeal and brand alignment.",
      image: "/lovable-uploads/6a219737-3502-47e7-9d53-6c7ccc06e2a1.png" // Interior office space image
    }
  ];

  return (
    <ServiceSection
      id="interior"
      title="Interior Design & Décor"
      subtitle="Transform Your Indoor Space"
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

export default InteriorServices;
