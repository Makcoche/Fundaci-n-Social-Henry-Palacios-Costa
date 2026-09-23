import React, { useState } from 'react';
import { X, Heart, Copy, Check, ShieldCheck, FileText, ExternalLink, ArrowRight, MessageCircle, Building2, Calendar, CheckCircle2, Info } from 'lucide-react';
import { BANKING_INFO, FOUNDATION_INFO } from '../data/foundationData';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  const [copiedAccount, setCopiedAccount] = useState(false);
  const [copiedNit, setCopiedNit] = useState(false);
  const [showCertificateView, setShowCertificateView] = useState(false);
  const [selectedCause, setSelectedCause] = useState<number | null>(null);

  if (!isOpen) return null;

  const handleCopyAccount = () => {
    navigator.clipboard.writeText(BANKING_INFO.cleanAccountNumber);
    setCopiedAccount(true);
    setTimeout(() => setCopiedAccount(false), 2500);
  };

  const handleCopyNit = () => {
    navigator.clipboard.writeText(BANKING_INFO.nit);
    setCopiedNit(true);
    setTimeout(() => setCopiedNit(false), 2500);
  };

  const whatsappMessage = encodeURIComponent(
    `Hola ${BANKING_INFO.accountHolder}, acabo de realizar una donación a su cuenta de ahorros Bancolombia N° ${BANKING_INFO.accountNumber}. Les comparto mi comprobante de transferencia:`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[rgb(220,20,35)] via-[rgb(180,15,25)] to-[rgb(130,8,18)] text-white px-6 py-5 sm:px-8 sm:py-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-amber-200 text-xs font-bold uppercase tracking-wider mb-2 border border-white/20">
            <Heart className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
            <span>Donaciones Directas & Transparentes</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Cuenta Bancaria Oficial de Donaciones
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-white/90 max-w-lg leading-relaxed">
            Tu apoyo transforma la vida de niños, jóvenes, mujeres y familias en Apartadó y la región de Urabá bajo nuestro principio <strong>“Diciendo y Haciendo”</strong>.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6">
          
          {/* Official Bank Account Card (Bancolombia) */}
          <div className="bg-gradient-to-br from-amber-50/50 via-white to-red-50/30 rounded-2xl border-2 border-red-200 p-5 sm:p-6 shadow-sm relative">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200/80 pb-3.5 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[rgb(220,20,35)] text-white flex items-center justify-center font-black shadow-xs">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-extrabold tracking-wider text-neutral-500 block">
                    Entidad Bancaria
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-neutral-900 leading-tight">
                    {BANKING_INFO.bank}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wide bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full border border-emerald-300">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Cuenta {BANKING_INFO.status}
                </span>
                <span className="text-[11px] font-bold text-neutral-500 hidden sm:inline">
                  Desde {BANKING_INFO.openingDate.split('/')[0]}
                </span>
              </div>
            </div>

            {/* Account Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Account Number Box with 1-click copy */}
              <div className="sm:col-span-2 bg-white rounded-xl p-4 border border-red-300 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] font-extrabold text-[rgb(220,20,35)] uppercase tracking-wider block">
                    {BANKING_INFO.accountType}
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-wider font-mono">
                    {BANKING_INFO.accountNumber}
                  </div>
                  <span className="text-[11px] text-neutral-500">
                    Acepta transferencias Bancolombia, Nequi, PSE y otros bancos (ACH)
                  </span>
                </div>

                <button
                  onClick={handleCopyAccount}
                  className={`shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-xs cursor-pointer ${
                    copiedAccount
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[rgb(220,20,35)] hover:bg-[rgb(180,15,25)] text-white active:scale-95'
                  }`}
                  title="Copiar número de cuenta"
                >
                  {copiedAccount ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>¡Cuenta Copiada!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copiar Cuenta</span>
                    </>
                  )}
                </button>
              </div>

              {/* Titular */}
              <div className="bg-white rounded-xl p-3.5 border border-neutral-200">
                <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider block">
                  Titular de la Cuenta
                </span>
                <p className="text-sm font-black text-neutral-900 mt-0.5 leading-snug">
                  {BANKING_INFO.accountHolder}
                </p>
                <span className="text-[11px] text-neutral-500">
                  {FOUNDATION_INFO.entityType}
                </span>
              </div>

              {/* NIT */}
              <div className="bg-white rounded-xl p-3.5 border border-neutral-200 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider block">
                    NIT de la Entidad
                  </span>
                  <p className="text-sm sm:text-base font-black text-neutral-900 font-mono mt-0.5">
                    {BANKING_INFO.formattedNit}
                  </p>
                  <span className="text-[11px] text-neutral-500">
                    Apartadó, Antioquia
                  </span>
                </div>

                <button
                  onClick={handleCopyNit}
                  className={`p-2 rounded-lg text-xs font-bold border transition-colors cursor-pointer ${
                    copiedNit
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                      : 'border-neutral-200 text-neutral-700 hover:border-[rgb(220,20,35)] hover:text-[rgb(220,20,35)]'
                  }`}
                  title="Copiar NIT"
                >
                  {copiedNit ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

            </div>

            {/* Certificate Verification Trigger */}
            <div className="mt-4 pt-3 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-1.5 text-neutral-600">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Certificación bancaria emitida en Apartadó ({BANKING_INFO.certificateDate})</span>
              </div>
              <button
                onClick={() => setShowCertificateView(!showCertificateView)}
                className="text-[rgb(220,20,35)] hover:underline font-bold inline-flex items-center gap-1 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{showCertificateView ? 'Ocultar certificado' : 'Ver certificado bancario'}</span>
              </button>
            </div>
          </div>

          {/* Official Bank Certificate Interactive View (Collapsible) */}
          {showCertificateView && (
            <div className="bg-neutral-50 border-2 border-dashed border-neutral-300 rounded-2xl p-5 sm:p-6 text-neutral-800 text-xs sm:text-sm font-sans relative shadow-inner animate-in fade-in duration-200">
              <div className="flex items-center justify-between border-b border-neutral-300 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="font-black text-base text-neutral-900 tracking-tight">Bancolombia</span>
                  <span className="text-[11px] text-neutral-500">| Certificación Oficial</span>
                </div>
                <span className="text-[11px] text-neutral-500 font-mono">
                  {BANKING_INFO.verificationUrl}
                </span>
              </div>

              <div className="text-right text-[11px] text-neutral-600 mb-3 font-semibold">
                Apartadó, septiembre 02 de 2026
              </div>

              <p className="leading-relaxed text-neutral-700 mb-4">
                <strong>BANCOLOMBIA S.A.</strong> informa que, a la fecha de emisión de este certificado la empresa{' '}
                <strong className="text-neutral-900">{BANKING_INFO.accountHolder}</strong> identificada con{' '}
                <strong>NIT {BANKING_INFO.nit}</strong> posee una cuenta de ahorros con las siguientes características:
              </p>

              {/* Certificate Table */}
              <div className="border border-neutral-300 rounded-lg overflow-hidden mb-4 bg-white">
                <div className="grid grid-cols-4 bg-neutral-100 font-bold text-[11px] sm:text-xs text-neutral-800 border-b border-neutral-300 p-2 text-center">
                  <div>Nombre Producto</div>
                  <div>N.° Producto</div>
                  <div>Fecha De Apertura</div>
                  <div>Estado</div>
                </div>
                <div className="grid grid-cols-4 font-mono text-[11px] sm:text-xs text-neutral-900 p-2 text-center">
                  <div className="font-sans font-medium">{BANKING_INFO.accountType}</div>
                  <div className="font-bold text-[rgb(220,20,35)]">{BANKING_INFO.accountNumber}</div>
                  <div>{BANKING_INFO.openingDate}</div>
                  <div className="font-bold text-emerald-700">{BANKING_INFO.status}</div>
                </div>
              </div>

              <p className="text-[10px] text-neutral-500 italic leading-relaxed">
                *Importante: esta certificación hace referencia a la cuenta oficial de la Fundación Social Henry Palacios Valencia para la captación transparente de donaciones y aportes al desarrollo comunitario de Apartadó.
              </p>
            </div>
          )}

          {/* Step-by-Step Instructions */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-neutral-900 flex items-center gap-1.5">
              <Info className="w-4 h-4 text-[rgb(220,20,35)]" />
              <span>¿Cómo realizar tu donación?</span>
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-neutral-50 rounded-xl p-3.5 border border-neutral-200">
                <span className="w-6 h-6 rounded-full bg-[rgb(220,20,35)] text-white font-bold flex items-center justify-center text-xs mb-2">1</span>
                <p className="font-bold text-neutral-900">Copia los datos</p>
                <p className="text-neutral-600 mt-1">Copia la cuenta <strong>{BANKING_INFO.accountNumber}</strong> y el NIT <strong>{BANKING_INFO.formattedNit}</strong>.</p>
              </div>

              <div className="bg-neutral-50 rounded-xl p-3.5 border border-neutral-200">
                <span className="w-6 h-6 rounded-full bg-[rgb(220,20,35)] text-white font-bold flex items-center justify-center text-xs mb-2">2</span>
                <p className="font-bold text-neutral-900">Transfiere con tu App</p>
                <p className="text-neutral-600 mt-1">Transfiere desde Bancolombia, Nequi (a cuenta de ahorros) o por PSE / ACH desde tu banco preferido.</p>
              </div>

              <div className="bg-neutral-50 rounded-xl p-3.5 border border-neutral-200">
                <span className="w-6 h-6 rounded-full bg-[rgb(220,20,35)] text-white font-bold flex items-center justify-center text-xs mb-2">3</span>
                <p className="font-bold text-neutral-900">Reporta tu Comprobante</p>
                <p className="text-neutral-600 mt-1">Envíanos la captura por WhatsApp para emitirte tu certificado de donación y agradecimiento.</p>
              </div>
            </div>
          </div>

          {/* Impact Suggestion Pills */}
          <div>
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-neutral-900 mb-2.5">
              Destino de tu aporte en Apartadó y Urabá
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              {BANKING_INFO.causes.map((cause, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedCause(idx)}
                  className={`text-left p-3 rounded-xl border transition-all cursor-pointer ${
                    selectedCause === idx
                      ? 'border-[rgb(220,20,35)] bg-red-50/70 shadow-xs'
                      : 'border-neutral-200 bg-white hover:border-neutral-300'
                  }`}
                >
                  <div className="flex items-center justify-between font-bold text-neutral-900">
                    <span>{cause.title}</span>
                    <span className="text-[rgb(220,20,35)] font-black">{cause.amount}</span>
                  </div>
                  <p className="text-[11px] text-neutral-600 mt-1 leading-snug">
                    {cause.desc}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Action Button: WhatsApp Report */}
          <div className="pt-2 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-neutral-500 text-center sm:text-left">
              <span>¿Requieres certificado tributario de donación? Contáctanos directamente.</span>
            </div>

            <a
              href={`https://wa.me/573107043923?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all active:scale-95 text-xs sm:text-sm cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Reportar Donación por WhatsApp</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
