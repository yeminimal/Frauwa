
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
      {/* Background Image with Gradient Overlay */}
      <div className="parallax-bg">
        <img 
          src="/lovable-uploads/bb50e06c-d7ea-4bed-a50d-03b75baaa279.png" 
          alt="Modern Interior Design" 
          className="hero-bg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-frauwa-800/90 to-frauwa-800/70" />
      </div>
      
      {/* Content */}
      <div className="hero-content container mx-auto px-6 md:px-8 text-center md:text-left">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display tracking-tightest text-white mb-6 leading-tight">
            Elevate Your Space with Signature Roofing & Décor
          </h1>
          
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl tracking-tighter">
            Premium roofing solutions and sophisticated interior & exterior décor services for the discerning Nigerian client.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button 
              className="bg-white text-frauwa-800 hover:bg-white/90 rounded-full px-6 py-5 text-base button-hover-effect group"
              onClick={scrollToContact}
            >
              <WhatsappIcon className="mr-2 h-4 w-4 text-frauwa-800 group-hover:rotate-12 transition-transform" />
              Chat with Us
            </Button>
            <Button 
              variant="outline" 
              className="bg-frauwa-800 text-white border-white hover:bg-frauwa-900 hover:border-frauwa-900 rounded-full px-6 py-5 text-base button-hover-effect group"
              onClick={scrollToServices}
            >
              Explore Services
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
