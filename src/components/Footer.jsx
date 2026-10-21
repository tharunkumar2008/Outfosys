import React from 'react';
import { Phone, MessageSquare, ArrowUp, Heart } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="footer-logo">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="10" stroke="#B7F34A" strokeWidth="3" strokeDasharray="40 20" />
                <circle cx="24" cy="24" r="10" stroke="#8A42FF" strokeWidth="3" strokeDasharray="35 25" />
                <circle cx="20" cy="20" r="3.5" fill="#B7F34A" />
              </svg>
              <div className="footer-logo-text">
                <span className="footer-company-name">OUTFOSYS</span>
                <span className="footer-company-tagline">CREATE. CAPTURE. CONNECT.</span>
              </div>
            </div>

            <p className="footer-tagline-desc">
              A premium creative digital company combining modern web design, AI-powered video production, and professional visual storytelling.
            </p>

            <div className="footer-direct-contacts">
              <a href="tel:+916379229528" className="footer-contact-link">
                <Phone size={16} color="#B7F34A" />
                <span>+91 6379229528</span>
              </a>
              <a 
                href="https://wa.me/916379229528" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-contact-link wa-accent"
              >
                <MessageSquare size={16} color="#25D366" />
                <span>WhatsApp: +91 6379229528</span>
              </a>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#hero">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Selected Work</a></li>
              <li><a href="#about">About Agency</a></li>
              <li><a href="#contact">Contact & Enquiry</a></li>
            </ul>
          </div>

          {/* Services List */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links-list">
              <li><a href="#services">Website Creation</a></li>
              <li><a href="#services">AI Video Creation</a></li>
              <li><a href="#services">AI Advertisement Creation</a></li>
              <li><a href="#services">Video Editing</a></li>
              <li><a href="#services">Event & Video Coverage</a></li>
            </ul>
          </div>

          {/* Featured Showcase */}
          <div className="footer-showcase-col">
            <h4 className="footer-col-title">Premier Project</h4>
            <div className="footer-project-snippet">
              <span className="snippet-badge">Live Case Study</span>
              <h5 className="snippet-title">Amman Wood Works</h5>
              <p className="snippet-desc">Bespoke solid wood furniture studio with procedural real-time 3D customizer.</p>
              <div className="snippet-links-row">
                <a href="#portfolio" className="snippet-link">Interactive Demo</a>
                <span className="snippet-divider">•</span>
                <a 
                  href="https://amman-wood-works.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="snippet-link live-accent"
                >
                  Live Site ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {new Date().getFullYear()} OutfoSys. All rights reserved. High-impact creative digital engineering.
          </p>

          <button 
            type="button" 
            className="back-to-top-btn" 
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
