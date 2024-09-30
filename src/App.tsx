import './App.css';
import Navbar from './Components/Navbar';
import ProfileCard from './Components/ProfileCard';
import ContentCard from './Components/ContentCard';
import Title from './Components/Title';
import Subtitle from './Components/Subtitle';

import DataProjectWebsites from './Assets/Data/Project/Websites';
import DataProjectMobiles from './Assets/Data/Project/Mobiles';
import DataProjectGames from './Assets/Data/Project/Games';

function App() {
  return (
    <div>
      
      <Navbar/>
      <div className='z-10'>
        <ProfileCard/>

        <div className='flex flex-col items-center'>
          <Title text="Projects"/>
          <hr className=' mb-4 w-3/4 border-2 border-dark' />
          <Subtitle text='Websites'/>
          <ContentCard projectData={DataProjectWebsites} />
          <Subtitle text='Mobiles'/>
          <ContentCard projectData={DataProjectMobiles} />
          <Subtitle text='Games'/>
          <ContentCard projectData={DataProjectGames} />
        </div>
        
      </div>
    </div>
  );
}

export default App;
