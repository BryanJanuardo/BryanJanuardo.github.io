import Game2DPlatform from '../../Images/Games/Photo_Project_2DPlatformGame.png';

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
    title: 'Simple 2D Platformer Game',
    description: [
        'A classic 2D platformer where players collect apples to increase their score while dodging bombs that appear on screen. The goal is to survive as long as possible and rack up the highest score by skillfully avoiding bombs and gathering apple as much as possible.',
    ],
    year: '2022',
    language: [
        'C#', 'Unity',
    ],
    image: Game2DPlatform,
    github: '',
    collabs: {
        name: [''],
        link: [''],
    },
  },
];

export default projectData;