
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { WhatsappIcon } from '../icons';
import ContactInfoItem from './ContactInfoItem';

const ContactInfo = () => {
  const contactInfo = [
    {
      icon: <WhatsappIcon size={18} className="text-frauwa-800" />,
      title: "WhatsApp",
      content: "+234 708 333 0386",
      link: "https://wa.me/+2347083330386"
    },
    {
      icon: <Phone size={18} className="text-frauwa-800" />,
      title: "Call Us",
      content: "+234 708 333 0386",
      link: "tel:+2347083330386"
    },
    {
      icon: <Mail size={18} className="text-frauwa-800" />,
      title: "Email",
      content: "francolee66@yahoo.com",
      link: "mailto:francolee66@yahoo.com"
    },
    {
      icon: <MapPin size={18} className="text-frauwa-800" />,
      title: "Service Area",
      content: "We deliver anywhere within Nigeria"
    }
  ];

  return (
    <div className="mt-10 space-y-6">
      {contactInfo.map((item, index) => (
        <ContactInfoItem 
          key={index} 
          icon={item.icon} 
          title={item.title} 
          content={item.content} 
          link={item.link}
        />
      ))}
    </div>
  );
};

export default ContactInfo;
