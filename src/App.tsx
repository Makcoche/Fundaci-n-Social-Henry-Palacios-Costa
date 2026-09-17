import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutHenry } from './components/AboutHenry';
import { PrinciplesSection } from './components/PrinciplesSection';
import { CommitmentsSection } from './components/CommitmentsSection';
import { ProgramsSection } from './components/ProgramsSection';
import { TrajectoryTimeline } from './components/TrajectoryTimeline';
import { CitizenAction } from './components/CitizenAction';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProposalModal } from './components/ProposalModal';
import { INITIAL_PROPOSALS } from './data/foundationData';
import { CitizenProposal } from './types';

export default function App() {
  const [proposals, setProposals] = useState<CitizenProposal[]>(INITIAL_PROPOSALS);
  const [isProposalModalOpen, setIsProposalModalOpen] = useState(false);

  const handleSupportProposal = (id: string) => {
    setProposals((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, supportersCount: p.supportersCount + 1 } : p
      )
    );
  };

  const handleAddProposal = (newProp: CitizenProposal) => {
    setProposals((prev) => [newProp, ...prev]);
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-[#CE1126] selection:text-white">
      {/* Fixed Navigation Header */}
      <Navbar onOpenProposalModal={() => setIsProposalModalOpen(true)} />

      <main>
        {/* Hero Section with Official Slogan and Identity */}
        <Hero onOpenProposalModal={() => setIsProposalModalOpen(true)} />

        {/* About Henry Palacios "Costa" Profile & Background */}
        <AboutHenry />

        {/* 6 Commitments to Transform Apartadó */}
        <CommitmentsSection onOpenProposalModal={() => setIsProposalModalOpen(true)} />

        {/* Slogan Meaning & 6 Principles */}
        <PrinciplesSection />

        {/* Programs and Social Action in Urabá */}
        <ProgramsSection onOpenProposalModal={() => setIsProposalModalOpen(true)} />

        {/* Trajectory Timeline: From Riosucio/Finca Costa Rica to Corbanacol & Public Service */}
        <TrajectoryTimeline />

        {/* Citizen Proposals Box & Volunteer Sign-Up */}
        <CitizenAction
          proposals={proposals}
          onSupportProposal={handleSupportProposal}
          onOpenProposalModal={() => setIsProposalModalOpen(true)}
        />

        {/* Community Testimonials & Credibility */}
        <TestimonialsSection />

        {/* Contact, Headquarters in Apartadó & Direct WhatsApp */}
        <ContactSection />
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Interactive Modal to Submit Citizen Proposals */}
      <ProposalModal
        isOpen={isProposalModalOpen}
        onClose={() => setIsProposalModalOpen(false)}
        onAddProposal={handleAddProposal}
      />
    </div>
  );
}
