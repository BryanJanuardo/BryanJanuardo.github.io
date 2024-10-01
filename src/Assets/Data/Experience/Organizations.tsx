import MemberBNCC from '../../Images/Experiences/Organizations/Photo_Experience_MemberBNCC.png';
import ActivistBNCC from '../../Images/Experiences/Organizations/Photo_Experience_ActivistBNCC.png';
import MemberBGDC from '../../Images/Experiences/Organizations/Photo_Experience_MemberBGDC.png';

interface Experience {
    title: string;
    description: string[];
    year?: string;
    image: string;
    link?: string;
  }

  const experienceData: Experience[] = [
    {
      title: 'Member Bina Nusantara Computer Club (BNCC)',
      description: [
          'Learn how to make functional website.',
          'Gained experience in designing and implementing databases.',
          'Acquired knowledge public speaking and collaborative with team.'
      ],
      year: '2022 - 2023',
      image: MemberBNCC,
      link: 'https://bncc.net/',
    },

    {
      title: 'Activist Bina Nusantara Computer Club (BNCC)',
      description: [
          'Developed strong communication and presentation skills.',
          'Worked effectively with teams to achieve common goals.',
          'Expanded professional connections and relationships.',
          'Gained essential skills like leadership, adaptability, and teamwork.',
      ],
      year: '2022 - 2023',
      image: ActivistBNCC,
      link: 'https://bncc.net/',
    },

    {
      title: 'Member Binus Game Development Club (BGDC)',
      description: [
          'Gained skills in creating 2D models for game development.',
          'Learned how to build games using Unity.',
          'Familiarized with essential tools for game creation.',
      ],
      year: '2023 - Now',
      image: MemberBGDC,
      link: 'https://www.binusgdc.com/',
    },
  ]

export default experienceData;