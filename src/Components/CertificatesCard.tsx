import React, { useState } from 'react'

interface Certificate{
  title: string;
  description: string[];
  year?: string;
  image: string;
  link?: string;
}

interface listCertificates{
    certificateData: Certificate[];
}

const CertificatesCard: React.FC<listCertificates> = ({certificateData}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCertificate = () => {
    setCurrentIndex((currentIndex) => (currentIndex + 1) % certificateData.length);
  };

  const prevCertificate = () => {
    setCurrentIndex((currentIndex) => (currentIndex - 1 + certificateData.length) % certificateData.length);
  };

  const currentCertificate = certificateData[currentIndex];
  return (
    <div className="w-full py-4 md:w-2/3 my-4 px-4 py-10 gap-4 flex flex-col justify-center relative border border-gray-300 rounded-lg shadow-lg overflow-hidden bg-gradient-to-br from-gray-50 to-white transition-transform transform hover:scale-105 duration-300 ease-in-out">
      <div className="flex p-4 flex-col md:flex-row gap-8 bg-white items-center w-full relative rounded-lg shadow-md">
        <div className="flex justify-center w-full h-full md:w-full">
          <img draggable="false" id="projectImage" src={currentCertificate.image} alt={`Project Image ${currentIndex + 1}`} className="max-h-96 h-auto w-auto object-cover" />
        </div>
        
        <div className="w-full mx-4">
          <h2 id="certificateTitle" className="text-center text-dark text-2xl font-bold mb-4">{`${currentCertificate.title} ${currentCertificate.year ? `(${currentCertificate.year})` : '' }`}</h2>
          <ul className='text-dark'>
            {currentCertificate.description.map((desc, idx) => (
                <li key={idx} className='text-center list-none text-base'>{desc}</li>
            ))}
          </ul>
        </div>

        <div className="absolute top-1/3 h-1/2 inset-0 flex items-center justify-between px-4 pointer-events-none">
          <button onClick={prevCertificate} id="prevBtn" className="absolute z-50 left-0 -translate-x-4 h-full top-1/2 -translate-y-1/2 text-white text-4xl bg-dark bg-opacity-20 p-2 pointer-events-auto focus:outline-none hover:bg-opacity-50 transition">&larr;</button>
          <button onClick={nextCertificate} id="nextBtn" className="absolute z-50 -right-0 translate-x-4 h-full top-1/2 -translate-y-1/2 text-white text-4xl bg-dark bg-opacity-20 p-2 pointer-events-auto focus:outline-none hover:bg-opacity-50 transition">&rarr;</button> 
        </div>
      </div>
      <div>
        <ul>
          {currentCertificate.link && (
            <li className='text-dark text-xl hover:font-bold hover:text-lightdark hover:underline underline-offset-8 transition duration-300 ease-in-out'><a href={currentCertificate.link} download={currentCertificate.title}>Download (Click Here!)</a></li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default CertificatesCard
