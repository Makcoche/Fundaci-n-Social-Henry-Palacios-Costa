import React from 'react';
import { TESTIMONIALS } from '../data/foundationData';
import { Quote, MapPin, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-[#CE1126] text-xs font-bold uppercase tracking-wider mb-3">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Credibilidad y Arraigo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight">
            La Voz de Nuestra Comunidad
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 leading-relaxed">
            Testimonios de quienes han vivido de primera mano el trabajo, la honestidad y los resultados 
            de Henry Palacios "Costa" en Apartadó y el Urabá.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-neutral-50 rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-sm flex flex-col justify-between relative group hover:border-[#CE1126]/40 transition-colors"
            >
              <div>
                <Quote className="w-8 h-8 text-red-300 mb-4" />
                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed italic mb-6">
                  «{item.quote}»
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-200/80 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#CE1126] text-white flex items-center justify-center font-black text-sm shrink-0 shadow-xs">
                  {item.avatarText}
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 text-sm">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#CE1126] font-semibold">
                    {item.role}
                  </p>
                  <span className="text-[11px] text-neutral-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-neutral-400" />
                    {item.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slogan Banner from Slide 24 */}
        <div className="mt-14 bg-neutral-900 rounded-3xl p-8 text-center text-white border border-neutral-800">
          <p className="text-lg sm:text-xl font-medium max-w-3xl mx-auto italic text-neutral-200">
            «No creemos en las promesas que se olvidan después de una elección. 
            Creemos en la palabra que se honra, en el trabajo constante y en los resultados que transforman la vida de las personas.»
          </p>
          <span className="inline-block mt-3 text-amber-400 text-xs sm:text-sm font-black uppercase tracking-widest">
            — Diciendo y Haciendo por Apartadó
          </span>
        </div>

      </div>
    </section>
  );
};
