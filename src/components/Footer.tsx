import React from 'react';
import { Logo } from './Logo';
import { FOUNDATION_INFO } from '../data/foundationData';
import { MapPin, Phone, Mail, MessageCircle, Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 text-white border-t border-neutral-800">
      {/* Top Banner with Slogan */}
      <div className="bg-[#CE1126] py-4 px-4 text-center">
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
              className="inline-flex items-center gap-1 bg-black/25 hover:bg-black/40 px-2.5 py-1 rounded-md text-white transition-colors"
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
            <Logo variant="white" size="lg" />
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm mt-3">
              Promovemos el desarrollo integral, deportivo, educativo y cultural de las familias y jóvenes 
              de Apartadó y la subregión de Urabá. Gestión honesta, cercana y con resultados comprobables.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={FOUNDATION_INFO.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center text-white transition-colors shadow-sm"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <span className="text-xs text-neutral-400">
                Línea comunitaria: <strong className="text-white">{FOUNDATION_INFO.phone}</strong>
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-amber-300">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-400">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#quienes-somos" className="hover:text-white transition-colors">¿Quién es Henry Palacios?</a>
              </li>
              <li>
                <a href="#trayectoria" className="hover:text-white transition-colors">Trayectoria & Corbanacol</a>
              </li>
              <li>
                <a href="#compromisos" className="hover:text-white transition-colors">Los 6 Compromisos</a>
              </li>
              <li>
                <a href="#programas" className="hover:text-white transition-colors">Programas de Acción Social</a>
              </li>
              <li>
                <a href="#buzon" className="hover:text-white transition-colors">Buzón Ciudadano & Voluntarios</a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">Contacto & Sede</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Territory & Core Areas */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-amber-300">
              Territorio & Compromiso
            </h4>
            <div className="space-y-2 text-xs text-neutral-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>{FOUNDATION_INFO.headquarters}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-500 shrink-0" />
                <span>{FOUNDATION_INFO.email}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-neutral-800">
              <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block mb-1">
                Ejes de Transformación:
              </span>
              <p className="text-[11px] text-neutral-500 leading-normal">
                Gobernabilidad • Seguridad y Convivencia • Educación y Becas • Deporte Comunitario • Salud Oportuna • Empleo y Sector Bananero
              </p>
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
