import { Commitment, Principle, CareerMilestone, FoundationProgram, CitizenProposal, Testimonial } from '../types';

export const FOUNDATION_INFO = {
  name: 'Fundación Social Comunitaria',
  legalName: 'FUNDACIÓN SOCIAL HENRY PALACIOS VALENCIA',
  nit: '900910900',
  formattedNit: '900.910.900',
  shortName: 'Fundación Social Henry Palacios',
  entityType: 'Organización Social y Comunitaria sin Ánimo de Lucro',
  slogan: 'Diciendo y Haciendo',
  tagline: 'Gestión Social con Resultados Comprobables',
  visionPhrase: 'Por el Desarrollo Integral de Apartadó y Urabá',
  subregion: 'Apartadó y Subregión de Urabá, Antioquia',
  headquarters: 'Calle 100 # 98-45, Centro Empresarial Urabá, Apartadó, Antioquia, Colombia',
  phone: '+57 310 704 3923',
  email: 'contacto@fundacionsocialuraba.org',
  website: 'www.fundacionsocialuraba.org',
  workingHours: 'Lunes a Viernes: 8:00 AM - 5:30 PM | Sábados: 8:00 AM - 1:00 PM',
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    twitter: 'https://x.com',
    whatsapp: 'https://wa.me/573107043923?text=Hola,%20deseo%20apoyar%20a%20la%20Fundaci%C3%B3n%20Social%20Henry%20Palacios%20Valencia%20con%20una%20donaci%C3%B3n'
  },
  stats: [
    { label: 'Años de Labor Comunitaria', value: '15+' },
    { label: 'Niños & Jóvenes en Escuelas', value: '25.000+' },
    { label: 'Jornadas & Eventos Comunitarios', value: '180+' },
    { label: 'Barrios & Veredas con Presencia', value: '60+' }
  ]
};

export const BANKING_INFO = {
  bank: 'Bancolombia S.A.',
  accountHolder: 'FUNDACIÓN SOCIAL HENRY PALACIOS VALENCIA',
  nit: '900910900',
  formattedNit: '900.910.900',
  accountType: 'Cuenta de Ahorros',
  accountNumber: '549-513616-42',
  cleanAccountNumber: '54951361642',
  status: 'ACTIVA',
  openingDate: '2015/11/24',
  certificateDate: 'Septiembre 02 de 2026',
  city: 'Apartadó, Antioquia, Colombia',
  verificationUrl: 'www.bancolombia.com.co',
  causes: [
    { title: 'Semilleros Deportivos y Balones', amount: '$25.000 COP', desc: 'Dotación de implementación deportiva para niños de barrios vulnerables.' },
    { title: 'Kit Pedagógico y Escolar', amount: '$50.000 COP', desc: 'Útiles y refuerzo escolar para menores en veredas de Apartadó.' },
    { title: 'Talleres para Madres Comunitarias', amount: '$100.000 COP', desc: 'Capacitación en oficios y emprendimiento para mujeres cabeza de hogar.' },
    { title: 'Jornadas de Mejoramiento Comunitario', amount: '$250.000 COP', desc: 'Pintura comunitaria, adecuación de canchas y espacios recreativos.' }
  ]
};

export const FOUNDATION_ABOUT = {
  mission: 'Promover el bienestar integral, la equidad de oportunidades y el desarrollo socioeconómico en los sectores urbanos y rurales de Apartadó y la subregión de Urabá, implementando proyectos sostenibles de deporte formativo, rescate cultural, empoderamiento de mujeres, acompañamiento campesino y veeduría ciudadana transparente.',
  vision: 'Ser la organización social líder e inspiradora en Urabá, reconocida a nivel departamental y nacional por su capacidad de respuesta comunitaria, ética en la administración de recursos y resultados tangibles bajo el principio rector de "Diciendo y Haciendo".',
  purpose: 'Cerrar brechas sociales en nuestro territorio conectando las necesidades de las comunidades con soluciones inmediatas, transparentes y participativas que fortalezcan el tejido familiar y el progreso de Apartadó.',
  methodology: [
    {
      title: 'Diagnóstico en Terreno',
      description: 'Caminar los barrios, comunas y veredas para escuchar directamente a las familias sin intermediarios.',
      icon: 'MapPin'
    },
    {
      title: 'Articulación Comunitaria',
      description: 'Trabajo conjunto con Juntas de Acción Comunal (JAC), líderes deportivos, gestores culturales y asociaciones campesinas.',
      icon: 'Users'
    },
    {
      title: 'Transparencia & Ética',
      description: 'Gestión pulcra donde cada recurso y donación se convierte en beneficios públicos visibles y auditables.',
      icon: 'ShieldCheck'
    },
    {
      title: 'Ejecución Oportuna',
      description: 'Respuesta inmediata a las iniciativas prioritarias: lo que se acuerda con la comunidad se hace realidad con prontitud.',
      icon: 'Zap'
    }
  ],
  strategicLines: [
    {
      title: 'Semilleros de Paz & Deporte',
      summary: 'Formación física, nutricional y en valores para alejar a la juventud de riesgos psicosociales.'
    },
    {
      title: 'Identidad & Cultura Urabaense',
      summary: 'Promoción de la danza tradicional, bullerengue, artes escénicas y memoria colectiva.'
    },
    {
      title: 'Mujer & Desarrollo Económico',
      summary: 'Talleres de capacitación, fondos semilla y microcréditos para madres cabeza de hogar.'
    },
    {
      title: 'Campo Digno & Vías Comunitarias',
      summary: 'Apoyo a pequeños productores de plátano, banano y cacao en convites veredales.'
    }
  ]
};

export const PRINCIPLES: Principle[] = [
  {
    id: 'transparencia',
    name: 'Transparencia',
    description: 'Actuar con honestidad impecable, administrar correctamente cada recurso y rendir cuentas abiertas a la comunidad.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'compromiso',
    name: 'Compromiso',
    description: 'Cumplir cabalmente la palabra acordada y responder siempre con hechos y resultados tangibles en el territorio.',
    iconName: 'Award'
  },
  {
    id: 'participacion',
    name: 'Participación',
    description: 'Fomentar el diálogo constante con las Juntas Comunales y construir soluciones hombro a hombro con la ciudadanía.',
    iconName: 'Users'
  },
  {
    id: 'respeto',
    name: 'Respeto',
    description: 'Reconocer el valor y la dignidad de cada persona, promoviendo la sana convivencia y la inclusión social en Urabá.',
    iconName: 'HeartHandshake'
  },
  {
    id: 'equidad',
    name: 'Equidad',
    description: 'Generar oportunidades justas para todos en Apartadó, priorizando a la niñez, mujeres y familias vulnerables.',
    iconName: 'Scale'
  },
  {
    id: 'responsabilidad',
    name: 'Responsabilidad',
    description: 'Diseñar proyectos sostenibles que aseguren el progreso y bienestar de las presentes y futuras generaciones.',
    iconName: 'Compass'
  }
];

export const SLOGAN_MEANING = {
  title: '¿Qué significa "Diciendo y Haciendo"?',
  description: 'Para la Fundación Social, "Diciendo y Haciendo" es el compromiso institucional de actuar con rapidez, honestidad y eficacia. No nos quedamos en anuncios: las ideas de progreso para la comunidad se ejecutan con hechos concretos y verificables.',
  pillars: [
    {
      title: 'Rapidez',
      detail: 'Mínimo tiempo entre la identificación de la necesidad comunitaria y el inicio de las soluciones en el territorio.'
    },
    {
      title: 'Coherencia',
      detail: 'Lo planificado y acordado con la gente se convierte en realidad visible y perdurable.'
    },
    {
      title: 'Decisión',
      detail: 'Liderazgo firme para gestionar alianzas y llevar obras y talleres a los sectores más apartados.'
    },
    {
      title: 'Eficacia',
      detail: 'Calidad profesional y optimización de cada recurso para maximizar el beneficio de las familias.'
    }
  ]
};

export const COMMITMENTS: Commitment[] = [
  {
    id: 1,
    number: '01',
    title: 'Capacidad de Gestión y Transparencia Social',
    shortTitle: 'Transparencia',
    category: 'Gobernabilidad',
    iconName: 'Landmark',
    leadSummary: 'Gestión ética, veedurías ciudadanas y administración responsable de iniciativas de desarrollo.',
    description: 'Promovemos una cultura de rendición de cuentas permanente, articulando esfuerzos con líderes comunales y organizaciones para asegurar que los proyectos sociales lleguen a su destino con total pulcritud.',
    actions: [
      'Mesas de diálogo y presupuesto participativo con Juntas de Acción Comunal.',
      'Rendición pública de informes de gestión e impacto comunitario trimestral.',
      'Ventanilla comunitaria para recepción de propuestas y solicitudes prioritarias.',
      'Vigilancia estricta para garantizar cero desperdicio en programas asistenciales.'
    ],
    impactMetric: '100% de proyectos con veeduría y rendición de cuentas pública'
  },
  {
    id: 2,
    number: '02',
    title: 'Convivencia y Entornos Seguros para las Familias',
    shortTitle: 'Convivencia',
    category: 'Seguridad',
    iconName: 'ShieldAlert',
    leadSummary: 'Fortalecimiento de la convivencia, recuperación de espacios comunitarios y prevención social.',
    description: 'La seguridad nace de la cohesión comunitaria. Trabajamos en la iluminación y rescate de parques y canchas para que los niños y familias jueguen en paz y armonía.',
    actions: [
      'Recuperación comunitaria de parques infantiles y polideportivos en comunas.',
      'Redes de apoyo vecinal y comités barriales de prevención pacífica.',
      'Talleres de mediación comunitaria y resolución constructiva de conflictos.',
      'Alternativas formativas para proteger a los jóvenes de entornos de vulnerabilidad.'
    ],
    impactMetric: 'Más de 35 parques y polideportivos recuperados para la vida comunitaria'
  },
  {
    id: 3,
    number: '03',
    title: 'Educación y Semilleros Formativos de Excelencia',
    shortTitle: 'Educación',
    category: 'Educación',
    iconName: 'GraduationCap',
    leadSummary: 'Acceso a talleres, dotación escolar comunitaria y becas técnicas para jóvenes de Urabá.',
    description: 'El verdadero motor de cambio social es la formación de las nuevas generaciones. Promovemos el refuerzo pedagógico, el aprendizaje de habilidades para la vida y el acceso a la educación superior.',
    actions: [
      'Campañas de dotación de útiles escolares y libros en escuelas rurales y periféricas.',
      'Escuelas de refuerzo escolar y lectura creativa en salones comunales.',
      'Alianzas con centros de educación técnica para becas y descuentos a bachilleres.',
      'Acompañamiento nutricional y pedagógico a la primera infancia.'
    ],
    impactMetric: 'Más de 10.000 paquetes escolares entregados y 1.200 becarios apoyados'
  },
  {
    id: 4,
    number: '04',
    title: 'Sostenibilidad Ambiental e Infraestructura Veredal',
    shortTitle: 'Ambiente & Veredas',
    category: 'Infraestructura',
    iconName: 'Building2',
    leadSummary: 'Mejoramiento participativo de accesos veredales, saneamiento y protección de fuentes hídricas.',
    description: 'Fomentamos el desarrollo armónico con la naturaleza de Urabá. Apoyamos a las comunidades campesinas mediante convites de mantenimiento de caminos y jornadas de reforestación.',
    actions: [
      'Convites comunitarios para mantenimiento de alcantarillas y vías terciarias.',
      'Campañas de arborización nativa y protección de rondas hídricas en el río Apartadó.',
      'Talleres de reciclaje, manejo de residuos y huertas ecológicas caseras.',
      'Adecuación de puntos de encuentro comunitario y casetas comunales.'
    ],
    impactMetric: 'Más de 45 jornadas de convite veredal y 5.000 árboles sembrados'
  },
  {
    id: 5,
    number: '05',
    title: 'Salud Preventiva y Brigadas Comunitarias Oportunas',
    shortTitle: 'Salud Comunitaria',
    category: 'Salud',
    iconName: 'Activity',
    leadSummary: 'Jornadas de atención médica integral, vacunación y prevención en sectores alejados.',
    description: 'Acercamos los servicios básicos de salud preventiva a las familias que más lo necesitan en corregimientos y veredas, coordinando brigadas médicas, odontológicas y psicosociales.',
    actions: [
      'Brigadas médicas y odontológicas periódicas en El Reposo, Churidó y Puerto Girón.',
      'Talleres de salud materno-infantil y prevención de enfermedades tropicales.',
      'Acompañamiento psicológico y asesoría en derechos de salud para adultos mayores.',
      'Jornadas de tamizaje visual y donación de lentes a niños en edad escolar.'
    ],
    impactMetric: 'Más de 15.000 atenciones en brigadas de salud preventiva realizadas'
  },
  {
    id: 6,
    number: '06',
    title: 'Emprendimiento, Campo Fuerte e Inclusión Laboral',
    shortTitle: 'Emprendimiento',
    category: 'Empleo',
    iconName: 'TrendingUp',
    leadSummary: 'Capacitación en artes y oficios, fortalecimiento campesino y apoyo a mujeres productoras.',
    description: 'Impulsamos el talento y la pujanza de la gente de Apartadó. Fortalecemos las iniciativas productivas de las madres cabezas de familia y pequeños productores agrícolas.',
    actions: [
      'Escuela de oficios: confección textil, panadería comunitaria y transformación de alimentos.',
      'Fondo rotatorio de herramientas comunitarias para campesinos plataneros y bananeros.',
      'Ferias barriales de comercialización directa "De la Finca al Barrio".',
      'Asesoría técnica para formalización y acceso a microcréditos para pequeños negocios.'
    ],
    impactMetric: 'Más de 850 mujeres capacitadas y 2.000 micro-emprendimientos apoyados'
  }
];

export const CAREER_MILESTONES: CareerMilestone[] = [
  {
    period: 'Fase 1: Semillas Comunitarias',
    role: 'Nacimiento de la Labor Social en Urabá',
    entity: 'Barrio Obrero, Pueblo Nuevo y Fincas de Apartadó',
    description: 'Iniciativas de base comunitaria orientadas a la recuperación de canchas y apoyo a niños de barrios populares y familias trabajadoras del sector agrícola en Apartadó.',
    category: 'servicio'
  },
  {
    period: 'Fase 2: Alianzas Formativas',
    role: 'Consolidación de Escuelas Deportivas Comunitarias',
    entity: 'Apartadó, Turbo y Carepa',
    description: 'Creación de centros de iniciación formativa deportiva gratuitos (fútbol, atletismo y disciplinas múltiples), olimpiadas recreativas y torneos interfincas con miles de participantes.',
    category: 'deporte'
  },
  {
    period: 'Fase 3: Identidad & Arte',
    role: 'Fortalecimiento de la Cultura y Tradición Urabaense',
    entity: 'Comunas de Apartadó & Corregimientos',
    description: 'Puesta en marcha de talleres de música tradicional, grupos de bullerengue, chirimía y danza folclórica para preservar las raíces afrocolombianas e indígenas del territorio.',
    category: 'cultura'
  },
  {
    period: 'Fase 4: Respaldo Productivo',
    role: 'Red de Mujeres Emprendedoras y Solidaridad Rural',
    entity: 'Veredas y Corregimientos de Urabá',
    description: 'Implementación de programas de capacitación en oficios productivos para madres cabeza de hogar, brigadas de salud preventiva y convites comunitarios de mejoramiento vial.',
    category: 'educacion'
  },
  {
    period: 'Fase 5: Presente y Futuro',
    role: 'Modelo de Participación Activa "Diciendo y Haciendo"',
    entity: 'Apartadó y Subregión de Urabá',
    description: 'Consolidación institucional de la Fundación Social con sede propia, plataforma de escucha ciudadana, voluntariado juvenil y programas de impacto continuo en beneficio de la comunidad.',
    category: 'servicio'
  }
];

export const FOUNDATION_PROGRAMS: FoundationProgram[] = [
  {
    id: 'deporte-comunitario',
    title: 'Semilleros Deportivos "Diciendo y Haciendo"',
    subtitle: 'Fútbol, Atletismo y Disciplinas Formativas Gratuitas',
    description: 'Escuelas deportivas barriales y rurales gratuitas para niños, niñas y adolescentes. Formación integral con valores éticos, disciplina deportiva, nutrición y acompañamiento psicosocial.',
    beneficiaries: '3.500+ niños y jóvenes activos anualmente',
    achievements: [
      'Torneos comunitarios en 15 comunas y corregimientos de Apartadó',
      'Dotación completa de balones, uniformes y petos para equipos barriales',
      'Clínicas deportivas y campamentos de valores formativos',
      'Torneos Interfincas para la integración de trabajadores y familias del campo'
    ],
    icon: 'Trophy',
    color: 'from-red-600 to-red-800'
  },
  {
    id: 'cultura-identidad',
    title: 'Urabá: Expresión, Ritmo y Tradición',
    subtitle: 'Bullerengue, Chirimía, Danza Folclórica y Artes Escénicas',
    description: 'Talleres formativos culturales y artísticos gratuitos para preservar el patrimonio cultural multiétnico, afrodescendiente, indígena y mestizo de nuestra hermosa región.',
    beneficiaries: '1.200+ gestores culturales y niños en formación',
    achievements: [
      'Encuentros comunitarios de danza y tambora en plazas públicas',
      'Semilleros de música tradicional de vientos y percusión',
      'Espacios de memoria colectiva y convivencia intergeneracional'
    ],
    icon: 'Sparkles',
    color: 'from-red-700 to-red-900'
  },
  {
    id: 'emprendimiento-mujeres',
    title: 'Mujeres y Madres que Transforman',
    subtitle: 'Capacitación en Oficios, Confección y Emprendimiento',
    description: 'Impulso al empoderamiento socioeconómico de madres cabeza de hogar mediante talleres productivos, formalización de pequeños negocios y conformación de redes de apoyo solidario.',
    beneficiaries: '850+ mujeres emprendedoras capacitadas',
    achievements: [
      'Ferias de emprendimiento barrial con ventas directas al público',
      'Talleres prácticos en confección, gastronomía y administración básica',
      'Red de mentoría comunitaria entre lideresas barriales de Apartadó'
    ],
    icon: 'Sparkle',
    color: 'from-red-600 to-amber-700'
  },
  {
    id: 'apoyo-campesino',
    title: 'Campo Fuerte & Desarrollo Rural',
    subtitle: 'Asistencia Solidaria a Veredas y Productores Locales',
    description: 'Acompañamiento a comunidades rurales, dotación de herramientas comunitarias y gestión colectiva para el mantenimiento continuo de caminos y puentes veredales.',
    beneficiaries: '45+ veredas y juntas comunales activas',
    achievements: [
      'Jornadas de convite comunitario para mejoramiento de vías terciarias',
      'Talleres de buenas prácticas agrícolas para productores de plátano y cacao',
      'Promoción de mercados campesinos sin intermediación abusiva'
    ],
    icon: 'Trees',
    color: 'from-red-800 to-stone-900'
  }
];

export const INITIAL_PROPOSALS: CitizenProposal[] = [
  {
    id: 'prop-1',
    title: 'Adecuación e Iluminación del Polideportivo Barrio Obrero',
    author: 'Jhon Jairo Moreno',
    neighborhood: 'Barrio Obrero, Apartadó',
    category: 'Deporte & Espacio Público',
    description: 'Propuesta para renovar luminarias LED y pintura de la cancha múltiple para que más de 300 niños puedan entrenar con seguridad en horarios nocturnos.',
    supportersCount: 142,
    date: 'Hace 3 días',
    status: 'Destacada'
  },
  {
    id: 'prop-2',
    title: 'Brigada Odontológica y Pediátrica en Corregimiento El Reposo',
    author: 'Luz Marina Hinestroza',
    neighborhood: 'Corregimiento El Reposo',
    category: 'Salud',
    description: 'Solicitud comunitaria de jornada de atención médica preventiva y entrega de vitaminas para adultos mayores y niños de las fincas aledañas a El Reposo.',
    supportersCount: 98,
    date: 'Hace 5 días',
    status: 'En marcha'
  },
  {
    id: 'prop-3',
    title: 'Taller de Confección y Emprendimiento Juvenil en Pueblo Nuevo',
    author: 'Carlos Andrés Palacios',
    neighborhood: 'Barrio Pueblo Nuevo',
    category: 'Empleo & Capacitación',
    description: 'Capacitación comunitaria para 40 jóvenes en patronaje y confección de indumentaria deportiva para dotar a las escuelas locales.',
    supportersCount: 76,
    date: 'Hace 1 semana',
    status: 'En evaluación'
  },
  {
    id: 'prop-4',
    title: 'Mantenimiento del Puente y Camino Veredal Puerto Girón',
    author: 'Dionisio Mosquera',
    neighborhood: 'Vereda Puerto Girón',
    category: 'Infraestructura',
    description: 'Jornada de convite comunitario para el arreglo del paso de madera, facilitando la salida de las cosechas de plátano y frutas de los campesinos.',
    supportersCount: 119,
    date: 'Hace 1 semana',
    status: 'Destacada'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Esperanza Murillo',
    role: 'Presidenta Junta de Acción Comunal',
    location: 'Barrio Policarpa, Apartadó',
    quote: 'La Fundación Social siempre ha estado al lado de nuestra comunidad. No vienen con promesas vacías; cuando coordinan un proyecto para nuestro parque o para nuestros niños, lo cumplen con hechos. Eso es Diciendo y Haciendo.',
    avatarText: 'EM'
  },
  {
    id: 'test-2',
    name: 'Profesor Wilmar Rentería',
    role: 'Entrenador de Escuela Deportiva Formativa',
    location: 'Corregimiento Churidó',
    quote: 'A través de los semilleros deportivos de la Fundación, cientos de muchachos de las fincas bananeras y de los corregimientos hoy tienen balones, uniformes y un proyecto de vida lejos de los peligros de la calle.',
    avatarText: 'WR'
  },
  {
    id: 'test-3',
    name: 'Ana Sofía Córdoba',
    role: 'Emprendedora Gastronómica Comunitaria',
    location: 'Comuna 2, Barrio Fundadores',
    quote: 'Los talleres de la Fundación Social me dieron la capacitación práctica y el empuje para emprender con mi negocio familiar. Es una organización transparente, de puertas abiertas y con verdadero amor por Apartadó.',
    avatarText: 'AC'
  }
];
