export type Project = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  description?: string;
  image?: string;
  technologies: string[];
  category: 'coding' | 'nis' | 'other';
  date: string;
  link?: string;
  github?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: 'proj-1',
    slug: 'nis-client-1',
    title: 'My Personal Portfolio',
    excerpt: 'My personal website, showcasing both my professional and academic work, and personal hobbiest photography.',
    description: 'FIXME: Detailed description of the project, challenges solved, results achieved',
    image: '/greece-ferry-water.jpg',
    technologies: ['SvelteKit', 'TypeScript', 'Tailwind CSS'],
    category: 'coding',
    date: '2024-01-01',
    link: 'FIXME: https://faithmrider.com',
    featured: true,
  },
  {
    id: 'proj-2',
    slug: 'hackathon-1',
    title: 'FIXME: Hackathon Project 1',
    excerpt: 'FIXME: What was built and the general concept',
    description: 'FIXME: Full description of the hackathon project',
    image: '/projects/placeholder-2.jpg',
    technologies: ['FIXME: Add tech'],
    category: 'coding',
    date: '2023-11-15',
    github: 'FIXME: https://github.com/username/repo',
  },
  {
    id: 'proj-3',
    slug: 'nis-client-2',
    title: 'FIXME: NIS Client Project 2',
    excerpt: 'FIXME: What you did for this client',
    technologies: ['FIXME: Add tech'],
    category: 'nis',
    date: '2023-09-01',
    link: 'FIXME: https://project-link.com',
  },
  {
    id: 'proj-4',
    slug: 'hackathon-2',
    title: 'FIXME: Hackathon Project 2',
    excerpt: 'FIXME: Brief overview of second hackathon project',
    technologies: ['FIXME: Add tech'],
    category: 'coding',
    date: '2023-06-20',
    github: 'FIXME: https://github.com/username/repo',
  },
  {
    id: 'proj-5',
    slug: 'other-project',
    title: 'FIXME: Other Project/Personal Work',
    excerpt: 'FIXME: What this project was about',
    technologies: ['FIXME: Add tech'],
    category: 'other',
    date: '2023-04-10',
    link: 'FIXME: https://project-link.com',
  },
];
