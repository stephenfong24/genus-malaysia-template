import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility();
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <a
      href="#"
      onClick={scrollToTop}
      className={`scroll-to-top ${isVisible ? 'show' : ''}`}
      style={{ 
        backgroundColor: 'var(--color-accent, #FBBF24)', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} style={{ color: 'var(--color-primary, #111827)' }} strokeWidth={2.5} />
    </a>
  );
}
