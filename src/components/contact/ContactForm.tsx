
import React from 'react';
import { useContactForm } from '@/hooks/useContactForm';
import FormSuccessMessage from './FormSuccessMessage';
import ContactFormFields from './ContactFormFields';
import { handleFormSubmit } from '@/utils/formSubmission';
import './contact-form.css';

const ContactForm = () => {
  const {
    formData,
    isSubmitting,
    isSubmitted,
    setIsSubmitting,
    setIsSubmitted,
    resetForm,
    updateField
  } = useContactForm();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updateField(name, value);
  };
  
  const handleSelectChange = (value: string) => {
    updateField('service', value);
  };
  
  const onSubmit = (e: React.FormEvent) => {
    handleFormSubmit(e, formData, setIsSubmitting, setIsSubmitted, resetForm);
  };
  
  return (
    <div className="bg-white rounded-2xl shadow-card p-6 md:p-8 form-container">
      {isSubmitted ? (
        <FormSuccessMessage />
      ) : (
        <ContactFormFields
          formData={formData}
          isSubmitting={isSubmitting}
          handleChange={handleChange}
          handleSelectChange={handleSelectChange}
          handleSubmit={onSubmit}
        />
      )}
    </div>
  );
};

export default ContactForm;
