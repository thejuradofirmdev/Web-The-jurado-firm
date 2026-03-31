/**
 * 📋 Catálogo de servicios legales de The Jurado Firm
 * Cada entrada incluye las traducciones ES/EN y los metadatos de ruta
 */
export type LegalService = {
  id: string;
  /** Identificador único para iconos y lógica */
  key: string;
  href: string;
  /** Contenido en Español */
  es: {
    title: string;
    description: string;
  };
  /** Contenido en Inglés */
  en: {
    title: string;
    description: string;
  };
};

export const servicesList: LegalService[] = [
  {
    id: '1',
    key: 'family_reunification',
    href: '/servicios/reunion-familiar',
    es: {
      title: 'Reunificación Familiar',
      description: 'Peticiones I-130, visas de familiar inmediato, cosanguinidad directa y patrocinios. Reunimos a familias separadas de forma rápida y legal.',
    },
    en: {
      title: 'Family Reunification',
      description: 'I-130 petitions, immediate relative visas, and family sponsorships. We reunite separated families quickly and legally.',
    },
  },
  {
    id: '2',
    key: 'work_visas',
    href: '/servicios/visas-trabajo',
    es: {
      title: 'Visas de Trabajo',
      description: 'H-1B, H-2A, H-2B, TN, EB-2, EB-3 y más. Gestionamos todo el proceso para trabajadores calificados y empleadores patrocinadores.',
    },
    en: {
      title: 'Work Visas',
      description: 'H-1B, H-2A, H-2B, TN, EB-2, EB-3 and more. We manage the entire process for skilled workers and sponsoring employers.',
    },
  },
  {
    id: '3',
    key: 'entertainment_visas',
    href: '/servicios/visas-entretenimiento',
    es: {
      title: 'Visas de Entretenimiento',
      description: 'O-1B, P-1B y P-3 para artistas hispanos de talla internacional. Nuestro diferenciador único en el mercado legal de inmigración.',
    },
    en: {
      title: 'Entertainment Visas',
      description: 'O-1B, P-1B and P-3 for international Hispanic artists. Our unique differentiator in the immigration legal market.',
    },
  },
  {
    id: '4',
    key: 'adjustment_of_status',
    href: '/servicios/ajuste-estatus',
    es: {
      title: 'Ajuste de Estatus / Green Card',
      description: 'Transición de visa temporal a residencia permanente dentro de los Estados Unidos sin salir del país. Proceso I-485.',
    },
    en: {
      title: 'Adjustment of Status / Green Card',
      description: 'Transition from temporary visa to permanent residency within the United States without leaving the country. I-485 process.',
    },
  },
  {
    id: '5',
    key: 'removal_defense',
    href: '/servicios/defensa-deportacion',
    es: {
      title: 'Defensa contra Deportación',
      description: 'Representación agresiva en cortes de inmigración. Luchamos por cancelación de remoción, ajuste de estatus y apelaciones ante el BIA.',
    },
    en: {
      title: 'Removal Defense',
      description: 'Aggressive representation in immigration courts. We fight for cancellation of removal, status adjustment, and BIA appeals.',
    },
  },
  {
    id: '6',
    key: 'asylum',
    href: '/servicios/asilo',
    es: {
      title: 'Asilo Político',
      description: 'Protección legal para quienes temen persecución por raza, religión, nacionalidad, grupo social u opinión política. Solicitud afirmativa y defensiva.',
    },
    en: {
      title: 'Political Asylum',
      description: 'Legal protection for those fearing persecution based on race, religion, nationality, social group, or political opinion. Affirmative and defensive applications.',
    },
  },
];
