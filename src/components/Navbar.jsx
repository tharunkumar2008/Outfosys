import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <a href="#" className="brand-logo" onClick={closeMenu} aria-label="OutfoSys Home">
          <div className="logo-symbol">
            <svg width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="10" stroke="#B7F34A" strokeWidth="3" strokeDasharray="40 20" />
              <circle cx="24" cy="24" r="10" stroke="#8A42FF" strokeWidth="3" strokeDasharray="35 25" />
              <circle cx="20" cy="20" r="3.5" fill="#B7F34A" />
            </svg>
          </div>
          <div className="logo-text-group">
            <span className="brand-name">OUTFOSYS</span>
            <span className="brand-tagline">CREATE • CAPTURE • CONNECT</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <a href="#services" className="nav-link">
            <span>Services</span>
          </a>
          <a href="#portfolio" className="nav-link">
            <span>Work</span>
          </a>
          <a href="#about" className="nav-link">
            <span>About</span>
          </a>
          <a href="#contact" className="nav-link">
            <span>Contact</span>
          </a>
        </nav>

        {/* Header Right Actions */}
        <div className="nav-actions">
          <a 
            href="https://wa.me/916379229528" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-contact-pill"
            title="Chat directly on WhatsApp"
          >
            <span className="pulse-dot"></span>
            <span className="contact-number">+91 6379229528</span>
          </a>

          <a href="#contact" className="btn btn-primary nav-cta">
            <span>Start Project</span>
            <ArrowUpRight size={16} />
          </a>

          {/* Mobile Hamburger Button */}
          <button 
            type="button" 
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-links">
          <a href="#services" onClick={closeMenu} className="mobile-link">
            Services
          </a>
          <a href="#portfolio" onClick={closeMenu} className="mobile-link">
            Selected Work
          </a>
          <a href="#about" onClick={closeMenu} className="mobile-link">
            About Agency
          </a>
          <a href="#contact" onClick={closeMenu} className="mobile-link">
            Contact Us
          </a>
          
          <div className="mobile-menu-divider"></div>
          
          <div className="mobile-contact-group">
            <a href="tel:+916379229528" className="mobile-phone-link">
              <Phone size={18} />
              <span>+91 6379229528</span>
            </a>
            <a 
              href="https://wa.me/916379229528" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-whatsapp mobile-wa-btn"
              onClick={closeMenu}
            >
              <MessageSquare size={18} />
              <span>WhatsApp Us Directly</span>
            </a>
            <a 
              href="#contact" 
              className="btn btn-primary"
              onClick={closeMenu}
            >
              <span>Start Your Project</span>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
