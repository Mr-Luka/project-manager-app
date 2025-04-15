import './index.css';

import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid'; //Importing a UUID generator

import NoProjectSelected from './assets/components/NoProjectSelected.jsx';
import AddProject from './assets/components/AddProject.jsx';
import Project from './assets/components/Project.jsx';

function App() {
  const [createProject, setCreateProject] = useState(false);
  const [formInput, setFormInput] = useState({
    title: '',
    description: '',
    dueDate: '',
  });
  const [formData, setFormData] = useState([]);
  const [selectedProject, setSelectedProject] = useState([]);
  const [seeProject, setSeeProject] = useState(false);

  function handleCreateProject(){
    setCreateProject(true);
  }
  
  function cancel(){
    setCreateProject(false)
  }

  function handleInput(e){
    const {name, value} = e.target;
    setFormInput(prevData => {
      return {
        ...prevData,
        [name]: value
      }
    })
  }

  function handleSubmitForm(e){
    e.preventDefault();
    setFormData(prevData=> {
      const newData = [
        ...prevData,
        {
          id: uuidv4(),
          title: formInput.title,
          description: formInput.description,
          dueDate: formInput.dueDate
        }
      ];
      console.log(newData)
      return newData;
    });
    setCreateProject(false);
  }

  function handleSelectedProject(projectIndex){
    const selectedProject = formData[projectIndex];
    setSelectedProject(selectedProject);
    setSeeProject(true);
  }

  function deleteProject(){
    const filteredData = formData.filter((project)=> project.id !== selectedProject.id);
    setFormData(filteredData);
    setSeeProject(false)
  }


  return (
    <>
       <div className="projects-wrapper">
        <div className="add-projects">
          <h2>YOUR PROJECTS</h2>
          <button onClick={handleCreateProject}>+ Add Project</button>
          <div className='saved-projects'>
            <ol className='ol-saved-projects'>
              {formData.map((project, keyIndex) => 
                <li key={keyIndex} onClick={()=> handleSelectedProject(keyIndex)}>{project.title}</li>
              )}
            </ol>
          </div>
        </div>
        {createProject ? 
          (<AddProject 
            input={handleInput}
            submitForm={handleSubmitForm}
            cancel={cancel} 
          />)
        : seeProject ? 
          (<Project 
            title={selectedProject.title}
            description={selectedProject.description}
            date={selectedProject.dueDate}
            remove={deleteProject}
          />)
        :
          (<NoProjectSelected
            createProject={handleCreateProject}
          />)
        }
      </div>
    </>
  );
}

export default App;
