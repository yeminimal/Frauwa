
import React from 'react';
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
  return (
    <form 
      id="cleaningForm" 
      action="https://script.google.com/macros/s/AKfycbyLa1pe5yUdZD7pDd0tOQAcSosUlWxop2oRPGOOcFuXK2_LCyltP69CNy0DaVbD0n2t/exec" 
      method="POST" 
      onSubmit={handleSubmit} 
      className="space-y-5"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Full Name
        </label>
        <Input
          id="name"
          name="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
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
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="service" className="block text-sm font-medium mb-1">
          Service Interested In
        </label>
        <Select
          value={formData.service}
          onValueChange={handleSelectChange}
        >
          <SelectTrigger id="service" className="w-full">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent 
            className="bg-white border border-gray-200 shadow-lg max-h-[300px] overflow-y-auto z-50"
            position="item-aligned"
            sideOffset={5}
            align="start"
          >
            <SelectItem value="general">General Cleaning Services</SelectItem>
            <SelectItem value="facility">Facility Management</SelectItem>
            <SelectItem value="moveInOut">Move In/Move Out Services</SelectItem>
            <SelectItem value="construction">Post Construction Cleaning</SelectItem>
            <SelectItem value="renovation">Renovation Cleaning</SelectItem>
            <SelectItem value="janitorial">Janitorial Services</SelectItem>
            <SelectItem value="fumigation">Fumigation</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Your Message
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your cleaning needs"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-brand-primary hover:bg-brand-secondary text-white" 
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactFormFields;
