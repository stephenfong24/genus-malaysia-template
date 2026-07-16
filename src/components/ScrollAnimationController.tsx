import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n';

const ANIMATION_SELECTOR = '.animate-on-scroll, .reveal-on-scroll';

export default function ScrollAnimationController() {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = Array.from(document.querySelectorAll<HTMLElement>(ANIMATION_SELECTOR));

    root.classList.add('motion-ready');

    if (reduceMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.12,
      },
    );

    elements.forEach((element) => {
      element.classList.remove('is-visible');
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [location.pathname, language]);

  return null;
}
