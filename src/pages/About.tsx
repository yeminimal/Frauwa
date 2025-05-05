import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CallToAction from '../components/CallToAction';
import { Phone, Mail, Award, Shield, Clock, Users } from 'lucide-react';

const About = () => {
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

  // Values data
  const values = [
    {
      icon: <Award className="h-8 w-8 text-frauwa-800" />,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our work, from material selection to final installation."
    },
    {
      icon: <Shield className="h-8 w-8 text-frauwa-800" />,
      title: "Quality",
      description: "We use only premium materials and proven techniques to ensure lasting quality in all our projects."
    },
    {
      icon: <Clock className="h-8 w-8 text-frauwa-800" />,
      title: "Timeliness",
      description: "We respect your timeline and work diligently to complete projects on schedule without compromising quality."
    },
    {
      icon: <Users className="h-8 w-8 text-frauwa-800" />,
      title: "Client Focus",
      description: "We listen closely to your needs and preferences, ensuring the final result exceeds your expectations."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About Us | Frauwa Roofs & Interior Decor</title>
        <meta name="description" content="Learn more about Frauwa Roofs & Interior Decor, our mission, values, and commitment to excellence in roofing and interior design across Nigeria." />
      </Helmet>
      
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="pt-40 pb-20 bg-frauwa-50">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-frauwa-100 text-frauwa-800 rounded-full text-sm font-medium mb-5 animate-reveal">
                Our Story
              </span>
              <h1 className="text-4xl md:text-6xl font-display tracking-tightest animate-reveal text-frauwa-800" style={{ transitionDelay: '100ms' }}>
                About Frauwa
              </h1>
              <p className="mt-6 text-lg text-muted-foreground animate-reveal" style={{ transitionDelay: '200ms' }}>
                Premium roofing and décor solutions delivered with craftsmanship and attention to detail.
              </p>
            </div>
          </div>
        </section>
        
        {/* About Content */}
        <section className="py-24">
          <div className="container mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 animate-reveal">
                <span className="inline-block px-4 py-1.5 bg-frauwa-100 text-frauwa-800 rounded-full text-sm font-medium mb-5">
                  Our Mission
                </span>
                <h2 className="text-3xl md:text-4xl font-display tracking-tightest text-frauwa-800 mb-6">
                  Transforming Spaces with Elegance & Durability
                </h2>
                <p className="text-muted-foreground mb-6">
                  At Frauwa Roofs & Interior Decor, we are committed to transforming residential and commercial spaces across Nigeria through premium roofing solutions and sophisticated interior and exterior décor services.
                </p>
                <p className="text-muted-foreground mb-6">
                  Founded on the principles of quality craftsmanship, innovative design, and client satisfaction, we have established ourselves as a trusted name in the industry, delivering projects that combine aesthetic appeal with functional excellence.
                </p>
                <p className="text-muted-foreground mb-6">
                  Our team of skilled professionals brings extensive expertise in aluminum roofing, Gerrard roofing, interior décor elements like UV marble sheets and 3D wall panels, and exterior features including window fabrication and wall claddings.
                </p>
                
                <div className="mt-8 space-y-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-frauwa-100 flex items-center justify-center flex-shrink-0 mr-4">
                      <Phone size={18} className="text-frauwa-800" />
                    </div>
                    <div>
                      <a href="https://wa.me/+2347083330386" className="text-frauwa-800 hover:underline">
                        +234 708 333 0386 (WhatsApp)
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-frauwa-100 flex items-center justify-center flex-shrink-0 mr-4">
                      <Mail size={18} className="text-frauwa-800" />
                    </div>
                    <div>
                      <a href="mailto:francolee66@yahoo.com" className="text-frauwa-800 hover:underline">
                        francolee66@yahoo.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values */}
        <section className="py-24 bg-frauwa-50">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-frauwa-100 text-frauwa-800 rounded-full text-sm font-medium mb-5 animate-reveal">
                Our Values
              </span>
              <h2 className="text-3xl md:text-5xl font-display tracking-tightest animate-reveal text-frauwa-800" style={{ transitionDelay: '100ms' }}>
                What Defines Us
              </h2>
              <p className="mt-6 text-lg text-muted-foreground animate-reveal" style={{ transitionDelay: '200ms' }}>
                These core principles guide our approach to every project and client relationship.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg p-8 shadow-card animate-reveal hover:shadow-lg transition-shadow duration-300"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="mb-6">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-frauwa-800 mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default About;
