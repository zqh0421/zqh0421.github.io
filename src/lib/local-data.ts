// Temporary local data. Step 2 moves this into Sanity and this file is deleted.
import type { NewsItem, Publication } from './types';

export const publications: Publication[] = [
  // Journal papers
  {
    id: 'J1',
    title: 'Assessing the Impact and Underlying Pathways of Sequenced AI Feedback on Student Learning',
    authors: ['Jie Cao', 'Chloe Qianhui Zhao', 'Jionghao Lin', 'Kenneth R. Koedinger'],
    venue: 'Under Review',
    type: 'Journal Paper',
    year: 2026,
    themes: ['AI for Education'],
    featured: false,
    links: [{ label: 'arXiv', url: 'https://arxiv.org/abs/2604.07469' }],
  },

  // Conference papers
  {
    id: 'C5',
    title:
      'Comparing One-Layer and Two-Layer AI Feedback with Human Feedback: The Moderating Role of Feedback Literacy',
    authors: ['Jie Cao', 'Chloe Qianhui Zhao', 'Jionghao Lin', 'Kenneth R. Koedinger'],
    venue: 'ICCE ’26',
    venueFull: '34th International Conference on Computers in Education (ICCE ’26)',
    type: 'Conference Paper',
    year: 2026,
    themes: ['AI for Education'],
    featured: false,
    links: [],
  },
  {
    id: 'C4',
    title:
      '“I want to be pushed, I want to grow”: Enabling Social Workers to Design Evaluations of LLM Augmentation in Their Work',
    authors: ['Anna Kawakami', 'Chloe Qianhui Zhao', 'Renee Shelby', 'Fernando Diaz', 'Haiyi Zhu', 'Kenneth Holstein'],
    venue: 'AIES ’26',
    venueFull: '9th AAAI/ACM Conference on AI, Ethics, and Society (AIES ’26)',
    type: 'Conference Paper',
    year: 2026,
    themes: ['Human-AI Interaction'],
    featured: true,
    links: [{ label: 'Paper', url: 'https://doi.org/10.1609/aies.v9i2.43241' }],
  },
  {
    id: 'C3',
    title:
      'LLM-based Multimodal Feedback Produces Equivalent Learning and Better Student Perceptions than Educator Feedback',
    authors: ['Chloe Qianhui Zhao', 'Jie Cao', 'Jionghao Lin', 'Kenneth R. Koedinger'],
    venue: 'LAK ’26',
    venueFull: '16th International Learning Analytics & Knowledge Conference (LAK ’26)',
    type: 'Conference Paper',
    year: 2026,
    themes: ['AI for Education', 'Human-AI Interaction'],
    featured: true,
    links: [
      { label: 'Paper', url: 'https://doi.org/10.1145/3785022.3785124' },
      { label: 'arXiv', url: 'https://arxiv.org/abs/2601.15280' },
    ],
  },
  {
    id: 'C2',
    title: 'SlideItRight: Using AI to Find Relevant Slides and Provide Feedback for Open-ended Questions',
    authors: ['Chloe Qianhui Zhao', 'Jie Cao', 'Eason Chen', 'Kenneth R. Koedinger', 'Jionghao Lin'],
    venue: 'AIED ’25',
    venueFull: '26th International Conference on Artificial Intelligence in Education (AIED ’25)',
    type: 'Conference Paper',
    year: 2025,
    themes: ['AI for Education', 'Intelligent User Interfaces'],
    featured: true,
    links: [
      { label: 'Paper', url: 'https://doi.org/10.1007/978-3-031-98459-4_27' },
      { label: 'arXiv', url: 'https://arxiv.org/abs/2505.04584' },
      { label: 'Code', url: 'https://github.com/zqh0421/ai-answer' },
    ],
  },
  {
    id: 'C1',
    title: 'From First Draft to Final Insight: A Multi-agent Approach for Feedback Generation',
    authors: [
      'Jie Cao',
      'Chloe Qianhui Zhao',
      'Xian Chen',
      'Shuman Wang',
      'Christian Schunn',
      'Kenneth R. Koedinger',
      'Jionghao Lin',
    ],
    venue: 'AIED ’25',
    venueFull: '26th International Conference on Artificial Intelligence in Education (AIED ’25)',
    type: 'Conference Paper',
    year: 2025,
    themes: ['AI for Education'],
    featured: false,
    links: [
      { label: 'Paper', url: 'https://doi.org/10.1007/978-3-031-98417-4_12' },
      { label: 'arXiv', url: 'https://arxiv.org/abs/2505.04869' },
    ],
  },

  // Workshop papers
  {
    id: 'W1',
    title: 'Toward Automated Qualitative Analysis: Leveraging Large Language Models for Tutoring Dialogue Evaluation',
    authors: [
      'Megan Gu',
      'Chloe Qianhui Zhao',
      'Claire Liu',
      'Nikhil Patel',
      'Jahnvi Shah',
      'Jionghao Lin',
      'Kenneth R. Koedinger',
    ],
    venue: 'LAK ’25',
    venueFull:
      '15th International Conference on Learning Analytics & Knowledge (LAK ’25): Workshop on “From Data to Discovery: LLMs for Qualitative Analysis in Education”',
    type: 'Workshop Paper',
    year: 2025,
    themes: ['AI for Education', 'Human-AI Interaction'],
    featured: false,
    links: [
      { label: 'Paper', url: 'https://ceur-ws.org/Vol-3995/LLMQUAL_paper2_short.pdf' },
      { label: 'arXiv', url: 'https://arxiv.org/abs/2504.13882' },
    ],
  },

  // Miscellaneous
  {
    id: 'M2',
    title:
      'Comparing Layered and Non-Layered LLM-Generated Feedback: Effects on Learning Gains and Learner Perceptions',
    authors: ['Jie Cao', 'Chloe Qianhui Zhao', 'Jionghao Lin', 'Kenneth R. Koedinger'],
    venue: 'ICLS ’26',
    venueFull: '20th International Conference of the Learning Sciences (ICLS ’26)',
    type: 'Poster',
    year: 2026,
    themes: ['AI for Education'],
    featured: false,
    links: [{ label: 'Paper', url: 'https://doi.org/10.22318/icls2026.727389' }],
  },
];

export const news: NewsItem[] = [
  { date: '2026-09-01', text: 'Started my PhD in Computer Science & Engineering at the University of Washington.' },
  { date: '2026-04-01', text: 'Attending LAK ’26 in Bergen, Norway.' },
  { date: '2026-01-21', text: 'My first-author paper “LLM-based Multimodal Feedback Produces Equivalent Learning and Better Student Perceptions than Educator Feedback” was accepted as a full research paper at LAK ’26.' },
  { date: '2025-07-20', text: 'Attending AIED ’25 in Palermo, Italy.' },
  { date: '2025-05-27', text: '“SlideItRight” was accepted to the AIED ’25 Interactive Event track.' },
  { date: '2025-04-03', text: 'My first first-author paper, “SlideItRight”, was accepted as a full paper at AIED ’25.' },
  { date: '2025-04-03', text: 'Co-authored paper “From First Draft to Final Insight” was accepted as a full paper at AIED ’25.' },
  { date: '2024-12-10', text: 'Abstract “Toward Automated Qualitative Analysis” was accepted to the LAK ’25 workshop “From Data to Discovery: LLMs for Qualitative Analysis in Education”.' },
  { date: '2024-10-10', text: 'Named an Outstanding Graduate of Beijing.' },
  { date: '2024-08-26', text: "Started my master's at CMU with a merit-based scholarship." },
];
