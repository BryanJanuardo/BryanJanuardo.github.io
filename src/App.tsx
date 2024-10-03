import './App.css';
import Navbar from './Components/Navbar';
import SubNavbar from './Components/SubNavbar';
import ProfileCard from './Components/ProfileCard';
import ProjectCard from './Components/ProjectCard';
import ExperienceCard from './Components/ExperiencesCard';
import CertificateCard from './Components/CertificatesCard';
import Title from './Components/Title';
import Subtitle from './Components/Subtitle';

import DataExperienceOrganizations from './Assets/Data/Experience/Organizations';
import DataExperienceWorkExperiences from './Assets/Data/Experience/WorkExperiences';

import DataProjectWebsites from './Assets/Data/Project/Websites';
import DataProjectMobiles from './Assets/Data/Project/Mobiles';
import DataProjectGames from './Assets/Data/Project/Games';

import DataCertificateProgrammings from './Assets/Data/Certificate/Programmings';
import DataCertificateResearches from './Assets/Data/Certificate/Researches';
import DataCertificateSoftskills from './Assets/Data/Certificate/Softskills';


function App() {
  return (
    <div>
      <a className='w-10 h-10 z-10 fixed bottom-5 right-5 p-0 bg-dark text-white rounded-full shadow-lg hover:bg-lightdark transition flex items-center justify-center' href="#">
        <button className="w-full h-full flex items-center justify-center">
          <div className="text-lg">↑</div>
        </button>
      </a>
      <Navbar/>
      <div className=''>
        <section id='introduction'>
          <ProfileCard/>
        </section>

        <section id='experiences'>
          <div className='flex flex-col my-8 items-center'>
            <Title text="Experiences"/>
            <hr className='rounded mb-4 w-3/4 border-2 border-dark' />

            <SubNavbar contents={["Organizations", "Work Experiences"]}/>
            <div>
              <section className='w-full flex flex-col items-center' id='Organizations'>
                <Subtitle text='Organizations'/>
                <ExperienceCard experienceData={DataExperienceOrganizations} />
              </section>
              <section className='w-full flex flex-col items-center' id='Work Experiences'>
                <Subtitle text='Work Experiences'/>
                <ExperienceCard experienceData={DataExperienceWorkExperiences} />
              </section>
            </div>
          </div>
        </section>

        <section id='projects'>
          <div className='flex flex-col my-8 items-center'>
            <Title text="Projects"/>
            <hr className='rounded mb-4 w-3/4 border-2 border-dark' />
            
            <SubNavbar contents={["Websites", "Mobiles", "Games"]}/>
            <div>
              <section className='w-full flex flex-col items-center' id='Websites'>
                <Subtitle text='Websites'/>
                <ProjectCard projectData={DataProjectWebsites} />
              </section>
              <section className='w-full flex flex-col items-center' id='Mobiles'>
                <Subtitle text='Mobiles'/>
                <ProjectCard projectData={DataProjectMobiles} />
              </section>
              <section className='w-full flex flex-col items-center' id='Games'>
                <Subtitle text='Games'/>
                <ProjectCard projectData={DataProjectGames} />
              </section>
            </div>
          </div>
        </section>

        <section id='certificates'>
          <div className='flex flex-col my-8 items-center'>
            <Title text="Certificates"/>
            <hr className='rounded mb-4 w-3/4 border-2 border-dark' />
            
            <SubNavbar contents={["Programmings", "Researches", "Soft Skills"]}/>
            <div>
            <section className='w-full flex flex-col items-center' id='Programmings'>
              <Subtitle text='Programmings'/>
              <CertificateCard certificateData={DataCertificateProgrammings} />
            </section>
            <section className='w-full flex flex-col items-center' id='Researches'>
              <Subtitle text='Researches'/>
              <CertificateCard certificateData={DataCertificateResearches} />
            </section>
            <section className='w-full flex flex-col items-center' id='Soft Skills'>
              <Subtitle text='Soft Skills'/>
              <CertificateCard certificateData={DataCertificateSoftskills} />
            </section>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
