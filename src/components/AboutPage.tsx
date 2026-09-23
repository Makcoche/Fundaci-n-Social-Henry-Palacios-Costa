import React from 'react';
import { AboutFoundation } from './AboutFoundation';
import { PrinciplesSection } from './PrinciplesSection';
import { TrajectoryTimeline } from './TrajectoryTimeline';
import { Heart, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (pageId: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 pb-16">
      {/* Breadcrumb / Page Header Banner */}
      <div className="bg-white text-neutral-900 py-12 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[rgb(220,20,35)] text-xs font-bold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 fill-[rgb(220,20,35)] text-[rgb(220,20,35)]" />
            <span>Nuestra Identidad & Principios</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[rgb(220,20,35)]">
            Quiénes Somos
          </h1>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 max-w-3xl leading-relaxed">
            Conoce la historia, misión, visión y principios rectores de la <strong>Fundación Social Comunitaria</strong>. 
            Quince años de compromiso continuo construyendo oportunidades en Apartadó y la subregión de Urabá.
          </p>
        </div>
      </div>

      {/* Main About Component: Mission, Vision, Strategic Lines & Transparency */}
      <AboutFoundation />

      {/* 6 Principles of Social Action */}
      <PrinciplesSection />

      {/* Timeline of territorial impact */}
      <TrajectoryTimeline />

      {/* Bottom CTA to Programs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-red-50 border border-red-200 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-neutral-900">
              ¿Quieres conocer nuestros programas en acción?
            </h3>
            <p className="text-sm text-neutral-600 mt-1">
              Descubre los semilleros deportivos, rescate cultural, empoderamiento de mujeres y apoyo rural.
            </p>
          </div>
          <button
            onClick={() => onNavigate('programas')}
            className="shrink-0 bg-[rgb(220,20,35)] hover:bg-[rgb(180,15,25)] text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-colors shadow-sm cursor-pointer"
          >
            <span>Ver Programas</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
