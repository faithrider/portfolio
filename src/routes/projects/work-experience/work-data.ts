// Example work experience data structure
export interface WorkExperience {
  slug: string;
  company: string;
  location: string;
  jobTitle: string;
  time: string;
  description: string;
}

export const workExperiences: WorkExperience[] = [
  {
    slug: 'acme-intern',
    company: 'Acme Corp',
    location: 'Cincinnati, OH',
    jobTitle: 'Software Engineering Intern',
    time: 'Summer 2025',
    description: 'Worked on full-stack web development projects and improved internal tools.',
  },
  {
    slug: 'university-research',
    company: 'University of Cincinnati',
    location: 'Cincinnati, OH',
    jobTitle: 'Research Assistant',
    time: '2024-2025',
    description: 'Assisted in research on human-computer interaction and published a paper.',
  },
];
