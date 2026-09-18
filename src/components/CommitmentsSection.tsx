import React, { useState } from 'react';
import { COMMITMENTS } from '../data/foundationData';
import { Commitment } from '../types';
import { 
  Landmark, 
  ShieldAlert, 
  GraduationCap, 
  Building2, 
  Activity, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight,
  Sparkles,
  Send
} from 'lucide-react';

interface CommitmentsSectionProps {
  onOpenProposalModal: () => void;
}

export const CommitmentsSection: React.FC<CommitmentsSectionProps> = ({ onOpenProposalModal }) => {
  const [selectedCommitment, setSelectedCommitment] = useState<Commitment>(COMMITMENTS[0]);

  const getCommitmentIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-white" };
    switch (iconName) {
      case 'Landmark': return <Landmark {...props} />;
      case 'ShieldAlert': return <ShieldAlert {...props} />;
      case 'GraduationCap': return <GraduationCap {...props} />;
      case 'Building2': return <Building2 {...props} />;
      case 'Activity': return <Activity {...props} />;
      case 'TrendingUp': return <TrendingUp {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section id="compromisos" className="py-20 bg-neutral-100/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 text-[rgb(220,20,35)] text-xs font-black uppercase tracking-wider mb-3">
            <span>Ejes Programáticos</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[rgb(220,20,35)]"></span>
            <span>Gestión Social Comunitaria</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight">
            Seis Ejes de Compromiso para Transformar a Apartadó
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            Iniciativas sociales estructuradas con visión comunitaria, transparencia absoluta y resultados verificables 
            para cada corregimiento, barrio, vereda y sector productivo de Urabá.
          </p>
        </div>

        {/* Interactive Master Grid & Detail View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 6 Commitments Selector Cards */}
          <div className="lg:col-span-5 space-y-3">
            {COMMITMENTS.map((c) => {
              const isSelected = selectedCommitment.id === c.id;
              return (
                <div
                  key={c.id}
                  onClick={() => setSelectedCommitment(c)}
                  className={`cursor-pointer p-4 sm:p-5 rounded-2xl border transition-all flex items-center justify-between gap-4 group ${
                    isSelected
                      ? 'bg-white border-[rgb(220,20,35)] shadow-md ring-2 ring-[rgb(220,20,35)]/15'
                      : 'bg-white/80 hover:bg-white border-neutral-200/80 hover:border-neutral-300 shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center font-black text-sm shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-[rgb(220,20,35)] text-white shadow'
                          : 'bg-neutral-100 text-neutral-600 group-hover:bg-red-50 group-hover:text-[rgb(220,20,35)]'
                      }`}
                    >
                      {c.number}
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block">
                        Eje {c.number}
                      </span>
                      <h4
                        className={`text-sm sm:text-base font-bold transition-colors ${
                          isSelected ? 'text-[rgb(220,20,35)]' : 'text-neutral-900 group-hover:text-[rgb(220,20,35)]'
                        }`}
                      >
                        {c.title}
                      </h4>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-5 h-5 shrink-0 transition-transform ${
                      isSelected ? 'text-[rgb(220,20,35)] translate-x-1' : 'text-neutral-400 group-hover:text-neutral-700'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Right Column: Detailed Breakdown of the Selected Commitment */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-9 border border-neutral-200 shadow-lg relative overflow-hidden">
              
              {/* Header with Icon and Big Number */}
              <div className="flex items-start justify-between gap-4 border-b border-neutral-100 pb-6 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[rgb(220,20,35)] flex items-center justify-center shadow-md shrink-0">
                    {getCommitmentIcon(selectedCommitment.iconName)}
                  </div>
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-[rgb(220,20,35)]">
                      Compromiso Nº {selectedCommitment.number}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight mt-0.5">
                      {selectedCommitment.title}
                    </h3>
                  </div>
                </div>
                <span className="hidden sm:block text-5xl font-black text-neutral-100 select-none">
                  {selectedCommitment.number}
                </span>
              </div>

              {/* Lead Summary Callout */}
              <div className="p-4 bg-red-50/80 rounded-2xl border border-red-100 text-[rgb(180,15,25)] font-semibold text-base mb-6 leading-relaxed">
                «{selectedCommitment.leadSummary}»
              </div>

              {/* Comprehensive Description from Official Presentations */}
              <div className="space-y-4 mb-8">
                <h4 className="text-xs uppercase font-extrabold tracking-wider text-neutral-400">
                  Fundamento del Proyecto
                </h4>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  {selectedCommitment.description}
                </p>
              </div>

              {/* Concrete Actions Checklist */}
              <div className="space-y-3 mb-8">
                <h4 className="text-xs uppercase font-extrabold tracking-wider text-neutral-400">
                  Líneas de Acción Inmediatas:
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {selectedCommitment.actions.map((act, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-neutral-50 rounded-xl border border-neutral-150">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-neutral-800 font-medium leading-normal">
                        {act}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact Metric & Quick Action */}
              <div className="pt-6 border-t border-neutral-150 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-neutral-600">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span><strong>Meta de Impacto:</strong> {selectedCommitment.impactMetric}</span>
                </div>

                <button
                  onClick={onOpenProposalModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[rgb(220,20,35)] hover:bg-[rgb(180,15,25)] text-white text-xs sm:text-sm font-bold shadow transition-all active:scale-95 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Aportar a este Eje</span>
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Vision Quote Card */}
        <div className="mt-14 bg-gradient-to-r from-neutral-900 to-red-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-bold">
              Visión Social Subregional
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              «Nos comprometemos a impulsar el progreso de Apartadó con hechos y constancia»
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed">
              Trabajando con vocación, transparencia y cercanía. Construyendo un proyecto comunitario 
              que permita el desarrollo integral de la subregión de Urabá, articulando a líderes, familias e instituciones.
            </p>
          </div>
          <a
            href="#contacto"
            className="shrink-0 bg-white text-neutral-900 hover:bg-neutral-100 font-bold px-6 py-3 rounded-xl text-sm transition-colors shadow"
          >
            Vincular mi Organización
          </a>
        </div>

      </div>
    </section>
  );
};
