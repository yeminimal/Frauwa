import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Terms of Service | Frauwa Roofs & Interior Decor</title>
        <meta name="description" content="Frauwa Roofs & Interior Decor terms of service - the conditions that govern your use of our roofing and décor services." />
      </Helmet>
      
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="container max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-frauwa-800 mb-8">Terms of Service</h1>
          
          <div className="bg-white rounded-2xl shadow-card p-8 space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-frauwa-800 mb-3">Introduction</h2>
              <p className="text-muted-foreground">
                Welcome to Frauwa Roofs & Interior Decor. These Terms of Service govern your use of our website and services. By accessing our website or using our services, you agree to comply with and be bound by these terms.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-frauwa-800 mb-3">Services</h2>
              <p className="text-muted-foreground">
                Frauwa Roofs & Interior Decor provides premium roofing solutions and sophisticated interior & exterior décor services across Nigeria. Our services include aluminum roofing, gerrard roofing, UV marble sheets installation, interior design, and exterior décor services.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-frauwa-800 mb-3">Booking and Scheduling</h2>
              <p className="text-muted-foreground">
                You may request our services through our website, by phone, or email. All bookings are subject to availability and confirmation by Frauwa Roofs & Interior Decor. We will make reasonable efforts to accommodate your requested date and time, but we cannot guarantee availability for all requests. Once your booking is confirmed, you will receive a confirmation email or message with the details of your scheduled service.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-frauwa-800 mb-3">Pricing and Payment</h2>
              <p className="text-muted-foreground">
                The prices for our services are as indicated on our website or as quoted to you directly. Prices may vary based on the size of the property, the scope of work, and other factors. Payment is required to confirm your booking, unless otherwise agreed upon. We accept various payment methods, including bank transfers, mobile payment apps, and cash. All prices are inclusive of applicable taxes.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-frauwa-800 mb-3">Cancellation and Rescheduling</h2>
              <p className="text-muted-foreground">
                If you need to cancel or reschedule a confirmed booking, please notify us at least 24 hours in advance. Late cancellations (less than 24 hours before the scheduled service) may be subject to a cancellation fee of up to 50% of the service cost. No-shows (failure to provide access to the property at the scheduled time) may be charged the full service cost. Frauwa Roofs & Interior Decor reserves the right to cancel or reschedule a service due to unforeseen circumstances, such as severe weather conditions or staff illness. In such cases, we will make every effort to notify you as soon as possible and offer alternative dates or a full refund.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-frauwa-800 mb-3">Client Responsibilities</h2>
              <p className="text-muted-foreground mb-3">
                To ensure the efficient and effective delivery of our services, we ask that you:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                <li>Provide clear access to the property at the scheduled time</li>
                <li>Inform us of any special instructions or areas that require specific attention</li>
                <li>Secure or remove any valuable or fragile items before our arrival</li>
                <li>Inform us of any pets on the premises</li>
                <li>Notify us of any known hazards or safety concerns</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-frauwa-800 mb-3">Quality Guarantee</h2>
              <p className="text-muted-foreground">
                Frauwa Roofs & Interior Decor is committed to providing high-quality cleaning services. If you are not satisfied with our services, please notify us within 24 hours of service completion, and we will arrange for a re-clean of the areas in question at no additional cost. This guarantee does not apply to issues that were not included in the original scope of work or were not pointed out during the initial service.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-frauwa-800 mb-3">Liability</h2>
              <p className="text-muted-foreground">
                While we take great care when providing our services, Frauwa Roofs & Interior Decor is not liable for any accidental damage to property that may occur during the normal course of cleaning, except in cases of gross negligence. We maintain appropriate insurance coverage for our operations. Any claims for damages must be reported to us within 24 hours of service completion. We are not liable for any pre-existing conditions or damages.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-frauwa-800 mb-3">Confidentiality</h2>
              <p className="text-muted-foreground">
                Frauwa Roofs & Interior Decor respects your privacy and confidentiality. We will not disclose any information about your property or use any photographs of your property without your explicit permission, except as required by law.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-frauwa-800 mb-3">Changes to Terms</h2>
              <p className="text-muted-foreground">
                Frauwa Roofs & Interior Decor reserves the right to modify these Terms of Service at any time. Any changes will be effective immediately upon posting on our website. Your continued use of our services after any changes to these terms constitutes your acceptance of the modified terms.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-frauwa-800 mb-3">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions or concerns about these Terms of Service, please contact us at:
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

export default TermsOfService;
