import React from 'react';
import { ProgramsSection } from './ProgramsSection';
import { CommitmentsSection } from './CommitmentsSection';
import { TestimonialsSection } from './TestimonialsSection';
import { Sparkles, ArrowRight } from 'lucide-react';

interface ProgramsPageProps {
  onOpenProposalModal: () => void;
  onNavigate: (pageId: string) => void;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({ onOpenProposalModal, onNavigate }) => {
  return (
    <div className="pt-24 pb-16">
      {/* Page Header Banner */}
      <div className="bg-gradient-to-r from-[rgb(220,20,35)] via-[rgb(180,15,25)] to-[rgb(130,8,18)] text-white py-12 border-b border-[rgb(130,8,18)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-amber-200 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Acción Social con Resultados Comprobables</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Nuestros Programas Sociales
          </h1>
          <p className="mt-3 text-base sm:text-lg text-white/90 max-w-3xl leading-relaxed">
            Iniciativas de impacto directo en deporte formativo, cultura viva, capacitación de mujeres y mejoramiento veredal en Apartadó y Urabá.
          </p>
        </div>
      </div>

      {/* Core Programs Detail */}
      <ProgramsSection onOpenProposalModal={onOpenProposalModal} />

      {/* 6 Commitments Grid with detailed actions & metrics */}
      <CommitmentsSection onOpenProposalModal={onOpenProposalModal} />

      {/* Community Testimonials & Credibility */}
      <TestimonialsSection />

      {/* Bottom CTA to Contact/Participate */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-neutral-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-amber-300 font-bold">
              Alianzas Comunitarias
            </span>
            <h3 className="text-2xl font-black mt-1 text-white">
              ¿Deseas vincular a tu comunidad o institución?
            </h3>
            <p className="text-sm text-neutral-400 mt-1.5 max-w-xl">
              Trabajamos junto a Juntas de Acción Comunal, clubes deportivos, gestores culturales y asociaciones campesinas.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contacto')}
            className="shrink-0 bg-white text-neutral-900 hover:bg-neutral-100 px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-colors shadow cursor-pointer"
          >
            <span>Contáctanos Ahora</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
