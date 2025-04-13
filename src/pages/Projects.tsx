
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CallToAction from '../components/CallToAction';

const Projects = () => {
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

  // Project data
  const projects = [
    {
      title: "Modern Aluminum Roofing",
      location: "Lagos, Nigeria",
      description: "Premium aluminum roofing installation for a contemporary residential building, providing durability and aesthetic appeal.",
      image: "/public/lovable-uploads/8abc3fa8-7eb9-4beb-9aa3-ccbb907ab15c.png",
      category: "Roofing"
    },
    {
      title: "Executive Office Interior",
      location: "Abuja, Nigeria",
      description: "Sophisticated office space design with custom partitioning, 3D wall panels, and premium materials for a corporate client.",
      image: "/public/lovable-uploads/821faeae-e9ca-46d5-8324-f781e1f50ff9.png",
      category: "Interior"
    },
    {
      title: "Luxury Villa Exterior Cladding",
      location: "Port Harcourt, Nigeria",
      description: "Exterior wall cladding with premium materials enhancing the architectural beauty of this luxury residential property.",
      image: "/public/lovable-uploads/e38a15dd-c80b-430a-9612-2ef29325a382.png",
      category: "Exterior"
    },
    {
      title: "Commercial Building Roof Overhaul",
      location: "Ibadan, Nigeria",
      description: "Complete roofing renovation for a commercial complex, featuring Gerrard stone-coated roof tiles for durability and elegance.",
      image: "/public/lovable-uploads/4f292dc5-0606-4121-b0e4-125b4ab57e82.png",
      category: "Roofing"
    },
    {
      title: "Residential Interior Transformation",
      location: "Kano, Nigeria",
      description: "Complete interior redesign featuring UV marble sheets, sintered stones, and custom-designed 3D wall panels.",
      image: "/public/lovable-uploads/6528797f-7be1-4a59-be12-5ffe51ab25a3.png",
      category: "Interior"
    },
    {
      title: "Premium Balcony Design",
      location: "Calabar, Nigeria",
      description: "Elegant balcony design with stainless steel railings and custom window installations for a contemporary apartment.",
      image: "/public/lovable-uploads/b03eea3e-3350-419b-99a4-0843a045e52c.png",
      category: "Exterior"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Our Projects | Frauwa Roofs & Interior Decor</title>
        <meta name="description" content="Explore our portfolio of completed projects featuring premium roofing, interior and exterior décor across Nigeria." />
      </Helmet>
      
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="pt-40 pb-20 bg-frauwa-50">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-frauwa-100 text-frauwa-800 rounded-full text-sm font-medium mb-5 animate-reveal">
                Our Portfolio
              </span>
              <h1 className="text-4xl md:text-6xl font-display tracking-tightest animate-reveal text-frauwa-800" style={{ transitionDelay: '100ms' }}>
                Featured Projects
              </h1>
              <p className="mt-6 text-lg text-muted-foreground animate-reveal" style={{ transitionDelay: '200ms' }}>
                Browse our showcase of exceptional roofing, interior, and exterior décor projects delivered across Nigeria.
              </p>
            </div>
          </div>
        </section>
        
        {/* Projects Grid */}
        <section className="py-24">
          <div className="container mx-auto px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="rounded-lg overflow-hidden shadow-card animate-reveal hover:shadow-lg transition-shadow duration-300"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.image.startsWith("public/") ? project.image.replace("public/", "/") : project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-medium text-frauwa-800 bg-frauwa-100 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {project.location}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-frauwa-800 mb-2">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
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

export default Projects;
