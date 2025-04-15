import './index.css';

import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid'; //Importing a UUID generator

import NoProjectSelected from './assets/components/NoProjectSelected.jsx';
import AddProject from './assets/components/AddProject.jsx';

function App() {
  const [createProject, setCreateProject] = useState(false);

  function handleCreateProject(){
    setCreateProject(true);
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
        {createProject ? 
          <AddProject />
        :
          <NoProjectSelected
            createProject={handleCreateProject}
          />
        }
      </div>
    </>
  );
}

export default App;
