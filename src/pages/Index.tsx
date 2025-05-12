
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import RoofingServices from '../components/services/RoofingServices';
import InteriorServices from '../components/services/InteriorServices';
import ExteriorServices from '../components/services/ExteriorServices';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import CallToAction from '../components/CallToAction';

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.classList.add('smooth-scroll');
    
    // Handle intersection observation for animation
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    document.querySelectorAll('.animate-reveal').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      document.documentElement.classList.remove('smooth-scroll');
      document.querySelectorAll('.animate-reveal').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Frauwa Roofs & Interior Decor | Premium Roofing & Interior Solutions</title>
        <meta name="description" content="Frauwa Roofs & Interior Decor offers premium roofing, interior and exterior décor services across Nigeria. Specializing in aluminum roofing, gerrard roofing, UV marble sheets, and more." />
        <meta name="keywords" content="roofing Nigeria, interior decor Nigeria, aluminum roofing, gerrard roofing, roof cladding, UV marble sheets, WPC sheets, sintered stones, 3D wall panels, window fabrication, exterior wall claddings, office space design, Nigerian interior designer, premium roofing solutions, Frauwa" />
        <meta name="author" content="Frauwa Roofs & Interior Decor" />
        <meta property="og:title" content="Frauwa Roofs & Interior Decor | Premium Roofing & Interior Solutions" />
        <meta property="og:description" content="Transform your space with premium roofing, interior and exterior décor services from Frauwa. Serving all areas across Nigeria with sophisticated design solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://frauwa.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Frauwa Roofs & Interior Decor | Premium Roofing & Interior Solutions" />
        <meta name="twitter:description" content="Premium roofing, interior and exterior décor services for residential and commercial buildings across Nigeria." />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5154438827317099" crossOrigin="anonymous"></script>
      </Helmet>
      
      <Navbar />
      <main>
        <Hero />
        <RoofingServices />
        <InteriorServices />
        <ExteriorServices />
        <Gallery />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
