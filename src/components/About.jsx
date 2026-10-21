import React from 'react';
import { Sparkles, Layers, Video, ShieldCheck, Compass, Lightbulb, Users } from 'lucide-react';
import './About.css';

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        {/* Editorial Top Headline Layout */}
        <div className="about-editorial-header">
          <div className="about-tag-col">
            <div className="section-tag">About OutfoSys</div>
            <span className="editorial-lead-num">01 / AGENCY PHILOSOPHY</span>
          </div>

          <div className="about-title-col">
            <h2 className="section-title about-headline">
              Creativity Meets <br />
              <span className="title-lime-accent">Technology.</span>
            </h2>
            <p className="about-lead-paragraph">
              OutfoSys is a creative digital company combining modern web design, AI-powered video production, and professional visual storytelling. We reject cookie-cutter templates in favor of handcrafted digital experiences and cinematic visuals that elevate brands.
            </p>
          </div>
        </div>

        {/* 3 Pillars Grid: CREATE • CAPTURE • CONNECT */}
        <div className="about-pillars-grid">
          <div className="pillar-card">
            <div className="pillar-header">
              <span className="pillar-num">01</span>
              <div className="pillar-icon-box">
                <Layers size={22} color="#B7F34A" />
              </div>
            </div>
            <h3 className="pillar-title">CREATE.</h3>
            <p className="pillar-desc">
              We engineer custom web platforms, interactive 3D studio customizers, and responsive digital products. From clean component architecture to fluid micro-interactions, we ensure your online presence is unforgettable.
            </p>
            <div className="pillar-tags">
              <span>Web Architecture</span>
              <span>Procedural 3D</span>
              <span>Design Systems</span>
            </div>
          </div>

          <div className="pillar-card">
            <div className="pillar-header">
              <span className="pillar-num">02</span>
              <div className="pillar-icon-box">
                <Video size={22} color="#B7F34A" />
              </div>
            </div>
            <h3 className="pillar-title">CAPTURE.</h3>
            <p className="pillar-desc">
              From high-stakes executive summits and corporate events to cinematic commercial b-roll, our production crew captures raw energy and transforms it into documentary-grade visual assets.
            </p>
            <div className="pillar-tags">
              <span>4K / 8K Cinema</span>
              <span>Gimbal Stabilized</span>
              <span>Sound Design</span>
            </div>
          </div>

          <div className="pillar-card">
            <div className="pillar-header">
              <span className="pillar-num">03</span>
              <div className="pillar-icon-box">
                <Sparkles size={22} color="#B7F34A" />
              </div>
            </div>
            <h3 className="pillar-title">CONNECT.</h3>
            <p className="pillar-desc">
              We leverage cutting-edge neural generative AI models to create hyper-targeted video commercials and social ad campaigns that stop thumbs, command attention, and drive direct customer actions.
            </p>
            <div className="pillar-tags">
              <span>Generative AI</span>
              <span>Performance Ads</span>
              <span>Dynamic Hooks</span>
            </div>
          </div>
        </div>

        {/* Studio Manifesto / Editorial Narrative */}
        <div className="about-manifesto-row">
          <div className="manifesto-badge-box">
            <div className="manifesto-orb">
              <Compass size={28} color="#B7F34A" />
            </div>
            <span className="manifesto-badge-title">Our Technical Standard</span>
          </div>

          <div className="manifesto-content">
            <h3 className="manifesto-quote">
              "We believe technical excellence and aesthetic audacity are not opposites — they are force multipliers."
            </h3>
            <div className="manifesto-principles-grid">
              <div className="principle-item">
                <ShieldCheck size={20} color="#B7F34A" />
                <div>
                  <h4 className="principle-title">Bespoke Engineering</h4>
                  <p className="principle-desc">No generic WordPress bloat. Clean, responsive React and native codebases crafted for longevity.</p>
                </div>
              </div>

              <div className="principle-item">
                <Lightbulb size={20} color="#B7F34A" />
                <div>
                  <h4 className="principle-title">Generative AI Pioneers</h4>
                  <p className="principle-desc">Direct mastery of state-of-the-art diffusion and neural video models for cinematic brand assets.</p>
                </div>
              </div>

              <div className="principle-item">
                <Users size={20} color="#B7F34A" />
                <div>
                  <h4 className="principle-title">Direct Collaborative Access</h4>
                  <p className="principle-desc">Work directly with senior designers and engineers with zero account manager middlemen.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
