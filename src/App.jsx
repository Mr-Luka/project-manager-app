import './index.css';


import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid'; //Importing a UUID generator

import NoProjectSelected from './assets/components/NoProjectSelected.jsx';
import AddProjects from './assets/components/AddProject.jsx';
import Project from './assets/components/Project.jsx';

function App() {
<<<<<<< HEAD
=======
  const [newProject, setNewProject] = useState(false); // state that checks if there are any new projects
  const [seeProject, setSeeProject] = useState(false); // state that will check to see if we are looking at the project info when we click on it
  const [projects, setProjects] = useState([]); // state that will store all the projects
  const [selectedProject, setSelectedProject] = useState([]); // state that will show me the selected project
  const [formData, setFormData] = useState({ // state that will store project data
    title: '',
    description: '',
    dueDate: '',
  });

  // function that will handle the input form whwn user is creating a project
  function handleInput(e){
    const {name, value} = e.target;
    setFormData(prevForm => {
      return {
        ...prevForm, 
        [name]: value}
      },
    )}
    // function that will prevent page from refreshing when submitting the form and
    // update the projects state with previous + new project in the array
    function handleSubmit(e){
      e.preventDefault();
      setNewProject(false);
      setProjects(prevProject=> {
        const newProject = 
        [
          ...prevProject,
        {
          id: uuidv4(), // generate unique ID
          title: formData.title,
          description: formData.description,
          dueDate: formData.dueDate,
        }]
        return newProject;
      })
      console.log(projects);
    }

    // function that will handle the delete button
  function handleClick(){
    setNewProject(newProject => !newProject);
  }


  // function that will handle the project info button,
  // project that i clicked on from the created list
  function openProject(projectKey){
    setNewProject(false);
    setSeeProject(true);
    const projectObject = projects[projectKey]
    setSelectedProject(projectObject)
  }

  // function that will filter through projects and return array of all the projects except
  // the one that i clicked on to delete.
  function deleteProject(){
    const newTasksArray = projects.filter(project => project.id !== selectedProject.id);
    setProjects(newTasksArray);
    setSeeProject(false);
    setSeeProject(null);
  }
>>>>>>> a769704b7ffacb8b1fff71bfe0d94424ac045eea

  return (
    <>
      <div className="projects-wrapper">
        <div className="add-projects">
          <h2>YOUR PROJECTS</h2>
          <button>+ Add Project</button>
          <div className='saved-projects'>
            <ol className='ol-saved-projects'>
<<<<<<< HEAD
            </ol>
          </div>
        </div>
=======
              {projects.map((project, projectIndex)=> //mapping through projects and creating a list item for each one
              <li key={projectIndex} onClick={()=>openProject(projectIndex)}>{project.title}</li>)}
            </ol>
          </div>
        </div>
        {newProject ?  // conditionally checking if there is a new project to open the addProjects component
// if i click on the project it will open <Project, and if none of those, it will render <NoProjectsSelected component
          (<AddProjects 
            submitForm={handleSubmit}
            handleInput={handleInput}
            cancel={handleClick}
          />
          ) : seeProject ? (
            <Project
              title={selectedProject.title}
              description={selectedProject.description}
              date={selectedProject.dueDate}
              remove={deleteProject}
            />
          ) : (
          <NoProjectSelected 
            createProject={handleClick}
          />
        )}

>>>>>>> a769704b7ffacb8b1fff71bfe0d94424ac045eea
      </div>
    </>
  );
}

export default App;
