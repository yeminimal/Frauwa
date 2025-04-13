
import React from 'react';
import ServiceSection from './ServiceSection';
import ServiceCard from './ServiceCard';

const InteriorServices = () => {
  const services = [
    {
      title: "UV Marble Sheets",
      description: "High-quality UV marble sheets that add elegance and sophistication to interior walls, countertops, and decorative elements with the look of natural marble.",
      image: "/lovable-uploads/e1de2207-d4e9-4c4b-9df2-ab68a590e6b2.png" // Interior decor image
    },
    {
      title: "WPC Sheets",
      description: "Versatile Wood-Plastic Composite sheets offering the warm aesthetics of wood with enhanced durability and moisture resistance for interior applications.",
      image: "/lovable-uploads/76ddb981-3792-4229-ac77-2d3d84467b45.png" // Interior shelving image
    },
    {
      title: "Sintered Stones",
      description: "Premium sintered stone surfaces that combine the beauty of natural stone with advanced performance characteristics for countertops and wall cladding.",
      image: "/lovable-uploads/fc038e98-bd83-4c44-a9ee-f9c8503b926b.png" // Interior design image with green wall
    },
    {
      title: "Aluco Panels",
      description: "Sleek and modern aluminum composite panels for feature walls and design elements, offering versatility and contemporary appeal to indoor spaces.",
      image: "/lovable-uploads/563f3082-c16d-4f5d-a668-9465241c2959.png" // Interior decor image
    },
    {
      title: "3D Wall Panels",
      description: "Stunning three-dimensional wall panels that create texture, depth, and visual interest in living spaces, offices, and commercial interiors.",
      image: "/lovable-uploads/fc038e98-bd83-4c44-a9ee-f9c8503b926b.png" // Interior design image with green wall
    },
    {
      title: "Office Space Design & Partitioning",
      description: "Comprehensive office design and partitioning solutions that optimize workspace functionality while maintaining aesthetic appeal and brand alignment.",
      image: "/lovable-uploads/76ddb981-3792-4229-ac77-2d3d84467b45.png" // Interior shelving image
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
