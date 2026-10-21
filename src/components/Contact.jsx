import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  ArrowRight, 
  Mail, 
  CheckCircle2, 
  Send, 
  Sparkles, 
  Clock 
} from 'lucide-react';
import './Contact.css';

const SERVICES_LIST = [
  'Website Creation',
  'AI Video Creation',
  'AI Advertisement Creation',
  'Video Editing',
  'Event & Video Coverage'
];

export default function Contact({ preselectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    service: preselectedService || 'Website Creation',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Update selected service if parent prop changes
  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceSelect = (srv) => {
    setFormData((prev) => ({ ...prev, service: srv }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.details.trim()) {
      alert('Please fill in your name and project details.');
      return;
    }

    // Format WhatsApp message
    const message = 
      `*New Project Enquiry — OutfoSys Website*\n\n` +
      `👤 *Client Name:* ${formData.name}\n` +
      `🏢 *Business / Brand:* ${formData.businessName || 'Not specified'}\n` +
      `⚡ *Service Required:* ${formData.service}\n` +
      `📝 *Project Details:* ${formData.details}\n\n` +
      `Sent via OutfoSys online enquiry form.`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/916379229528?text=${encodedMessage}`;

    setSubmitted(true);

    // Open WhatsApp
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-grid">
          {/* Left Column: Direct Info & WhatsApp Cards */}
          <div className="contact-info-col">
            <div className="section-tag">Start Your Project</div>
            <h2 className="section-title contact-headline">
              Let's Build <br />
              <span className="title-lime-accent">Something Great.</span>
            </h2>
            <p className="contact-intro">
              Whether you need a bespoke web platform like Amman Wood Works, cinematic AI-powered commercials, or high-end event coverage, OutfoSys is ready to bring your vision to reality.
            </p>

            {/* Direct Channel Cards */}
            <div className="contact-channels">
              {/* WhatsApp Highlight Card */}
              <a 
                href="https://wa.me/916379229528" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="channel-card channel-card-wa"
              >
                <div className="channel-icon-box wa-icon-box">
                  <MessageSquare size={24} color="#FFFFFF" />
                </div>
                <div className="channel-text">
                  <div className="channel-badge">Instant Response</div>
                  <span className="channel-label">Direct WhatsApp Chat</span>
                  <span className="channel-value">+91 6379229528</span>
                </div>
                <ArrowRight size={20} className="channel-arrow" />
              </a>

              {/* Direct Phone Call Card */}
              <a 
                href="tel:+916379229528" 
                className="channel-card"
              >
                <div className="channel-icon-box phone-icon-box">
                  <Phone size={22} color="#B7F34A" />
                </div>
                <div className="channel-text">
                  <span className="channel-label">Direct Studio Phone</span>
                  <span className="channel-value">+91 6379229528</span>
                </div>
                <ArrowRight size={20} className="channel-arrow" />
              </a>
            </div>

            {/* Response Time Guarantee */}
            <div className="response-guarantee">
              <Clock size={16} color="#B7F34A" />
              <span>Average response time: <strong>under 2 hours</strong> on WhatsApp</span>
            </div>
          </div>

          {/* Right Column: Clean Project Enquiry Form */}
          <div className="contact-form-col">
            <div className="enquiry-card glass-card">
              <div className="form-header">
                <h3 className="form-title">Project Enquiry Form</h3>
                <p className="form-subtitle">Tell us about your requirements and we'll craft the ideal scope.</p>
              </div>

              {submitted ? (
                <div className="form-success-state">
                  <div className="success-icon-box">
                    <CheckCircle2 size={40} color="#B7F34A" />
                  </div>
                  <h4 className="success-title">Enquiry Prepared!</h4>
                  <p className="success-desc">
                    Your details have been pre-filled and WhatsApp has been launched to connect directly with our studio lead at <strong>+91 6379229528</strong>.
                  </p>
                  <button 
                    type="button" 
                    className="btn btn-secondary reset-btn"
                    onClick={() => setSubmitted(false)}
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="project-form">
                  {/* Name Field */}
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Your Name <span className="req-star">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  {/* Business Name Field */}
                  <div className="form-group">
                    <label htmlFor="businessName" className="form-label">
                      Business or Brand Name
                    </label>
                    <input 
                      type="text" 
                      id="businessName" 
                      name="businessName" 
                      placeholder="e.g. Amman Wood Works"
                      value={formData.businessName}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  {/* Service Required (Pills + Select) */}
                  <div className="form-group">
                    <label className="form-label">
                      Service Required <span className="req-star">*</span>
                    </label>
                    <div className="service-pills-row">
                      {SERVICES_LIST.map((srv) => (
                        <button
                          key={srv}
                          type="button"
                          className={`service-pill ${formData.service === srv ? 'active' : ''}`}
                          onClick={() => handleServiceSelect(srv)}
                        >
                          {srv}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Details Field */}
                  <div className="form-group">
                    <label htmlFor="details" className="form-label">
                      Project Details & Goals <span className="req-star">*</span>
                    </label>
                    <textarea 
                      id="details" 
                      name="details" 
                      required 
                      rows={4}
                      placeholder="Describe what you want to achieve, timeline, deliverables, or reference styles..."
                      value={formData.details}
                      onChange={handleChange}
                      className="form-textarea"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="btn btn-primary submit-btn">
                    <span>Send Project Enquiry</span>
                    <Send size={18} />
                  </button>

                  <span className="form-footer-note">
                    🔒 No spam. Submitting opens a direct confidential chat on WhatsApp.
                  </span>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
