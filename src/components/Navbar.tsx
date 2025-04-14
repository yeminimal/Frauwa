import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { WhatsappIcon } from './icons';
import Logo from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    if (location.pathname === '/') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        if (isMobileMenuOpen) setIsMobileMenuOpen(false);
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  const scrollToContact = () => {
    if (location.pathname === '/') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        if (isMobileMenuOpen) setIsMobileMenuOpen(false);
      }
    } else {
      window.location.href = '/#contact';
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out-quint py-4 px-4 sm:px-6 md:px-8",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-smooth" : "bg-transparent"
      )}
    >
      <div className="container max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <Logo variant={!isScrolled && location.pathname === '/' ? 'white' : 'default'} />
          
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#roofing" 
              onClick={(e) => handleNavigation(e, 'roofing')}
              className={`${!isScrolled && location.pathname === '/' ? 'text-white/80 hover:text-white' : 'text-frauwa-800/80 hover:text-frauwa-800'} transition-colors font-medium text-sm hover:scale-105 duration-200`}
            >
              Roofing
            </a>
            <a 
              href="#interior" 
              onClick={(e) => handleNavigation(e, 'interior')}
              className={`${!isScrolled && location.pathname === '/' ? 'text-white/80 hover:text-white' : 'text-frauwa-800/80 hover:text-frauwa-800'} transition-colors font-medium text-sm hover:scale-105 duration-200`}
            >
              Interior
            </a>
            <a 
              href="#exterior" 
              onClick={(e) => handleNavigation(e, 'exterior')}
              className={`${!isScrolled && location.pathname === '/' ? 'text-white/80 hover:text-white' : 'text-frauwa-800/80 hover:text-frauwa-800'} transition-colors font-medium text-sm hover:scale-105 duration-200`}
            >
              Exterior
            </a>
            <Link 
              to="/projects" 
              className={`${!isScrolled && location.pathname === '/' ? 'text-white/80 hover:text-white' : 'text-frauwa-800/80 hover:text-frauwa-800'} transition-colors font-medium text-sm hover:scale-105 duration-200`}
            >
              Projects
            </Link>
            <a 
              href="#contact" 
              onClick={(e) => handleNavigation(e, 'contact')}
              className={`${!isScrolled && location.pathname === '/' ? 'text-white/80 hover:text-white' : 'text-frauwa-800/80 hover:text-frauwa-800'} transition-colors font-medium text-sm hover:scale-105 duration-200`}
            >
              Contact
            </a>
          </nav>
          
          <div className="hidden md:block">
            <Button 
              variant={!isScrolled && location.pathname === '/' ? "outline" : "default"} 
              className={`${!isScrolled && location.pathname === '/' ? 'bg-white text-frauwa-800 border-white hover:bg-white/90' : 'bg-frauwa-800 hover:bg-frauwa-900 text-white'} rounded-full px-6 button-hover-effect group`}
              onClick={scrollToContact}
            >
              <WhatsappIcon className={`mr-2 h-4 w-4 ${!isScrolled && location.pathname === '/' ? 'text-frauwa-800' : 'text-white'} group-hover:scale-110 transition-transform`} />
              Chat with Us
            </Button>
          </div>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${!isScrolled && location.pathname === '/' ? 'text-white hover:bg-white/10' : 'text-frauwa-800 hover:bg-frauwa-100'} rounded-full transition-colors`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col pt-20 pb-6 px-6 md:hidden animate-fade-in shadow-xl">
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 p-2 text-foreground hover:bg-frauwa-100 rounded-full transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          
          <nav className="flex flex-col space-y-6 mt-8">
            <a 
              href="#roofing" 
              onClick={(e) => handleNavigation(e, 'roofing')}
              className="text-frauwa-800 font-medium text-lg transition-colors hover:text-frauwa-600"
            >
              Roofing
            </a>
            <a 
              href="#interior" 
              onClick={(e) => handleNavigation(e, 'interior')}
              className="text-frauwa-800 font-medium text-lg transition-colors hover:text-frauwa-600"
            >
              Interior
            </a>
            <a 
              href="#exterior" 
              onClick={(e) => handleNavigation(e, 'exterior')}
              className="text-frauwa-800 font-medium text-lg transition-colors hover:text-frauwa-600"
            >
              Exterior
            </a>
            <Link 
              to="/projects" 
              className="text-frauwa-800 font-medium text-lg transition-colors hover:text-frauwa-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <a 
              href="#contact" 
              onClick={(e) => handleNavigation(e, 'contact')}
              className="text-frauwa-800 font-medium text-lg transition-colors hover:text-frauwa-600"
            >
              Contact
            </a>
          </nav>
          <div className="mt-auto">
            <Button 
              variant="default" 
              className="w-full bg-frauwa-800 hover:bg-frauwa-900 text-white rounded-full button-hover-effect group"
              onClick={scrollToContact}
            >
              <WhatsappIcon className="mr-2 h-4 w-4 text-white group-hover:scale-110 transition-transform" />
              Chat with Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
