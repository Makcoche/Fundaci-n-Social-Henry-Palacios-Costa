import React, { useState } from 'react';
import { FOUNDATION_INFO } from '../data/foundationData';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle2, ShieldCheck } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'Atención Comunitaria',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-20 bg-neutral-100/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-[rgb(220,20,35)] text-xs font-bold uppercase tracking-wider mb-3">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Puertas Abiertas para la Comunidad</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight">
            Contáctanos & Visita Nuestra Sede
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 leading-relaxed">
            Estamos atentos para escucharte, recibir tus aportes y trabajar de la mano por el desarrollo de Apartadó y la región de Urabá.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact Details & Info Card */}
          <div className="lg:col-span-5 bg-[rgb(220,20,35)] text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col justify-between relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>

            <div>
              <span className="text-xs uppercase font-extrabold tracking-widest text-amber-200">
                Sede Central
              </span>
              <h3 className="text-2xl sm:text-3xl font-black mt-1 mb-6">
                Fundación Social Comunitaria
              </h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-amber-300" />
                  </div>
                  <div>
                    <strong className="block text-white font-semibold">Ubicación</strong>
                    <span className="text-white/85 text-xs sm:text-sm">
                      {FOUNDATION_INFO.headquarters}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-amber-300" />
                  </div>
                  <div>
                    <strong className="block text-white font-semibold">Teléfono de Atención</strong>
                    <span className="text-white/85 text-xs sm:text-sm">
                      {FOUNDATION_INFO.phone}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-amber-300" />
                  </div>
                  <div>
                    <strong className="block text-white font-semibold">Correo Electrónico</strong>
                    <span className="text-white/85 text-xs sm:text-sm">
                      {FOUNDATION_INFO.email}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-amber-300" />
                  </div>
                  <div>
                    <strong className="block text-white font-semibold">Horario de Atención</strong>
                    <span className="text-white/85 text-xs sm:text-sm">
                      {FOUNDATION_INFO.workingHours}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <a
                href={FOUNDATION_INFO.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Conversar por WhatsApp Directo</span>
              </a>
              <div className="flex items-center justify-center gap-1.5 mt-3 text-[11px] text-white/70">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
                <span>Atención cercana y personalizada</span>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-neutral-200 shadow-xl flex flex-col justify-center">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-neutral-900 mb-2">
                  ¡Mensaje Enviado con Éxito!
                </h3>
                <p className="text-sm text-neutral-600 max-w-sm mx-auto leading-relaxed mb-6">
                  Hemos recibido tu comunicación. Nuestro equipo en Apartadó se pondrá en contacto a la brevedad.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      topic: 'Atención Comunitaria',
                      message: ''
                    });
                  }}
                  className="px-6 py-2.5 bg-[rgb(220,20,35)] text-white rounded-xl text-xs font-bold hover:bg-[rgb(180,15,25)]"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-black text-neutral-900 mb-1">
                  Escríbenos un Mensaje
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 mb-6">
                  Completa el formulario y te responderemos sin demora. Diciendo y Haciendo.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      Nombre y Apellidos *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Dionisio Palacios"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(220,20,35)]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                        Teléfono Móvil *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Ej. 310 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(220,20,35)]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                        Correo Electrónico (Opcional)
                      </label>
                      <input
                        type="email"
                        placeholder="nombre@ejemplo.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(220,20,35)]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      Motivo del Mensaje
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(220,20,35)] bg-white"
                    >
                      <option value="Atención Comunitaria">Solicitud de Apoyo Comunitario</option>
                      <option value="Vinculación Deportiva">Escuelas Deportivas & Torneos</option>
                      <option value="Cultura">Talleres Culturales y Danzas</option>
                      <option value="Emprendimiento">Apoyo a Emprendedoras y Campesinos</option>
                      <option value="Alianzas">Alianza Institucional o Empresarial</option>
                      <option value="Otro">Otro Asunto</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      Mensaje *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Escribe aquí tu consulta o solicitud..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(220,20,35)] resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-[rgb(220,20,35)] hover:bg-[rgb(180,15,25)] text-white font-bold text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Mensaje a la Fundación</span>
                  </button>
                </form>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
