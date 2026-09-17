export interface Commitment {
  id: number;
  number: string;
  title: string;
  shortTitle: string;
  category: 'Gobernabilidad' | 'Seguridad' | 'Educación' | 'Infraestructura' | 'Salud' | 'Empleo';
  iconName: string;
  leadSummary: string;
  description: string;
  actions: string[];
  impactMetric: string;
}

export interface Principle {
  id: string;
  name: string;
  description: string;
  iconName: string;
}

export interface CareerMilestone {
  period: string;
  role: string;
  entity: string;
  description: string;
  category: 'educacion' | 'deporte' | 'cultura' | 'servicio';
}

export interface FoundationProgram {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  beneficiaries: string;
  achievements: string[];
  icon: string;
  color: string;
}

export interface CitizenProposal {
  id: string;
  title: string;
  author: string;
  neighborhood: string;
  category: string;
  description: string;
  supportersCount: number;
  date: string;
  status: 'En evaluación' | 'En marcha' | 'Destacada';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  avatarText: string;
}
