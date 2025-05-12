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

  // Updated project data with compressed and optimized images
  const projects = [
    {
      title: "Villa Interior Transformation",
      location: "Lagos, Nigeria",
      description: "Complete interior redesign featuring premium materials, custom lighting, and modern furnishings for a luxury residential villa.",
      image: "/lovable-uploads/VillaInteriorTransformation.jpg", // Updated image reference
      category: "Interior"
    },
    {
      title: "Commercial Complex Roofing",
      location: "Abuja, Nigeria",
      description: "Large-scale roofing installation using premium aluminum materials for a modern commercial complex, ensuring durability and style.",
      image: "/lovable-uploads/CommercialComplexRoofing.jpg", // Updated image reference
      category: "Roofing"
    },
    {
      title: "Executive Office Interior",
      location: "Port Harcourt, Nigeria",
      description: "Modern office space featuring custom partitioning, premium wall panels, and sophisticated design elements for a corporate client.",
      image: "/lovable-uploads/ExecutiveOfficeInterior.jpg", // Updated image reference
      category: "Interior"
    },
    {
      title: "Luxury Residential Exterior",
      location: "Lekki, Nigeria",
      description: "Comprehensive exterior renovation including premium cladding, custom windows, and architectural lighting for a luxury home.",
      image: "/lovable-uploads/LuxuryResidentialExterior.jpg", // Updated image reference
      category: "Exterior"
    },
    {
      title: "Modern Home Interior",
      location: "Victoria Island, Nigeria",
      description: "Complete interior transformation featuring UV marble sheets, 3D wall panels, and custom-designed living spaces.",
      image: "/lovable-uploads/ModernHomeInterior.jpg", // Updated image reference
      category: "Interior"
    },
    {
      title: "Premium Balcony Design",
      location: "Ikoyi, Nigeria",
      description: "Luxurious balcony renovation with premium railings, custom flooring, and integrated lighting for a high-end apartment.",
      image: "/lovable-uploads/PremiumBalconyDesign.jpg", // Updated image reference
      category: "Exterior"
    },
    {
      title: "Corporate Office Design",
      location: "Lagos, Nigeria",
      description: "Modern office interior featuring premium partitions, ergonomic workspaces, and sophisticated meeting areas.",
      image: "/lovable-uploads/CorporateOfficeDesign.jpg", // Updated image reference
      category: "Interior"
    },
    {
      title: "Residential Roofing Project",
      location: "Abuja, Nigeria",
      description: "Premium stone-coated roofing installation for a luxury residential property, combining durability with aesthetic appeal.",
      image: "/lovable-uploads/ResidentiaRoofing.jpg", // Updated image reference
      category: "Roofing"
    },
    {
      title: "Contemporary Villa Design",
      location: "Port Harcourt, Nigeria",
      description: "Comprehensive interior and exterior renovation featuring premium materials and modern design elements.",
      image: "/lovable-uploads/ContemporaryVillaDesign.jpg", // Updated image reference
      category: "Interior"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Our Projects | Frauwa Roofs & Interior Decor</title>
        <meta name="description" content="Explore our portfolio of completed projects featuring premium roofing, interior and exterior décor across Nigeria." />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5154438827317099" crossOrigin="anonymous"></script>
      </Helmet>
      
      <Navbar />
      <main>
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
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading={index > 5 ? "lazy" : "eager"}
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
