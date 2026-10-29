import type { Theme } from '../content/themes';

export type PubType =
  | 'Full Paper'
  | 'Short Paper'
  | 'Demo'
  | 'Poster'
  | 'Workshop Paper'
  | 'Workshop Abstract';

export interface Publication {
  title: string;
  authors: string[];
  venue: string; // short form shown in the label, e.g. "AIED ’25"
  type: PubType;
  year: number;
  themes: Theme[];
  featured: boolean; // true = also shown on the homepage
  links: { label: string; url: string }[];
  figure?: { url: string; alt: string };
  note?: string; // optional extra line, e.g. the workshop name
}

export interface NewsItem {
  date: string; // YYYY-MM-DD
  text: string;
  url?: string;
}
