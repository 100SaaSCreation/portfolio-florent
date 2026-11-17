/** Compat tests / imports : le contenu vivant passe par `getPortfolioContent()`. */
export type { Project, ProjectStatus } from "@/lib/content-types";
export {
  defaultPortfolioContent as _defaults,
} from "@/lib/content-defaults";

import { defaultPortfolioContent } from "@/lib/content-defaults";

export const identity = defaultPortfolioContent.identity;
export const projects = defaultPortfolioContent.projects;
export const facts = defaultPortfolioContent.facts;
export const method = defaultPortfolioContent.method;
export const unicorePillars = defaultPortfolioContent.unicorePillars;
export const skills = defaultPortfolioContent.skills;
export const navigation = defaultPortfolioContent.navigation;
