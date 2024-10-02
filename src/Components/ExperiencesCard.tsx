import React, { useState } from 'react'

interface Experience{
  title: string;
  description: string[];
  year?: string;
  image: string;
  link?: string;
}

interface listExperience{
    experienceData: Experience[];
}

const ExperiencesCard: React.FC<listExperience> = ({experienceData}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextExperience = () => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % experienceData.length);
    };

    const prevExperience = () => {
      setCurrentIndex((currentIndex) => (currentIndex - 1 + experienceData.length) % experienceData.length);
    };

    const currentExperience = experienceData[currentIndex];
    console.log(currentExperience.image)
    return (
      <div className="w-full py-4 md:w-2/3 my-4 px-4 py-10 gap-4 flex flex-col justify-center relative border border-gray-300 rounded-lg shadow-lg overflow-hidden bg-gradient-to-br from-gray-50 to-white transition-transform transform hover:scale-105 duration-300 ease-in-out">
        <div className="flex p-4 flex-col md:flex-row gap-8 bg-white items-center w-full relative rounded-lg shadow-md">
          <div className="flex justify-center w-full h-full md:w-full">
            <img draggable="false" id="projectImage" src={currentExperience.image} alt={`Project Image ${currentIndex + 1}`} className="max-h-96 h-auto w-auto object-cover" />
          </div>
          
          <div className="w-full mx-4">
            <h2 id="experienceTitle" className="text-center text-dark text-2xl font-bold mb-4">{`${currentExperience.title} ${currentExperience.year ? `(${currentExperience.year})` : '' }`}</h2>
            <ul className='text-dark'>
              {currentExperience.description.map((desc, idx) => (
                  <li key={idx} className='list-disc text-base'>{desc}</li>
              ))}
            </ul>
          </div>

          <div className="absolute top-1/3 h-1/2 inset-0 flex items-center justify-between px-4 pointer-events-none">
            <button onClick={prevExperience} id="prevBtn" className="absolute z-50 left-0 -translate-x-4 h-full top-1/2 -translate-y-1/2 text-white text-4xl bg-dark bg-opacity-20 p-2 pointer-events-auto focus:outline-none hover:bg-opacity-50 transition">&larr;</button>
            <button onClick={nextExperience} id="nextBtn" className="absolute z-50 -right-0 translate-x-4 h-full top-1/2 -translate-y-1/2 text-white text-4xl bg-dark bg-opacity-20 p-2 pointer-events-auto focus:outline-none hover:bg-opacity-50 transition">&rarr;</button> 
          </div>
        </div>
        <div>
          <ul>
            {currentExperience.link && (
              <li className='text-dark text-xl hover:font-bold hover:text-lightdark hover:underline underline-offset-8 transition duration-300 ease-in-out'><a href={currentExperience.link}>Official Link (Click Here!)</a></li>
            )}
          </ul>
        </div>
      </div>
    )
}

export default ExperiencesCard
