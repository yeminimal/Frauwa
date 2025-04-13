
import React from 'react';
import ServiceSection from './ServiceSection';
import ServiceCard from './ServiceCard';

const RoofingServices = () => {
  const services = [
    {
      title: "Aluminum Roofing",
      description: "Premium, lightweight and durable aluminum roofing solutions that offer excellent weather resistance and longevity for residential and commercial buildings.",
      image: "/public/lovable-uploads/8abc3fa8-7eb9-4beb-9aa3-ccbb907ab15c.png"
    },
    {
      title: "Gerrard Roofing",
      description: "Stylish and robust Gerrard stone-coated roofing tiles that combine the beauty of traditional roofing materials with enhanced durability and weather protection.",
      image: "/public/lovable-uploads/4f292dc5-0606-4121-b0e4-125b4ab57e82.png"
    },
    {
      title: "Roof Cladding",
      description: "Professional roof cladding services that add both aesthetic appeal and protective qualities to your building, available in various materials and finishes.",
      image: "/public/lovable-uploads/e38a15dd-c80b-430a-9612-2ef29325a382.png"
    },
    {
      title: "Rainwater Collectors",
      description: "Efficient rainwater collection systems that complement your roofing, helping to harvest rainwater for various uses while protecting your building's foundation.",
      image: "/public/lovable-uploads/6a6f9901-4eab-4732-9c48-4806677b24c6.png"
    }
  ];

  return (
    <ServiceSection
      id="roofing"
      title="Roofing Solutions"
      subtitle="Premium Roofing"
      bgColor="bg-frauwa-50"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
