
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
      src: "/lovable-uploads/3f0b7484-8909-4d96-907c-f151491ea9ba.png",
      alt: "Modern interior design"
    },
    {
      src: "/lovable-uploads/aa1c834d-f629-4b29-b078-cb2d18ddf626.png",
      alt: "Contemporary living space"
    },
    {
      src: "/lovable-uploads/eee67e8c-5d38-4192-97e0-037c6c9d57c7.png",
      alt: "Indoor plants and design elements"
    },
    {
      src: "/lovable-uploads/14b0c6e1-14cd-49f2-99a4-7a0f54edc6b6.png",
      alt: "Office space design"
    },
    {
      src: "/lovable-uploads/0c0ae755-2d64-4573-83a2-2b08fe271a55.png",
      alt: "Modern window installation"
    },
    {
      src: "/lovable-uploads/4e0fdbed-0cbf-4bd6-87eb-2b7ef0c6840e.png",
      alt: "Interior décor with plants"
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
