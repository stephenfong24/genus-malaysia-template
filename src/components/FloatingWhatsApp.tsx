import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a 
      href="https://wa.me/60123456789?text=Hi%20Genus%20Malaysia,%20I%20would%20like%20to%20enquire%20about%20your%20car%20batteries." 
      target="_blank" 
      rel="noopener noreferrer"
      className="floating-whatsapp" 
      id="whatsappFloatingButton" 
      style={{ 
        backgroundColor: '#25D366',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none'
      }}
      aria-label="WhatsApp Support"
    >
      <MessageCircle size={24} style={{ color: '#ffffff' }} strokeWidth={2.5} />
      <div className="whatsapp-pulse" style={{ background: 'rgba(37, 211, 102, 0.4)' }}></div>
    </a>
  );
}
