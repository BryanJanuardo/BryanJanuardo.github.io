import BinusITDiv from '../../Images/Experiences/WorkExperiences/Photo_Experience_BinusITDiv.png';
interface Experience {
  title: string;
  description: string[];
  year?: string;
  image: string;
  link?: string;
}

const experienceData: Experience[] = [
  {
    title: 'Internship Binus IT Division',
    description: [
        'Contributed in redesigning the website project.',
        'Maintained data requirements ensuring time and accurate updates.',
        'Actively collaborated with team.',
    ],
    year: '2024 - Now',
    image: BinusITDiv,
    link: 'http://ict.binus.edu/',
  }
];

export default experienceData;