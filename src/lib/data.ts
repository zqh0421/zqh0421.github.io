// The one place pages get publications and news from.
// Step 2 swaps the local arrays for Sanity queries; pages don't change.
import { news, publications } from './local-data';
import { pubTypes, type NewsItem, type Publication } from './types';

// Newest year first; within a year, CV section order (journal, conference, …),
// then highest CV number first (C5 before C4).
function comparePubs(a: Publication, b: Publication): number {
  const number = (p: Publication) => Number(p.id.replace(/\D/g, '')) || 0;
  return (
    b.year - a.year ||
    pubTypes.indexOf(a.type) - pubTypes.indexOf(b.type) ||
    number(b) - number(a)
  );
}

export async function getPublications(): Promise<Publication[]> {
  return [...publications].sort(comparePubs);
}

export async function getNews(): Promise<NewsItem[]> {
  return [...news].sort((a, b) => b.date.localeCompare(a.date));
}

export function formatMonth(date: string): string {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
