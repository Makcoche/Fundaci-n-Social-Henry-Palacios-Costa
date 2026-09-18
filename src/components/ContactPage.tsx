import React from 'react';
import { ContactSection } from './ContactSection';
import { CitizenAction } from './CitizenAction';
import { CitizenProposal } from '../types';
import { MessageCircle, MapPin, Send } from 'lucide-react';

interface ContactPageProps {
  proposals: CitizenProposal[];
  onSupportProposal: (id: string) => void;
  onOpenProposalModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  proposals,
  onSupportProposal,
  onOpenProposalModal
}) => {
  return (
    <div className="pt-24 pb-16">
      {/* Page Header Banner */}
      <div className="bg-gradient-to-r from-neutral-900 via-neutral-950 to-red-950 text-white py-12 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Atención Comunitaria & Participación</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Contacto & Buzón Ciudadano
          </h1>
          <p className="mt-3 text-base sm:text-lg text-neutral-300 max-w-3xl leading-relaxed">
            Comunícate con nuestro equipo, visítanos en nuestra sede de Apartadó o postula iniciativas para tu barrio o vereda a través del buzón de propuestas.
          </p>
        </div>
      </div>

      {/* Main Contact Form & Map/Headquarters details */}
      <ContactSection />

      {/* Citizen Proposals Box & Volunteer Sign-Up Form */}
      <CitizenAction
        proposals={proposals}
        onSupportProposal={onSupportProposal}
        onOpenProposalModal={onOpenProposalModal}
      />
    </div>
  );
};
