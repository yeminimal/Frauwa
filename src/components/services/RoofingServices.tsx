
import React from 'react';
import ServiceSection from './ServiceSection';
import ServiceCard from './ServiceCard';

const RoofingServices = () => {
  const services = [
    {
      title: "Aluminum Roofing",
      description: "Premium, lightweight and durable aluminum roofing solutions that offer excellent weather resistance and longevity for residential and commercial buildings.",
      image: "/lovable-uploads/f1e1e6cb-4076-41ac-9405-99a58fd23657.png" // Aluminum roofing image
    },
    {
      title: "Gerrard Roofing",
      description: "Stylish and robust Gerrard stone-coated roofing tiles that combine the beauty of traditional roofing materials with enhanced durability and weather protection.",
      image: "/lovable-uploads/a8831624-fa12-4ba5-90ba-fbae9d8d8753.png" // Gerrard roofing image
    },
    {
      title: "Roof Cladding",
      description: "Professional roof cladding services that add both aesthetic appeal and protective qualities to your building, available in various materials and finishes.",
      image: "/lovable-uploads/RoofCladding.jpg" // Roof cladding image
    },
    {
      title: "Rainwater Collectors",
      description: "Efficient rainwater collection systems that complement your roofing, helping to harvest rainwater for various uses while protecting your building's foundation.",
      image: "/lovable-uploads/RainCollector.jpg" // Villa with rainwater collection system
    }
  ];

  return (
    <ServiceSection
      id="roofing"
      title="Roofing Solutions"
      subtitle="Premium Roofing"
      bgColor="bg-frauwa-50"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

export default RoofingServices;
