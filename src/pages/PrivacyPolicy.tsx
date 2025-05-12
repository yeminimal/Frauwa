import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const PrivacyPolicy = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Privacy Policy | Frauwa Roofs & Interior Decor</title>
        <meta name="description" content="Frauwa Roofs & Interior Decor privacy policy - how we handle your data and protect your privacy." />
      </Helmet>
      
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="container max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-primary mb-8">Privacy Policy</h1>
          
          <div className="bg-white rounded-2xl shadow-card p-8 space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-brand-primary mb-3">Introduction</h2>
              <p className="text-muted-foreground">
                At Frauwa Roofs & Interior Decor, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully to understand our practices regarding your personal data.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-brand-primary mb-3">Information We Collect</h2>
              <p className="text-muted-foreground mb-3">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Contact us through our website</li>
                <li>Request a quote for our services</li>
                <li>Engage us for roofing or interior decor services</li>
                <li>Fill a contact form</li>
                <li>Subscribe to our newsletter</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                This information may include your name, email address, phone number, address, payment information, and any other details you choose to provide.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-brand-primary mb-3">How We Use Your Information</h2>
              <p className="text-muted-foreground mb-3">
                We use the information we collect for various purposes, including to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Respond to your inquiries and fulfill your requests</li>
                <li>Send administrative information, such as project updates</li>
                <li>Send marketing communications, if you have opted in to receive them</li>
                <li>Personalize your experience on our website</li>
                <li>Monitor and analyze usage patterns and trends</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
