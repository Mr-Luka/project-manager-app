import './index.css';


import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid'; //Importing a UUID generator

import NoProjectSelected from './assets/components/NoProjectSelected';
import AddProject from './assets/components/AddProject';


function App() {
  const [createProjectButton, setCreateProjectButton] = useState(false);

  function handleCreateProject(){
    setCreateProjectButton(true);
  }


  return (
    <>
       <div className="projects-wrapper">
        <div className="add-projects">
          <h2>YOUR PROJECTS</h2>
          <button onClick={handleCreateProject}>+ Add Project</button>
          <div className='saved-projects'>
            <ol className='ol-saved-projects'>
    
            </ol>
          </div>
        </div>
        {createProjectButton ? 
         <AddProject />
         : 
         <NoProjectSelected 
            createNewProject={handleCreateProject}
          />
        }



      </div>
    </>
  );
}

export default App;
