import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Privacy Policy | Frauwa Roofs & Interior Decor</title>
        <meta name="description" content="Learn about how Frauwa Roofs & Interior Decor protects your privacy and handles your information." />
      </Helmet>
      
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="container max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-frauwa-800 mb-8">Privacy Policy</h1>
          
          <div className="bg-white rounded-2xl shadow-card p-8 space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-frauwa-800 mb-3">Introduction</h2>
              <p className="text-muted-foreground">
                At Frauwa Roofs & Interior Decor, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you engage with our roofing and décor services.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-frauwa-800 mb-3">Information We Collect</h2>
              <p className="text-muted-foreground mb-3">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Request a quote for roofing or décor services</li>
                <li>Schedule a consultation</li>
                <li>Contact us through our website</li>
                <li>Share project requirements and specifications</li>
                <li>Provide property access information for service delivery</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-frauwa-800 mb-3">How We Use Your Information</h2>
              <p className="text-muted-foreground mb-3">
                We use the information we collect for various purposes, including to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Respond to your inquiries and fulfill your requests</li>
                <li>Send administrative information, such as appointment confirmations</li>
                <li>Send marketing communications, if you have opted in to receive them</li>
                <li>Personalize your experience on our website</li>
                <li>Monitor and analyze usage patterns and trends</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-frauwa-800 mb-3">Information Sharing and Disclosure</h2>
              <p className="text-muted-foreground">
                We respect your privacy and will not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with trusted third parties who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect our or others' rights, property, or safety.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-frauwa-800 mb-3">Data Security</h2>
              <p className="text-muted-foreground">
                We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights and are required to keep the information confidential. When you place orders or access your personal information, we offer the use of a secure server. All sensitive information you supply is encrypted via Secure Socket Layer (SSL) technology.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-frauwa-800 mb-3">Your Rights</h2>
              <p className="text-muted-foreground">
                You have the right to access, correct, or delete your personal information. If you would like to exercise any of these rights, please contact us using the information provided below. You may also opt-out of receiving marketing communications from us by following the unsubscribe instructions included in these communications.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-frauwa-800 mb-3">Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date and the updated version will be effective as soon as it is accessible. We encourage you to review this Privacy Policy regularly to stay informed about how we are protecting your information.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-frauwa-800 mb-3">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-2 text-frauwa-800">
                francolee66@yahoo.com<br />
                +234 708 333 0386
              </p>
            </section>
            
            <p className="text-sm text-muted-foreground border-t border-gray-100 pt-4 mt-6">
              Last Updated: April 2025
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
