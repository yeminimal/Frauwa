
import { useState } from 'react';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
    setIsSubmitted(false);
  };
  
  const updateField = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  return {
    formData,
    isSubmitting,
    isSubmitted,
    setFormData,
    setIsSubmitting,
    setIsSubmitted,
    resetForm,
    updateField,
  };
};
