import './index.css';


import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid'; //Importing a UUID generator

import NoProjectSelected from './assets/components/NoProjectSelected';
import AddProject from './assets/components/AddProject';
import Project from './assets/components/Project.jsx';


function App() {
  const [createProjectButton, setCreateProjectButton] = useState(false);
  const [projectClicked, setProjectClicked] = useState(false);
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dueDate: '',
  });

  function handleCreateProject(){
    setCreateProjectButton(true);
  }

  function handleProjectClicked(){
    setProjectClicked(true);
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
          id: uuidv4(),
          title: formData.title,
          description: formData.description,
          dueDate: formData.dueDate,
        }
      ];
      return newProjectsArray;
    });
    setCreateProjectButton(false);
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
                {projects.map(project =>
                <li key={project.id} onClick={handleProjectClicked}>{project.title}</li>)}
            </ol>
          </div>
        </div>
        {createProjectButton ? 
         (<AddProject 
          input={handleInput}
          submitForm={handleSubmit}
          cancel={cancelForm}
         />)
         : projectClicked ?
          ( <Project
            
          />)
         :
          (<NoProjectSelected 
            createNewProject={handleCreateProject}
          />)
        }



      </div>
    </>
  );
}

export default App;
