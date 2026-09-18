import React, { useState } from 'react';
import { CitizenProposal } from '../types';
import { INITIAL_PROPOSALS } from '../data/foundationData';
import { 
  Send, 
  ThumbsUp, 
  MapPin, 
  Filter, 
  HeartHandshake, 
  CheckCircle2, 
  Sparkles,
  MessageSquarePlus,
  Users,
  Clock
} from 'lucide-react';

interface CitizenActionProps {
  proposals: CitizenProposal[];
  onSupportProposal: (id: string) => void;
  onOpenProposalModal: () => void;
}

export const CitizenAction: React.FC<CitizenActionProps> = ({
  proposals,
  onSupportProposal,
  onOpenProposalModal
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('Todos');
  const [activeTab, setActiveTab] = useState<'propuestas' | 'voluntariado'>('propuestas');
  const [supportedIds, setSupportedIds] = useState<string[]>([]);

  // Volunteer form state
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);
  const [volunteerData, setVolunteerData] = useState({
    fullName: '',
    phone: '',
    neighborhood: '',
    area: 'Deporte y Juventud',
    message: ''
  });

  const categories = ['Todos', 'Deporte & Espacio Público', 'Salud', 'Empleo & Capacitación', 'Infraestructura'];

  const filteredProposals = selectedFilter === 'Todos'
    ? proposals
    : proposals.filter((p) => p.category.toLowerCase().includes(selectedFilter.toLowerCase()) || p.category === selectedFilter);

  const handleSupportClick = (id: string) => {
    if (supportedIds.includes(id)) return;
    setSupportedIds([...supportedIds, id]);
    onSupportProposal(id);
  };

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!volunteerData.fullName || !volunteerData.phone) return;
    setVolunteerSubmitted(true);
  };

  return (
    <section id="buzon" className="py-20 bg-neutral-100/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 text-[rgb(220,20,35)] text-xs font-black uppercase tracking-wider mb-3">
            <HeartHandshake className="w-4 h-4" />
            <span>Participación Ciudadana Activa</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight">
            Diciendo y Haciendo en Comunidad
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 leading-relaxed">
            «La transformación de Apartadó depende de una ciudadanía activa. Escuchar es el primer paso para gobernar.»
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex justify-center mb-10">
          <div className="bg-white p-1.5 rounded-2xl border border-neutral-200 shadow-sm inline-flex gap-2">
            <button
              onClick={() => setActiveTab('propuestas')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'propuestas'
                  ? 'bg-[rgb(220,20,35)] text-white shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
              }`}
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Buzón de Propuestas ({proposals.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('voluntariado')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'voluntariado'
                  ? 'bg-[rgb(220,20,35)] text-white shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Unirme como Voluntario</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Proposals View */}
        {activeTab === 'propuestas' && (
          <div>
            {/* Filter Bar & Action Header */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
                <Filter className="w-4 h-4 text-neutral-400 shrink-0 hidden sm:inline" />
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedFilter(cat)}
                    className={`whitespace-nowrap px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      selectedFilter === cat
                        ? 'bg-neutral-900 text-white shadow-xs'
                        : 'bg-white text-neutral-600 hover:bg-neutral-200 border border-neutral-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <button
                onClick={onOpenProposalModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[rgb(220,20,35)] hover:bg-[rgb(180,15,25)] text-white text-xs sm:text-sm font-bold shadow-sm transition-all active:scale-95 shrink-0 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Registrar Mi Propuesta</span>
              </button>
            </div>

            {/* Proposals Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProposals.map((prop) => {
                const isSupported = supportedIds.includes(prop.id);
                return (
                  <div
                    key={prop.id}
                    className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Badge and Status */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-md bg-red-50 text-[rgb(220,20,35)]">
                          {prop.category}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{prop.date}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-neutral-900 leading-snug mb-2">
                        {prop.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                        {prop.description}
                      </p>

                      {/* Neighborhood / Author */}
                      <div className="flex items-center gap-2 text-xs text-neutral-500 mb-5">
                        <MapPin className="w-3.5 h-3.5 text-[rgb(220,20,35)] shrink-0" />
                        <span className="font-semibold text-neutral-700">{prop.neighborhood}</span>
                        <span>• Por {prop.author}</span>
                      </div>
                    </div>

                    {/* Footer Support Bar */}
                    <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-800">
                        <ThumbsUp className={`w-4 h-4 ${isSupported ? 'text-[rgb(220,20,35)] fill-[rgb(220,20,35)]' : 'text-neutral-400'}`} />
                        <span>{prop.supportersCount} ciudadanos apoyan</span>
                      </div>

                      <button
                        onClick={() => handleSupportClick(prop.id)}
                        disabled={isSupported}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                          isSupported
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 cursor-default'
                            : 'bg-neutral-100 hover:bg-red-50 text-neutral-800 hover:text-[rgb(220,20,35)] border border-neutral-200 active:scale-95'
                        }`}
                      >
                        {isSupported ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            <span>¡Apoyado!</span>
                          </>
                        ) : (
                          <>
                            <ThumbsUp className="w-3.5 h-3.5" />
                            <span>Apoyar Propuesta</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 2: Volunteer Registration Form */}
        {activeTab === 'voluntariado' && (
          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-neutral-200 shadow-xl">
            {volunteerSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-neutral-900 mb-2">
                  ¡Gracias por sumarte al equipo!
                </h3>
                <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed mb-6">
                  Tu compromiso es el motor para transformar a Apartadó. Uno de nuestros coordinadores comunitarios se comunicará contigo a través de WhatsApp.
                </p>
                <button
                  onClick={() => {
                    setVolunteerSubmitted(false);
                    setVolunteerData({
                      fullName: '',
                      phone: '',
                      neighborhood: '',
                      area: 'Deporte y Juventud',
                      message: ''
                    });
                  }}
                  className="px-6 py-2.5 bg-[rgb(220,20,35)] text-white rounded-xl text-xs font-bold hover:bg-[rgb(180,15,25)] cursor-pointer"
                >
                  Inscribir a otra persona
                </button>
              </div>
            ) : (
              <div>
                <div className="text-center mb-8">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-[rgb(220,20,35)]">
                    Red Ciudadana
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight mt-1">
                    Inscripción de Voluntarios y Líderes
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-2">
                    Únete a las jornadas sociales, brigadas recreativas y encuentros comunitarios en tu barrio.
                  </p>
                </div>

                <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Juan Carlos Rentería"
                      value={volunteerData.fullName}
                      onChange={(e) => setVolunteerData({ ...volunteerData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(220,20,35)] focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Ej. 312 345 6789"
                        value={volunteerData.phone}
                        onChange={(e) => setVolunteerData({ ...volunteerData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(220,20,35)] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                        Barrio, Corregimiento o Vereda *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. Barrio Obrero / El Reposo"
                        value={volunteerData.neighborhood}
                        onChange={(e) => setVolunteerData({ ...volunteerData, neighborhood: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(220,20,35)] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      Área de Interés Comunitario
                    </label>
                    <select
                      value={volunteerData.area}
                      onChange={(e) => setVolunteerData({ ...volunteerData, area: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(220,20,35)] focus:border-transparent bg-white"
                    >
                      <option value="Deporte y Juventud">Deporte, Escuelas Formativas e Infancia</option>
                      <option value="Cultura y Tradición">Cultura, Danza y Expresión Artística</option>
                      <option value="Salud y Brigadas">Salud Comunitaria y Adulto Mayor</option>
                      <option value="Emprendimiento y Mujeres">Apoyo a Madres y Emprendedores</option>
                      <option value="Comités Barriales">Liderazgo y Organización Comunitaria</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      ¿Cómo te gustaría aportar? (Opcional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Cuéntanos sobre tu vocación o qué ideas tienes para tu sector..."
                      value={volunteerData.message}
                      onChange={(e) => setVolunteerData({ ...volunteerData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-[rgb(220,20,35)] focus:border-transparent resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-[rgb(220,20,35)] hover:bg-[rgb(180,15,25)] text-white font-bold text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <HeartHandshake className="w-4 h-4" />
                    <span>Confirmar Registro de Voluntario</span>
                  </button>
                </form>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};
