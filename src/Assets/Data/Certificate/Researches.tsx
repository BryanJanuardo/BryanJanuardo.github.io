import Research289Photo from '../../Images/Certificates/Researches/Photo_Research_289.png';

interface Certificate {
    title: string;
    description: string[];
    year?: string;
    image: string;
    link?: string;
  }
  
  const certificateData: Certificate[] = [
    {
      title: 'Appreciation - The 9th International Conference on Computer Science and Computational Intelligence 2024',
      description: [
          'Presented a research paper at The 9th International Conference on Computer Science and Computational Intelligence 2024. The paper focused on analyzing an ensemble classifier by combining multiple Support Vector Machine (SVM) models to improve detection accuracy for Leukemia Lymphoblastic Acute. This research was a collaborative effort with a team, contributing to advancements in medical diagnostics using machine learning techniques.',
      ],
      year: '2024',
      image: Research289Photo,
      link: '',
    }
  ];
  
  export default certificateData;