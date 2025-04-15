import './index.css';

import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid'; //Importing a UUID generator

import NoProjectSelected from './assets/components/NoProjectSelected.jsx';
import AddProject from './assets/components/AddProject.jsx';

function App() {
  const [createProject, setCreateProject] = useState(false);
  const [formInput, setFormInput] = useState({
    title: '',
    description: '',
    dueDate: '',
  });
  const [formData, setFormData] = useState([]);

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
      return newData;
    })
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
          <AddProject 
            input={handleInput}
            submitForm={handleSubmitForm}
            cancel={cancel} 
          />
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
