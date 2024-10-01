  import React, { useState } from 'react'

  interface Project{
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

  interface listProject {
    projectData: Project[];
  }

  const ProjectCard: React.FC<listProject> = ({projectData}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = () => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % projectData.length);
    };

    const prevProject = () => {
      setCurrentIndex((currentIndex) => (currentIndex - 1 + projectData.length) % projectData.length);
    };

    const currentProject = projectData[currentIndex];
    console.log(currentProject.image)
    return (
      <div className="w-full py-4 md:w-2/3 my-4 px-4 py-10 gap-4 flex flex-col justify-center relative border border-gray-300 rounded-lg shadow-lg overflow-hidden bg-gradient-to-br from-gray-50 to-white transition-transform transform hover:scale-105 duration-300 ease-in-out">
        <div className="flex p-4 flex-col md:flex-row gap-8 bg-white items-center w-full relative rounded-lg shadow-md">
          <div className="flex justify-center w-full h-full md:w-full">
            <img draggable="false" id="projectImage" src={currentProject.image} alt={`Project Image ${currentIndex + 1}`} className="max-h-96 h-auto w-auto object-cover" />
          </div>
          
          <div className="w-full mx-4">
            <h2 id="projectTitle" className="text-center text-dark text-2xl font-bold mb-4">{`${currentProject.title} ${currentProject.year ? `(${currentProject.year})` : '' }`}</h2>
            <ul className='text-dark'>
              {currentProject.description.map((desc, idx) => (
                  <li key={idx} className='list-disc text-base'>{desc}</li>
              ))}
            </ul>
          </div>

          <div className="absolute top-1/3 h-1/2 inset-0 flex items-center justify-between px-4 pointer-events-none">
            <button onClick={prevProject} id="prevBtn" className="absolute z-50 left-0 -translate-x-4 h-full top-1/2 -translate-y-1/2 text-white text-4xl bg-dark bg-opacity-20 p-2 pointer-events-auto focus:outline-none hover:bg-opacity-50 transition">&larr;</button>
            <button onClick={nextProject} id="nextBtn" className="absolute z-50 -right-0 translate-x-4 h-full top-1/2 -translate-y-1/2 text-white text-4xl bg-dark bg-opacity-20 p-2 pointer-events-auto focus:outline-none hover:bg-opacity-50 transition">&rarr;</button> 
          </div>
        </div>
        <div>
          <ul>
            {currentProject.language && currentProject.language.length > 0 && (
              <li className='text-dark text-xl'>{`Language: ${currentProject.language.join(', ')}`}</li>
            )}
            <li className='text-dark text-xl'>
              <span>Collaborators: </span>
              <span className='hover:underline underline-offset-4 transition duration-300 ease-in-out'>
                <a href="https://www.linkedin.com/in/bryan-januardo/">Me</a>
              </span>
              {currentProject.collabs && currentProject.collabs.name && currentProject.collabs.name.length > 0 && (
                currentProject.collabs.name.map((name, idx) => (
                  <span key={idx}>
                    {currentProject.collabs && currentProject.collabs.link && currentProject.collabs.link[idx] ? (
                      <a href={currentProject.collabs.link[idx]}>
                        <span>, </span>
                        <span className='hover:underline underline-offset-4 transition duration-300 ease-in-out'>{name}</span>
                      </a>
                    ) : (
                      <span className='hover:underline underline-offset-4 transition duration-300 ease-in-out'>
                        <span className='hover:underline underline-offset-4 transition duration-300 ease-in-out'>{name}</span>
                      </span>
                    )}
                  </span>
                ))
              )}
            </li>
            {currentProject.github && (
              <li className='text-dark text-xl hover:font-bold hover:text-lightdark hover:underline underline-offset-8 transition duration-300 ease-in-out'><a href={currentProject.github}>Repository (Click Here!)</a></li>
            )}
          </ul>
        </div>
      </div>
    )
  }

  export default ProjectCard
