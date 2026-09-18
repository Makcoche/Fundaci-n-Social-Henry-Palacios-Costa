import React, { useState } from 'react';
import { FOUNDATION_INFO, FOUNDATION_ABOUT } from '../data/foundationData';
import { 
  Heart, 
  Target, 
  Eye, 
  MapPin, 
  Users, 
  ShieldCheck, 
  Zap, 
  Award, 
  CheckCircle2, 
  TrendingUp, 
  Sparkles,
  BookOpen
} from 'lucide-react';

export const AboutFoundation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mision' | 'metodologia' | 'lineas' | 'transparencia'>('mision');

  return (
    <section id="quienes-somos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-[rgb(220,20,35)] text-xs font-bold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 fill-[rgb(220,20,35)]" />
            <span>Vocación Comunitaria & Acción Real</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            ¿Quiénes Somos en la <span className="text-[rgb(220,20,35)]">Fundación Social</span>?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            Somos una organización comunitaria y social sin ánimo de lucro, dedicada a transformar 
            las oportunidades de la infancia, las familias campesinas, las mujeres y la juventud en Apartadó 
            y los municipios de la subregión de Urabá bajo el lema <strong>«Diciendo y Haciendo»</strong>.
          </p>
        </div>

        {/* Master Identity Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Card 1: Mission & Institutional Identity */}
          <div className="lg:col-span-5 bg-gradient-to-br from-neutral-900 via-neutral-950 to-red-950 text-white rounded-3xl p-8 relative overflow-hidden shadow-xl flex flex-col justify-between">
            {/* Visual background badge watermark */}
            <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
              <span className="font-script text-[180px] font-black text-white">FS</span>
            </div>

            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-amber-300 font-bold">Identidad Institucional</span>
                  <h3 className="text-2xl font-black text-white">{FOUNDATION_INFO.shortName}</h3>
                  <span className="text-xs text-neutral-400 font-medium block mt-0.5">{FOUNDATION_INFO.entityType}</span>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[rgb(220,20,35)] flex items-center justify-center font-black text-xl text-white shadow-md">
                  HP
                </div>
              </div>

              {/* Core Mission & Vision */}
              <div className="space-y-6 text-sm text-neutral-200">
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 text-amber-300 font-bold mb-2">
                    <Target className="w-4 h-4" />
                    <h4 className="text-xs uppercase tracking-wider">Nuestra Misión</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {FOUNDATION_ABOUT.mission}
                  </p>
                </div>

                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 text-amber-300 font-bold mb-2">
                    <Eye className="w-4 h-4" />
                    <h4 className="text-xs uppercase tracking-wider">Nuestra Visión</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {FOUNDATION_ABOUT.vision}
                  </p>
                </div>
              </div>
            </div>

            {/* Arraigo en el Territorio */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
              <span className="flex items-center gap-1.5 text-amber-200 font-semibold">
                <MapPin className="w-4 h-4 text-[rgb(220,20,35)]" /> Sede en Apartadó, Urabá
              </span>
              <span className="font-bold text-white bg-white/10 px-2.5 py-1 rounded-full">
                15+ Años de Servicio
              </span>
            </div>
          </div>

          {/* Card 2: Interactive Tabs of Institutional Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-neutral-50 rounded-3xl p-8 border border-neutral-200/80 shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
                  Cómo Transformamos a Nuestra Comunidad
                </h3>
                <span className="text-xs font-bold bg-red-100 text-[rgb(220,20,35)] px-3 py-1 rounded-full">
                  Acción Social Directa
                </span>
              </div>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6">
                Creemos que la confianza comunitaria no se construye con palabras, sino con hechos tangibles. 
                Nuestros proyectos se diseñan desde la base barrial y veredal para asegurar soluciones eficientes, 
                transparentes y duraderas.
              </p>

              {/* Navigation Tabs */}
              <div className="flex flex-wrap gap-2 mb-6 border-b border-neutral-200 pb-3">
                <button
                  onClick={() => setActiveTab('mision')}
                  className={`px-3.5 py-1.5 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                    activeTab === 'mision'
                      ? 'bg-[rgb(220,20,35)] text-white shadow-sm'
                      : 'bg-white text-neutral-700 hover:bg-neutral-200 border border-neutral-200'
                  }`}
                >
                  Propósito Social
                </button>
                <button
                  onClick={() => setActiveTab('metodologia')}
                  className={`px-3.5 py-1.5 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                    activeTab === 'metodologia'
                      ? 'bg-[rgb(220,20,35)] text-white shadow-sm'
                      : 'bg-white text-neutral-700 hover:bg-neutral-200 border border-neutral-200'
                  }`}
                >
                  Metodología en Terreno
                </button>
                <button
                  onClick={() => setActiveTab('lineas')}
                  className={`px-3.5 py-1.5 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                    activeTab === 'lineas'
                      ? 'bg-[rgb(220,20,35)] text-white shadow-sm'
                      : 'bg-white text-neutral-700 hover:bg-neutral-200 border border-neutral-200'
                  }`}
                >
                  Líneas Estratégicas
                </button>
                <button
                  onClick={() => setActiveTab('transparencia')}
                  className={`px-3.5 py-1.5 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                    activeTab === 'transparencia'
                      ? 'bg-[rgb(220,20,35)] text-white shadow-sm'
                      : 'bg-white text-neutral-700 hover:bg-neutral-200 border border-neutral-200'
                  }`}
                >
                  Ética y Rendición de Cuentas
                </button>
              </div>

              {/* Tab Content Display */}
              <div className="min-h-[220px]">
                {activeTab === 'mision' && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <h4 className="font-bold text-neutral-900 text-base flex items-center gap-2">
                      <Target className="w-5 h-5 text-[rgb(220,20,35)]" />
                      El Propósito que Guía Nuestras Acciones
                    </h4>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {FOUNDATION_ABOUT.purpose}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="p-3 bg-white rounded-xl border border-neutral-200 text-xs text-neutral-700 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Presencia activa en comunas urbanas y veredas rurales de Apartadó.</span>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-neutral-200 text-xs text-neutral-700 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Enfoque integral que articula deporte, cultura, educación y campo.</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'metodologia' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in duration-200">
                    {FOUNDATION_ABOUT.methodology.map((item, idx) => (
                      <div key={idx} className="p-4 bg-white rounded-2xl border border-neutral-200 shadow-2xs">
                        <div className="flex items-center gap-2 text-[rgb(220,20,35)] font-bold text-sm mb-1.5">
                          <CheckCircle2 className="w-4 h-4" />
                          <h5>{item.title}</h5>
                        </div>
                        <p className="text-xs text-neutral-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'lineas' && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    {FOUNDATION_ABOUT.strategicLines.map((line, idx) => (
                      <div key={idx} className="p-3.5 bg-white rounded-xl border border-neutral-200 flex items-start gap-3">
                        <div className="w-7 h-7 rounded-lg bg-red-100 text-[rgb(220,20,35)] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                          {idx + 1}
                        </div>
                        <div>
                          <h5 className="font-bold text-neutral-900 text-sm">{line.title}</h5>
                          <p className="text-xs text-neutral-600 mt-0.5">{line.summary}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'transparencia' && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="p-4 bg-red-50 border border-red-200 rounded-2xl">
                      <h4 className="font-bold text-[rgb(220,20,35)] text-sm flex items-center gap-2 mb-1">
                        <ShieldCheck className="w-4 h-4" /> Principio de Cuentas Abiertas
                      </h4>
                      <p className="text-xs text-neutral-700 leading-relaxed">
                        Cada aporte, donación y convenio gestionado por la Fundación Social es administrado 
                        con rigor técnico y financiero. Presentamos informes de impacto social a las comunidades beneficiarias.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-center text-xs">
                      <div className="p-3 bg-white rounded-xl border border-neutral-200">
                        <span className="font-black text-xl text-[rgb(220,20,35)] block">100%</span>
                        <span className="text-neutral-600">Iniciativas con veeduría ciudadana</span>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-neutral-200">
                        <span className="font-black text-xl text-[rgb(220,20,35)] block">0</span>
                        <span className="text-neutral-600">Intermediarios en entregas comunitarias</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Quick Metric strip */}
            <div className="mt-8 pt-4 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-500">
              <span className="flex items-center gap-1.5 font-medium">
                <Users className="w-4 h-4 text-[rgb(220,20,35)]" />
                Más de 25.000 beneficiarios acumulados en Urabá
              </span>
              <a
                href="#programas"
                className="text-[rgb(220,20,35)] font-bold hover:underline flex items-center gap-1"
              >
                Explorar Programas Sociales →
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
