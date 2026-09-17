import React, { useState } from 'react';
import { CAREER_MILESTONES } from '../data/foundationData';
import { GraduationCap, Trophy, Heart, Shield, Sparkles, MapPin, Calendar, Users, Award, BookOpen } from 'lucide-react';

export const AboutHenry: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'origenes' | 'educacion' | 'deporte' | 'gestion'>('origenes');

  return (
    <section id="quienes-somos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-[#CE1126] text-xs font-bold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 fill-[#CE1126]" />
            <span>Vocación, Cercanía y Resultados</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            ¿Quién es Henry Palacios <span className="font-script text-[#CE1126] text-4xl sm:text-5xl">“Costa”</span>?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            Líder social, educador, gestor deportivo y cultural con más de dos décadas de servicio incansable 
            por las familias campesinas, los jóvenes y las comunidades de Apartadó y la subregión de Urabá.
          </p>
        </div>

        {/* Profile Card & Key Personal Facts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Card 1: Biography & Origins */}
          <div className="lg:col-span-5 bg-gradient-to-br from-neutral-900 via-neutral-950 to-red-950 text-white rounded-3xl p-8 relative overflow-hidden shadow-xl flex flex-col justify-between">
            {/* Visual background badge watermark */}
            <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
              <span className="font-script text-[180px] font-black text-white">HP</span>
            </div>

            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-amber-300 font-bold">Perfil del Líder</span>
                  <h3 className="text-2xl font-black text-white">Henry Palacios Valencia</h3>
                  <span className="font-script text-3xl text-amber-300 font-bold block -mt-1">“Costa”</span>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-red-600 flex items-center justify-center font-black text-xl text-white shadow-md">
                  HP
                </div>
              </div>

              {/* Personal Data Grid */}
              <div className="space-y-4 text-sm text-neutral-200">
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Nacimiento:</strong> 22 de Abril de 1974 en Riosucio, Chocó.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Familia:</strong> Hijo de Miriam Valencia Pino y Antonio Danilo Palacios Panesso. Es el mayor de 7 hermanos y orgulloso padre de 4 hijos.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Arraigo en Urabá:</strong> Llegó a la región a los 7 años. Creció y se formó en la <em>Finca Costa Rica</em> (Comunal de la Suerte).
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <GraduationCap className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Formación Escolar:</strong> I.E. Río Grande (Turbo), Colegios Interamericano y C.A.R.B. (Apartadó).
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Shield className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Carácter y Disciplina:</strong> Prestó servicio militar como Bachiller en la <em>Policía Militar de Montería</em>, donde consolidó su vocación cívica.
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Credentials Box */}
            <div className="mt-8 pt-6 border-t border-white/10 bg-white/5 rounded-2xl p-4">
              <h4 className="text-xs uppercase tracking-wider text-amber-300 font-bold mb-2 flex items-center gap-1.5">
                <Award className="w-4 h-4" /> Formación Profesional Superior
              </h4>
              <ul className="text-xs text-neutral-300 space-y-1.5">
                <li>• <strong>Licenciado en Educación Física, Recreación y Deportes</strong> — Politécnico Colombiano J.I.C.</li>
                <li>• <strong>Especialista en Gerencia de Servicios Sociales</strong> — Fundación Universitaria Luis Amigó.</li>
              </ul>
            </div>
          </div>

          {/* Card 2: Strategic Pillars of Leadership & Service */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-neutral-50 rounded-3xl p-8 border border-neutral-200/80 shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
                  Trayectoria de Esfuerzo, Trabajo y Resultados
                </h3>
                <span className="text-xs font-bold bg-red-100 text-[#CE1126] px-3 py-1 rounded-full">
                  De Chocó a Urabá
                </span>
              </div>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6">
                Su historia de vida es el reflejo de miles de familias urabaenses que con sacrificio, 
                estudio y honestidad salen adelante. Henry Palacios no es un político tradicional de promesas; 
                es un <strong>gerente social con experiencia comprobable</strong> en administración pública, educación y transformación comunitaria.
              </p>

              {/* Navigation Tabs for Milestones */}
              <div className="flex flex-wrap gap-2 mb-6 border-b border-neutral-200 pb-3">
                <button
                  onClick={() => setActiveTab('origenes')}
                  className={`px-3.5 py-1.5 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                    activeTab === 'origenes'
                      ? 'bg-[#CE1126] text-white shadow-sm'
                      : 'bg-white text-neutral-700 hover:bg-neutral-200 border border-neutral-200'
                  }`}
                >
                  Orígenes & Educación
                </button>
                <button
                  onClick={() => setActiveTab('educacion')}
                  className={`px-3.5 py-1.5 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                    activeTab === 'educacion'
                      ? 'bg-[#CE1126] text-white shadow-sm'
                      : 'bg-white text-neutral-700 hover:bg-neutral-200 border border-neutral-200'
                  }`}
                >
                  Labor Docente & Universidad
                </button>
                <button
                  onClick={() => setActiveTab('deporte')}
                  className={`px-3.5 py-1.5 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                    activeTab === 'deporte'
                      ? 'bg-[#CE1126] text-white shadow-sm'
                      : 'bg-white text-neutral-700 hover:bg-neutral-200 border border-neutral-200'
                  }`}
                >
                  10 Años en Corbanacol
                </button>
                <button
                  onClick={() => setActiveTab('gestion')}
                  className={`px-3.5 py-1.5 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                    activeTab === 'gestion'
                      ? 'bg-[#CE1126] text-white shadow-sm'
                      : 'bg-white text-neutral-700 hover:bg-neutral-200 border border-neutral-200'
                  }`}
                >
                  Dirección Pública & MinDeporte
                </button>
              </div>

              {/* Dynamic Content based on Active Tab */}
              <div className="bg-white rounded-2xl p-6 border border-neutral-200/70 shadow-sm min-h-[220px]">
                {activeTab === 'origenes' && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[#CE1126] font-bold text-sm">
                      <MapPin className="w-4 h-4" /> De Riosucio a la Finca Costa Rica en Urabá
                    </div>
                    <p className="text-sm text-neutral-700 leading-relaxed">
                      Llegó a la subregión del Urabá a los 7 años. Allí cursó hasta tercer grado en la Escuela Comunal de la Suerte.
                      Su carácter se forjó en las fincas y veredas compartiendo el esfuerzo diario de las familias plataneras y bananeras.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-neutral-600">
                      <div className="bg-neutral-50 p-2.5 rounded-xl border border-neutral-100">
                        <strong>Policía Militar:</strong> Forja del valor de la disciplina, orden y respeto cívico por las instituciones.
                      </div>
                      <div className="bg-neutral-50 p-2.5 rounded-xl border border-neutral-100">
                        <strong>Arraigo Social:</strong> Comprensión viva de las carencias y aspiraciones de la gente de a pie.
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'educacion' && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[#CE1126] font-bold text-sm">
                      <BookOpen className="w-4 h-4" /> Maestro de Escuela y Gestor de Bienestar Universitario
                    </div>
                    <p className="text-sm text-neutral-700 leading-relaxed">
                      Inició como educador en el <strong>Coodeu (Barrio Obrero)</strong> y en el <strong>Colegio Alegría de Aprender (Pueblo Nuevo)</strong>.
                      Continuó su vocación en Comfenalco, Colegio Cooperativo e Instituto Uniban.
                    </p>
                    <p className="text-sm text-neutral-700 leading-relaxed">
                      Posteriormente ejerció como <strong>Coordinador de Bienestar</strong> en instituciones universitarias clave: MESU, Esumer, Universidad Cooperativa de Colombia (UCC), Uniremington y FESU, impulsando el acceso a la educación superior de cientos de bachilleres de Urabá.
                    </p>
                  </div>
                )}

                {activeTab === 'deporte' && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[#CE1126] font-bold text-sm">
                      <Trophy className="w-4 h-4" /> Una Década Transformando Vidas en Corbanacol
                    </div>
                    <p className="text-sm text-neutral-700 leading-relaxed">
                      Durante 10 años como líder de programas deportivos de la <strong>Fundación Corbanacol</strong>, Henry Palacios lideró los proyectos:
                    </p>
                    <ul className="text-xs sm:text-sm text-neutral-700 space-y-1.5 list-disc pl-5">
                      <li><strong>Centros C.I.F.D. y C.I.F.A.C.:</strong> Formación deportiva integral con valores y nutrición para miles de niños.</li>
                      <li><strong>Escuela de Fútbol Atlético Nacional - Corbanacol:</strong> Semillero de talentos que abrió camino profesional a jóvenes de Urabá.</li>
                      <li><strong>Olimpiadas y Torneo Interfincas:</strong> El mayor evento de integración social y recreativa para los trabajadores bananeros y sus familias.</li>
                    </ul>
                  </div>
                )}

                {activeTab === 'gestion' && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[#CE1126] font-bold text-sm">
                      <Sparkles className="w-4 h-4" /> "El Alcalde del Deporte y la Cultura"
                    </div>
                    <p className="text-sm text-neutral-700 leading-relaxed">
                      Reconocido como un gestor de resultados innegables en la administración pública:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-700">
                      <div className="p-2.5 bg-red-50 text-red-950 rounded-xl border border-red-100 font-medium">
                        • Director IMDER Apartadó
                      </div>
                      <div className="p-2.5 bg-red-50 text-red-950 rounded-xl border border-red-100 font-medium">
                        • Director IMDER Carepa
                      </div>
                      <div className="p-2.5 bg-red-50 text-red-950 rounded-xl border border-red-100 font-medium">
                        • Director de Cultura Apartadó (IMCCA)
                      </div>
                      <div className="p-2.5 bg-red-50 text-red-950 rounded-xl border border-red-100 font-medium">
                        • Enlace Territorial del Ministerio del Deporte
                      </div>
                    </div>
                    <p className="text-xs text-neutral-500 pt-1 italic">
                      Lideró la formulación y ejecución de políticas públicas de recreación, arte y actividad física en toda la subregión de Urabá.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Statement */}
            <div className="mt-6 pt-4 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-neutral-700">
              <span className="text-[#CE1126] font-bold">✓ Diciendo y Haciendo con hechos reales</span>
              <a
                href="#trayectoria"
                className="text-neutral-900 hover:text-[#CE1126] underline transition-colors"
              >
                Ver línea de tiempo completa →
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
