
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { WhatsappIcon } from './icons';

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const parallaxBg = document.querySelector('.parallax-bg') as HTMLElement;

      if (parallaxBg) {
        parallaxBg.style.transform = `translateY(${scrollTop * 0.4}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('roofing');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/1292275b-3430-4613-80bf-05939fca7ff5.png')`,
          zIndex: 0
        }}
      />
      
      {/* Green Gradient Overlay */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: `linear-gradient(135deg, rgba(166, 193, 149, 0.7) 0%, rgba(13, 77, 51, 0.7) 100%)`,
          zIndex: 1,
          mixBlendMode: 'multiply'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-8 text-center md:text-left">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display tracking-tightest text-white mb-6 leading-tight drop-shadow-lg" style={{ letterSpacing: "-0.036em" }}>
            Elevate Your Space with Signature Roofing & Décor
          </h1>
          
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl tracking-tighter drop-shadow-lg">
            Premium roofing solutions and sophisticated interior & exterior décor services for the discerning Nigerian client.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button 
              className="bg-white text-frauwa-800 hover:bg-white/90 rounded-full px-8 py-6 button-hover-effect group drop-shadow-lg"
              onClick={scrollToContact}
            >
              <WhatsappIcon className="mr-2 h-5 w-5 text-frauwa-800 group-hover:rotate-12 transition-transform" />
              Chat with Us
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-frauwa-800 hover:border-frauwa-800 bg-frauwa-800 rounded-full px-8 py-6 button-hover-effect group drop-shadow-lg"
              onClick={scrollToServices}
            >
              Explore Services
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
