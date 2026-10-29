// Temporary local data. Step 2 moves this into Sanity and this file is deleted.
import type { NewsItem, Publication } from './types';

export const publications: Publication[] = [
  {
    title:
      'LLM-based Multimodal Feedback Produces Equivalent Learning and Better Student Perceptions than Educator Feedback',
    authors: ['Chloe Qianhui Zhao', '[CO-AUTHORS]'],
    venue: 'LAK ’26',
    type: 'Full Paper',
    year: 2026,
    themes: ['AI for Education', 'Human-AI Collaboration'],
    featured: true,
    links: [],
  },
  {
    title: 'SlideItRight: Using AI to Find Relevant Slides and Provide Feedback for Open-Ended Questions',
    authors: ['Chloe Qianhui Zhao', '[CO-AUTHORS]'],
    venue: 'AIED ’25',
    type: 'Full Paper',
    year: 2025,
    themes: ['AI for Education', 'Intelligent User Interfaces'],
    featured: true,
    links: [
      { label: 'arXiv', url: 'https://doi.org/10.48550/arXiv.2505.04584' },
      { label: 'Code', url: 'https://github.com/zqh0421/ai-answer' },
    ],
  },
  {
    title: 'From First Draft to Final Insight',
    authors: ['[AUTHORS]', 'Chloe Qianhui Zhao'],
    venue: 'AIED ’25',
    type: 'Full Paper',
    year: 2025,
    themes: ['AI for Education', 'Human-AI Collaboration'],
    featured: true,
    links: [],
  },
  {
    title: 'SlideItRight [DEMO TITLE]',
    authors: ['Chloe Qianhui Zhao', '[CO-AUTHORS]'],
    venue: 'AIED ’25',
    type: 'Demo',
    year: 2025,
    themes: ['AI for Education', 'Intelligent User Interfaces'],
    featured: false,
    links: [],
    note: 'Interactive Event track',
  },
  {
    title: 'Toward Automated Qualitative Analysis',
    authors: ['Chloe Qianhui Zhao', '[CO-AUTHORS]'],
    venue: 'LAK ’25',
    type: 'Workshop Abstract',
    year: 2025,
    themes: ['Human-AI Collaboration'],
    featured: false,
    links: [],
    note: 'Workshop: From Data to Discovery — LLMs for Qualitative Analysis in Education',
  },
];

export const news: NewsItem[] = [
  { date: '2026-09-01', text: 'Started my PhD in Computer Science & Engineering at the University of Washington.' },
  { date: '2026-01-21', text: 'My first-author paper “LLM-based Multimodal Feedback Produces Equivalent Learning and Better Student Perceptions than Educator Feedback” was accepted as a full research paper at LAK ’26.' },
  { date: '2025-07-20', text: 'Attending AIED ’25 in Palermo, Italy.' },
  { date: '2025-05-27', text: 'System demo “SlideItRight” was accepted to the AIED ’25 Interactive Event track.' },
  { date: '2025-04-03', text: 'My first first-author paper, “SlideItRight”, was accepted as a full paper at AIED ’25.' },
  { date: '2025-04-03', text: 'Co-authored paper “From First Draft to Final Insight” was accepted as a full paper at AIED ’25.' },
  { date: '2024-12-10', text: 'Abstract “Toward Automated Qualitative Analysis” was accepted to the LAK ’25 workshop “From Data to Discovery: LLMs for Qualitative Analysis in Education”.' },
  { date: '2024-10-10', text: 'Named an Outstanding Graduate of Beijing.' },
  { date: '2024-08-26', text: "Started my master's at CMU with a $9,000 merit-based scholarship." },
];
