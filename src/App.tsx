import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OutcomesStrip } from './components/OutcomesStrip';
import { Services } from './components/Services';
import { CaseStudies } from './components/CaseStudies';
import { About } from './components/About';
import { Process } from './components/Process';
import { ContactSection } from './components/ContactSection';
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
    <div className="min-h-screen bg-[#0A0A0B] text-[#F4F1EA] font-sans selection:bg-[#2563EB] selection:text-white">
      {/* 5-Item Sticky Header Navigation */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      <main>
        {/* Hero Section */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* Outcomes Strip */}
        <OutcomesStrip />

        {/* 1. Services */}
        <Services />

        {/* 2. Work (Case Studies + Industry Filter Tags) */}
        <CaseStudies />

        {/* 3. About (Engineering Principles & Founders) */}
        <About />

        {/* 4. Process */}
        <Process />

        {/* 5. Contact Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Simplified Consultation Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={handleCloseConsultation}
      />
    </div>
  );
}

export default App;
