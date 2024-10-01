import MemberBNCC from '../../Images/Experiences/Organizations/Photo_Experience_MemberBNCC.png';
import ActivistBNCC from '../../Images/Experiences/Organizations/Photo_Experience_ActivistBNCC.jpg';

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
          'Learn how to make functional website.',
          'Gained experience in designing and implementing databases.',
          'Acquired knowledge public speaking and collaborative with team.'
      ],
      year: '2022 - 2023',
      image: ActivistBNCC,
      link: 'https://bncc.net/',
    },
  ]

export default experienceData;