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
  hasDetailPage?: boolean;
};

export const projects: Project[] = [
  {
    id: 'proj-1',
    slug: 'nis-client-1',
    title: 'My Personal Portfolio',
    excerpt: 'My personal website, showcasing both my professional and academic work, and personal hobbiest photography.',
    description: 'FIXME: Detailed description of the project, challenges solved, results achieved',
    image: '/photography/greece/greece-ferry-water.jpg',
    technologies: ['SvelteKit', 'TypeScript', 'Tailwind CSS'],
    category: 'coding',
    date: '2024-01-01',
    link: 'https://faithmrider.com',
    featured: true,
  },
  {
    id: 'hats4cats',
    slug: 'hats4cats',
    title: 'Hats4Cats',
    excerpt: 'Web app that detects cat facial features and overlays custom hats onto photos.',
    description: 'I worked on a playful web app that lets users upload cat photos and digitally place custom hats on their feline friends. We built it with a Python neural network to detect facial features (eyes, ears, nose) and integrated it with AWS Lambda microservices and S3 buckets to handle the image processing pipeline. The system was designed to detect facial geometry and accurately position/rotate hats based on where the cat\'s features were located. While we ran into challenges with feline facial recognition (it\'s way harder than human faces!), the project taught me a lot about microservice architecture and how cloud services can work together. I handled graphic design and UX while my teammates worked on front-end and back-end development.',
    image: '/projects/hats4cats.jpg',
    technologies: ['Python', 'HTML', 'CSS', 'AWS Lambda', 'S3', 'Nginx'],
    category: 'coding',
    date: '2021-10-01',
    github: 'https://github.com/faithrider/Hats4Cats',
    link: 'https://devpost.com/software/hats4cats',
  },
  {
    id: 'obliviscor',
    slug: 'obliviscor',
    title: 'OBLIVISCOR',
    excerpt: 'Narrative pixel art game exploring mortality and rebirth through branching story choices.',
    description: 'I created a solo narrative game project exploring themes of death, choice, and identity through the journey of a soul in the underworld. Built with Pygame, I handled both the code and all the original pixel art created on iPad. The game features two branching paths with different endings based on player decisions, drawing inspiration from Greek/Roman/Egyptian mythology and games like Death and Taxes. This was my first time using Pygame and doing pixel art, and I was really proud of how it turned out despite being a first solo project. The story deals with existential themes while keeping things poetic rather than dark—I wanted to create something that felt meaningful to play through.',
    image: '/projects/obliviscor.jpg',
    technologies: ['Python', 'Pygame', 'Pixelable'],
    category: 'coding',
    date: '2022-04-01',
    github: 'https://github.com/faithrider/OBLIVISCOR',
    link: 'https://devpost.com/software/obliviscor',
  },
  {
    id: 'health-on-track',
    slug: 'health-on-track',
    title: 'Health on Track',
    excerpt: 'Clinical trial management app that tracks medications, symptoms, and connects participants with organizers.',
    description: 'I worked on a health tracking web app designed to support clinical trial participants by providing medication reminders, symptom tracking, and direct contact with trial organizers. The app was built with HTML, CSS, and JavaScript for the front end, with Python and AWS S3 handling file uploads and data management. One of our key accomplishments was successfully integrating S3 for file uploads and retrieval, which was pretty satisfying to get working. Most of my team learned HTML and CSS fundamentals for the first time on this project, and we all came away with a much better understanding of managing data in the cloud. The project won awards for AWS Greatest Social Impact and Medpace\'s Set The Pace.',
    image: '/projects/health-on-track.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'AWS S3', 'Rest API'],
    category: 'coding',
    date: '2022-10-01',
    github: 'https://github.com/Jasmine-Mogadam/Health-On-Track',
    link: 'https://health-on-track.netlify.app/',
  },
  {
    id: 'clinical-connections',
    slug: 'clinical-connections',
    title: 'ClinicalConnections',
    excerpt: 'Hub connecting patients with clinical trial organizations, promoting transparency and accessibility.',
    description: 'I led the frontend development for ClinicalConnections, a web platform aimed at bridging the gap between patients and clinical trial organizations. The site features searchable trial cards, organization profiles, and educational content about the clinical trial process—making trials more accessible to people who might not otherwise know these opportunities exist. This was my first time successfully implementing JavaScript for interactive features like navbar navigation and dynamic filtering, which was exciting progress from earlier hackathons. We used GitHub Pages to host the site, keeping things simple and effective. The project won Medpace\'s award for Best Digital Solution to Improve the Clinical Trial Process, and I was proud that both my teammate and I grew significantly in front-end development skills throughout this project.',
    image: '/projects/clinical-connections.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Pages'],
    category: 'coding',
    date: '2023-04-01',
    github: 'https://github.com/faithrider/ClinicalConnections',
    link: 'https://faithrider.github.io/ClinicalConnections/',
  },
  {
    id: 'zombies-homework',
    slug: 'zombies-homework',
    title: 'Zombies Keep Stealing My Homework!',
    excerpt: '2D top-down zombie game where you collect school supplies before school while fighting off thieves.',
    description: 'I created all the pixel art assets for this 2D top-down zombie action game using Procreate. The game follows Robin, a student dealing with the zombie apocalypse but still needing to get to school—a humorous take on "the world goes on." The gameplay was inspired by Undertale\'s battle mechanics, and my main focus was developing a cohesive pixel art style with custom brush setups that ensured seamless asset gridding as I created them. This workflow optimization was crucial for producing the volume of assets needed in the limited hackathon timeframe. Working alongside my brother (who handled the GameMaker/GML coding), I learned a lot about creating large sprite sheets efficiently and maintaining visual consistency across a lot of assets.',
    image: '/projects/zombies-homework.jpg',
    technologies: ['GameMaker', 'GML', 'Procreate'],
    category: 'coding',
    date: '2024-10-01',
    github: 'https://github.com/noahrider/zombies-keep-stealing-my-homework',
  },
  {
    id: 'click-mr-whiskers',
    slug: 'click-mr-whiskers',
    title: 'Click Mr. Whiskers',
    excerpt: 'Idle clicker game where you click a cat to earn currency and build your pet empire.',
    description: 'I designed and created all the pixel art for this idle clicker game inspired by Cookie Clicker but with a cat theme. Players click Mr. Whiskers to earn currency and purchase buildings like cat trees and toys. This project was actually a pivot—we spent about 16 hours on a different idea before realizing it wasn\'t feasible to finish, so we pivoted quickly and came up with Click Mr. Whiskers instead. I used ReSprite on desktop for this one, which was a new tool for me, and I really enjoyed learning the sprite creation workflow. Getting comfortable with ReSprite helped me speed up my pixel art process, which is something I\'ll carry forward into future projects.',
    image: '/projects/click-whiskers.jpg',
    technologies: ['GameMaker Studio 2', 'GML', 'ReSprite'],
    category: 'coding',
    date: '2025-04-01',
    github: 'https://github.com/noahrider/clickwhisk',
    link: 'https://devpost.com/software/mrwhiskers-exe',
  },
  {
    id: 'molton-brown-part1',
    slug: 'molton-brown-part1',
    title: 'Exploring AI Image Generation',
    excerpt: 'In the early days of AI, our client Molton Brown wanted to explore how available tools could be used for marketing and content creation.',
    description: 'This project was my first in the NEXT Innovation Scholars program. We were tasked with exploring the capabilities of AI image generation for uses such as marketing and content creation. Our client was Molton Brown, a London-based fragrance company. We experimented with various tools like Midjourney and DALL-E to create different types of images, from product mockups to social media content. It was fascinating to see how quickly the technology was evolving and what kinds of creative possibilities it opened up. This project was more about exploration and learning than delivering a specific product, but it gave us a great foundation in understanding the potential of AI, particulary in the early days.',
    technologies: ['Canva', 'Midjourney', 'DALL-E', 'ChatGPT'],
    category: 'nis',
    date: '2023-11-04',
  },
  {
    id: 'vis-in-the-wild',
    slug: 'vis-in-the-wild',
    title: 'Vis in the Wild',
    excerpt: 'A design critique of an interactive data visualization exploring A24\'s film catalog: genre, scores, gross revenue, and a variety of other metrics that allow a user to explore the films of A24.',
    description: 'This project critiques an interactive visualization of A24\'s filmography, built from data pulled across Rotten Tomatoes, IMDB, A24films.com, and The Numbers. The tool lets users filter by genre, release year, and critic or audience scores, with individual film details available on hover. The write-up looks at where the design works, where it creates friction, and what the limitations reveal about the difficulty of making film data genuinely explorable.',
    technologies: ['Data Visualization', 'Design'],
    category: 'other',
    date: '2026-04-15',
    hasDetailPage: true,
  },
  {
    id: 'textures-of-amazonia',
    slug: 'textures-of-amazonia',
    title: 'Textures of Amazonia',
    excerpt: 'A photo essay exploring the adaptation of people and nature to the Amazon River, from the sediment-laden Solimões to the dark waters of the Rio Negro.',
    technologies: ['Photography', 'Visual Storytelling'],
    category: 'other',
    date: '2025-12-01',
    link: '/photography/amazonia',
  },
];
