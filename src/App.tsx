import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ProgramsPage } from './components/ProgramsPage';
import { ContactPage } from './components/ContactPage';
import { Footer } from './components/Footer';
import { ProposalModal } from './components/ProposalModal';
import { DonationModal } from './components/DonationModal';
import { INITIAL_PROPOSALS } from './data/foundationData';
import { CitizenProposal } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('inicio');
  const [proposals, setProposals] = useState<CitizenProposal[]>(INITIAL_PROPOSALS);
  const [isProposalModalOpen, setIsProposalModalOpen] = useState(false);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  // Sync hash routing if user enters with #quienes-somos, #programas, #contacto
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['inicio', 'quienes-somos', 'programas', 'contacto'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (pageId: string) => {
    setCurrentPage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-[rgb(220,20,35)] selection:text-white flex flex-col justify-between">
      {/* Fixed Navigation Header with 4 maximum items & Official Donation Button */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenProposalModal={() => setIsProposalModalOpen(true)}
        onOpenDonationModal={() => setIsDonationModalOpen(true)}
      />

      {/* Main Routed Page Content */}
      <main className="flex-grow">
        {currentPage === 'inicio' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenProposalModal={() => setIsProposalModalOpen(true)}
            onOpenDonationModal={() => setIsDonationModalOpen(true)}
          />
        )}

        {currentPage === 'quienes-somos' && (
          <AboutPage 
            onNavigate={handleNavigate} 
            onOpenDonationModal={() => setIsDonationModalOpen(true)}
          />
        )}

        {currentPage === 'programas' && (
          <ProgramsPage
            onOpenProposalModal={() => setIsProposalModalOpen(true)}
            onOpenDonationModal={() => setIsDonationModalOpen(true)}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'contacto' && (
          <ContactPage
            proposals={proposals}
            onSupportProposal={handleSupportProposal}
            onOpenProposalModal={() => setIsProposalModalOpen(true)}
            onOpenDonationModal={() => setIsDonationModalOpen(true)}
          />
        )}
      </main>

      {/* Corporate Footer */}
      <Footer 
        onNavigate={handleNavigate} 
        onOpenDonationModal={() => setIsDonationModalOpen(true)}
      />

      {/* Interactive Modal to Submit Citizen Proposals */}
      <ProposalModal
        isOpen={isProposalModalOpen}
        onClose={() => setIsProposalModalOpen(false)}
        onAddProposal={handleAddProposal}
      />

      {/* Official Certified Bancolombia Donation Modal */}
      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
      />
    </div>
  );
}
