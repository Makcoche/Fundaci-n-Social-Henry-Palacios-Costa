import React from 'react';
import { FOUNDATION_INFO, BANKING_INFO } from '../data/foundationData';
import { Logo } from './Logo';
import { DonationSection } from './DonationSection';
import { 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  Users, 
  ShieldCheck, 
  Send, 
  Heart, 
  Target, 
  Sparkles, 
  ChevronRight,
  Building2,
  Copy
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (pageId: string) => void;
  onOpenProposalModal: () => void;
  onOpenDonationModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ 
  onNavigate, 
  onOpenProposalModal,
  onOpenDonationModal
}) => {
  return (
    <div className="space-y-0">
      {/* Hero Header */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-white text-neutral-900 border-b border-neutral-200 overflow-hidden">
        {/* Subtle background effects */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-red-100 blur-3xl"></div>
          <div className="absolute top-1/2 -left-48 w-80 h-80 rounded-full bg-red-50 blur-3xl"></div>
          <div
            className="w-full h-full"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(220,20,35,0.08) 1px, transparent 0)',
              backgroundSize: '32px 32px'
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
              <div className="inline-flex items-center gap-2 self-start bg-red-50 px-3.5 py-1.5 rounded-full border border-red-200 text-xs sm:text-sm font-semibold tracking-wide">
                <CheckCircle2 className="w-4 h-4 text-[rgb(220,20,35)]" />
                <span className="text-neutral-800">{FOUNDATION_INFO.tagline}</span>
                <span className="text-neutral-300">|</span>
                <span className="text-[rgb(220,20,35)] font-bold">Apartadó & Urabá</span>
              </div>

              <div>
                <p className="text-[rgb(220,20,35)] uppercase tracking-widest text-xs sm:text-sm font-extrabold mb-1">
                  Lema Institucional y Filosofía de Trabajo
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[rgb(220,20,35)] leading-none">
                  “Diciendo y Haciendo”
                </h1>
                <p className="mt-3 text-xl sm:text-2xl font-bold text-neutral-800">
                  Transformando con hechos a <span className="font-extrabold text-[rgb(220,20,35)] underline decoration-[rgb(220,20,35)] decoration-wavy decoration-1 underline-offset-4">Apartadó</span> y la Región de Urabá
                </p>
              </div>

              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl font-normal">
                Organización comunitaria y social sin ánimo de lucro. Creemos que la confianza se construye 
                honrando la palabra y respondiendo con hechos tangibles a las necesidades de la infancia, las familias 
                y el campo en nuestra región.
              </p>

              {/* Navigation CTAs to the dedicated subpages */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={onOpenDonationModal}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[rgb(220,20,35)] hover:bg-[rgb(180,15,25)] text-white font-black text-sm sm:text-base transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer ring-2 ring-red-100"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>Hacer una Donación</span>
                </button>

                <button
                  onClick={() => onNavigate('quienes-somos')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-bold text-sm sm:text-base transition-all shadow-xs active:scale-95 cursor-pointer"
                >
                  <span>Quiénes Somos</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('programas')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-red-50 hover:bg-red-100 text-[rgb(220,20,35)] border border-red-200 font-bold text-sm sm:text-base transition-all shadow-xs active:scale-95 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[rgb(220,20,35)]" />
                  <span>Programas</span>
                </button>
              </div>

              {/* Trust highlights */}
              <div className="pt-4 border-t border-neutral-200 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-neutral-600">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[rgb(220,20,35)]" />
                  <span>Transparencia en cada proyecto</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[rgb(220,20,35)]" />
                  <span>Gestión participativa comunitaria</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[rgb(220,20,35)]" />
                  <span>15+ años de labor en Urabá</span>
                </div>
              </div>
            </div>

            {/* Right Column: Emblem Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md bg-white border border-red-150 rounded-3xl p-6 sm:p-8 shadow-xl text-center relative ring-1 ring-red-100">
                <div className="absolute -top-3.5 right-6 bg-[rgb(220,20,35)] text-white font-extrabold text-xs uppercase px-3 py-1 rounded-full shadow-md">
                  Organización Social
                </div>

                <div className="my-3 flex flex-col items-center justify-center">
                  <div className="p-4 bg-red-50 rounded-2xl border border-red-100 inline-block mb-3">
                    <Logo variant="red" size="xl" showSubtitle={false} />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[rgb(220,20,35)] uppercase tracking-tight">
                    Fundación Social
                  </h2>
                  <span className="text-xs text-neutral-500 uppercase tracking-widest font-semibold mt-0.5">
                    Apartadó & Subregión de Urabá
                  </span>
                  <p className="text-xs text-[rgb(220,20,35)] mt-2 tracking-wider uppercase font-extrabold">
                    «Diciendo y Haciendo»
                  </p>
                </div>

                <div className="mt-4 bg-neutral-50 rounded-2xl p-4 border border-neutral-200 text-left">
                  <p className="text-xs sm:text-sm text-neutral-700 italic leading-relaxed">
                    «Para nosotros, "Diciendo y Haciendo" significa honrar la palabra, actuar con rapidez y convertir cada compromiso en obras visibles que dignifiquen la vida comunitaria.»
                  </p>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-2 text-xs">
                  <button
                    onClick={() => onNavigate('quienes-somos')}
                    className="bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-semibold py-2.5 px-3 rounded-xl transition-colors text-center border border-neutral-200 cursor-pointer"
                  >
                    Nuestra Misión
                  </button>
                  <button
                    onClick={() => onNavigate('contacto')}
                    className="bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-semibold py-2.5 px-3 rounded-xl transition-colors text-center border border-neutral-200 cursor-pointer"
                  >
                    Contacto & Sede
                  </button>
                </div>

                <button
                  type="button"
                  onClick={onOpenDonationModal}
                  className="mt-2.5 w-full bg-red-50 hover:bg-red-100 text-[rgb(220,20,35)] border border-red-200 font-bold py-2.5 px-3 rounded-xl transition-colors text-center text-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Heart className="w-3.5 h-3.5 fill-[rgb(220,20,35)]" />
                  <span>Donar a Cuenta Bancolombia Oficial</span>
                </button>
              </div>
            </div>

          </div>

          {/* Stats Strip */}
          <div className="mt-14 pt-8 border-t border-neutral-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {FOUNDATION_INFO.stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-black text-[rgb(220,20,35)] tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-neutral-600 mt-1 max-w-[160px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Overview Portal Section: 3 Clear Pillars pointing to the dedicated pages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-[rgb(220,20,35)] text-xs font-bold uppercase tracking-wider mb-2">
              <Target className="w-3.5 h-3.5" />
              <span>Explora Nuestra Organización</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Conoce Más de Nuestra Labor
            </h2>
            <p className="mt-3 text-neutral-600 text-sm sm:text-base">
              Selecciona una sección para acceder a la información detallada de la Fundación Social:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Quiénes Somos */}
            <div className="bg-neutral-50 rounded-3xl p-8 border border-neutral-200/90 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-red-100 text-[rgb(220,20,35)] flex items-center justify-center font-black text-xl mb-6 group-hover:scale-110 transition-transform">
                  <Heart className="w-6 h-6 fill-[rgb(220,20,35)]" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                  Quiénes Somos
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  Descubre nuestra misión, visión institucional, principios rectores de transparencia y la trayectoria de hitos comunitarios construidos junto a las familias de Urabá.
                </p>
                <ul className="space-y-2 text-xs text-neutral-700 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Misión, Visión & Valores Institucionales</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Línea histórica de impacto en el territorio</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>6 Principios de Acción Social</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => onNavigate('quienes-somos')}
                className="w-full py-3 px-4 rounded-xl bg-white border border-neutral-200 text-[rgb(220,20,35)] font-bold text-sm flex items-center justify-center gap-2 hover:bg-red-50 hover:border-red-200 transition-colors cursor-pointer"
              >
                <span>Explorar Quiénes Somos</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Card 2: Programas y Compromisos */}
            <div className="bg-gradient-to-b from-red-50/70 to-white rounded-3xl p-8 border border-red-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[rgb(220,20,35)] text-white flex items-center justify-center font-black text-xl mb-6 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                  Programas Sociales
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  Conoce en detalle nuestras iniciativas activas: escuelas deportivas formativas, preservación de la cultura urabaense, talleres para madres emprendedoras y apoyo al campo.
                </p>
                <ul className="space-y-2 text-xs text-neutral-700 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Semilleros Deportivos formativos gratuitos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Urabá: Ritmo, Expresión y Tradición</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Seis Ejes de Compromiso Social</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => onNavigate('programas')}
                className="w-full py-3 px-4 rounded-xl bg-[rgb(220,20,35)] text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-[rgb(180,15,25)] transition-colors shadow-sm cursor-pointer"
              >
                <span>Ver Todos los Programas</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Card 3: Contacto y Buzón Ciudadano */}
            <div className="bg-neutral-50 rounded-3xl p-8 border border-neutral-200/90 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-black text-xl mb-6 group-hover:scale-110 transition-transform">
                  <Send className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                  Contacto & Participación
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  Ubica nuestra sede física en Apartadó, canaliza tus propuestas para tu barrio o vereda, y únete a nuestro voluntariado comunitario.
                </p>
                <ul className="space-y-2 text-xs text-neutral-700 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Sede central en Apartadó, Antioquia</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Buzón de propuestas comunitarias</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Línea directa y atención por WhatsApp</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => onNavigate('contacto')}
                className="w-full py-3 px-4 rounded-xl bg-white border border-neutral-200 text-neutral-800 font-bold text-sm flex items-center justify-center gap-2 hover:bg-neutral-100 transition-colors cursor-pointer"
              >
                <span>Ir a Contacto & Sedes</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Quick Callout: Buzón Ciudadano */}
          <div className="mt-14 rounded-3xl bg-neutral-900 text-white p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs uppercase tracking-widest text-amber-300 font-bold">
                Tu Voz Cuenta en Urabá
              </span>
              <h3 className="text-xl sm:text-2xl font-black">
                ¿Tienes una propuesta o necesidad para tu barrio o vereda?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl">
                En la Fundación Social escuchamos las iniciativas de las comunidades y líderes vecinales para impulsarlas con hechos.
              </p>
            </div>
            <button
              onClick={onOpenProposalModal}
              className="shrink-0 bg-[rgb(220,20,35)] hover:bg-[rgb(180,15,25)] text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>Registrar Mi Propuesta</span>
            </button>
          </div>

        </div>
      </section>

      {/* Official Certified Donation Section */}
      <DonationSection onOpenDonationModal={onOpenDonationModal} />
    </div>
  );
};
