
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ContactFormData } from '@/hooks/useContactForm';

interface ContactFormFieldsProps {
  formData: ContactFormData;
  isSubmitting: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (value: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const ContactFormFields = ({
  formData,
  isSubmitting,
  handleChange,
  handleSelectChange,
  handleSubmit
}: ContactFormFieldsProps) => {
  
  // Handle body scroll lock when dropdown is open
  useEffect(() => {
    const handleSelectOpen = (event: CustomEvent) => {
      // Add class to body when select is opened
      document.body.classList.add('dropdown-open');
    };
    
    const handleSelectClose = (event: CustomEvent) => {
      // Remove class from body when select is closed
      document.body.classList.remove('dropdown-open');
    };
    
    // Add event listeners for select open/close events
    document.addEventListener('selectOpen', handleSelectOpen as EventListener);
    document.addEventListener('selectClose', handleSelectClose as EventListener);
    
    return () => {
      // Clean up event listeners
      document.removeEventListener('selectOpen', handleSelectOpen as EventListener);
      document.removeEventListener('selectClose', handleSelectClose as EventListener);
      // Ensure body class is removed when component unmounts
      document.body.classList.remove('dropdown-open');
    };
  }, []);
  
  return (
    <form 
      id="contactForm" 
      onSubmit={handleSubmit} 
      className="space-y-5"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1 text-frauwa-800">
          Full Name
        </label>
        <Input
          id="name"
          name="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border-frauwa-200 focus:border-frauwa-800"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1 text-frauwa-800">
            Email Address
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border-frauwa-200 focus:border-frauwa-800"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1 text-frauwa-800">
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="border-frauwa-200 focus:border-frauwa-800"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="service" className="block text-sm font-medium mb-1 text-frauwa-800">
          Service Interested In
        </label>
        <Select
          value={formData.service}
          onValueChange={handleSelectChange}
          onOpenChange={(open) => {
            // Dispatch custom events when select opens/closes
            if (open) {
              document.dispatchEvent(new CustomEvent('selectOpen'));
            } else {
              document.dispatchEvent(new CustomEvent('selectClose'));
            }
          }}
        >
          <SelectTrigger id="service" className="w-full border-frauwa-200 focus:border-frauwa-800">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent 
            className="radix-select-content"
            position="popper"
            sideOffset={5}
            align="start"
            avoidCollisions={false}
          >
            <SelectItem value="aluminum_roofing">Aluminum Roofing</SelectItem>
            <SelectItem value="gerrard_roofing">Gerrard Roofing</SelectItem>
            <SelectItem value="roof_cladding">Roof Cladding</SelectItem>
            <SelectItem value="rainwater_collectors">Rainwater Collectors</SelectItem>
            <SelectItem value="uv_marble">UV Marble Sheets</SelectItem>
            <SelectItem value="wpc_sheets">WPC Sheets</SelectItem>
            <SelectItem value="sintered_stones">Sintered Stones</SelectItem>
            <SelectItem value="aluco_panels">Aluco Panels</SelectItem>
            <SelectItem value="3d_wall_panels">3D Wall Panels</SelectItem>
            <SelectItem value="office_design">Office Space Design & Partitioning</SelectItem>
            <SelectItem value="window_fabrication">Window Fabrication</SelectItem>
            <SelectItem value="window_installation">Window Installation</SelectItem>
            <SelectItem value="wall_cutting">Wall Cutting</SelectItem>
            <SelectItem value="stainless_railings">Stainless Steel Railings</SelectItem>
            <SelectItem value="balcony_design">Balcony Design</SelectItem>
            <SelectItem value="exterior_cladding">Exterior Wall Claddings</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1 text-frauwa-800">
          Your Message
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your project requirements"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          className="border-frauwa-200 focus:border-frauwa-800"
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-frauwa-800 hover:bg-frauwa-900 text-white" 
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactFormFields;
