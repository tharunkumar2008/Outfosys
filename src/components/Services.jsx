import React, { useState } from 'react';
import { 
  Globe, 
  Sparkles, 
  Megaphone, 
  Film, 
  Camera, 
  ArrowRight, 
  X, 
  CheckCircle2, 
  Clock, 
  Cpu, 
  MessageSquare 
} from 'lucide-react';
import './Services.css';

const SERVICES_DATA = [
  {
    id: 'web-creation',
    title: 'Website Creation',
    shortDesc: 'Bespoke, lightning-fast digital experiences engineered to turn high-intent visitors into committed clients.',
    image: '/images/service-web.jpg',
    icon: Globe,
    tag: 'Web Architecture & UI/UX',
    longDesc: 'We build high-performance, custom-coded web platforms with fluid micro-interactions, responsive 3D elements, and clean design systems. From artisan studios like Amman Wood Works to global digital enterprises, every line of code is optimized for conversion, speed, and unforgettable brand storytelling.',
    deliverables: [
      'Bespoke UX/UI Design & Custom Design Systems',
      'Interactive 3D / Procedural Visual Customizers',
      'Modern React & Next.js Architecture',
      'Mobile-First Responsive Layouts & High Performance',
      'SEO & Accessibility (WCAG Compliant)',
      'Direct WhatsApp & Lead Engine Integrations'
    ],
    tools: ['React', 'Next.js', 'Vite', 'Three.js / Canvas', 'Vanilla CSS', 'Node.js'],
    turnaround: '2 - 4 Weeks'
  },
  {
    id: 'ai-video',
    title: 'AI Video Creation',
    shortDesc: 'Hyper-realistic AI-driven storytelling and synthetic visuals that captivate audiences without massive studio overhead.',
    image: '/images/service-ai-video.jpg',
    icon: Sparkles,
    tag: 'Generative Visual Media',
    longDesc: 'Harness the cutting edge of generative AI video synthesis. OutfoSys directs and crafts cinematic video narratives, photorealistic digital actors, surreal atmospheric environments, and conceptual visual assets that were previously impossible or cost-prohibitive for growing brands.',
    deliverables: [
      'Concept Ideation & Generative Scriptwriting',
      'Neural Character Design & Synthetic Spokespersons',
      'Cinematic Generative B-Roll & Visual Sequences',
      'AI Voice Synthesis & Studio Master Audio',
      'Dynamic Motion Graphics & Neural Interpolation',
      'Multi-Format Exports (16:9 Cinema & 9:16 Vertical)'
    ],
    tools: ['Runway Gen-3', 'Midjourney v6', 'ComfyUI', 'ElevenLabs', 'After Effects'],
    turnaround: '5 - 10 Days'
  },
  {
    id: 'ai-ads',
    title: 'AI Advertisement Creation',
    shortDesc: 'Data-driven, high-converting digital advertising campaigns engineered specifically for social algorithms.',
    image: '/images/service-ai-ads.jpg',
    icon: Megaphone,
    tag: 'Performance Marketing & Ads',
    longDesc: 'Creative fatigue is the enemy of ad ROAS. OutfoSys combines AI visual generation with high-converting direct-response ad frameworks. We produce batches of tailored, scroll-stopping hooks and creatives for Instagram, YouTube, and TikTok.',
    deliverables: [
      'First 3-Second Scroll-Stopping Visual Hooks',
      'Dynamic Product Demonstrations & Feature Spotlights',
      'Multi-Angle Creative Variations for A/B Testing',
      'Platform-Optimized Vertical Ads (Reels, TikTok, Shorts)',
      'High-CTR Kinetic Typography & Subtitle Animations',
      'Direct Response CTA Integration'
    ],
    tools: ['Generative Neural Models', 'Motion Design Suites', 'Meta Ad Frameworks', 'TikTok Creative Center'],
    turnaround: '3 - 7 Days'
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    shortDesc: 'Precision post-production, Hollywood-grade color grading, and rhythmic sound design that elevate raw footage.',
    image: '/images/service-video-edit.jpg',
    icon: Film,
    tag: 'Post-Production & Grading',
    longDesc: 'Transform your raw footage into an emotionally resonant masterpiece. Our editing suite specializes in rhythmic cutting, bespoke sound design, custom color grading (ACES / DaVinci Resolve), dynamic kinetic typography, and seamless visual transitions that keep viewers glued to the screen.',
    deliverables: [
      'Multi-Cam Rhythm Editing & Pacing Architecture',
      'Cinematic Color Grading & HDR LUT Customization',
      'Spatial Sound Design & Audio Restoration',
      'Seamless Visual Effects (VFX) & Transitions',
      'Dynamic Kinetic Typography & Lower Thirds',
      'Brand Style Consistency & Aspect Ratio Deliverables'
    ],
    tools: ['DaVinci Resolve Studio', 'Adobe Premiere Pro', 'After Effects', 'iZotope RX'],
    turnaround: '3 - 8 Days'
  },
  {
    id: 'event-coverage',
    title: 'Event & Video Coverage',
    shortDesc: 'Cinematic on-ground multi-camera production capturing executive summits, brand launches, and key milestones.',
    image: '/images/service-event-cov.jpg',
    icon: Camera,
    tag: 'On-Ground Cinema Production',
    longDesc: 'Capture the electric energy of your live event. OutfoSys provides professional on-site production teams equipped with cinema cameras, gimbal stabilizers, and broadcast audio rigs to film keynotes, product debuts, high-energy recap films, and VIP attendee interviews.',
    deliverables: [
      '4K / 8K Cinema Camera Multi-Operator Filming',
      'Stabilized Gimbal & Dynamic Crane Coverage',
      'Pristine Multi-Track Wireless Audio Recording',
      'High-Energy Same-Day / Next-Day Teaser Reels',
      'Comprehensive Full-Length Keynote Archives',
      'Executive & Attendee Interview Packages'
    ],
    tools: ['ARRI / Sony Cinema Line', 'DJI Ronin Gimbals', 'Sennheiser Wireless Audio', 'Aputure Lighting'],
    turnaround: 'On-Site + 48hr Recap'
  }
];

export default function Services({ onSelectService }) {
  const [activeModal, setActiveModal] = useState(null);

  const openServiceModal = (service) => {
    setActiveModal(service);
    document.body.style.overflow = 'hidden';
  };

  const closeServiceModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'auto';
  };

  const handleEnquire = (serviceTitle) => {
    closeServiceModal();
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="services-section" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="services-header">
          <div className="section-tag">Our Capabilities</div>
          <h2 className="section-title">
            Tailored Creative Services <br />
            <span className="title-lime-accent">Engineered for Impact</span>
          </h2>
          <p className="section-subtitle">
            We blend architectural design with generative visual intelligence to build assets that elevate your brand and capture market attention.
          </p>
        </div>

        {/* 5 Distinct Service Cards Grid */}
        <div className="services-grid">
          {SERVICES_DATA.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id} 
                className={`service-card service-card-${index + 1}`}
              >
                {/* Visual Imagery */}
                <div className="service-card-media">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="service-media-img"
                    loading="lazy"
                  />
                  <div className="service-media-overlay"></div>
                  
                  {/* Category Pill */}
                  <div className="service-cat-pill">
                    <Icon size={14} className="cat-icon" />
                    <span>{service.tag}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="service-card-body">
                  <div className="service-title-row">
                    <h3 className="service-card-title">{service.title}</h3>
                    <div className="service-icon-circle">
                      <Icon size={18} color="#B7F34A" />
                    </div>
                  </div>

                  <p className="service-card-desc">{service.shortDesc}</p>

                  <div className="service-card-footer">
                    <button 
                      type="button" 
                      className="service-learn-btn"
                      onClick={() => openServiceModal(service)}
                      aria-haspopup="dialog"
                    >
                      <span>Learn More</span>
                      <ArrowRight size={16} className="btn-arrow" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Detail Modal */}
      {activeModal && (
        <div className="service-modal-backdrop" onClick={closeServiceModal} role="dialog" aria-modal="true">
          <div className="service-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className="modal-close-btn" 
              onClick={closeServiceModal}
              aria-label="Close details"
            >
              <X size={20} />
            </button>

            <div className="modal-header-banner">
              <img src={activeModal.image} alt={activeModal.title} className="modal-banner-img" />
              <div className="modal-banner-overlay"></div>
              <div className="modal-banner-info">
                <span className="modal-tag">{activeModal.tag}</span>
                <h3 className="modal-title">{activeModal.title}</h3>
              </div>
            </div>

            <div className="modal-scroll-body">
              <div className="modal-section">
                <h4 className="modal-subheading">Overview</h4>
                <p className="modal-text">{activeModal.longDesc}</p>
              </div>

              <div className="modal-section">
                <h4 className="modal-subheading">Key Deliverables</h4>
                <div className="modal-deliverables-grid">
                  {activeModal.deliverables.map((item, idx) => (
                    <div key={idx} className="deliverable-item">
                      <CheckCircle2 size={16} color="#B7F34A" className="check-icon" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-meta-grid">
                <div className="modal-meta-box">
                  <div className="meta-header">
                    <Clock size={16} color="#B7F34A" />
                    <span>Estimated Turnaround</span>
                  </div>
                  <span className="meta-val">{activeModal.turnaround}</span>
                </div>

                <div className="modal-meta-box">
                  <div className="meta-header">
                    <Cpu size={16} color="#B7F34A" />
                    <span>Core Toolset</span>
                  </div>
                  <div className="tool-chips">
                    {activeModal.tools.map((t, idx) => (
                      <span key={idx} className="tool-chip">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="modal-cta-row">
                <button 
                  type="button" 
                  className="btn btn-primary modal-action-btn"
                  onClick={() => handleEnquire(activeModal.title)}
                >
                  <span>Enquire For This Service</span>
                  <ArrowRight size={18} />
                </button>

                <a 
                  href={`https://wa.me/916379229528?text=Hi%20OutfoSys,%20I%20am%20interested%20in%20your%20${encodeURIComponent(activeModal.title)}%20service.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp modal-wa-btn"
                >
                  <MessageSquare size={18} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
