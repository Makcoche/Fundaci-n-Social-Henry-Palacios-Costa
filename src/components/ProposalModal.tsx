import React, { useState } from 'react';
import { CitizenProposal } from '../types';
import { X, Send, CheckCircle2, MapPin, Sparkles } from 'lucide-react';

interface ProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProposal: (proposal: CitizenProposal) => void;
}

export const ProposalModal: React.FC<ProposalModalProps> = ({
  isOpen,
  onClose,
  onAddProposal
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    neighborhood: '',
    category: 'Deporte & Espacio Público',
    description: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.author || !formData.neighborhood || !formData.description) return;

    const newProposal: CitizenProposal = {
      id: `prop-${Date.now()}`,
      title: formData.title,
      author: formData.author,
      neighborhood: formData.neighborhood,
      category: formData.category,
      description: formData.description,
      supportersCount: 1,
      date: 'Recién añadida',
      status: 'En evaluación'
    };

    onAddProposal(newProposal);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      title: '',
      author: '',
      neighborhood: '',
      category: 'Deporte & Espacio Público',
      description: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-neutral-200 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-neutral-900 mb-2">
              ¡Propuesta Registrada Exitosamente!
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-sm mx-auto leading-relaxed mb-6">
              Tu idea ha sido incorporada al banco de iniciativas comunitarias "Diciendo y Haciendo". 
              Ya está disponible para que tus vecinos puedan conocerla y apoyarla.
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 bg-[#CE1126] text-white rounded-xl text-xs sm:text-sm font-bold hover:bg-[#A50B1B]"
            >
              Cerrar y Ver en el Buzón
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6 pr-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-red-100 text-[#CE1126] text-[11px] font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3 h-3" />
                <span>Buzón Comunitario</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-neutral-900">
                Registra una Propuesta o Necesidad
              </h3>
              <p className="text-xs text-neutral-600 mt-1">
                Construyamos juntos soluciones reales para tu barrio, corregimiento o vereda en Apartadó.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                  Título de la Propuesta *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Dotación de implementos deportivos para escuela rural"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#CE1126]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Tu Nombre o JAC *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Carmen Palacios"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#CE1126]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Barrio o Vereda *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Policarpa / Churidó"
                    value={formData.neighborhood}
                    onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#CE1126]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                  Categoría
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#CE1126] bg-white"
                >
                  <option value="Deporte & Espacio Público">Deporte & Espacio Público</option>
                  <option value="Educación & Juventud">Educación & Juventud</option>
                  <option value="Salud & Bienestar">Salud & Bienestar</option>
                  <option value="Empleo & Capacitación">Empleo & Capacitación</option>
                  <option value="Infraestructura & Vías">Infraestructura & Vías</option>
                  <option value="Seguridad & Convivencia">Seguridad & Convivencia</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                  Descripción Detallada *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Explica qué necesidad busca resolver y a cuántas familias o jóvenes beneficiará..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#CE1126] resize-none"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 text-xs font-bold text-neutral-600 hover:text-neutral-900 rounded-lg"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#CE1126] hover:bg-[#A50B1B] text-white font-bold text-xs sm:text-sm rounded-xl shadow transition-all active:scale-95 flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Publicar Propuesta</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
