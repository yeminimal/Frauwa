
import React from 'react';
import { Check } from 'lucide-react';

const FormSuccessMessage = () => {
  return (
    <div className="text-center py-6">
      <div className="mx-auto w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mb-4">
        <Check className="text-brand-primary" size={32} />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-brand-primary">Thank You!</h3>
      <p className="text-muted-foreground">
        Your message has been sent successfully. We'll get back to you shortly.
      </p>
    </div>
  );
};

export default FormSuccessMessage;
