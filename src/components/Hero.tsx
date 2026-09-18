import React from 'react';
import { FOUNDATION_INFO } from '../data/foundationData';
import { Logo } from './Logo';
import { ArrowRight, CheckCircle2, Award, Users, ShieldCheck, Send, Heart } from 'lucide-react';

interface HeroProps {
  onOpenProposalModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenProposalModal }) => {
  return (
    <section id="inicio" className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-[rgb(220,20,35)] via-[rgb(180,15,25)] to-[rgb(130,8,18)] text-white overflow-hidden">
      {/* Decorative background geometry and soft light accents */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white blur-3xl"></div>
        <div className="absolute top-1/2 -left-48 w-80 h-80 rounded-full bg-white blur-3xl"></div>
        {/* Subtle dot pattern */}
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left / Main Text Column */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 self-start bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-xs sm:text-sm font-semibold tracking-wide">
              <CheckCircle2 className="w-4 h-4 text-amber-300" />
              <span>{FOUNDATION_INFO.tagline}</span>
              <span className="text-white/40">|</span>
              <span className="text-amber-200 font-bold">Apartadó & Urabá</span>
            </div>

            {/* Slogan Headline */}
            <div>
              <p className="text-amber-200 uppercase tracking-widest text-xs sm:text-sm font-bold mb-1">
                Lema Institucional y Filosofía de Trabajo
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-none">
                “Diciendo y Haciendo”
              </h1>
              <p className="mt-3 text-xl sm:text-2xl font-medium text-white/90">
                Transformando con hechos a <span className="font-extrabold underline decoration-amber-300 decoration-wavy decoration-1 underline-offset-4">Apartadó</span> y la Región de Urabá
              </p>
            </div>

            {/* Inspiring Institutional Manifesto */}
            <p className="text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl font-normal">
              Nuestra comunidad avanza cuando el servicio social se ejerce con <strong className="text-white font-semibold">honestidad, cercanía y disciplina</strong>. 
              La Fundación Social trabaja día a día junto a las familias, niños, jóvenes, mujeres y campesinos de Apartadó 
              con programas permanentes de deporte formativo, cultura viva, educación y fortalecimiento comunitario.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#compromisos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[rgb(220,20,35)] font-bold text-sm sm:text-base hover:bg-neutral-100 transition-all shadow-lg active:scale-95 cursor-pointer"
              >
                <span>Conocer los 6 Ejes de Compromiso</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenProposalModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[rgb(130,8,18)] hover:bg-[rgb(117,6,18)] text-white font-semibold text-sm sm:text-base border border-white/20 transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <Send className="w-4 h-4 text-amber-300" />
                <span>Proponer Idea para mi Barrio</span>
              </button>
            </div>

            {/* Trust highlights */}
            <div className="pt-4 border-t border-white/15 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-white/80">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-300" />
                <span>Transparencia en cada proyecto</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-amber-300" />
                <span>Gestión participativa comunitaria</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-300" />
                <span>15+ años de impacto en Urabá</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Graphic Card with Official Brand Emblem & Foundation Mission */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/25 rounded-3xl p-6 sm:p-8 shadow-2xl text-center relative">
              
              {/* Corner badge */}
              <div className="absolute -top-3.5 right-6 bg-amber-400 text-neutral-900 font-extrabold text-xs uppercase px-3 py-1 rounded-full shadow-md">
                Organización Social Oficial
              </div>

              {/* Central Corporate Emblem Presentation */}
              <div className="my-3 flex flex-col items-center justify-center">
                <div className="p-4 bg-white/10 rounded-2xl border border-white/20 shadow-inner inline-block mb-3">
                  <Logo variant="white" size="xl" showSubtitle={false} />
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                  Fundación Social
                </h2>
                <span className="text-xs text-white/80 uppercase tracking-widest font-semibold mt-0.5">
                  Apartadó & Subregión de Urabá
                </span>
                <p className="text-xs text-amber-200 mt-2 tracking-wider uppercase font-bold">
                  «Diciendo y Haciendo»
                </p>
              </div>

              {/* Institutional quote block */}
              <div className="mt-4 bg-black/20 rounded-2xl p-4 border border-white/10 text-left">
                <p className="text-xs sm:text-sm text-white/90 italic leading-relaxed">
                  «Para la Fundación Social, "Diciendo y Haciendo" no es solo un lema; es la forma en que entendemos el compromiso con la comunidad. Significa honrar la palabra, actuar con rapidez y responder con hechos concretos a las necesidades de nuestra gente.»
                </p>
                <div className="mt-2.5 flex items-center justify-between text-xs text-amber-200 font-medium">
                  <span>Fundación Social</span>
                  <span className="text-[11px] text-white/60">Apartadó, Antioquia</span>
                </div>
              </div>

              {/* Quick Action in Card */}
              <div className="mt-5 grid grid-cols-2 gap-2 text-xs">
                <a
                  href="#quienes-somos"
                  className="bg-white/15 hover:bg-white/25 text-white font-medium py-2.5 px-3 rounded-xl transition-colors text-center border border-white/10"
                >
                  Nuestra Misión
                </a>
                <a
                  href="#programas"
                  className="bg-amber-400 hover:bg-amber-300 text-neutral-900 font-bold py-2.5 px-3 rounded-xl transition-colors text-center shadow"
                >
                  Programas Sociales
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Stats Strip */}
        <div className="mt-14 pt-8 border-t border-white/20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {FOUNDATION_INFO.stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-black text-amber-300 tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-medium text-white/80 mt-1 max-w-[160px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
