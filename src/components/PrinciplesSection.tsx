import React from 'react';
import { PRINCIPLES, SLOGAN_MEANING } from '../data/foundationData';
import { ShieldCheck, Award, Users, HeartHandshake, Scale, Compass, Zap, CheckCircle2, Quote } from 'lucide-react';

export const PrinciplesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#CE1126]" />;
      case 'Award': return <Award className="w-6 h-6 text-[#CE1126]" />;
      case 'Users': return <Users className="w-6 h-6 text-[#CE1126]" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-[#CE1126]" />;
      case 'Scale': return <Scale className="w-6 h-6 text-[#CE1126]" />;
      case 'Compass': return <Compass className="w-6 h-6 text-[#CE1126]" />;
      default: return <CheckCircle2 className="w-6 h-6 text-[#CE1126]" />;
    }
  };

  return (
    <section className="py-20 bg-neutral-900 text-white relative overflow-hidden">
      {/* Background soft red accent */}
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-red-700/20 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Slogan Deep-dive Banner */}
        <div className="bg-gradient-to-r from-[#B50E20] to-[#CE1126] rounded-3xl p-8 sm:p-12 shadow-2xl mb-20 border border-red-500/30">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-black/25 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-amber-300 mb-4">
              <Zap className="w-3.5 h-3.5" />
              <span>Nuestra Filosofía de Trabajo</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              {SLOGAN_MEANING.title}
            </h2>
            
            <p className="mt-4 text-base sm:text-lg text-white/90 leading-relaxed font-normal">
              {SLOGAN_MEANING.description}
            </p>

            {/* 4 Pillars of the Slogan */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 text-left">
              {SLOGAN_MEANING.pillars.map((pillar, index) => (
                <div key={index} className="bg-black/30 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:border-amber-300/40 transition-colors">
                  <div className="flex items-center gap-2 text-amber-300 font-bold text-base mb-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <h4>{pillar.title}</h4>
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed">
                    {pillar.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Principles Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
            Convicciones Inquebrantables
          </span>
          <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-2">
            Nuestros 6 Principios de Servicio Público
          </h3>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base">
            «Este proyecto no se construye sobre discursos, sino sobre convicciones. 
            Cada decisión está guiada por principios que reflejan nuestra manera de entender el servicio público.»
          </p>
        </div>

        {/* 6 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRINCIPLES.map((principle) => (
            <div
              key={principle.id}
              className="bg-neutral-800/80 hover:bg-neutral-800 rounded-2xl p-6 border border-neutral-700/60 transition-all hover:-translate-y-1 hover:border-[#CE1126] shadow-lg group"
            >
              <div className="w-12 h-12 rounded-xl bg-red-950/60 border border-red-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {getIcon(principle.iconName)}
              </div>
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                {principle.name}
              </h4>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight quote banner */}
        <div className="mt-16 bg-neutral-950 border border-neutral-800 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <Quote className="w-10 h-10 text-[#CE1126] shrink-0 opacity-80" />
            <div>
              <p className="text-base sm:text-lg text-neutral-200 font-medium italic">
                «Escuchar será el primer paso para gobernar. La transformación de Apartadó no depende únicamente de un alcalde; 
                depende de una ciudadanía activa, comprometida y dispuesta a participar.»
              </p>
              <span className="text-xs text-amber-400 font-bold uppercase tracking-wider block mt-2">
                — Henry Palacios “Costa”
              </span>
            </div>
          </div>
          <a
            href="#buzon"
            className="shrink-0 bg-[#CE1126] hover:bg-[#A50B1B] text-white px-5 py-3 rounded-xl font-bold text-sm transition-all shadow-md active:scale-95"
          >
            Participar en el Movimiento
          </a>
        </div>

      </div>
    </section>
  );
};
