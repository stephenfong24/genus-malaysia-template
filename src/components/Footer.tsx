import { Link } from 'react-router-dom';
import { 
  Facebook, 
  MessageCircle, 
  ChevronRight, 
  Phone, 
  Mail, 
  Clock 
} from 'lucide-react';
import footerLogo from '../assets/images/genus_logo_company_enhanced_cropped.png';
import { useLanguage } from '../i18n';

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  };

  return (
    <footer className="premium-footer animate-on-scroll fade-up">
      <div className="container">
        <div className="row g-4">
          {/* Column 1 - Brand Info */}
          <div className="col-lg-4 col-md-12" id="footerColBrand">
            <div className="footer-brand">
              <img 
                src={footerLogo} 
                alt="GENUS MALAYSIA" 
                referrerPolicy="no-referrer" 
                style={{ height: '52px', width: 'auto', objectFit: 'contain' }} 
              />
            </div>
            <p className="footer-desc">
              {t.footer.desc}
            </p>
            <div className="footer-socials" id="footerSocials">
              <a href="https://www.facebook.com/profile.php?id=61585586459271" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://wa.me/60162627528" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div className="col-lg-2 col-md-4 col-6" id="footerColLinks">
            <h4 className="footer-widget-title">{t.footer.quickLinks}</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/" onClick={scrollToTop}>
                  <ChevronRight size={14} className="footer-icon-accent d-inline me-1" /> {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/why-us" onClick={scrollToTop}>
                  <ChevronRight size={14} className="footer-icon-accent d-inline me-1" /> {t.nav.whyUs}
                </Link>
              </li>
              <li>
                <Link to="/brands" onClick={scrollToTop}>
                  <ChevronRight size={14} className="footer-icon-accent d-inline me-1" /> {t.nav.brands}
                </Link>
              </li>
              <li>
                <Link to="/faq" onClick={scrollToTop}>
                  <ChevronRight size={14} className="footer-icon-accent d-inline me-1" /> {t.nav.faq}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Services */}
          <div className="col-lg-3 col-md-4 col-6" id="footerColServices">
            <h4 className="footer-widget-title">{t.footer.services}</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/login" onClick={scrollToTop}>
                  <ChevronRight size={14} className="footer-icon-accent d-inline me-1" /> {t.footer.login}
                </Link>
              </li>
              <li>
                <Link to="/check-warranty" onClick={scrollToTop}>
                  <ChevronRight size={14} className="footer-icon-accent d-inline me-1" /> {t.nav.checkWarranty}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Contact Info */}
          <div className="col-lg-3 col-md-4 col-12" id="footerColContact">
            <h4 className="footer-widget-title">{t.footer.contactCenter}</h4>
            <div className="footer-contact-item d-flex align-items-center mb-2">
              <div className="d-flex align-items-center justify-content-center flex-shrink-0 footer-icon-accent" style={{ width: '24px', height: '24px' }}>
                <Phone size={18} />
              </div>
              <span>{t.footer.office}</span>
            </div>
            <div className="footer-contact-item d-flex align-items-center mb-2">
              <div className="d-flex align-items-center justify-content-center flex-shrink-0 footer-icon-accent" style={{ width: '24px', height: '24px' }}>
                <MessageCircle size={18} />
              </div>
              <span>{t.footer.whatsapp}</span>
            </div>
            <div className="footer-contact-item d-flex align-items-center mb-2">
              <div className="d-flex align-items-center justify-content-center flex-shrink-0 footer-icon-accent" style={{ width: '24px', height: '24px' }}>
                <Mail size={18} />
              </div>
              <span>genusmalaysia@gmail.com</span>
            </div>
            <div className="footer-contact-item d-flex align-items-start mb-2">
              <div className="d-flex align-items-center justify-content-center flex-shrink-0 footer-icon-accent mt-0.5" style={{ width: '24px', height: '24px' }}>
                <Clock size={18} />
              </div>
              <span>{t.footer.hours}</span>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="footer-bottom text-center text-md-start d-md-flex align-items-center justify-content-between" id="footerBottomWrap">
          <p className="mb-0">{t.footer.rights}</p>
          <p className="mb-0 mt-2 mt-md-0">{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
