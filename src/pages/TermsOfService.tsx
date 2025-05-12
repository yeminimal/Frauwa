import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const TermsOfService = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Terms of Service | Frauwa Roofs & Interior Decor</title>
        <meta name="description" content="Frauwa Roofs & Interior Decor terms of service - the conditions that govern your use of our services." />
      </Helmet>
      
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="container max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-primary mb-8">Terms of Service</h1>
          
          <div className="bg-white rounded-2xl shadow-card p-8 space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-brand-primary mb-3">Introduction</h2>
              <p className="text-muted-foreground">
                Welcome to Frauwa Roofs & Interior Decor. These Terms of Service govern your use of our website and services. By accessing our website or using our services, you agree to comply with and be bound by these terms. If you do not agree with these terms, please do not use our website or services.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-brand-primary mb-3">Services</h2>
              <p className="text-muted-foreground">
                Frauwa Roofs & Interior Decor provides premium roofing and interior decor solutions across West Africa. Our services include aluminum roofing, Gerrard roofing, UV marble sheets, custom interior designs, and more. The specific services to be provided will be agreed upon between you and Frauwa Roofs & Interior Decor during our consultation process.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-brand-primary mb-3">Booking and Scheduling</h2>
              <p className="text-muted-foreground">
                You may request our services through our website, by phone, or email. All bookings are subject to availability and confirmation by Frauwa Roofs & Interior Decor. We will make reasonable efforts to accommodate your requested date and time, but we cannot guarantee availability for all requests. Once your booking is confirmed, you will receive a confirmation email or message with the details of your scheduled service.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-brand-primary mb-3">Pricing and Payment</h2>
              <p className="text-muted-foreground">
                The prices for our services are as indicated on our website or as quoted to you directly. Prices may vary based on the size of the project, the materials required, and other factors. Payment is required to confirm your booking, unless otherwise agreed upon. We accept various payment methods, including bank transfers, mobile payment apps, and cash. All prices are inclusive of applicable taxes.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
