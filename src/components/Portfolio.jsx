import React, { useState } from 'react';
import { 
  ExternalLink, 
  ArrowUpRight, 
  Sparkles, 
  Layers, 
  Maximize2, 
  X, 
  Sliders, 
  Check, 
  Eye, 
  ShieldCheck 
} from 'lucide-react';
import './Portfolio.css';

// Curated Showcase Data
const PROJECTS = [
  {
    id: 'amman-wood-works',
    title: 'AMMAN WOOD WORKS',
    client: 'Amman Wood Works',
    category: 'Website Creation & Interactive 3D Customizer',
    image: '/images/portfolio-amman.jpg',
    featured: true,
    year: '2026',
    summary: 'A bespoke luxury digital studio with real-time procedural wood grain rendering, dynamic dimension sliders, and live material pricing for bespoke solid timber furniture.',
    overview: 'OutfoSys architected and engineered a comprehensive digital experience for Amman Wood Works. The core highlight is a real-time procedural canvas customizer allowing clients to configure artisanal dining tables and heirloom furniture with live wood grain rendering, millimeter-precision dimension sliders, edge profile selections, and instant price updates.',
    tags: ['Interactive Studio', 'Procedural Canvas', 'Real-Time Pricing', 'Customizer UX', 'Bespoke eCommerce'],
    features: [
      'Procedural cathedral wood grain & end-grain rendering',
      '7 Ethically harvested solid hardwoods (Walnut, Teak, White Oak, Ash)',
      'Instantaneous dynamic pricing calculation based on board volume',
      'Custom edge profiles (Natural Live Edge, Swiss Knife, Chamfer)',
      'Interactive multi-angle view simulation (Isometric, Top Grain, Elevation)',
      'Integrated workshop slide-out commission cart'
    ],
    hasLiveCustomizerDemo: true,
    liveUrl: 'https://amman-wood-works.vercel.app',
    localUrl: 'https://amman-wood-works.vercel.app'
  },
  {
    id: 'synapse-ai',
    title: 'SYNAPSE AI BRAND FILM',
    client: 'Synapse Neural Corp',
    category: 'AI Video Creation & Generative Direction',
    image: '/images/service-ai-video.jpg',
    featured: false,
    year: '2026',
    summary: 'A futuristic cinematic brand narrative produced with multi-model generative neural video workflows and photorealistic synthetic visual direction.',
    overview: 'Developed for a venture-backed artificial intelligence platform, this brand film deployed custom diffusion workflows, neural character persistence, and cinematic atmospheric lighting to communicate complex machine learning concepts with visceral visual emotion.',
    tags: ['Generative Video', 'Neural Direction', 'Runway Gen-3', 'Cinematic AI'],
    features: [
      'Multi-scene character consistency across neural generations',
      'Original volumetric lighting and particle simulations',
      'Studio voice synthesis & spatial audio mixing',
      'Cinema 4K export and vertical teaser cuts'
    ],
    hasLiveCustomizerDemo: false
  },
  {
    id: 'lumina-hybrid',
    title: 'LUMINA HYBRID DIGITAL ADS',
    client: 'Lumina Global',
    category: 'AI Advertisement Creation & Social Motion',
    image: '/images/service-ai-ads.jpg',
    featured: false,
    year: '2026',
    summary: 'High-converting social ad creative suite featuring kinetic motion typography, multi-angle dynamic product hooks, and platform-optimized formats.',
    overview: 'Crafted to dominate social media algorithmic feeds, this campaign paired 3D product renders with dynamic kinetic typography and first-3-second visual hooks, generating exceptional click-through engagement across Instagram Reels and TikTok.',
    tags: ['Performance Ads', 'Kinetic Typography', 'Social Creatives', 'A/B Hook Variations'],
    features: [
      '8 High-retention creative variations for testing',
      'Custom 3D kinetic text motion graphics',
      'Cross-platform 9:16 and 4:5 optimized exports',
      'Direct response visual triggers and callouts'
    ],
    hasLiveCustomizerDemo: false
  },
  {
    id: 'nexus-summit',
    title: 'NEXUS KEYNOTE & SUMMIT',
    client: 'Nexus Innovation Summit',
    category: 'Event & Video Coverage',
    image: '/images/service-event-cov.jpg',
    featured: false,
    year: '2026',
    summary: 'Multi-camera cinematic coverage of a premier technology conference, featuring same-day high-energy recap films and executive interviews.',
    overview: 'OutfoSys provided on-ground cinema camera operators, gimbal stabilizers, and pristine audio capture for a 3-day innovation summit, delivering daily highlight reels within 12 hours of stage wrap alongside full keynote archives.',
    tags: ['Multi-Cam Cinema', 'Keynote Filming', 'Same-Day Recap', 'Event Audio'],
    features: [
      '4K Cinema camera rigs with motorized gimbal stabilization',
      'Broadcast-grade wireless multi-track audio capture',
      'Rapid turnaround same-day social recap delivery',
      'Executive thought-leadership interview series'
    ],
    hasLiveCustomizerDemo: false
  }
];

// Interactive Amman Wood Works Customizer Simulator Component
function AmmanCustomizerSimulator({ onClose }) {
  const [species, setSpecies] = useState('walnut');
  const [length, setLength] = useState(220);
  const [width, setWidth] = useState(100);
  const [edge, setEdge] = useState('live_edge');
  const [viewAngle, setViewAngle] = useState('isometric');

  const speciesOptions = {
    walnut: { name: 'American Black Walnut', color: '#3A2016', accent: '#5C3424', baseRate: 14.5 },
    teak: { name: 'Royal Burma Golden Teak', color: '#684518', accent: '#8C5E23', baseRate: 16.0 },
    oak: { name: 'European White Oak', color: '#8C7752', accent: '#A89269', baseRate: 12.0 }
  };

  const currentSpecies = speciesOptions[species];

  // Dynamic board price calculation matching the project's logic
  const calculatedPrice = Math.round((length * width * 4.5 * 0.045) + (currentSpecies.baseRate * 50) + (edge === 'live_edge' ? 180 : 80));

  return (
    <div className="aww-simulator-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="aww-simulator-modal" onClick={(e) => e.stopPropagation()}>
        <div className="aww-sim-header">
          <div className="aww-sim-brand">
            <span className="aww-brand-icon">🪵</span>
            <div>
              <h4 className="aww-brand-title">AMMAN WOOD WORKS</h4>
              <span className="aww-brand-sub">Interactive Studio Simulator • Built by OutfoSys</span>
            </div>
          </div>
          <div className="aww-sim-header-actions">
            <a 
              href="https://amman-wood-works.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="aww-live-pill"
              title="Open amman-wood-works.vercel.app"
            >
              <span>amman-wood-works.vercel.app</span>
              <ExternalLink size={14} />
            </a>
            <button type="button" className="aww-close-btn" onClick={onClose} aria-label="Close interactive customizer">
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="aww-sim-body">
          {/* Live Procedural Render Canvas Representation */}
          <div className="aww-canvas-preview-box">
            <div 
              className={`aww-furniture-render angle-${viewAngle}`}
              style={{
                '--wood-color': currentSpecies.color,
                '--wood-accent': currentSpecies.accent
              }}
            >
              {/* Rendered Table Slab */}
              <div 
                className={`aww-table-slab ${edge}`}
                style={{
                  width: `${Math.min(90, Math.max(50, (length / 280) * 85))}%`,
                  height: `${Math.min(50, Math.max(25, (width / 120) * 45))}%`,
                  backgroundColor: currentSpecies.color
                }}
              >
                <div className="grain-lines"></div>
                <div className="slab-badge">
                  <span>{currentSpecies.name}</span>
                  <span className="slab-dim">{length}cm × {width}cm</span>
                </div>
              </div>

              {/* Legs */}
              <div className="aww-table-legs">
                <div className="table-leg leg-left"></div>
                <div className="table-leg leg-right"></div>
              </div>
            </div>

            {/* View Angle Switcher */}
            <div className="aww-angle-controls">
              <button 
                type="button" 
                className={`angle-btn ${viewAngle === 'isometric' ? 'active' : ''}`}
                onClick={() => setViewAngle('isometric')}
              >
                Isometric 3D
              </button>
              <button 
                type="button" 
                className={`angle-btn ${viewAngle === 'top' ? 'active' : ''}`}
                onClick={() => setViewAngle('top')}
              >
                Top Grain
              </button>
              <button 
                type="button" 
                className={`angle-btn ${viewAngle === 'front' ? 'active' : ''}`}
                onClick={() => setViewAngle('front')}
              >
                Front View
              </button>
            </div>
          </div>

          {/* Interactive Customizer Controls */}
          <div className="aww-controls-panel">
            <div className="ctrl-group">
              <label className="ctrl-label">Hardwood Timber Species</label>
              <div className="species-selector">
                {Object.entries(speciesOptions).map(([key, item]) => (
                  <button 
                    key={key}
                    type="button" 
                    className={`species-btn ${species === key ? 'active' : ''}`}
                    onClick={() => setSpecies(key)}
                  >
                    <span className="species-swatch" style={{ backgroundColor: item.color }}></span>
                    <span className="species-name">{item.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="ctrl-group">
              <div className="slider-header">
                <label className="ctrl-label">Length</label>
                <span className="slider-val">{length} cm</span>
              </div>
              <input 
                type="range" 
                min="160" 
                max="300" 
                step="10" 
                value={length} 
                onChange={(e) => setLength(Number(e.target.value))}
                className="aww-slider"
              />
            </div>

            <div className="ctrl-group">
              <div className="slider-header">
                <label className="ctrl-label">Width</label>
                <span className="slider-val">{width} cm</span>
              </div>
              <input 
                type="range" 
                min="80" 
                max="120" 
                step="5" 
                value={width} 
                onChange={(e) => setWidth(Number(e.target.value))}
                className="aww-slider"
              />
            </div>

            <div className="ctrl-group">
              <label className="ctrl-label">Edge Profile</label>
              <div className="edge-selector">
                <button 
                  type="button" 
                  className={`edge-btn ${edge === 'live_edge' ? 'active' : ''}`}
                  onClick={() => setEdge('live_edge')}
                >
                  Organic Live Edge
                </button>
                <button 
                  type="button" 
                  className={`edge-btn ${edge === 'chamfer' ? 'active' : ''}`}
                  onClick={() => setEdge('chamfer')}
                >
                  Minimalist Chamfer
                </button>
              </div>
            </div>

            <div className="aww-price-summary">
              <div className="price-label">Live Estimated Cost</div>
              <div className="price-amount">₹{calculatedPrice.toLocaleString('en-IN')}</div>
              <span className="price-note">Real-time calculations powered by custom formula engine</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [selectedDemo, setSelectedDemo] = useState(false);

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        {/* Section Header */}
        <div className="portfolio-header">
          <div className="section-tag">Portfolio Showcase</div>
          <h2 className="section-title">
            Selected Work <br />
            <span className="title-lime-accent">Crafted with Purpose</span>
          </h2>
          <p className="section-subtitle">
            Explore authentic digital platforms, AI productions, and visual content engineered by OutfoSys for forward-thinking brands.
          </p>
        </div>

        {/* Featured Premier Project: AMMAN WOOD WORKS */}
        {PROJECTS.filter(p => p.featured).map((proj) => (
          <div key={proj.id} className="featured-project-card">
            <div className="featured-media-col">
              <div className="featured-img-frame">
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className="featured-cover-img"
                  loading="lazy"
                />
                <div className="featured-overlay"></div>
                <div className="featured-badge">Premier Client Showcase</div>
              </div>
            </div>

            <div className="featured-info-col">
              <div className="proj-meta-top">
                <a 
                  href="https://amman-wood-works.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="proj-client-name"
                  title="Visit amman-wood-works.vercel.app"
                >
                  {proj.client} ↗
                </a>
                <span className="proj-dot">•</span>
                <span className="proj-year">{proj.year}</span>
                <span className="proj-dot">•</span>
                <span className="proj-category">{proj.category}</span>
              </div>

              <h3 className="featured-proj-title">
                <a 
                  href="https://amman-wood-works.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="featured-title-link"
                >
                  {proj.title}
                </a>
              </h3>
              <p className="featured-proj-desc">{proj.overview}</p>

              <div className="featured-key-points">
                <span className="points-label">Engineered Features:</span>
                <div className="points-grid">
                  {proj.features.slice(0, 4).map((feat, idx) => (
                    <div key={idx} className="feat-bullet">
                      <ShieldCheck size={16} color="#B7F34A" className="bullet-icon" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="proj-tags-row">
                {proj.tags.map((tag, idx) => (
                  <span key={idx} className="proj-chip">{tag}</span>
                ))}
              </div>

              <div className="featured-action-row">
                <button 
                  type="button" 
                  className="btn btn-primary interactive-sim-btn"
                  onClick={() => setSelectedDemo(true)}
                >
                  <Sliders size={18} />
                  <span>Launch Customizer Simulator</span>
                </button>

                <a 
                  href="https://amman-wood-works.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary live-preview-btn"
                  title="Visit live website: amman-wood-works.vercel.app"
                >
                  <span>amman-wood-works.vercel.app</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Supporting Creative Showcases Grid */}
        <div className="additional-projects-grid">
          {PROJECTS.filter(p => !p.featured).map((proj) => (
            <div key={proj.id} className="portfolio-sub-card">
              <div className="sub-card-media">
                <img src={proj.image} alt={proj.title} className="sub-card-img" loading="lazy" />
                <div className="sub-card-overlay"></div>
                <span className="sub-card-cat">{proj.category}</span>
              </div>

              <div className="sub-card-body">
                <div className="sub-meta-row">
                  <span className="sub-client">{proj.client}</span>
                  <span className="sub-year">{proj.year}</span>
                </div>

                <h4 className="sub-title">{proj.title}</h4>
                <p className="sub-desc">{proj.summary}</p>

                <div className="sub-tags">
                  {proj.tags.map((t, idx) => (
                    <span key={idx} className="sub-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Amman Wood Works Customizer Simulator Modal */}
      {selectedDemo && (
        <AmmanCustomizerSimulator onClose={() => setSelectedDemo(false)} />
      )}
    </section>
  );
}
