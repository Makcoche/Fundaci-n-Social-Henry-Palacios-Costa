import React, { useState } from 'react';
import { FOUNDATION_PROGRAMS } from '../data/foundationData';
import { Trophy, Sparkles, Sparkle, Trees, Check, ArrowRight, Heart, Users, Shield } from 'lucide-react';

interface ProgramsSectionProps {
  onOpenProposalModal: () => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onOpenProposalModal }) => {
  const [activeFilter, setActiveFilter] = useState<string>('todos');

  const getProgramIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trophy': return <Trophy className="w-6 h-6 text-white" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-white" />;
      case 'Sparkle': return <Sparkle className="w-6 h-6 text-white" />;
      case 'Trees': return <Trees className="w-6 h-6 text-white" />;
      default: return <Heart className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section id="programas" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-[#CE1126] text-xs font-bold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Acción Social en el Territorio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight">
            Programas e Iniciativas de la Fundación
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            Iniciativas vivas que transforman las realidades de la infancia, la juventud, las madres trabajadoras 
            y los campesinos de Apartadó y la subregión bananera.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FOUNDATION_PROGRAMS.map((prog) => (
            <div
              key={prog.id}
              className="bg-neutral-50 rounded-3xl p-6 sm:p-8 border border-neutral-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header with Icon and Beneficiaries */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="w-13 h-13 p-3.5 rounded-2xl bg-[#CE1126] shadow-md group-hover:scale-105 transition-transform shrink-0">
                    {getProgramIcon(prog.icon)}
                  </div>
                  <span className="inline-flex items-center gap-1.5 bg-white border border-neutral-200 text-neutral-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-2xs">
                    <span className="w-2 h-2 rounded-full bg-[#CE1126]"></span>
                    {prog.beneficiaries}
                  </span>
                </div>

                <span className="text-xs uppercase font-extrabold tracking-wider text-[#CE1126]">
                  {prog.subtitle}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight mt-1 mb-3">
                  {prog.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  {prog.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Resultados & Actividades Clave:
                  </h4>
                  {prog.achievements.map((ach, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-neutral-200 flex items-center justify-between">
                <span className="text-xs font-semibold text-neutral-500">
                  Diciendo y Haciendo en Urabá
                </span>
                <button
                  onClick={onOpenProposalModal}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#CE1126] hover:text-[#A50B1B] transition-colors"
                >
                  <span>Participar o Vincularse</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Banner: "Alcalde del Deporte, la Cultura y la Educación" */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-[#CE1126] to-[#8B0000] p-8 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-xs font-black uppercase tracking-widest text-amber-300">
              Legado Reconocido
            </span>
            <h3 className="text-2xl sm:text-3xl font-black">
              «El Alcalde del Deporte, de la Cultura y de la Educación»
            </h3>
            <p className="text-xs sm:text-sm text-white/85 max-w-2xl leading-relaxed">
              En sus direcciones en el IMDER de Apartadó y Carepa, en el IMCCA y a lo largo de 10 años en Corbanacol, 
              Henry demostró que el deporte y el arte salvan vidas y generan oportunidades para nuestra gente.
            </p>
          </div>
          <a
            href="#trayectoria"
            className="shrink-0 bg-white text-[#CE1126] font-bold px-6 py-3 rounded-xl hover:bg-neutral-100 transition-all shadow text-sm active:scale-95"
          >
            Conocer la Trayectoria
          </a>
        </div>

      </div>
    </section>
  );
};
