import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/genus_logo_cropped_perfect.svg';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  };

  const isHome = location.pathname === '/';
  const showScrolled = isScrolled || !isHome;

  return (
    <nav 
      className={`navbar navbar-expand-lg custom-navbar fixed-top ${showScrolled ? 'scrolled' : ''}`} 
      id="mainNavbar"
    >
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/" onClick={closeMenu} id="brandLogo">
          <img 
            src={logo} 
            alt="GENUS Logo" 
            referrerPolicy="no-referrer" 
            style={{ height: '58px', width: 'auto', objectFit: 'contain' }} 
          />
        </Link>
        <button 
          className={`navbar-toggler ${isOpen ? '' : 'collapsed'}`} 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navMenu" 
          aria-expanded={isOpen} 
          aria-label="Toggle navigation" 
          id="navbarMenuButton"
        >
          <div className="navbar-toggler-icon-custom">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                to="/" 
                onClick={closeMenu}
                id="navLinkHome"
                end
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                to="/why-us" 
                onClick={closeMenu}
                id="navLinkWhy"
              >
                Why Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                to="/brands" 
                onClick={closeMenu}
                id="navLinkBrands"
              >
                Brands
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                to="/faq" 
                onClick={closeMenu}
                id="navLinkFaq"
              >
                FAQ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                to="/contact" 
                onClick={closeMenu}
                id="navLinkContact"
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <Link 
                className="btn btn-warning text-dark fw-bold rounded-pill px-4 d-inline-flex align-items-center" 
                to="/check-warranty" 
                onClick={closeMenu}
                id="headerBtnMaintenance"
                style={{ 
                  fontSize: '0.85rem', 
                  border: 'none', 
                  boxShadow: '0 4px 12px var(--color-accent-dim-strong, rgba(251, 191, 36, 0.25))', 
                  transition: 'all 0.3s ease',
                  paddingTop: '8px',
                  paddingBottom: '8px'
                }}
              >
                Check Warranty
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
