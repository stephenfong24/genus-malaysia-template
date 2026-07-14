import { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Check, ChevronDown, Globe2 } from 'lucide-react';
import logo from '../assets/images/genus_logo_company_enhanced_cropped.png';
import { useLanguage, type Language } from '../i18n';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const languageRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const languageOptions: { value: Language; label: string }[] = [
    { value: 'en', label: 'English' },
    { value: 'zh', label: '简体中文' },
  ];
  const currentLanguage = languageOptions.find((option) => option.value === language) ?? languageOptions[0];

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

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!languageRef.current?.contains(event.target as Node)) {
        setIsLanguageOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleLanguageChange = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    setIsLanguageOpen(false);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsLanguageOpen(false);
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
                {t.nav.home}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                to="/why-us" 
                onClick={closeMenu}
                id="navLinkWhy"
              >
                {t.nav.whyUs}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                to="/brands" 
                onClick={closeMenu}
                id="navLinkBrands"
              >
                {t.nav.brands}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                to="/faq" 
                onClick={closeMenu}
                id="navLinkFaq"
              >
                {t.nav.faq}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                to="/contact" 
                onClick={closeMenu}
                id="navLinkContact"
              >
                {t.nav.contact}
              </NavLink>
            </li>
            <li className="nav-item ms-lg-3 mt-3 mt-lg-0 d-none">
              <div className="language-dropdown" ref={languageRef}>
                <button
                  id="languageSelect"
                  className={`language-trigger ${isLanguageOpen ? 'active' : ''}`}
                  type="button"
                  onClick={() => setIsLanguageOpen((isOpen) => !isOpen)}
                  aria-label={t.nav.language}
                  aria-haspopup="menu"
                  aria-expanded={isLanguageOpen}
                >
                  <Globe2 size={17} aria-hidden="true" />
                  <span>{currentLanguage.label}</span>
                  <ChevronDown size={15} className="language-chevron" aria-hidden="true" />
                </button>
                <div className={`language-menu ${isLanguageOpen ? 'show' : ''}`} role="menu" aria-label={t.nav.language}>
                  {languageOptions.map((option) => (
                    <button
                      key={option.value}
                      className={`language-option ${language === option.value ? 'selected' : ''}`}
                      type="button"
                      role="menuitemradio"
                      aria-checked={language === option.value}
                      onClick={() => handleLanguageChange(option.value)}
                    >
                      <span>{option.label}</span>
                      {language === option.value && <Check size={15} aria-hidden="true" />}
                    </button>
                  ))}
                </div>
              </div>
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
                {t.nav.checkWarranty}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
