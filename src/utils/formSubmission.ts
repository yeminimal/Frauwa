
import { ContactFormData } from "@/hooks/useContactForm";
import { toast } from "@/hooks/use-toast";

export const handleFormSubmit = async (
  e: React.FormEvent,
  formData: ContactFormData,
  setIsSubmitting: (value: boolean) => void,
  setIsSubmitted: (value: boolean) => void,
  resetForm: () => void
) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    // Get the form element
    const form = e.target as HTMLFormElement;
    const formDataObj = new FormData(form);

    // Send form data to Google Script
    await fetch(form.action, {
      method: "POST",
      body: formDataObj
    });

    // Create WhatsApp message URL
    const { name, email, phone, service, message } = formData;
    const formattedService = service || 'services';
    
    // Prepare WhatsApp details
    const whatsappNumber = "+2348025058426";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=New%20Cleaning%20Request:%0AName:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0APhone:%20${encodeURIComponent(phone)}%0AService:%20${encodeURIComponent(formattedService)}%0AMessage:%20${encodeURIComponent(message)}`;
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Message Sent!",
      description: "We've received your message. Redirecting you to WhatsApp...",
    });
    
    // Redirect to WhatsApp after a brief delay
    setTimeout(() => {
      window.open(whatsappURL, '_blank');
      resetForm();
    }, 1500);
  } catch (error) {
    console.error("Error submitting form:", error);
    setIsSubmitting(false);
    
    toast({
      title: "Error",
      description: "There was a problem sending your message. Please try again.",
      variant: "destructive",
    });
  }
};
