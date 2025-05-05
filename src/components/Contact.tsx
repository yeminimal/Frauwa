
import React from 'react';
import { Button } from "@/components/ui/button";
import ContactInfo from './contact/ContactInfo';
import { WhatsappIcon } from './icons';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-frauwa-50">
      <div className="container max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-frauwa-100 text-frauwa-800 rounded-full text-sm font-medium mb-5 animate-reveal">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-display tracking-tightest animate-reveal text-frauwa-800" style={{ transitionDelay: '100ms' }}>
            Ready to Transform Your Space?
          </h2>
          <div className="w-20 h-1 bg-frauwa-800/30 mx-auto mt-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Contact information */}
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl mb-6">Contact Information</h3>
            <p className="text-muted-foreground mb-6">
              Ready to start your project? Reach out to us for a consultation and let's create something exceptional together.
            </p>
            <ContactInfo />
          </div>
          
          {/* WhatsApp CTA */}
          <div className="md:col-span-3 flex flex-col items-center justify-center bg-white rounded-2xl shadow-card p-8 animate-reveal">
            <h3 className="font-display text-3xl mb-6 text-frauwa-800 text-center">Chat with Us on WhatsApp</h3>
            <p className="text-muted-foreground mb-10 text-center max-w-md">
              Have questions about our services? Get quick responses and personalized assistance through WhatsApp.
            </p>
            <Button 
              size="lg"
              className="bg-frauwa-800 hover:bg-frauwa-900 text-white rounded-full px-8 py-7 text-lg button-hover-effect group w-auto max-w-full"
              onClick={() => window.open('https://wa.me/+2347083330386', '_blank')}
            >
              <WhatsappIcon className="mr-2 h-6 w-6 text-white group-hover:scale-110 transition-transform" />
              Chat with Us on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
