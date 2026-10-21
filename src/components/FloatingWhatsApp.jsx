import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import './FloatingWhatsApp.css';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="floating-wa-container">
      {/* Friendly Tooltip */}
      {showTooltip && (
        <div className="floating-wa-tooltip">
          <span>Need a quick quote? Chat with us!</span>
          <button 
            type="button" 
            className="tooltip-close" 
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            aria-label="Close tooltip"
          >
            <X size={12} />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href="https://wa.me/916379229528?text=Hi%20OutfoSys,%20I%20would%20like%20to%20discuss%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-wa-btn"
        aria-label="Direct WhatsApp Chat with OutfoSys (+91 6379229528)"
        title="WhatsApp: +91 6379229528"
      >
        <div className="wa-btn-pulse"></div>
        <MessageSquare size={26} className="wa-icon" />
      </a>
    </div>
  );
}
