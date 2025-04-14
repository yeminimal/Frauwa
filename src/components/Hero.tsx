
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
    <section className="hero-section">
      {/* Background Image with Parallax Effect */}
      <div className="parallax-bg">
        <img 
          src="/lovable-uploads/8295b145-5a6a-4302-8bd8-54731822b82f.png" 
          alt="Modern West African Architecture" 
          className="hero-bg"
        />
      </div>
      
      {/* Content */}
      <div className="hero-content container mx-auto px-6 md:px-8 text-center md:text-left">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display tracking-tightest text-white mb-6 leading-tight drop-shadow-md" style={{ letterSpacing: "-0.036em" }}>
            Elevate Your Space with Signature Roofing & Décor
          </h1>
          
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl tracking-tighter drop-shadow">
            Premium roofing solutions and sophisticated interior & exterior décor services for the discerning West African client.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button 
              className="bg-white text-frauwa-800 hover:bg-white/90 rounded-full px-8 py-6 button-hover-effect group drop-shadow-md"
              onClick={scrollToContact}
            >
              <WhatsappIcon className="mr-2 h-5 w-5 text-frauwa-800 group-hover:rotate-12 transition-transform" />
              Chat with Us
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 rounded-full px-8 py-6 button-hover-effect group drop-shadow-md"
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
