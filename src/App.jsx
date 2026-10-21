import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import './App.css';

export default function App() {
  const [selectedService, setSelectedService] = useState('Website Creation');

  const handleSelectService = (serviceTitle) => {
    setSelectedService(serviceTitle);
  };

  return (
    <div className="outfosys-app">
      {/* Fixed Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero />

        {/* Brand Core Services */}
        <Services onSelectService={handleSelectService} />

        {/* Selected Work & Amman Wood Works Showcase */}
        <Portfolio />

        {/* About Agency & Editorial Philosophy */}
        <About />

        {/* Project Contact & Direct WhatsApp Enquiry */}
        <Contact preselectedService={selectedService} />
      </main>

      {/* Studio Footer */}
      <Footer />

      {/* Persistent Quick WhatsApp Access */}
      <FloatingWhatsApp />
    </div>
  );
}
