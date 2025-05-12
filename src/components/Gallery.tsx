
import React, { useEffect, useRef } from 'react';

const Gallery = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (galleryRef.current) {
      const elements = galleryRef.current.querySelectorAll('.animate-reveal');
      elements.forEach(el => observer.observe(el));
    }

    return () => {
      if (galleryRef.current) {
        const elements = galleryRef.current.querySelectorAll('.animate-reveal');
        elements.forEach(el => observer.unobserve(el));
      }
    };
  }, []);
  
  const images = [
    {
      src: "/lovable-uploads/1.webp",
      alt: "Roofing Design"
    },
    {
      src: "/lovable-uploads/2",
      alt: "Rainwater Collector"
    },
    {
      src: "/lovable-uploads/3.webp",
      alt: "Roofing"
    },
    {
      src: "/lovable-uploads/4.webp",
      alt: "Roofing"
    },
    {
      src: "/lovable-uploads/5.webp",
      alt: "Roofing"
    },
    {
      src: "/lovable-uploads/6.webp",
      alt: "Stainless Steel Railing"
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden" ref={galleryRef}>
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-frauwa-100 text-frauwa-800 rounded-full text-sm font-medium mb-5 animate-reveal">
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-display tracking-tightest animate-reveal text-frauwa-800" style={{ transitionDelay: '100ms' }}>
            Bold Designs. Lasting Impressions.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground animate-reveal" style={{ transitionDelay: '200ms' }}>
            Browse through our gallery of completed projects showcasing the craftsmanship and attention to detail that defines Frauwa Roofs & Interior Decor.
          </p>
          <div className="w-20 h-1 bg-frauwa-800/30 mx-auto mt-8"></div>
        </div>
        
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="gallery-item aspect-[4/3] animate-reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="gallery-image" 
                loading="eager"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
