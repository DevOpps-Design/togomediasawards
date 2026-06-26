import type { NavLink, Activity, Category, ContactInfo } from '../types'

export const NAV_LINKS: NavLink[] = [
  { to: '/', label: 'Accueil' },
  { to: '/about', label: 'À propos' },
  { to: '/edition-2026', label: 'Édition 2026' },
  { to: '/categories', label: 'Catégories' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export const SITE = {
  name: 'Togo Médias Awards 2026',
  short: 'T.M.A 2026',
  tagline: "Promouvoir l'excellence journalistique et l'innovation dans le secteur des médias au Togo depuis 2022.",
  email: 'contact@togomediasawards.com',
  phone: '+228 92 00 96 17',
  location: 'Lomé, Togo',
}

export const CATEGORIES: Category[] = [
  {
    id: 1,
    label: "Prix du Meilleur reportage radio sur l'IA au service de la lutte contre les VBG et de l'engagement citoyen des jeunes",
    objective: "Récompenser une production radiophonique mettant en lumière l'utilisation de l'Intelligence Artificielle comme outil de sensibilisation, de prévention, d'éducation ou de mobilisation citoyenne des jeunes autour des violences basées sur le genre, des droits humains et de l'engagement communautaire.",
    criteria: [
      'Pertinence du sujet par rapport au thème des Togo Médias Awards 2026',
      'Qualité journalistique et traitement éditorial',
      'Capacité du reportage à sensibiliser et mobiliser les jeunes',
      "Promotion des valeurs d'égalité, de respect et de citoyenneté",
      "Mise en avant d'initiatives innovantes ou de solutions numériques responsables",
      'Impact potentiel sur les communautés et les auditeurs',
      'Respect de l’éthique journalistique et des principes de protection des données et des personnes interviewées',
    ],
    type: 'individual',
  },
  {
    id: 2,
    label: "Prix du Meilleur reportage en ligne sur l'IA comme levier d'égalité entre les filles et les garçons",
    objective: "Valoriser une production médiatique digitale illustrant comment l'IA peut contribuer à promouvoir l'égalité entre les filles et les garçons, l'inclusion numérique et le leadership des jeunes.",
    criteria: [
      "Originalité et innovation dans le traitement du sujet",
      "Pertinence du contenu en lien avec l'égalité de genre et l'IA",
      'Qualité rédactionnelle, audiovisuelle ou multimédia',
      'Capacité du contenu à informer, sensibiliser et inspirer les jeunes',
      "Promotion d'une utilisation responsable, inclusive et éthique du numérique",
      "Impact et portée potentielle auprès des communautés et des jeunes publics",
      'Respect des principes d’éthique, de diversité et de protection des données personnelles',
    ],
    type: 'individual',
  },
  {
    id: 3,
    label: 'Prix Média jeunesse et innovation inclusive',
    objective: "Récompenser une production ou une initiative médiatique valorisant les innovations et solutions portées par les jeunes en faveur de l'inclusion et du développement durable.",
    criteria: [
      "Promotion de l'inclusion, de la diversité et de l'égalité des chances",
      "Mise en valeur du leadership et de l'engagement des jeunes",
      "Valorisation d'initiatives locales innovantes à impact social positif",
      'Qualité et créativité du traitement médiatique',
      'Capacité du contenu à inspirer, sensibiliser et mobiliser les communautés',
      'Contribution à une participation citoyenne responsable et inclusive',
      'Respect des principes d’éthique et de responsabilité dans la production médiatique',
    ],
    type: 'individual',
  },
  {
    id: 4,
    label: "Prix du Meilleur Contenu Média sur l'Intelligence Artificielle et la Jeunesse",
    objective: "Récompenser une production médiatique qui contribue à informer, sensibiliser et vulgariser les enjeux, opportunités et défis liés à l'IA auprès des jeunes togolais.",
    criteria: [
      'Qualité éditoriale et pertinence du traitement médiatique',
      'Capacité du contenu à sensibiliser et informer les jeunes',
      "Originalité et innovation dans l'approche ou le format",
      'Accessibilité et clarté du contenu pour le public jeune',
      "Promotion d'un usage responsable et éthique de l'IA",
      "Impact potentiel sur la compréhension et l'engagement des jeunes",
      'Respect des principes d’éthique journalistique et de fiabilité de l’information',
    ],
    type: 'individual',
  },
  {
    id: 5,
    label: 'Prix du Meilleur Journaliste Web',
    objective: 'Récompenser un journaliste exerçant principalement sur les plateformes numériques et se distinguant par la qualité, la rigueur et l’impact de ses productions journalistiques en ligne.',
    criteria: [
      'Qualité rédactionnelle et rigueur journalistique',
      'Régularité et diversité des productions publiées',
      'Maîtrise des outils et formats du journalisme numérique',
      'Originalité dans le traitement et la présentation de l’information',
      "Contribution à l'information citoyenne et à l'éducation du public",
      'Respect de l’éthique journalistique et de la déontologie',
      "Impact et engagement générés auprès des audiences numériques",
    ],
    type: 'individual',
  },
  {
    id: 6,
    label: 'Prix du Meilleur Créateur de Contenu',
    objective: 'Récompenser un créateur de contenu digital dont les productions contribuent à informer, éduquer, sensibiliser ou valoriser les initiatives citoyennes, culturelles, sociales ou entrepreneuriales.',
    criteria: [
      'Créativité et originalité des contenus',
      'Qualité technique et éditoriale des productions',
      'Régularité et cohérence de la ligne éditoriale',
      "Contribution positive à l'information, à l'éducation ou à la sensibilisation",
      'Capacité à mobiliser et engager les communautés',
      'Promotion des valeurs citoyennes, de l’inclusion et du vivre-ensemble',
      'Respect des principes d’éthique et de responsabilité numérique',
    ],
    type: 'individual',
  },
  {
    id: 7,
    label: 'Prix du Meilleur Animateur Télé',
    objective: "Récompenser un professionnel de la télévision qui se distingue par son talent d'animation et sa maîtrise de l'antenne.",
    criteria: [
      'Qualité de la présentation et aisance à l’antenne',
      'Maîtrise des techniques d’animation',
      'Capacité à susciter l’intérêt du public',
      'Professionnalisme dans la gestion des débats et interviews',
      'Contribution à la promotion de contenus éducatifs, citoyens ou culturels',
      "Originalité du style d'animation",
      'Respect de l’éthique et des règles professionnelles',
    ],
    type: 'individual',
  },
  {
    id: 8,
    label: 'Prix du Meilleur Journaliste Télé',
    objective: 'Récompenser un journaliste de télévision dont les productions se distinguent par leur qualité éditoriale et leur rigueur professionnelle.',
    criteria: [
      'Qualité journalistique des reportages',
      'Pertinence et intérêt public des sujets traités',
      'Rigueur dans la recherche et la vérification',
      "Qualité de l'écriture audiovisuelle",
      'Capacité à informer et sensibiliser les citoyens',
      "Respect des règles d'éthique",
      'Impact et portée des productions',
    ],
    type: 'individual',
  },
  {
    id: 9,
    label: 'Prix du Meilleur Journaliste Radio',
    objective: 'Récompenser un journaliste radio qui se distingue par la qualité de ses productions et son professionnalisme.',
    criteria: [
      'Qualité éditoriale et journalistique des productions',
      'Pertinence des sujets abordés',
      'Clarté du traitement radiophonique',
      'Capacité à informer et éduquer les auditeurs',
      'Originalité dans le traitement des sujets',
      'Respect de l’éthique et de la déontologie',
      "Impact sur l'information citoyenne",
    ],
    type: 'individual',
  },
  {
    id: 10,
    label: 'Prix de la Meilleure Émission Radio',
    objective: "Récompenser une émission radiophonique qui se distingue par sa qualité éditoriale et son innovation.",
    criteria: [
      'Qualité globale de la production',
      'Pertinence des thématiques abordées',
      'Originalité du concept et du format',
      'Capacité à informer ou divertir de manière responsable',
      'Participation des auditeurs',
      'Régularité et professionnalisme',
      'Respect des principes d’éthique',
    ],
    type: 'organization',
  },
  {
    id: 11,
    label: 'Prix de la Meilleure Radio Nationale',
    objective: "Récompenser une station de radio nationale qui se distingue par la qualité de ses programmes et sa contribution au développement.",
    criteria: [
      'Qualité et diversité des programmes',
      "Contribution à l'information et à l'éducation",
      'Promotion de la cohésion sociale',
      'Innovation dans les contenus',
      'Accessibilité et proximité avec les communautés',
      'Respect des normes professionnelles',
      'Impact et rayonnement national',
    ],
    type: 'organization',
  },
  {
    id: 12,
    label: 'Prix du Meilleur Web Humoriste',
    objective: 'Récompenser un créateur de contenu humoristique utilisant les plateformes numériques pour divertir tout en sensibilisant le public.',
    criteria: [
      'Originalité et créativité des productions',
      'Qualité de la réalisation',
      'Capacité à divertir avec des messages constructifs',
      'Contribution à la sensibilisation citoyenne',
      "Impact et engagement auprès des communautés numériques",
      'Promotion du respect et du vivre-ensemble',
      'Respect des principes d’éthique et de responsabilité',
    ],
    type: 'individual',
  },
]

export const ACTIVITIES: Activity[] = [
  { title: 'Conférence de presse', desc: "Lancement officiel à l'hôtel Mirambo (Lomé).", date: '27 Juin 2026 à 14h' },
  { title: 'Conférence-débat nationale', desc: "Débats d'experts à Dapaong.", date: 'Juillet 2026' },
  { title: 'Campagne de sensibilisation', desc: 'Mobilisation sur les réseaux et médias.', date: 'Mai – Août 2026' },
  { title: 'Match de football', desc: 'Médias vs Société Civile à Lomé.', date: 'Septembre 2026' },
  { title: 'Cérémonie de remise des prix', desc: "La grande nuit de l'excellence à Lomé.", date: 'Septembre 2026' },
]

export const SCHEDULE = [
  { activity: "Conférence de presse - lancement officiel", period: '27 Juin 2026', time: '14h00', location: "Hôtel Mirambo (Lomé)", image: 'https://picsum.photos/seed/sched-press/800/600' },
  { activity: 'Conférence-débat nationale', period: 'Juillet 2026', time: '09h00', location: 'Dapaong', image: 'https://picsum.photos/seed/sched-debate/800/600' },
  { activity: 'Campagne de sensibilisation', period: 'Mai - Août 2026', time: '-', location: 'Tout le Togo', image: 'https://picsum.photos/seed/sched-campaign/800/600' },
  { activity: 'Sélection des productions', period: 'Août - Septembre 2026', time: '-', location: 'Lomé', image: 'https://picsum.photos/seed/sched-selection/800/600' },
  { activity: 'Match de football', period: 'Septembre 2026', time: '15h00', location: 'Lomé', image: 'https://picsum.photos/seed/sched-football/800/600' },
  { activity: 'Cérémonie de remise des prix', period: 'Septembre 2026', time: '19h00', location: 'Lomé', image: 'https://picsum.photos/seed/sched-ceremony/800/600' },
]

export const OBJECTIVES = [
  "Sensibiliser aux enjeux de l'IA dans les médias",
  'Promouvoir la protection des données personnelles',
  'Encourager des innovations médiatiques responsables',
  'Renforcer les capacités en éthique numérique',
  'Valoriser les productions journalistiques de qualité',
]

export const TARGETS = [
  'Journalistes (radio, télé, web, presse écrite)',
  'Étudiants en journalisme',
  'Bloqueurs et créateurs de contenus numériques',
  'Jeunes innovateurs dans le domaine des médias',
  'Institutions et organisations de la société civile',
]

export const CONTACT_INFOS: ContactInfo[] = [
  { label: 'Adresse', value: 'Lomé, Quartier Administratif, Togo', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z', icon2: 'M15 11a3 3 0 11-6 0 3 3 0 016 0z' },
  { label: 'Email', value: 'contact@togomediasawards.com', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { label: 'Téléphone', value: '+228 92 00 96 17', icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
]
