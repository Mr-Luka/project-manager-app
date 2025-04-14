import './index.css';


import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid'; //Importing a UUID generator

import NoProjectSelected from './assets/components/NoProjectSelected';
import AddProject from './assets/components/AddProject';


function App() {
  const [createProjectButton, setCreateProjectButton] = useState(false);
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dueDate: '',
  });

  function handleCreateProject(){
    setCreateProjectButton(true);
  }



  function handleInput(e){
    const {name, value} = e.target;
    setFormData(prevData => {
      return {
        ...prevData,
        [name]: value
      }
    });
  }

  function handleSubmit(e){
    e.preventDefault();
    setProjects(prevProject => {
      const newProjectsArray = [
        ...prevProject,
        {
          title: formData.title,
          description: formData.description,
          dueDate: formData.dueDate,
        }
      ];
      return newProjectsArray;
    });
    console.log(projects)
  }

  function cancelForm(){
    setCreateProjectButton(false);
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
         <AddProject 
          input={handleInput}
          submitForm={handleSubmit}
          cancel={cancelForm}
         />
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
