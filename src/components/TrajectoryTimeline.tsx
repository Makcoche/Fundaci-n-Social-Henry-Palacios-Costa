import React from 'react';
import { CAREER_MILESTONES } from '../data/foundationData';
import { Calendar, Briefcase, GraduationCap, Trophy, Building2, MapPin, CheckCircle2 } from 'lucide-react';

export const TrajectoryTimeline: React.FC = () => {
  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'educacion': return <GraduationCap className="w-5 h-5 text-white" />;
      case 'deporte': return <Trophy className="w-5 h-5 text-white" />;
      case 'cultura': return <Building2 className="w-5 h-5 text-white" />;
      default: return <Briefcase className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="trayectoria" className="py-20 bg-neutral-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Hoja de Vida Intachable</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Trayectoria de Servicio & Liderazgo Comunitario
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
            Una vida consagrada al trabajo con las comunidades de Urabá: en las aulas, en las canchas de fútbol, 
            en las fincas bananeras y en la dirección de las instituciones públicas.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-red-600/60 ml-4 sm:ml-8 md:ml-32 space-y-12 pb-6">
          {CAREER_MILESTONES.map((item, index) => (
            <div key={index} className="relative pl-8 sm:pl-10 group">
              
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-[#CE1126] border-4 border-neutral-900 flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform">
                {getCategoryIcon(item.category)}
              </div>

              {/* Period Label (Visible on desktop to the left or top) */}
              <div className="inline-block bg-white/10 text-amber-300 text-xs font-bold px-3 py-1 rounded-full mb-2">
                {item.period}
              </div>

              {/* Card Container */}
              <div className="bg-neutral-800/90 border border-neutral-700/70 hover:border-red-500/60 rounded-2xl p-6 shadow-md transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-black text-white">
                    {item.role}
                  </h3>
                  <span className="text-xs font-bold text-red-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {item.entity}
                  </span>
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Highlight Summary Card */}
        <div className="mt-14 bg-neutral-950 border border-neutral-800 rounded-3xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4 rounded-2xl bg-neutral-900/80">
            <span className="text-2xl sm:text-3xl font-black text-red-500">10 Años</span>
            <p className="text-xs sm:text-sm text-neutral-300 mt-1">Liderando programas deportivos y sociales en Corbanacol</p>
          </div>
          <div className="p-4 rounded-2xl bg-neutral-900/80">
            <span className="text-2xl sm:text-3xl font-black text-amber-400">4 Entidades</span>
            <p className="text-xs sm:text-sm text-neutral-300 mt-1">Dirección del IMDER Apartadó, IMDER Carepa, IMCCA y MinDeporte</p>
          </div>
          <div className="p-4 rounded-2xl bg-neutral-900/80">
            <span className="text-2xl sm:text-3xl font-black text-white">100% Hechos</span>
            <p className="text-xs sm:text-sm text-neutral-300 mt-1">Vocación ininterrumpida por la gente de Urabá</p>
          </div>
        </div>

      </div>
    </section>
  );
};
