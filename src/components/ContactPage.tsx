import React from 'react';
import { ContactSection } from './ContactSection';
import { CitizenAction } from './CitizenAction';
import { CitizenProposal } from '../types';
import { MessageCircle, MapPin, Send, Heart } from 'lucide-react';

interface ContactPageProps {
  proposals: CitizenProposal[];
  onSupportProposal: (id: string) => void;
  onOpenProposalModal: () => void;
  onOpenDonationModal?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  proposals,
  onSupportProposal,
  onOpenProposalModal,
  onOpenDonationModal
}) => {
  return (
    <div className="pt-24 pb-16">
      {/* Page Header Banner */}
      <div className="bg-white text-neutral-900 py-12 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[rgb(220,20,35)] text-xs font-bold uppercase tracking-wider mb-3">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Atención Comunitaria & Participación</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[rgb(220,20,35)]">
                Contacto & Buzón Ciudadano
              </h1>
              <p className="mt-3 text-base sm:text-lg text-neutral-600 max-w-3xl leading-relaxed">
                Comunícate con nuestro equipo, visítanos en nuestra sede de Apartadó o postula iniciativas para tu barrio o vereda a través del buzón de propuestas.
              </p>
            </div>
            {onOpenDonationModal && (
              <button
                onClick={onOpenDonationModal}
                className="self-start md:self-auto shrink-0 inline-flex items-center gap-2 bg-[rgb(220,20,35)] hover:bg-[rgb(180,15,25)] text-white px-5 py-3 rounded-xl font-bold text-sm shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Hacer Donación Oficial</span>
              </button>
            )}
          </div>
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
