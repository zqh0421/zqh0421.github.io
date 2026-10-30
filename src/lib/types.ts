import type { Theme } from '../content/themes';

// Matches the sections of the CV, in the order they're listed within a year.
export const pubTypes = [
  'Journal Paper',
  'Conference Paper',
  'Workshop Paper',
  'Poster',
  'Interactive Event',
] as const;

export type PubType = (typeof pubTypes)[number];

export interface Publication {
  id: string; // CV code, e.g. "C3"
  title: string;
  authors: string[];
  venue: string; // short form shown in the label, e.g. "AIED ’25" or "Under Review"
  venueFull?: string; // e.g. "26th International Conference on Artificial Intelligence in Education (AIED ’25)"
  type: PubType;
  year: number;
  themes: Theme[];
  featured: boolean; // true = also shown on the homepage
  links: { label: string; url: string }[];
  figure?: { url: string; alt: string };
  note?: string; // optional extra line, e.g. "Non-archival"
}

export interface NewsItem {
  date: string; // YYYY-MM-DD
  text: string;
  url?: string;
}
