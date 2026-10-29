// The one place pages get publications and news from.
// Step 2 swaps the local arrays for Sanity queries; pages don't change.
import { news, publications } from './local-data';
import type { NewsItem, Publication } from './types';

export async function getPublications(): Promise<Publication[]> {
  return [...publications].sort((a, b) => b.year - a.year);
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
