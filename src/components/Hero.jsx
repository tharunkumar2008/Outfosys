import React from 'react';
import { ArrowRight, Sparkles, Play, ShieldCheck, Zap, Layers } from 'lucide-react';
import HeroCanvas from './HeroCanvas';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      {/* Background Interactive Motion Graphic */}
      <HeroCanvas />

      {/* Decorative ambient gradient backdrop */}
      <div className="hero-atmosphere-glow" aria-hidden="true"></div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* Studio Tagline Badge */}
          <div className="hero-pill-badge">
            <span className="badge-glow-dot"></span>
            <span className="badge-label">OUTFOSYS • CREATIVE DIGITAL AGENCY</span>
            <span className="badge-tagline-accent">CREATE. CAPTURE. CONNECT.</span>
          </div>

          {/* Primary Headline */}
          <h1 className="hero-headline">
            Your Ideas <br />
            <span className="highlight-gradient">Deserve to</span> <br />
            <span className="highlight-lime">Stand Out.</span>
          </h1>

          {/* Supporting Text */}
          <p className="hero-supporting-text">
            We design websites, create powerful AI videos, and produce visual content that helps businesses make a lasting impression.
          </p>

          {/* CTAs */}
          <div className="hero-cta-group">
            <a href="#contact" className="btn btn-primary hero-btn-main">
              <span>Start Your Project</span>
              <ArrowRight size={18} />
            </a>

            <a href="#portfolio" className="btn btn-secondary hero-btn-secondary">
              <Play size={16} className="play-icon" />
              <span>Explore Our Work</span>
            </a>
          </div>

          {/* Key Value Indicators */}
          <div className="hero-features-bar">
            <div className="hero-feat-item">
              <div className="feat-icon-box">
                <Layers size={18} color="#B7F34A" />
              </div>
              <div className="feat-text">
                <span className="feat-title">Bespoke Architecture</span>
                <span className="feat-desc">Zero generic templates</span>
              </div>
            </div>

            <div className="hero-feat-item">
              <div className="feat-icon-box">
                <Zap size={18} color="#B7F34A" />
              </div>
              <div className="feat-text">
                <span className="feat-title">Generative AI Power</span>
                <span className="feat-desc">Cinematic video synthesis</span>
              </div>
            </div>

            <div className="hero-feat-item">
              <div className="feat-icon-box">
                <ShieldCheck size={18} color="#B7F34A" />
              </div>
              <div className="feat-text">
                <span className="feat-title">Verified Delivery</span>
                <span className="feat-desc">Direct founder collaboration</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Interactive Floating Visual Card (Inspired by Logo Interlock) */}
        <div className="hero-floating-art" aria-hidden="true">
          <div className="art-card glass-card">
            <div className="art-card-header">
              <div className="card-status-dot"></div>
              <span className="card-studio-tag">OutfoSys Neural & Web Engine</span>
              <span className="card-fps">60 FPS</span>
            </div>

            <div className="art-preview-inner">
              <div className="orbit-core">
                <div className="ring-purple"></div>
                <div className="ring-lime"></div>
                <div className="core-symbol">
                  <Sparkles size={28} color="#B7F34A" />
                </div>
              </div>

              <div className="art-stats-row">
                <div className="art-stat">
                  <span className="stat-num">5+</span>
                  <span className="stat-label">Creative Disciplines</span>
                </div>
                <div className="art-divider"></div>
                <div className="art-stat">
                  <span className="stat-num">100%</span>
                  <span className="stat-label">Tailored Production</span>
                </div>
                <div className="art-divider"></div>
                <div className="art-stat">
                  <span className="stat-num">4K / 8K</span>
                  <span className="stat-label">Master Pipeline</span>
                </div>
              </div>
            </div>

            <div className="art-card-footer">
              <span className="footer-label">Showcasing: Amman Wood Works & AI Suites</span>
              <span className="footer-status">ONLINE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
