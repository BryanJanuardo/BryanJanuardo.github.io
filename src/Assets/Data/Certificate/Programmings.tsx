import GarudaHackatonPhoto from '../../Images/Certificates/Programmings/Photo_GarudaHackaton5.0.png';
import CodeRun2022 from '../../Images/Certificates/Programmings/Photo_CodeRun2022.png';

interface Certificate {
    title: string;
    description: string[];
    year?: string;
    image: string;
    link?: string;
  }
  
  const certificateData: Certificate[] = [
    {
      title: 'Participant - Garuda Hackaton 5.0',
      description: [
          'Team-based competition focused on developing innovative applications within a three-day timeframe. Worked closely with a team to brainstorm, design, and build a functional app under tight deadlines. Contributed to both the technical and strategic aspects of the project, ensuring smooth collaboration and efficient problem-solving. This experience strengthened skills in teamwork, time management, rapid development, and adaptability in a fast-paced environment.',
      ],
      year: '2024',
      image: GarudaHackatonPhoto,
      link: '',
    },

    {
      title: 'Participant - Algobash.com Code Run 2022',
      description: [
          'Competitive coding competition hosted on algobash.com. Engaged in problem-solving challenges with strict time limits, testing algorithmic skills and efficiency under pressure. This experience enhanced abilities in coding, critical thinking, and quick decision-making in a competitive environment.',
      ],
      year: '2022',
      image: CodeRun2022,
      link: '',
    }
  ];
  
  export default certificateData;