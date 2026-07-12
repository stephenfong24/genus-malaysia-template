import { useState, useEffect, useRef } from 'react';
import { Palette, Check } from 'lucide-react';

type ThemeType = 'Black' | 'Navy' | 'Gray';

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState<ThemeType>('Black');
  const containerRef = useRef<HTMLDivElement>(null);

  // Load and apply theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('genus-app-theme') as ThemeType;
    if (savedTheme && (savedTheme === 'Black' || savedTheme === 'Navy' || savedTheme === 'Gray')) {
      setActiveTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      applyTheme('Black');
    }
  }, []);

  // Handle click outside to close the widget panel
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const applyTheme = (theme: ThemeType) => {
    // Remove all previous theme classes
    document.body.classList.remove('theme-navy', 'theme-gray');
    
    // Add appropriate class
    if (theme === 'Navy') {
      document.body.classList.add('theme-navy');
    } else if (theme === 'Gray') {
      document.body.classList.add('theme-gray');
    }
    
    // Save to local storage
    localStorage.setItem('genus-app-theme', theme);
  };

  const selectTheme = (theme: ThemeType) => {
    setActiveTheme(theme);
    applyTheme(theme);
  };

  return (
    <div 
      className={`theme-switcher-container ${isOpen ? 'open' : ''}`} 
      ref={containerRef}
      id="themeSwitcherWidget"
    >
      {/* Floating Toggle Button */}
      <button 
        className="theme-switcher-btn" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle theme settings"
        title="Change Page Theme"
        id="themeToggleBtn"
      >
        <Palette size={20} className={isOpen ? 'rotate-12' : ''} style={{ transition: 'transform 0.3s' }} />
      </button>

      {/* Slide Out Panel */}
      <div className="theme-switcher-panel" id="themeSwitcherPanel">
        <h4 className="theme-switcher-title">Select Theme</h4>
        <div className="theme-option-list">
          {/* Option 1: Black */}
          <button 
            className={`theme-option-btn ${activeTheme === 'Black' ? 'active' : ''}`}
            onClick={() => selectTheme('Black')}
            id="themeOptBlack"
          >
            <div className="theme-color-dot dot-black"></div>
            <span className="theme-option-label">Black</span>
            {activeTheme === 'Black' && (
              <Check size={16} className="theme-active-check" />
            )}
          </button>

          {/* Option 2: Navy */}
          <button 
            className={`theme-option-btn ${activeTheme === 'Navy' ? 'active' : ''}`}
            onClick={() => selectTheme('Navy')}
            id="themeOptNavy"
          >
            <div className="theme-color-dot dot-navy"></div>
            <span className="theme-option-label">Navy</span>
            {activeTheme === 'Navy' && (
              <Check size={16} className="theme-active-check" />
            )}
          </button>

          {/* Option 3: Gray */}
          <button 
            className={`theme-option-btn ${activeTheme === 'Gray' ? 'active' : ''}`}
            onClick={() => selectTheme('Gray')}
            id="themeOptGray"
          >
            <div className="theme-color-dot dot-gray"></div>
            <span className="theme-option-label">Gray</span>
            {activeTheme === 'Gray' && (
              <Check size={16} className="theme-active-check" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
