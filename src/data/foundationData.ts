import { Commitment, Principle, CareerMilestone, FoundationProgram, CitizenProposal, Testimonial } from '../types';

export const FOUNDATION_INFO = {
  name: 'Fundación Social Henry Palacios "Costa"',
  shortName: 'Fundación Henry Palacios Costa',
  leaderName: 'Henry Palacios Valencia',
  alias: 'Costa',
  slogan: 'Diciendo y Haciendo',
  tagline: 'Un hombre de resultados',
  visionPhrase: 'Hagamos grande a Apartadó',
  subregion: 'Apartadó y Subregión de Urabá, Antioquia',
  headquarters: 'Calle 100 # 98-45, Centro Empresarial Urabá, Apartadó, Antioquia, Colombia',
  phone: '+57 (311) 456-7890',
  email: 'contacto@fundacionsocialhenrypalacios.org',
  website: 'www.henrypalacios.com',
  workingHours: 'Lunes a Viernes: 8:00 AM - 5:30 PM | Sábados: 8:00 AM - 1:00 PM',
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    twitter: 'https://x.com',
    whatsapp: 'https://wa.me/573114567890?text=Hola,%20deseo%20conocer%20m%C3%A1s%20sobre%20la%20Fundaci%C3%B3n%20Social%20Henry%20Palacios%20Costa'
  },
  stats: [
    { label: 'Años de Impacto Social', value: '15+' },
    { label: 'Jóvenes & Niños Beneficiados', value: '25.000+' },
    { label: 'Torneos & Escuelas Deportivas', value: '180+' },
    { label: 'Comunidades & Fincas Atendidas', value: '60+' }
  ]
};

export const PRINCIPLES: Principle[] = [
  {
    id: 'transparencia',
    name: 'Transparencia',
    description: 'Actuar con honestidad, administrar correctamente cada peso de los recursos públicos y rendir cuentas de cada decisión.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'compromiso',
    name: 'Compromiso',
    description: 'Cumplir la palabra dada y responder siempre con hechos y resultados a la confianza de la ciudadanía.',
    iconName: 'Award'
  },
  {
    id: 'participacion',
    name: 'Participación',
    description: 'Escuchar a la comunidad, promover el diálogo abierto y construir soluciones reales junto a la gente de nuestros barrios y corregimientos.',
    iconName: 'Users'
  },
  {
    id: 'respeto',
    name: 'Respeto',
    description: 'Reconocer el valor de cada persona, fortalecer la convivencia y trabajar sin distinción de ideologías, sectores o condiciones.',
    iconName: 'HeartHandshake'
  },
  {
    id: 'equidad',
    name: 'Equidad',
    description: 'Crear oportunidades para todos en Apartadó y el Urabá, priorizando con esmero a quienes más lo necesitan.',
    iconName: 'Scale'
  },
  {
    id: 'responsabilidad',
    name: 'Responsabilidad',
    description: 'Tomar decisiones pensando no solo en el presente inmediato, sino en el futuro y bienestar de las próximas generaciones.',
    iconName: 'Compass'
  }
];

export const SLOGAN_MEANING = {
  title: '¿Qué significa "Diciendo y Haciendo"?',
  description: 'La expresión "Diciendo y Haciendo" significa que una acción se realiza de manera inmediata, al mismo tiempo o sin ninguna demora después de anunciar o pensar la idea. Indica una persona ágil, confiable y que cumple lo que promete sin dudar.',
  pillars: [
    {
      title: 'Rapidez',
      detail: 'No pasa tiempo entre la idea y el acto. Capacidad de respuesta inmediata ante las necesidades comunitarias.'
    },
    {
      title: 'Coherencia',
      detail: 'Lo que se comunica se vuelve realidad al instante. Palabra empeñada es palabra cumplida.'
    },
    {
      title: 'Decisión',
      detail: 'Acciones firmes y oportunas con convicción y seguridad de cara a la comunidad.'
    },
    {
      title: 'Eficacia',
      detail: 'Orientados a la velocidad y calidad en la ejecución de proyectos de bienestar social.'
    }
  ]
};

export const COMMITMENTS: Commitment[] = [
  {
    id: 1,
    number: '01',
    title: 'Capacidad de Gobernabilidad',
    shortTitle: 'Gobernabilidad',
    category: 'Gobernabilidad',
    iconName: 'Landmark',
    leadSummary: 'Administrar los recursos públicos con responsabilidad, honestidad y respeto por los ciudadanos.',
    description: 'Impulsaremos una gestión abierta, eficiente y cercana, donde la rendición de cuentas y la transparencia sean principios permanentes. La confianza se gana actuando correctamente.',
    actions: [
      'Presupuesto participativo en cada comuna y corregimiento de Apartadó.',
      'Rendición de cuentas periódica y pública en plazas comunitarias.',
      'Ventanilla única de atención ciudadana con seguimiento en tiempo real.',
      'Cero tolerancia a la ineficiencia y protección estricta del erario público.'
    ],
    impactMetric: '100% de contratos y cuentas auditables en tiempo real'
  },
  {
    id: 2,
    number: '02',
    title: 'Un Municipio Seguro y en Paz',
    shortTitle: 'Seguridad',
    category: 'Seguridad',
    iconName: 'ShieldAlert',
    leadSummary: 'Fortalecer la convivencia, recuperar la confianza ciudadana y vivir con tranquilidad.',
    description: 'Trabajaremos para apoyar acciones que permitan vivir con mayor tranquilidad en todos los barrios y corregimientos. La seguridad será entendida como una responsabilidad compartida entre instituciones y comunidad.',
    actions: [
      'Frentes de seguridad comunitaria y alarmas barriales articuladas con la Policía.',
      'Iluminación pública total de parques, polideportivos y corredores seguros.',
      'Programas de resolución pacífica de conflictos y gestores de convivencia barrial.',
      'Oportunidades reales para rescatar a la juventud de entornos de riesgo.'
    ],
    impactMetric: 'Reducción histórica de conflictividad barrial'
  },
  {
    id: 3,
    number: '03',
    title: 'Educación como Motor de Desarrollo Social',
    shortTitle: 'Educación',
    category: 'Educación',
    iconName: 'GraduationCap',
    leadSummary: 'Educación, cultura, deporte, salud y programas sociales para el crecimiento de las personas.',
    description: 'El verdadero desarrollo comienza cuando las personas tienen oportunidades para crecer. Nuestro compromiso será siempre con el bienestar de las familias y la educación de excelencia.',
    actions: [
      'Fortalecimiento y dotación de sedes educativas rurales y urbanas.',
      'Creación de semilleros deportivos y culturales en cada comuna.',
      'Convenios de becas técnicas y universitarias para bachilleres de escasos recursos.',
      'Alimentación escolar digna y oportuna para todos los niños y niñas.'
    ],
    impactMetric: 'Más de 10.000 becas y apoyos educativos en el cuatrienio'
  },
  {
    id: 4,
    number: '04',
    title: 'Un Municipio Preparado para el Futuro',
    shortTitle: 'Infraestructura',
    category: 'Infraestructura',
    iconName: 'Building2',
    leadSummary: 'Desarrollo ordenado, sostenible y respetuoso con el medio ambiente de Urabá.',
    description: 'Con una excelente infraestructura, convirtiéndonos en la gran ciudad de servicios de la subregión de Urabá. Un Apartadó que crezca con planificación, cuide sus recursos naturales y aproveche todo su potencial para las próximas generaciones.',
    actions: [
      'Pavimentación y mantenimiento continuo de vías terciarias y accesos a fincas y veredas.',
      'Plan maestro de alcantarillado y drenaje para mitigar inundaciones.',
      'Modernización urbana con ciclo-rutas, espacios verdes y parques recreativos.',
      'Protección ambiental de cuencas hídricas y arborización nativa.'
    ],
    impactMetric: '50+ km de vías terciarias mejoradas y nuevos espacios verdes'
  },
  {
    id: 5,
    number: '05',
    title: 'Salud con Calidad y Resultados',
    shortTitle: 'Salud',
    category: 'Salud',
    iconName: 'Activity',
    leadSummary: 'Atención integral, digna, oportuna y eficiente para toda la población.',
    description: 'Orientada a solucionar las necesidades de la salud de la población y generar resultados concretos y verificables que contribuyan al bienestar y una mejor calidad de vida, mejorando la infraestructura y el equipamiento hospitalario.',
    actions: [
      'Brigadas médicas móviles frecuentes en veredas y corregimientos lejanos.',
      'Optimización de la entrega de medicamentos y asignación de citas sin filas.',
      'Ampliación y dotación de centros de salud en El Reposo, Churidó y Puerto Girón.',
      'Programas de salud mental comunitaria y nutrición materno-infantil.'
    ],
    impactMetric: 'Cobertura de brigadas de salud en el 100% de corregimientos'
  },
  {
    id: 6,
    number: '06',
    title: 'Más Oportunidades para Crecer',
    shortTitle: 'Empleo & Emprendimiento',
    category: 'Empleo',
    iconName: 'TrendingUp',
    leadSummary: 'Empleo digno, emprendimiento y fortalecimiento de la economía local.',
    description: 'Apoyaremos a quienes generan empresa, impulsan el comercio y trabajan cada día para sacar adelante a sus familias. Creemos que el desarrollo económico es la mejor herramienta para construir bienestar.',
    actions: [
      'Líneas de microcrédito y fondo semilla para emprendedores y mujeres cabeza de hogar.',
      'Fortalecimiento a pequeños productores agrícolas y campesinos de la región.',
      'Alianzas estratégicas con el sector bananero y portuario para empleo local calificado.',
      'Capacitación laboral en tecnologías, agroindustria y servicios logísticos.'
    ],
    impactMetric: 'Creación y fortalecimiento de 2.000+ unidades productivas'
  }
];

export const CAREER_MILESTONES: CareerMilestone[] = [
  {
    period: 'Orígenes & Juventud',
    role: 'Raíces Chocoanas y Formación de Carácter',
    entity: 'Riosucio (Chocó) & Finca Costa Rica (Urabá)',
    description: 'Nacido en Riosucio en 1974, hijo de Miriam Valencia y Antonio Danilo Palacios. Llegó a Urabá a los 7 años, educándose en la Finca Costa Rica (Comunal de la Suerte), I.E. Río Grande en Turbo, Colegios Interamericano y C.A.R.B. en Apartadó.',
    category: 'servicio'
  },
  {
    period: 'Formación Cívica & Académica',
    role: 'Policía Militar & Especialista en Gerencia Social',
    entity: 'PM Montería / Politécnico J.I.C. / Univ. Luis Amigó',
    description: 'Prestó servicio como Bachiller en la Policía Militar de Montería forjando disciplina inquebrantable. Se graduó como Licenciado en Educación Física, Recreación y Deportes en el Politécnico J.I.C. y Especialista en Gerencia de Servicios Sociales en la Fundación Universitaria Luis Amigó.',
    category: 'educacion'
  },
  {
    period: 'Labor Docente',
    role: 'Educador en Aulas de Urabá',
    entity: 'Coodeu, Alegría de Aprender, Comfenalco, Uniban',
    description: 'Inició su labor docente en el Coodeu del Barrio Obrero, Colegio Alegría de Aprender en Pueblo Nuevo, Caja de Compensación Comfenalco, Colegio Cooperativo e Instituto Uniban, sembrando valores en miles de alumnos.',
    category: 'educacion'
  },
  {
    period: 'Bienestar Universitario',
    role: 'Coordinador de Bienestar',
    entity: 'MESU, Esumer, UCC, Uniremington, FESU',
    description: 'Lideró procesos de bienestar, permanencia estudiantil y desarrollo integral en las principales instituciones de educación superior con presencia en el Urabá.',
    category: 'educacion'
  },
  {
    period: '10 Años en Corbanacol',
    role: 'Líder de Programas Deportivos & Sociales',
    entity: 'Fundación Corbanacol',
    description: 'Dirigió durante una década iniciativas emblemáticas que transformaron a Urabá: Centros C.I.F.D., C.I.F.A.C., Escuela de Fútbol Atlético Nacional Corbanacol, Olimpiadas y Torneo Interfincas, uniendo a trabajadores, familias y campesinos.',
    category: 'deporte'
  },
  {
    period: 'Liderazgo Institucional',
    role: 'Director IMDER & Cultura, Enlace MinDeporte',
    entity: 'IMDER Apartadó, IMDER Carepa, IMCCA, Ministerio del Deporte',
    description: 'Reconocido ampliamente como el "Alcalde del Deporte y la Cultura", dirigió el IMDER de Apartadó y de Carepa, la Dirección de Cultura de Apartadó (IMCCA) y fue Enlace Territorial del Ministerio del Deporte.',
    category: 'cultura'
  }
];

export const FOUNDATION_PROGRAMS: FoundationProgram[] = [
  {
    id: 'deporte-comunitario',
    title: 'Semilleros Deportivos "Diciendo y Haciendo"',
    subtitle: 'Fútbol, Atletismo y Disciplinas Formativas',
    description: 'Escuelas deportivas barriales y rurales gratuitas para niños, niñas y adolescentes. Formación con valores, disciplina, nutrición y acompañamiento psicosocial.',
    beneficiaries: '3.500+ jóvenes activos anualmente',
    achievements: [
      'Torneo inter-barrios en 15 comunas de Apartadó',
      'Dotación completa de balones, uniformes y petos',
      'Clínicas deportivas dictadas por ex-profesionales',
      'Torneo Interfincas para trabajadores del campo'
    ],
    icon: 'Trophy',
    color: 'from-red-600 to-red-800'
  },
  {
    id: 'cultura-identidad',
    title: 'Urabá Expresión y Ritmo',
    subtitle: 'Música, Danza Tradicional y Artes Escénicas',
    description: 'Talleres culturales de bullerengue, chirimía, danzas folclóricas y artes plásticas para preservar la identidad multiétnica chocoana y antioqueña de nuestra tierra.',
    beneficiaries: '1.200+ gestores culturales y niños',
    achievements: [
      'Festivales de danza y tambora en plazas públicas',
      'Escuela de música de vientos y percusión tradicional',
      'Espacios de memoria histórica comunitaria'
    ],
    icon: 'Sparkles',
    color: 'from-red-700 to-red-900'
  },
  {
    id: 'emprendimiento-mujeres',
    title: 'Mujeres y Madres que Transforman',
    subtitle: 'Microcréditos, Talleres de Confección y Gastronomía',
    description: 'Empoderamiento socioeconómico para madres cabeza de hogar mediante capacitación en planes de negocio, cooperativas de costura y comercialización local.',
    beneficiaries: '850+ mujeres emprendedoras',
    achievements: [
      'Ferias de emprendimiento barrial con ventas directas',
      'Asesoría contable y formalización de pequeños negocios',
      'Red de mentoría entre lideresas de Apartadó'
    ],
    icon: 'Sparkle',
    color: 'from-red-600 to-amber-700'
  },
  {
    id: 'apoyo-campesino',
    title: 'Campo Fuerte & Sector Bananero',
    subtitle: 'Asistencia a Pequeños Productores y Veredas',
    description: 'Acompañamiento a comunidades rurales, dotación de herramientas comunitarias y gestión para el mejoramiento continuo de caminos veredales.',
    beneficiaries: '45+ veredas y juntas comunales',
    achievements: [
      'Jornadas comunitarias de convite para vías terciarias',
      'Capacitación técnica en buenas prácticas agrícolas',
      'Canales de comercialización sin intermediarios abusivos'
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
    description: 'Necesitamos renovar las luminarias LED y reparar la cancha múltiple para que más de 300 niños puedan entrenar en horarios nocturnos con seguridad.',
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
    description: 'Solicitamos jornada de atención médica integral y medicamentos para los adultos mayores y niños de las fincas aledañas a El Reposo.',
    supportersCount: 98,
    date: 'Hace 5 días',
    status: 'En marcha'
  },
  {
    id: 'prop-3',
    title: 'Taller de Emprendimiento y Confección para Jóvenes en Pueblo Nuevo',
    author: 'Carlos Andrés Palacios',
    neighborhood: 'Barrio Pueblo Nuevo',
    category: 'Empleo & Capacitación',
    description: 'Capacitación para 40 jóvenes en patronaje industrial y serigrafía para abastecer de uniformes a escuelas deportivas y empresas de Urabá.',
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
    description: 'Arreglo del paso vehicular para facilitar el transporte de plátano y fruta hacia el centro de acopio sin pérdidas económicas para los campesinos.',
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
    quote: 'Henry Palacios es un hombre que no espera a que le cuenten las cosas; él camina nuestras calles, conoce a cada familia por su nombre y cuando se compromete con algo, lo cumple con hechos. Eso es Diciendo y Haciendo.',
    avatarText: 'EM'
  },
  {
    id: 'test-2',
    name: 'Profesor Wilmar Rentería',
    role: 'Entrenador de Fútbol Juvenil',
    location: 'Corregimiento Churidó',
    quote: 'Conocí a Henry en sus 10 años en Corbanacol y en el IMDER. Gracias a su visión deportiva, cientos de muchachos de las fincas bananeras hoy son profesionales o futbolistas y no cayeron en la violencia.',
    avatarText: 'WR'
  },
  {
    id: 'test-3',
    name: 'Ana Sofía Córdoba',
    role: 'Emprendedora Gastronómica',
    location: 'Comuna 2, Barrio Fundadores',
    quote: 'La fundación me capacitó y me dio el impulso necesario para iniciar mi propio negocio familiar. Aquí hay liderazgo genuino, con amor por Urabá y transparencia total.',
    avatarText: 'AC'
  }
];
