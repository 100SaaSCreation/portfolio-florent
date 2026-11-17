export const identity = {
  name: "Florent Le Bot",
  initials: "FLB",
  role: "Concepteur & développeur SaaS",
  email: "100SaaSCreation@proton.me",
  lead: "Du cadrage à la mise en ligne : parcours, interface, code — puis la preuve. Un logiciel n'est « terminé » qu'une fois les types, les tests, le build et le parcours réel validés.",
} as const;

export type ProjectStatus = "live" | "private";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: readonly string[];
  stack: readonly string[];
  status: ProjectStatus;
  url?: string;
};

export const projects: readonly Project[] = [
  {
    slug: "lienmuet2",
    name: "LienMuet2",
    tagline: "Questions anonymes, réponses maîtrisées.",
    description:
      "Un lien public pour recevoir des questions anonymes, une boîte de réception privée pour y répondre, et des offres payantes pour aller plus loin.",
    highlights: [
      "Lien public de questions anonymes",
      "Boîte de réception privée et authentifiée",
      "Facturation Stripe et pages légales",
    ],
    stack: ["Next.js 16", "React 19", "Prisma 7", "Better Auth", "Stripe", "Sentry"],
    status: "live",
    url: "https://lienmuet2.vercel.app",
  },
  {
    slug: "ti-food",
    name: "Ti Food",
    tagline: "Stocks, recettes et liste de courses.",
    description:
      "La cuisine du quotidien tenue simplement : ce qu'il y a dans les placards, ce qu'on peut cuisiner, et ce qu'il reste à acheter.",
    highlights: [
      "Stocks avec dates limites, FIFO et alertes",
      "Recettes liées au stock, saisie vocale, portions",
      "Liste de courses générée depuis les repas planifiés",
    ],
    stack: ["Next.js 15", "React 19", "Prisma 7", "Neon", "Stripe", "FR / EN"],
    status: "private",
  },
  {
    slug: "speedgest",
    name: "SpeedGest",
    tagline: "Tâches et projets, sans friction.",
    description:
      "Tableaux de bord modulables, todolist et tâches chronométrées pour alléger la gestion quotidienne d'une équipe ou d'un indépendant.",
    highlights: [
      "Tableaux colonnes, lignes et cellules",
      "Todolist et tâches chronométrées",
      "Mode invité, abonnements, FR / EN",
    ],
    stack: ["Next.js 16", "React 19", "Prisma 7", "Better Auth", "TanStack Query", "Stripe"],
    status: "private",
  },
  {
    slug: "caps-voice",
    name: "Cap's Voice",
    tagline: "Des capsules vocales à partager.",
    description:
      "Enregistrer, envoyer et réécouter des messages audio en famille, entre amis ou en équipe, dans des groupes privés.",
    highlights: [
      "Groupes privés",
      "Capsules audio enregistrées et partagées",
      "Comptes, offres et emails transactionnels",
    ],
    stack: ["Next.js 15", "React 19", "Supabase", "Prisma", "Better Auth", "Resend"],
    status: "private",
  },
];

export const facts = [
  { value: "4", label: "applications SaaS conçues et développées" },
  { value: "1", label: "en production publique" },
  { value: "FR / EN", label: "interfaces internationalisées" },
  { value: "9", label: "portes de gouvernance avant chaque livraison" },
] as const;

export const method = [
  {
    step: "01",
    title: "Cadrage",
    text: "Le besoin, les utilisateurs et les parcours sont écrits avant le premier écran. Ce qui est hors périmètre aussi.",
  },
  {
    step: "02",
    title: "Interface",
    text: "Hiérarchie claire, états vides, erreurs, clavier, contraste et lecture sur téléphone pensés dès la maquette.",
  },
  {
    step: "03",
    title: "Développement",
    text: "Code typé, tenu sur les versions réellement installées, sans dépendance fantôme ni réécriture gratuite.",
  },
  {
    step: "04",
    title: "Preuve",
    text: "Lint, tests, build, puis le parcours rejoué comme le ferait une vraie personne. Un test sauté n'est jamais un succès.",
  },
] as const;

export const unicorePillars = [
  {
    title: "Portes de gouvernance",
    text: "Cadrage, architecture, risque, autorisation, vérification, audit : chaque intervention franchit les portes P0 à P8 dans l'ordre.",
  },
  {
    title: "Preuves journalisées",
    text: "Chaque commande, son code de sortie et sa classification sont tracés. Aucune affirmation sans trace vérifiable.",
  },
  {
    title: "SKIP ≠ PASS",
    text: "Une vérification sautée reste une dette déclarée, jamais un succès maquillé dans le bilan.",
  },
  {
    title: "Usine de stacks",
    text: "Des packs versionnés (SaaS, API, site, mobile) pour démarrer sur des dépendances vérifiées plutôt que supposées.",
  },
] as const;

export const skills = [
  { group: "Front", items: ["Next.js App Router", "React 19", "TypeScript strict", "Tailwind CSS 4", "Radix UI"] },
  { group: "Back", items: ["Server Actions", "Prisma", "PostgreSQL / Neon", "Better Auth", "Supabase"] },
  { group: "Produit", items: ["Stripe", "Emails transactionnels", "i18n FR / EN", "RGPD", "SEO"] },
  { group: "Qualité", items: ["Vitest", "Playwright", "Lighthouse", "Snyk", "CI GitHub Actions"] },
] as const;

export const navigation = [
  { href: "#projets", label: "Projets" },
  { href: "#methode", label: "Méthode" },
  { href: "#unicore", label: "UNICORE" },
  { href: "#contact", label: "Contact" },
] as const;
