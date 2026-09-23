import React, { useState } from 'react';
import { Heart, Building2, Copy, Check, CheckCircle2, ShieldCheck, ArrowRight, MessageCircle } from 'lucide-react';
import { BANKING_INFO, FOUNDATION_INFO } from '../data/foundationData';

interface DonationSectionProps {
  onOpenDonationModal: () => void;
}

export const DonationSection: React.FC<DonationSectionProps> = ({ onOpenDonationModal }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(BANKING_INFO.cleanAccountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-red-50/40 to-white border-y border-neutral-200 relative overflow-hidden">
      {/* Decorative subtle ambient */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-red-100/50 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl border-2 border-red-200 shadow-xl p-6 sm:p-10 lg:p-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-[rgb(220,20,35)] text-xs font-bold uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5 fill-[rgb(220,20,35)] text-[rgb(220,20,35)]" />
                <span>Canal Oficial de Donaciones</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight leading-tight">
                Haz Parte de la Transformación de <span className="text-[rgb(220,20,35)]">Apartadó y Urabá</span>
              </h2>

              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
                Cada aporte llega directamente a los semilleros deportivos de niños y jóvenes, al empoderamiento de mujeres cabeza de familia y a las obras comunitarias en veredas y barrios vulnerables.
              </p>

              {/* Guarantees */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-neutral-700">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Certificación Bancolombia Vigente</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[rgb(220,20,35)]" />
                  <span>NIT {BANKING_INFO.formattedNit}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[rgb(220,20,35)]" />
                  <span>100% Inversión Social</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenDonationModal}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[rgb(220,20,35)] hover:bg-[rgb(180,15,25)] text-white font-black text-sm sm:text-base transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>Ver Datos de Donación</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/573107043923?text=${encodeURIComponent('Hola Fundación Social Henry Palacios Valencia, deseo información para hacer una donación o aporte a sus programas sociales.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all shadow-xs active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Consultar por WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Card: Quick Bank Account Pill */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 text-white rounded-2xl p-6 sm:p-7 shadow-2xl border border-neutral-800 relative">
                
                <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-4">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-amber-300" />
                    <span className="font-bold text-sm text-neutral-200">
                      {BANKING_INFO.bank}
                    </span>
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wide bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30">
                    Cuenta {BANKING_INFO.status}
                  </span>
                </div>

                <div className="space-y-3">
                  <div>
                    <span className="text-[11px] text-neutral-400 uppercase tracking-wider block">
                      Titular Oficial
                    </span>
                    <p className="text-sm font-black text-white leading-snug">
                      {BANKING_INFO.accountHolder}
                    </p>
                    <p className="text-xs text-amber-300 font-mono">
                      NIT: {BANKING_INFO.formattedNit}
                    </p>
                  </div>

                  <div className="bg-neutral-800/80 rounded-xl p-3.5 border border-neutral-700/80">
                    <span className="text-[11px] text-neutral-400 uppercase tracking-wider block">
                      {BANKING_INFO.accountType}
                    </span>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xl sm:text-2xl font-black font-mono text-white tracking-wider">
                        {BANKING_INFO.accountNumber}
                      </span>
                      <button
                        type="button"
                        onClick={handleCopy}
                        className={`p-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          copied
                            ? 'bg-emerald-600 text-white'
                            : 'bg-neutral-700 hover:bg-neutral-600 text-white'
                        }`}
                        title="Copiar número de cuenta"
                      >
                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="text-[11px] text-neutral-400 flex items-center justify-between pt-1">
                    <span>Apertura: {BANKING_INFO.openingDate}</span>
                    <span>Apartadó, Antioquia</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onOpenDonationModal}
                  className="mt-5 w-full bg-[rgb(220,20,35)] hover:bg-[rgb(180,15,25)] text-white font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm text-center transition-colors cursor-pointer"
                >
                  Abrir Ficha Completa de Donación
                </button>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
