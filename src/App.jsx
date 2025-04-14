import './index.css';


import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid'; //Importing a UUID generator

import NoProjectSelected from './assets/components/NoProjectSelected';
import AddProject from './assets/components/AddProject';
import Project from './assets/components/Project.jsx';


function App() {
  const [newProject, setNewProject] = useState(false);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState([]);
  const [seeProject, setSeeProject] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dueDate: ''
  });

  function handleInput (e){
    const {name, value} = e.target;
    setFormData(prevData => {
      return {
        ...prevData,
        [name]: value
      }
    })
  }

  function handleSubmit(e){
    e.preventDefault();
    setProjects(prevForm => {
      const updatedForm = [
        ...prevForm,
        {
          id: uuidv4(),
          title: formData.title,
          description: formData.description,
          dueDate: formData.dueDate,
        }
      ];
      console.log(updatedForm)
      return updatedForm;
    });
    setNewProject(false)
    console.log(projects)
  }

  function handleNewProject(){
    setNewProject(true);
  }

  function handleCancel(){
    setNewProject(false)
  }


  function handleSelectedProject(projectIndex){
    setSeeProject(true);
    const selectedProject = projects[projectIndex];
    setSelectedProject(selectedProject);
  }

  function handleDeleteProject(){
    const updatedArray = projects.filter(project=> project.id !== selectedProject.id)
    setProjects(updatedArray);
    setSeeProject(false);
  }

  return (
    <>
       <div className="projects-wrapper">
        <div className="add-projects">
          <h2>YOUR PROJECTS</h2>
          <button onClick={handleNewProject}>+ Add Project</button>
          <div className='saved-projects'>
            <ol className='ol-saved-projects'>
                {projects.map((project, projectIndex)=> 
                <li key={projectIndex} onClick={()=> handleSelectedProject(projectIndex)}>{project.title}</li> )}
            </ol>
          </div>
        </div>
        {newProject ? 
          (<AddProject 
            submitForm={handleSubmit}
            input={handleInput}
            cancel={handleCancel}
          />)
        : seeProject ? 
          (<Project 
            title={selectedProject.title}
            description={selectedProject.description}
            date={selectedProject.dueDate}
            deleteProject={handleDeleteProject}
          />)
        :
          (<NoProjectSelected 
            onClick={handleNewProject}
          />)
        }
       
      </div>
    </>
  );
}

export default App;
