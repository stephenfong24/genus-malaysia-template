import { Link } from 'react-router-dom';
import { 
  Facebook, 
  MessageCircle, 
  ChevronRight, 
  Phone, 
  Mail, 
  Clock 
} from 'lucide-react';
import footerLogo from '../assets/images/genus_logo_cropped_perfect.svg';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  };

  return (
    <footer className="premium-footer">
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
              GENUS MALAYSIA SDN BHD is a trusted car battery expert and premier battery wholesaler in Malaysia, specialising in high-performance Genus and K-viron car batteries with calcium-silver & EFB Glass mat technology.
            </p>
            <div className="footer-socials" id="footerSocials">
              <a href="https://www.facebook.com/genusmalaysia" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div className="col-lg-2 col-md-4 col-6" id="footerColLinks">
            <h4 className="footer-widget-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/" onClick={scrollToTop}>
                  <ChevronRight size={14} className="footer-icon-accent d-inline me-1" /> Home
                </Link>
              </li>
              <li>
                <Link to="/why-us" onClick={scrollToTop}>
                  <ChevronRight size={14} className="footer-icon-accent d-inline me-1" /> Why Us
                </Link>
              </li>
              <li>
                <Link to="/brands" onClick={scrollToTop}>
                  <ChevronRight size={14} className="footer-icon-accent d-inline me-1" /> Brands
                </Link>
              </li>
              <li>
                <Link to="/faq" onClick={scrollToTop}>
                  <ChevronRight size={14} className="footer-icon-accent d-inline me-1" /> FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Services */}
          <div className="col-lg-3 col-md-4 col-6" id="footerColServices">
            <h4 className="footer-widget-title">Services</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/login" onClick={scrollToTop}>
                  <ChevronRight size={14} className="footer-icon-accent d-inline me-1" /> Login
                </Link>
              </li>
              <li>
                <Link to="/check-maintenance" onClick={scrollToTop}>
                  <ChevronRight size={14} className="footer-icon-accent d-inline me-1" /> Check Maintenance
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Contact Info */}
          <div className="col-lg-3 col-md-4 col-12" id="footerColContact">
            <h4 className="footer-widget-title">Contact Center</h4>
            <div className="footer-contact-item d-flex align-items-center mb-2">
              <div className="d-flex align-items-center justify-content-center flex-shrink-0 footer-icon-accent" style={{ width: '24px', height: '24px' }}>
                <Phone size={18} />
              </div>
              <span>Office: +603-8962 2111</span>
            </div>
            <div className="footer-contact-item d-flex align-items-center mb-2">
              <div className="d-flex align-items-center justify-content-center flex-shrink-0 footer-icon-accent" style={{ width: '24px', height: '24px' }}>
                <MessageCircle size={18} />
              </div>
              <span>WhatsApp: +60 12-345 6789</span>
            </div>
            <div className="footer-contact-item d-flex align-items-center mb-2">
              <div className="d-flex align-items-center justify-content-center flex-shrink-0 footer-icon-accent" style={{ width: '24px', height: '24px' }}>
                <Mail size={18} />
              </div>
              <span>info@genusmalaysia.com</span>
            </div>
            <div className="footer-contact-item d-flex align-items-start mb-2">
              <div className="d-flex align-items-center justify-content-center flex-shrink-0 footer-icon-accent mt-0.5" style={{ width: '24px', height: '24px' }}>
                <Clock size={18} />
              </div>
              <span>Mon-Fri: 9am-6pm | Sat: 9am-1pm</span>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="footer-bottom text-center text-md-start d-md-flex align-items-center justify-content-between" id="footerBottomWrap">
          <p className="mb-0">&copy; 2026 GENUS MALAYSIA SDN BHD (1290354-T). All Rights Reserved.</p>
          <p className="mb-0 mt-2 mt-md-0">Powering Malaysia's Roadways with Excellence.</p>
        </div>
      </div>
    </footer>
  );
}
