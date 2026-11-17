export type ProjectStatus = "live" | "private";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  status: ProjectStatus;
  url?: string;
};

export type Fact = { value: string; label: string };
export type MethodStep = { step: string; title: string; text: string };
export type Pillar = { title: string; text: string };
export type SkillGroup = { group: string; items: string[] };
export type NavItem = { href: string; label: string };

export type Identity = {
  name: string;
  initials: string;
  role: string;
  email: string;
  lead: string;
};

export type HeroCopy = {
  eyebrow?: string;
  titleLine1: string;
  titleLine2: string;
  primaryCta: string;
  secondaryCta: string;
};

export type ContactCopy = {
  title: string;
  body: string;
  emailSubject: string;
};

export type PortfolioContent = {
  identity: Identity;
  hero: HeroCopy;
  projects: Project[];
  facts: Fact[];
  method: MethodStep[];
  unicorePillars: Pillar[];
  skills: SkillGroup[];
  navigation: NavItem[];
  contact: ContactCopy;
  projectsIntro: { eyebrow: string; title: string; lead: string };
  methodIntro: { eyebrow: string; title: string; lead: string };
  unicoreIntro: { eyebrow: string; title: string; lead: string };
};
