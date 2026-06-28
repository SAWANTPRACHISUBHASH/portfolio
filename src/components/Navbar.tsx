import React from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  activeSection: string;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  toggleTheme,
  activeSection,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#journey' },
    { name: 'Resume', href: '#resume' },
  ];

  return (
    <header className="navbar">
      <div className="nav-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <a href="#hero" className="logo">
          <span className="logo-symbol">&lt;PS/&gt;</span>
          <span className="logo-text">Prachi Sawant</span>
        </a>

        <nav className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="nav-link btn-contact-nav">
            Contact
          </a>
        </nav>

        <div className="nav-actions">
          <button
            id="theme-toggle"
            className="theme-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            <Moon className="theme-icon-dark" />
            <Sun className="theme-icon-light" />
          </button>

          <button
            id="mobile-menu-btn"
            className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="menu-open-icon" />
            <X className="menu-close-icon" />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        id="mobile-dropdown"
        className="mobile-dropdown"
        style={{ display: mobileMenuOpen ? 'flex' : 'none' }}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="mobile-nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <a
          href="#contact"
          className="mobile-nav-link btn-contact-mobile"
          onClick={() => setMobileMenuOpen(false)}
        >
          Contact
        </a>
      </div>
    </header>
  );
};
