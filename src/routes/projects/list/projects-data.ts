// Example project data structure
export type ProjectType = 'cs' | 'nis' | 'other';

export interface Project {
  slug: string;
  date: string;
  title: string;
  blurb: string;
  type: ProjectType;
  techStack: string[];
  image?: string;
}

export const projects: Project[] = [
// ----------------------- HACKATHONS -----------------------
  {
    slug: 'hackathon-2021-hats4cats',
    date: 'Fall 2021',
    title: 'Hats4Cats',
    blurb: 'Give your feline friend a fun hat! An AI-powered app that takes preset hat graphics, and accurately places one on your cat\'s head!',
    type: 'cs',
    techStack: ['Python', 'HTML/CSS'],
    image: '',
  },
  {
    slug: 'hackathon-2022-healthontrack',
    date: 'Fall 2022',
    title: 'HealthOnTrack',
    blurb: 'A web app that reminds users when to take medicine for clinical trials, helps track their symptoms, and allows easy contact with the trial hosts.',
    type: 'cs',
    techStack: ['AWS', 'atom', 'HTML/CSS', 'Javascript', 'Python', 's3', 'xml'],
    image: '',
  },
  {
    slug: 'hackathon-2023-clincialconnections',
    date: 'Spring 2023',
    title: 'Clinical Connections',
    blurb: 'A hub to connect local communities with clinical trial organizers!',
    type: 'cs',
    techStack: ['Javascript', 'HTML/CSS'],
    image: '',
  },
  {
    slug: 'hackathon-2024-zombies',
    date: 'Fall 2024',
    title: 'Zombies Keep Stealing My Homework!',
    blurb: 'The zombie apocalypse has begun. You, unfortunately, still must attend school. However, the zombies are backpack thieves. Go around town, collect your things, and fight back against the pesky zombies!',
    type: 'cs',
    techStack: ['Gamemaker (gml)', 'Procreate (Art)'],
    image: '',
  },
  {
    slug: 'hackathon-2025-whiskers',
    date: 'Spring 2025',
    title: 'Click Mr. Whiskers',
    blurb: 'Click Mr. Whiskers to get more WHISKERS, buy buildings, and rack up the numbers!',
    type: 'cs',
    techStack: ['Gamemaker (gml)', 'Resprite (Art)'],
    image: '',
  },

// ----------------------- NIS -----------------------
  {
    slug: 'nis-2024-oribe',
    date: 'Spring 2024',
    title: 'Oribe',
    blurb: 'How do consumers view sustainability? A market research project for Oribe haircare, analyzing consumer perceptions in the beauty industry.',
    type: 'nis',
    techStack: ['Corporate Project', 'Innovation'],
    image: '',
  },

// ----------------------- OTHER -----------------------
  {
    slug: 'kao-biore',
    date: 'Fall 2023',
    title: 'Kao Innovation Challenge - Biore',
    blurb: '1st place winner!! A design contest creating Valentine\'s day designs for Biore nose strips.',
    type: 'other',
    techStack: ['Innovation'],
    image: '',
  },
  
];
