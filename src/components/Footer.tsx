
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Instagram, Facebook, Twitter, ArrowRight } from 'lucide-react';
import { WhatsappIcon } from './icons';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  
  // This function handles scrolling to sections or redirecting to the home page with anchor
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    if (location.pathname === '/') {
      // If we're on the home page, just scroll to the section
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate to home with the hash
      window.location.href = `/#${sectionId}`;
    }
  };
  
  return (
    <footer className="bg-frauwa-50 border-t border-frauwa-100 pt-16 pb-8">
      <div className="container max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo and description */}
          <div className="md:col-span-4">
            <Logo />
            <p className="text-muted-foreground max-w-md mt-6">
              Premium roofing, interior, and exterior décor services for residential and commercial buildings across Nigeria. Elevating spaces with exceptional craftsmanship.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-frauwa-100 text-frauwa-800 flex items-center justify-center hover:bg-frauwa-800 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-frauwa-100 text-frauwa-800 flex items-center justify-center hover:bg-frauwa-800 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-frauwa-100 text-frauwa-800 flex items-center justify-center hover:bg-frauwa-800 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="font-semibold text-lg mb-4 text-frauwa-800">Services</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#roofing" 
                  onClick={(e) => handleNavigation(e, 'roofing')}
                  className="text-muted-foreground hover:text-frauwa-800 transition-colors flex items-center group"
                >
                  <ArrowRight size={14} className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Roofing
                </a>
              </li>
              <li>
                <a 
                  href="#interior" 
                  onClick={(e) => handleNavigation(e, 'interior')}
                  className="text-muted-foreground hover:text-frauwa-800 transition-colors flex items-center group"
                >
                  <ArrowRight size={14} className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Interior
                </a>
              </li>
              <li>
                <a 
                  href="#exterior" 
                  onClick={(e) => handleNavigation(e, 'exterior')}
                  className="text-muted-foreground hover:text-frauwa-800 transition-colors flex items-center group"
                >
                  <ArrowRight size={14} className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Exterior
                </a>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div className="md:col-span-2">
            <h3 className="font-semibold text-lg mb-4 text-frauwa-800">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/projects" 
                  className="text-muted-foreground hover:text-frauwa-800 transition-colors flex items-center group"
                >
                  <ArrowRight size={14} className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-muted-foreground hover:text-frauwa-800 transition-colors flex items-center group"
                >
                  <ArrowRight size={14} className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  About Us
                </Link>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleNavigation(e, 'contact')}
                  className="text-muted-foreground hover:text-frauwa-800 transition-colors flex items-center group"
                >
                  <ArrowRight size={14} className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="md:col-span-4">
            <h3 className="font-semibold text-lg mb-4 text-frauwa-800">Contact</h3>
            <ul className="space-y-4">
              <li>
                <span className="text-muted-foreground">
                  We deliver anywhere within Nigeria
                </span>
              </li>
              <li>
                <a href="https://wa.me/+2347083330386" className="text-muted-foreground hover:text-frauwa-800 transition-colors flex items-center">
                  <WhatsappIcon size={16} className="mr-2 text-[#25D366]" />
                  +234 708 333 0386 (WhatsApp)
                </a>
              </li>
              <li>
                <a href="tel:+2347083330386" className="text-muted-foreground hover:text-frauwa-800 transition-colors flex items-center">
                  <Phone size={16} className="mr-2 text-frauwa-800" />
                  +234 708 333 0386
                </a>
              </li>
              <li>
                <a href="mailto:francolee66@yahoo.com" className="text-muted-foreground hover:text-frauwa-800 transition-colors flex items-center">
                  <Mail size={16} className="mr-2 text-frauwa-800" />
                  francolee66@yahoo.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-frauwa-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Frauwa Roofs & Interior Decor. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" onClick={() => window.scrollTo(0, 0)} className="text-muted-foreground hover:text-frauwa-800 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" onClick={() => window.scrollTo(0, 0)} className="text-muted-foreground hover:text-frauwa-800 transition-colors text-sm">
              Terms of Service
            </Link>
            <a href="https://x.com/yeminimal" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-frauwa-800 transition-colors text-sm">
              designed by @yeminimal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
