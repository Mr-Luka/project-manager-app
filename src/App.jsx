import './index.css';


import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid'; //Importing a UUID generator


function App() {

  return (
    <>
       <div className="projects-wrapper">
        <div className="add-projects">
          <h2>YOUR PROJECTS</h2>
          <button>+ Add Project</button>
          <div className='saved-projects'>
            <ol className='ol-saved-projects'>
    
            </ol>
          </div>
        </div>


      </div>
    </>
  );
}

export default App;
