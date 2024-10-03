import BuildingCVPhoto from '../../Images/Certificates/Softskills/Photo_BuildingCV.png'

interface Certificate {
    title: string;
    description: string[];
    year?: string;
    image: string;
    link?: string;
  }
  
  const certificateData: Certificate[] = [
    {
      title: 'IISE Workshop \"Building a Professional and Interactive CV\"',
      description: [
          'Attended a workshop focused on building an effective CV. Gained insights into the essential components of a professional CV, including structure, formatting, and content. Learned practical tips for presenting skills, experiences, and achievements in a clear and impactful way.',
      ],
      year: '2022',
      image: BuildingCVPhoto,
      link: '',
    }
  ];
  
  export default certificateData;