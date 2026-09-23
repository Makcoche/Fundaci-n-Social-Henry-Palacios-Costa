import React from 'react';
import { Logo } from './Logo';
import { FOUNDATION_INFO, BANKING_INFO } from '../data/foundationData';
import { MapPin, Phone, Mail, MessageCircle, Heart, ArrowUp, ChevronRight, Building2, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate?: (pageId: string) => void;
  onOpenDonationModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenDonationModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (pageId: string) => {
    if (onNavigate) {
      onNavigate(pageId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-neutral-950 text-white border-t border-neutral-800">
      {/* Top Banner with Slogan */}
      <div className="bg-[rgb(220,20,35)] py-4 px-4 text-center">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="font-bold text-sm tracking-wide">
              {FOUNDATION_INFO.slogan}
            </span>
            <span>•</span>
            <span className="text-amber-200 text-xs sm:text-sm font-semibold">
              {FOUNDATION_INFO.tagline}
            </span>
          </div>

          <div className="flex items-center gap-4 mx-auto sm:mx-0 text-xs font-semibold">
            <span>{FOUNDATION_INFO.visionPhrase}</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 bg-black/25 hover:bg-black/40 px-2.5 py-1 rounded-md text-white transition-colors cursor-pointer"
              title="Volver arriba"
            >
              <span>Subir</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Slogan */}
          <div className="lg:col-span-5 space-y-4">
            <button
              onClick={() => handleNav('inicio')}
              className="text-left bg-transparent border-0 p-0 cursor-pointer"
            >
              <Logo variant="white" size="lg" />
            </button>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm mt-3">
              Promovemos el desarrollo integral, deportivo, educativo y cultural de las familias y jóvenes 
              de Apartadó y la subregión de Urabá. Gestión honesta, cercana y con resultados comprobables.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={FOUNDATION_INFO.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600 hover:text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors border border-emerald-500/30"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Oficial</span>
              </a>
              <span className="text-xs text-neutral-400">
                Línea comunitaria: <strong className="text-white">{FOUNDATION_INFO.phone}</strong>
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links (Corresponding to the 4 sections) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-amber-300">
              Navegación del Sitio
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-400">
              <li>
                <button
                  onClick={() => handleNav('inicio')}
                  className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-red-500" />
                  <span>Inicio</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('quienes-somos')}
                  className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-red-500" />
                  <span>Quiénes Somos</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('programas')}
                  className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-red-500" />
                  <span>Programas Sociales</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contacto')}
                  className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-red-500" />
                  <span>Contacto & Buzón</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Territory & Banking Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                  <Building2 className="w-4 h-4 text-[rgb(220,20,35)]" />
                  <span>{BANKING_INFO.bank}</span>
                </div>
                <span className="text-[10px] font-extrabold uppercase bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded-full">
                  Certificada
                </span>
              </div>
              <div className="text-xs">
                <span className="text-neutral-400 text-[11px] block">{BANKING_INFO.accountType}:</span>
                <span className="text-amber-300 font-mono font-bold text-sm tracking-wide">
                  {BANKING_INFO.accountNumber}
                </span>
              </div>
              <div className="text-[11px] text-neutral-400">
                <span>Titular: </span>
                <strong className="text-neutral-200">{BANKING_INFO.accountHolder}</strong>
                <br />
                <span>NIT: </span>
                <span className="text-neutral-300 font-mono">{BANKING_INFO.formattedNit}</span>
              </div>
              {onOpenDonationModal && (
                <button
                  type="button"
                  onClick={onOpenDonationModal}
                  className="w-full mt-2 flex items-center justify-center gap-1.5 bg-[rgb(220,20,35)] hover:bg-[rgb(180,15,25)] text-white font-bold py-2 px-3 rounded-xl text-xs transition-colors cursor-pointer"
                >
                  <Heart className="w-3.5 h-3.5 fill-white" />
                  <span>Hacer una Donación</span>
                </button>
              )}
            </div>

            <div className="space-y-2 text-xs text-neutral-400 pt-1">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>{FOUNDATION_INFO.headquarters}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-500 shrink-0" />
                <span>{FOUNDATION_INFO.email}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            © {new Date().getFullYear()} {FOUNDATION_INFO.name}. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-1">
            <span>Diseñado con vocación y amor por</span>
            <span className="text-red-500 font-bold">Apartadó & Urabá</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
          </div>
        </div>
      </div>
    </footer>
  );
};
