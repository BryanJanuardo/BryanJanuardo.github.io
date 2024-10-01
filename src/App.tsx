import './App.css';
import Navbar from './Components/Navbar';
import SubNavbar from './Components/SubNavbar';
import ProfileCard from './Components/ProfileCard';
import ProjectCard from './Components/ProjectCard';
import ExperienceCard from './Components/ExperiencesCard';
import Title from './Components/Title';
import Subtitle from './Components/Subtitle';

import DataExperienceOrganizations from './Assets/Data/Experience/Organizations';

import DataProjectWebsites from './Assets/Data/Project/Websites';
import DataProjectMobiles from './Assets/Data/Project/Mobiles';
import DataProjectGames from './Assets/Data/Project/Games';


function App() {
  return (
    <div>
      
      <Navbar/>
      <div className=''>
        <section id='introduction'>
          <ProfileCard/>
        </section>

        <section id='experiences'>
          <div className='flex flex-col my-8 items-center'>
            <Title text="Experiences"/>
            <hr className='rounded mb-4 w-3/4 border-2 border-dark' />

            <SubNavbar contents={["Organizations", "Internships"]}/>
            <div>
              <section className='w-full flex flex-col items-center' id='Organizations'>
                <Subtitle text='Organizations'/>
                <ExperienceCard experienceData={DataExperienceOrganizations} />
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
      </div>
    </div>
  );
}

export default App;
