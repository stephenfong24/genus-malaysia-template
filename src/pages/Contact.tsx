import { 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock 
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { useLanguage } from '../i18n';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <PageTransition>
      <section id="contact" className="contact-section section-padding" style={{ paddingTop: '140px', minHeight: '80vh' }}>
        <div className="container">
          <div className="row g-4 align-items-stretch">
            {/* Left: Corporate Information Card */}
            <div className="col-lg-6 col-md-12 reveal-on-scroll revealed" id="contactInfoColumn">
              <div className="contact-info-card d-flex flex-column justify-content-between h-100">
                <div>
                  <h1 className="contact-info-title">{t.contact.infoTitle}</h1>
                  <p className="text-muted mb-4">
                    {t.contact.infoDesc}
                  </p>
                  
                  <ul className="contact-details-list" id="contactDetails">
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
                        <h5>{t.contact.whatsappSupport}</h5>
                        <p>+60 16-262 7528</p>
                      </div>
                    </li>
                    {/* Email */}
                    <li className="contact-detail-item">
                      <div className="contact-detail-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Mail size={18} />
                      </div>
                      <div className="contact-detail-text">
                        <h5>{t.contact.corporateEmail}</h5>
                        <p>genusmalaysia@gmail.com</p>
                      </div>
                    </li>
                    {/* Address */}
                    <li className="contact-detail-item">
                      <div className="contact-detail-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <MapPin size={18} />
                      </div>
                      <div className="contact-detail-text">
                        <h5>{t.contact.corporateOffice}</h5>
                        <p>Jalan Taming 5, Taman Taming Jaya, 43200 Balakong, Selangor, Malaysia</p>
                      </div>
                    </li>
                    {/* Hours */}
                    <li className="contact-detail-item">
                      <div className="contact-detail-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Clock size={18} />
                      </div>
                      <div className="contact-detail-text">
                        <h5>{t.contact.businessHours}</h5>
                        <p className="mb-0">{t.contact.mondayFriday}</p>
                        <p className="mb-0">{t.contact.saturday}</p>
                        <p className="mb-0">{t.contact.sunday}</p>
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
                  <h3 className="contact-info-title">{t.contact.locationTitle}</h3>
                  <p className="text-muted mb-4">
                    {t.contact.locationDesc}
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
                    <span>{t.contact.openMaps}</span>
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
