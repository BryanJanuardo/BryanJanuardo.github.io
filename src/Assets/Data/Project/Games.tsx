interface Project {
  title: string;
  description: string[];
  year?: string;
  language?: string[];
  image: string;
  github?: string;
  collabs?: {
    name?: string[];
    link?: string[];
  };
}

const projectData: Project[] = [
  {
    title: 'Simple 2D ',
    description: [
        '',
    ],
    year: '',
    language: [
        '',
    ],
    image: '',
    github: '',
    collabs: {
        name: [''],
        link: [''],
    },
  },
];

export default projectData;