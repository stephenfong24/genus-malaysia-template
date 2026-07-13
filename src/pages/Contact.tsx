import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock 
} from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function Contact() {
  return (
    <PageTransition>
      <section id="contact" className="contact-section section-padding" style={{ paddingTop: '140px', minHeight: '80vh' }}>
        <div className="container">
          <div className="row g-4 align-items-stretch">
            {/* Left: Corporate Information Card */}
            <div className="col-lg-6 col-md-12 reveal-on-scroll revealed" id="contactInfoColumn">
              <div className="contact-info-card d-flex flex-column justify-content-between h-100">
                <div>
                  <h3 className="contact-info-title">Headquarters Info</h3>
                  <p className="text-muted mb-4">
                    Have questions or looking to purchase high-performance batteries? Get in touch with our expert sales team during our business hours.
                  </p>
                  
                  <ul className="contact-details-list" id="contactDetails">
                    {/* Phone */}
                    <li className="contact-detail-item">
                      <div className="contact-detail-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Phone size={18} />
                      </div>
                      <div className="contact-detail-text">
                        <h5>General Office Hotline</h5>
                        <p>+603-8962 2111</p>
                      </div>
                    </li>
                    {/* WhatsApp */}
                    <li className="contact-detail-item">
                      <div 
                        className="contact-detail-icon" 
                        style={{ 
                          backgroundColor: 'rgba(37, 211, 102, 0.05)', 
                          color: '#25D366',
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center' 
                        }}
                      >
                        <MessageCircle size={18} />
                      </div>
                      <div className="contact-detail-text">
                        <h5>WhatsApp Support</h5>
                        <p>+60 16-262 7528</p>
                      </div>
                    </li>
                    {/* Email */}
                    <li className="contact-detail-item">
                      <div className="contact-detail-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Mail size={18} />
                      </div>
                      <div className="contact-detail-text">
                        <h5>Corporate Email</h5>
                        <p>info@genusmalaysia.com</p>
                      </div>
                    </li>
                    {/* Address */}
                    <li className="contact-detail-item">
                      <div className="contact-detail-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <MapPin size={18} />
                      </div>
                      <div className="contact-detail-text">
                        <h5>Corporate Office</h5>
                        <p>Jalan Taming 5, Taman Taming Jaya, 43200 Balakong, Selangor, Malaysia</p>
                      </div>
                    </li>
                    {/* Hours */}
                    <li className="contact-detail-item">
                      <div className="contact-detail-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Clock size={18} />
                      </div>
                      <div className="contact-detail-text">
                        <h5>Business Hours</h5>
                        <p className="mb-0">Mon – Fri: 9:00 AM – 6:00 PM</p>
                        <p className="mb-0">Sat: 9:00 AM – 1:00 PM</p>
                        <p className="mb-0">Sun: Closed</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Right: Redesigned Map and Navigation Card */}
            <div className="col-lg-6 col-md-12 reveal-on-scroll revealed stagger-1" id="contactMapColumn">
              <div className="contact-info-card d-flex flex-column justify-content-between h-100">
                <div>
                  <h3 className="contact-info-title">Headquarters Location</h3>
                  <p className="text-muted mb-4">
                    Our main warehouse and showroom is strategically situated in Balakong, allowing convenient distribution across Selangor and Kuala Lumpur.
                  </p>
                </div>
                <div 
                  className="contact-map-wrapper flex-grow-1 my-3" 
                  style={{ 
                    minHeight: '280px', 
                    borderRadius: 'var(--border-radius-md)', 
                    overflow: 'hidden', 
                    boxShadow: 'var(--shadow-soft)', 
                    border: '1px solid var(--color-gray-200)' 
                  }}
                >
                  <iframe 
                    src="https://maps.google.com/maps?q=GENUS%20MALAYSIA%20SDN%20BHD,%20Jalan%20Taming%205,%20Taman%20Taming%20Jaya,%2043200%20Balakong,%20Selangor&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    title="GENUS Headquarters Google Maps"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="mt-2">
                  <a 
                    href="https://maps.app.goo.gl/q2Ma9zopnxpLzdsM9?g_st=aw" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark btn-ripple w-100 py-3 fw-semibold d-flex align-items-center justify-content-center gap-2"
                  >
                    <MapPin size={18} className="text-danger" />
                    <span>Open in Google Maps App</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
