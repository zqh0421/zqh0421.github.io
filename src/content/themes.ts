// Research themes used to tag publications and build the filter buttons.
// Keep these in sync with the theme list in studio/schemas/publication.ts.
export const themes = [
  'AI for Education',
  'Human-AI Collaboration',
  'Intelligent User Interfaces',
] as const;

export type Theme = (typeof themes)[number];
