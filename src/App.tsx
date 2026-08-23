import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { Services } from './components/Services';
import { Industries } from './components/Industries';
import { CaseStudies } from './components/CaseStudies';
import { Process } from './components/Process';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Founders } from './components/Founders';
import { TechStack } from './components/TechStack';
import { ContactSection } from './components/ContactSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

function App() {
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);

  const handleOpenConsultation = () => {
    setConsultationModalOpen(true);
  };

  const handleCloseConsultation = () => {
    setConsultationModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* Sticky Header Navigation */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      <main>
        {/* Hero Section */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* Capability Trust Strip */}
        <TrustStrip />

        {/* Services & What We Build */}
        <Services />

        {/* Industries We Serve */}
        <Industries />

        {/* Portfolio & Case Studies Showcase */}
        <CaseStudies />

        {/* How We Work Process */}
        <Process />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* About Us & Founders */}
        <Founders />

        {/* Technology Capabilities & Stack */}
        <TechStack />

        {/* Contact & Consultation Form */}
        <ContactSection />

        {/* Final Conversion Banner */}
        <FinalCTA onOpenConsultation={handleOpenConsultation} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Consultation Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={handleCloseConsultation}
      />
    </div>
  );
}

export default App;
