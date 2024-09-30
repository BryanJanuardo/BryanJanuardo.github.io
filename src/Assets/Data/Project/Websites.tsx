import BeebookPhoto from '../../Images/Projects/Websites/Photo_Project_Beebook.png';
import CinemalixPhoto from '../../Images/Projects/Websites/Photo_Project_Cinemalix.png';
import Makemeupzz from '../../Images/Projects/Websites/Photo_Project_Makemeupzzz.png';
import Caritukang from '../../Images/Projects/Websites/Photo_Project_Caritukang.png';

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
      title: 'BeeBook: E-Library & Online Bookstore Management System',
      description: [
        'PDF Viewer: Users can read books directly on the platform.',
        'Book Sales: Enables book purchases for users.',
        'Point System: Users earn points by reading, redeemable for merchandise.',
        'User Forum: Community space for discussions and engagement.',
        'Book Filters: Search books by name and genre.',
        'Authentication: Secure login and user management.',
        'Wishlist: Users can save books for later use.',
        'Progression: Users can track their progress in reading books.',
      ],
      year: '2024',
      language: [
        'PHP', 'HTML', 'CSS', 'JS', 'Laravel', 'MySQL'
      ],
      image: BeebookPhoto,
      github: 'https://github.com/BryanJanuardo/BeeBook',
      collabs: {
        name: [
          'Ferry Febrian',
          'Wilson Wijaya',
          'Harley Putradinata',
          'Nicholas Raven Shane',
        ],
        link: [
          'https://www.linkedin.com/in/ferry-febrian-it/',
          'https://www.linkedin.com/in/wijaya-wilson/',
          'https://www.linkedin.com/in/harley-putradinata-8b63842b7/',
          'https://www.linkedin.com/in/nicholas-raven-s-18b0ab267/',
        ],
      },
    },

    {
      title: 'MakeMeUpzzz: Makeup E-Commerce Website',
      description: [
        'Authentication System: User registration and login with session management.',
        'Makeup Management: Product catalog management and customization.',
        'Admin Transaction Handling: Admins can track and manage ongoing transactions.',
        'Cart System: Store products in the user\'s cart for later checkout.',
        'Transaction Reporting: Integrated reporting system using Crystal Reports.',
        'Database Integration: Fully functional website with SQL database support.',
      ],
      year: '2024',
      language: [
        'C#', 'HTML', 'Crystal Reports', 'SQL Server', 'ASP.NET',
      ],
      image: Makemeupzz,
      github: 'https://github.com/BryanJanuardo/MakeMeUpzz',
      collabs: {
        name: [
          'Ferry Febrian',
          'Wilson Wijaya',
          'Harley Putradinata',
          'Nicholas Raven Shane',
        ],
        link: [
          'https://www.linkedin.com/in/ferry-febrian-it/',
          'https://www.linkedin.com/in/wijaya-wilson/',
          'https://www.linkedin.com/in/harley-putradinata-8b63842b7/',
          'https://www.linkedin.com/in/nicholas-raven-s-18b0ab267/',
        ],
      },
    },
    
    {
      title: 'Cinemalix: Movie Ticket Booking Management App',
      description: [
        'Movie Ticket Booking: Users can select films and book tickets.',
        'Movie Management: Manage movie details, genres, and schedules.',
        'Authentication System: User registration and login for secure access.',
      ],
      year: '2023',
      language: [
        'PHP', 'HTML', 'CSS', 'JS', 'Laravel', 'MySQL',
      ],
      image: CinemalixPhoto,
      github: 'https://github.com/BernardBerenes/Cinemalix',
      collabs: {
        name: [
          'Nathan Jason Lowen', 
          'Bernard Berenes', 
          'Dionisius Tyogo Djatmiko Utomo', 
          'Ferry Febrian',
        ],
        link: [
          'https://www.linkedin.com/in/nathan-jason-lowen-43218b25b/', 
          'https://www.linkedin.com/in/bernard-bereness-514259251/', 
          'https://www.linkedin.com/in/dionisius-tyogo-djatmiko-utomo/',
          'https://www.linkedin.com/in/ferry-febrian-it/',
        ],
      },
    },

    {
      title: '(BeeHack 5.0) CariTukang: Online Service Provider',
      description: [
        'Service Finder: Find workers with specific skills and view detailed profiles.',
        'Authentication System: User registration and login.',
        'Service Progress Tracking: Monitor the status of ongoing services.',
        'Rating System: Rate workers and customers after service completion.',
        'Worker Application: Users can apply to become service providers.',
        'Admin Worker Management: Manage worker profiles and services.',
        'Search & Filter Skills: Filter workers based on skills for targeted searches.',
        'Database Integration: Fully functional website with SQL database support.',
      ],
      year: '2024',
      language: [
        'PHP', 'HTML', 'CSS', 'Tailwind', 'JS', 'Laravel', 'MySQL',
      ],
      image: Caritukang,
      github: 'https://github.com/BryanJanuardo/BeeHack',
      collabs: {
        name: [
          'David Huang', 
          'Wilson Wijaya', 
          'Ferry Febrian',
        ],
        link: [
          'https://www.linkedin.com/in/itsdavidhuang/',
          'https://www.linkedin.com/in/wijaya-wilson/',
          'https://www.linkedin.com/in/ferry-febrian-it/',
        ],
      },
    },
    
    {
      title: '',
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