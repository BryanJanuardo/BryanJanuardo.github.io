import Calculator from '../../Images/Projects/Mobiles/Photo_Project_AndroidStudioCalculator.png';
import Tracker from '../../Images/Projects/Mobiles/Photo_Project_Tracker.png';

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
      title: 'Android Studio Calculator',
      description: [
            'Authentication System: Secure user registration and login with Firebase.',
            'Shape Calculations: Calculate area and volume of basic shapes.',
            'Counter: Functionality to increment and decrement values dynamically.',
      ],
      year: '2024',
      language: [
        'Android Studio', 'Java', 'XML', 'Firebase',
      ],
      image: Calculator,
      github: 'https://github.com/BryanJanuardo/FinalProjectLnT_Mobile',
      collabs: {
        name: [''],
        link: [''],
      },
    },

    {
      title: 'Tracker: Foods & Drinks Calorie Tracker App',
      description: [
          'Calorie Tracking: Calculates calorie intake based on consumed foods and drinks.',
          'Tracking Management: Comprehensive tools for managing and monitoring consumption data.',
      ],
      year: '2023',
      language: [
          'Android Studio', 'Java', 'XML'
      ],
      image: Tracker,
      github: 'https://github.com/BryanJanuardo/Aplikasi-Tracker',
      collabs: {
          name: [''],
          link: [''],
      },
    },
  ]

export default projectData;