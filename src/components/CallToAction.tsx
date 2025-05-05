
import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone } from 'lucide-react';

const CallToAction = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="py-20 bg-frauwa-800 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-display tracking-tightest text-white mb-6">
            Masterfully Crafted Interiors & Exteriors
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Ready to transform your space? Contact Frauwa Roofs & Interior Decor today for a consultation and experience the difference quality craftsmanship makes.
          </p>
          <Button 
            className="bg-white text-frauwa-800 hover:bg-white/90 rounded-full px-8 py-6 button-hover-effect group"
            onClick={scrollToContact}
          >
            <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
